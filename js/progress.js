window.StudyMate = window.StudyMate || {};

window.StudyMate.progress = (function () {
  var validLevels = ["secondary", "polytechnic", "university"];

  // Create a fresh default progress object.
  function createDefaultState() {
    return {
      levelId: "secondary",
      completedLessons: [],
      quizAttempts: [],
      lastTopicId: null,
    };
  }

  // Check that a value is a non-null, non-array object.
  function isRecord(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
  }

  // Clean stored progress data and replace malformed fields with safe defaults.
  function validateState(raw) {
    if (!isRecord(raw)) {
      return createDefaultState();
    }

    var completedLessons = Array.isArray(raw.completedLessons)
      ? raw.completedLessons.filter(function (topicId) {
          return typeof topicId === "string" && topicId.length > 0;
        })
      : [];
    var quizAttempts = Array.isArray(raw.quizAttempts)
      ? raw.quizAttempts.reduce(function (attempts, entry) {
          if (
            !isRecord(entry) ||
            typeof entry.topicId !== "string" ||
            entry.topicId.length === 0 ||
            typeof entry.score !== "number" ||
            !Number.isFinite(entry.score) ||
            typeof entry.total !== "number" ||
            !Number.isFinite(entry.total) ||
            entry.score < 0 ||
            entry.total <= 0 ||
            entry.score > entry.total
          ) {
            return attempts;
          }

          var attemptDate =
            typeof entry.date === "string" &&
            !Number.isNaN(Date.parse(entry.date))
              ? new Date(entry.date).toISOString()
              : null;
          if (!attemptDate) {
            return attempts;
          }

          attempts.push({
            topicId: entry.topicId,
            score: entry.score,
            total: entry.total,
            percent: Math.round((entry.score / entry.total) * 100),
            date: attemptDate,
          });
          return attempts;
        }, [])
      : [];

    return {
      levelId: validLevels.indexOf(raw.levelId) !== -1 ? raw.levelId : "secondary",
      completedLessons: completedLessons,
      quizAttempts: quizAttempts,
      lastTopicId:
        typeof raw.lastTopicId === "string" && raw.lastTopicId.length > 0
          ? raw.lastTopicId
          : null,
    };
  }

  // Read and validate saved progress, returning defaults if stored data is not an object.
  function getState() {
    try {
      var raw = window.StudyMate.storage.read("progress", createDefaultState());
      if (!isRecord(raw)) {
        console.warn("Invalid StudyMate progress state; using default progress.");
        return createDefaultState();
      }
      return validateState(raw);
    } catch (error) {
      console.warn("Unable to read StudyMate progress; using default progress.", error);
      return createDefaultState();
    }
  }

  // Save the supplied state under the progress storage key.
  function saveState(state) {
    try {
      return window.StudyMate.storage.write("progress", validateState(state));
    } catch (error) {
      console.warn("Unable to save StudyMate progress.", error);
      return false;
    }
  }

  // Return the validated current level identifier.
  function getLevel() {
    try {
      var prefs = window.StudyMate.storage.read("prefs", {});
      if (isRecord(prefs) && validLevels.indexOf(prefs.levelId) !== -1) {
        return prefs.levelId;
      }
    } catch (error) {
      console.warn("Unable to read StudyMate preferences.", error);
    }
    return getState().levelId;
  }

  // Set and persist a valid level identifier.
  function setLevel(levelId) {
    if (validLevels.indexOf(levelId) === -1) {
      return false;
    }
    try {
      var state = getState();
      state.levelId = levelId;
      var progressSaved = saveState(state);
      var prefs = window.StudyMate.storage.read("prefs", {});
      if (!isRecord(prefs)) {
        prefs = {};
      }
      prefs.levelId = levelId;
      return window.StudyMate.storage.write("prefs", prefs) && progressSaved;
    } catch (error) {
      console.warn("Unable to save StudyMate level preference.", error);
      return false;
    }
  }

  // Mark a topic complete once and update the last visited topic.
  function markLessonComplete(topicId) {
    if (typeof topicId !== "string" || topicId.length === 0) {
      return false;
    }
    var state = getState();
    if (state.completedLessons.indexOf(topicId) !== -1) {
      return false;
    }
    state.completedLessons.push(topicId);
    state.lastTopicId = topicId;
    return saveState(state);
  }

  // Check whether a topic is already marked complete.
  function isLessonComplete(topicId) {
    return getState().completedLessons.indexOf(topicId) !== -1;
  }

  // Validate, record, and return a new quiz attempt.
  function recordQuizAttempt(topicId, score, total) {
    if (
      typeof topicId !== "string" ||
      topicId.length === 0 ||
      typeof score !== "number" ||
      !Number.isFinite(score) ||
      typeof total !== "number" ||
      !Number.isFinite(total) ||
      score < 0 ||
      total <= 0 ||
      score > total
    ) {
      return null;
    }
    var attempt = {
      topicId: topicId,
      score: score,
      total: total,
      percent: Math.round((score / total) * 100),
      date: new Date().toISOString(),
    };
    var state = getState();
    state.quizAttempts.unshift(attempt);
    state.lastTopicId = topicId;
    return saveState(state) ? attempt : null;
  }

  // Return the newest score recorded for a topic, or null when none exists.
  function getLatestScore(topicId) {
    var attempts = getAttemptsForTopic(topicId);
    return attempts.length ? attempts[0] : null;
  }

  // Return all saved attempts for a topic in newest-first order.
  function getAttemptsForTopic(topicId) {
    return getState().quizAttempts
      .filter(function (attempt) {
        return attempt.topicId === topicId;
      })
      .slice()
      .sort(function (first, second) {
        return Date.parse(second.date) - Date.parse(first.date);
      });
  }

  // Return at most the requested number of attempts, newest first.
  function getRecentAttempts(limit) {
    var maximum = Number.isFinite(limit) ? Math.max(0, Math.floor(limit)) : 0;
    return getState().quizAttempts
      .slice()
      .sort(function (first, second) {
        return Date.parse(second.date) - Date.parse(first.date);
      })
      .slice(0, maximum);
  }

  // Return the number of completed lessons.
  function getCompletedCount() {
    return getState().completedLessons.length;
  }

  // Count completed topics belonging to the specified subject.
  function getCompletedTopicsForSubject(subjectId) {
    var data = window.StudyMate.data;
    if (!data || typeof data.getTopicById !== "function") {
      return 0;
    }
    return getState().completedLessons.filter(function (topicId) {
      var topic = data.getTopicById(topicId);
      return topic !== null && topic.subjectId === subjectId;
    }).length;
  }

  // Set the last visited topic identifier.
  function setLastTopic(topicId) {
    var state = getState();
    state.lastTopicId =
      typeof topicId === "string" && topicId.length > 0 ? topicId : null;
    return saveState(state);
  }

  // Return the last visited topic identifier or null.
  function getLastTopic() {
    return getState().lastTopicId;
  }

  // Remove all saved progress and report whether removal succeeded.
  function resetAll() {
    try {
      return window.StudyMate.storage.remove("progress");
    } catch (error) {
      console.warn("Unable to reset StudyMate progress.", error);
      return false;
    }
  }

  return {
    getState: getState,
    validateState: validateState,
    saveState: saveState,
    getLevel: getLevel,
    setLevel: setLevel,
    markLessonComplete: markLessonComplete,
    isLessonComplete: isLessonComplete,
    recordQuizAttempt: recordQuizAttempt,
    getLatestScore: getLatestScore,
    getAttemptsForTopic: getAttemptsForTopic,
    getRecentAttempts: getRecentAttempts,
    getCompletedCount: getCompletedCount,
    getCompletedTopicsForSubject: getCompletedTopicsForSubject,
    setLastTopic: setLastTopic,
    getLastTopic: getLastTopic,
    resetAll: resetAll,
  };
})();