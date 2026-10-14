window.StudyMate = window.StudyMate || {};

// Keep application-only state and view helpers private.
(function () {
  var uiState = { searchQuery: "", searchLevel: "", searchSubject: "" };
  var pendingReset = false;
  var searchInputTimer = null;
  var appElement = null;

  // Escape text before inserting it into an HTML string.
  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Return the first document element matching a selector.
  function qs(selector) {
    return document.querySelector(selector);
  }

  // Navigate to a hash route.
  function navigate(hash) {
    window.location.hash = hash;
  }

  // Format an ISO date as a short day-month-year string.
  function formatDate(iso) {
    var date = new Date(iso);
    if (Number.isNaN(date.getTime())) {
      return "Date unavailable";
    }
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
  }

  // Get the current level and fall back to the first supported level.
  function getCurrentLevelId() {
    var levelId = window.StudyMate.progress.getLevel();
    return window.StudyMate.data.getLevelById(levelId)
      ? levelId
      : "secondary";
  }

  // Render a consistent page-width wrapper.
  function container(content) {
    return '<div class="container">' + content + "</div>";
  }

  // Render one subject card with its lesson count for the active level.
  function subjectCard(subject, levelId, comingSoon) {
    var lessonCount = window.StudyMate.data.getLessonCount(subject.id, levelId);
    return (
      '<article class="card">' +
      '<h2 class="card-title">' +
      escapeHtml(subject.icon) +
      " " +
      escapeHtml(subject.name) +
      "</h2>" +
      '<p class="card-text">' +
      escapeHtml(subject.description) +
      "</p>" +
      '<p class="card-text">' +
      escapeHtml(lessonCount) +
      (lessonCount === 1 ? " lesson available" : " lessons available") +
      "</p>" +
      (comingSoon && lessonCount === 0
        ? '<p class="notice-banner">Coming soon</p>'
        : '<a class="btn btn-primary" href="#/subjects/' +
          encodeURIComponent(subject.id) +
          '">Explore</a>') +
      "</article>"
    );
  }

  // Render the home page hero, progress summary, and subject cards.
  async function homeView() {
    var data = window.StudyMate.data;
    var user =
      window.StudyMate.auth && (await window.StudyMate.auth.getUser());
    var levelId = getCurrentLevelId();
    var completedCount = window.StudyMate.progress.getCompletedCount();
    var recentAttempts = window.StudyMate.progress.getRecentAttempts(1);
    var progressMarkup;
    if (completedCount === 0 && recentAttempts.length === 0) {
      progressMarkup =
        '<section class="empty-state"><p>No progress yet. Complete a lesson to see your stats here.</p></section>';
    } else {
      var latestAttempt = recentAttempts[0];
      progressMarkup =
        '<section class="stat-grid">' +
        '<div class="stat-card"><span class="stat-value">' +
        escapeHtml(completedCount) +
        '</span><span class="stat-label">Lessons completed</span></div>' +
        (latestAttempt
          ? '<div class="stat-card"><span class="stat-value">' +
            escapeHtml(latestAttempt.percent) +
            '%</span><span class="stat-label">Latest quiz score</span></div>'
          : "") +
        "</section>";
    }
    return container(
      '<section class="card">' +
        "<h1>StudyMate</h1>" +
        "<p>Welcome. Learn at your level, practise what you know, and improve one step at a time.</p>" +
        '<a class="btn btn-primary" href="#/level">Start Learning</a> ' +
        '<a class="btn btn-secondary" href="#/dashboard">View dashboard</a>' +
        "</section>" +
        '<section><h2>Your progress</h2>' +
        progressMarkup +
        "</section>" +
        (!user
          ? '<section class="notice-banner"><p>You can use StudyMate without an account. Sign up to save your progress across all your devices.</p><a class="btn btn-primary" href="#/signup">Sign up</a> <a class="btn btn-secondary" href="#/login">Sign in</a></section>'
          : "") +
        '<section><h2>Explore subjects</h2><div class="card-grid">' +
        // Render each available subject card.
        data.subjects
          .map(function (subject) {
            return subjectCard(subject, levelId, false);
          })
          .join("") +
        "</div></section>" +
        '<p class="notice-banner">Progress is saved in this browser on this device only.</p>'
    );
  }

  // Render the account creation form and its sign-in link.
  function signupView() {
    return container(
      '<section class="card"><h1>Create your StudyMate account</h1>' +
        '<form id="signup-form">' +
        '<label for="signup-email">Email</label>' +
        '<input type="email" id="signup-email" required>' +
        '<label for="signup-password">Password (min 6 characters)</label>' +
        '<input type="password" id="signup-password" required minlength="6">' +
        '<button type="submit" class="btn btn-primary btn-block">Create account</button>' +
        '</form><div id="auth-message" role="status" aria-live="polite"></div>' +
        '<p><a href="#/login">Already have an account? Sign in</a></p>' +
        '<p>Your progress will be saved to your account and synced across your devices.</p></section>'
    );
  }

  // Render the sign-in form and its account creation link.
  function loginView() {
    return container(
      '<section class="card"><h1>Sign in to StudyMate</h1>' +
        '<form id="login-form">' +
        '<label for="login-email">Email</label>' +
        '<input type="email" id="login-email" required>' +
        '<label for="login-password">Password (min 6 characters)</label>' +
        '<input type="password" id="login-password" required minlength="6">' +
        '<button type="submit" class="btn btn-primary btn-block">Sign in</button>' +
        '</form><div id="auth-message" role="status" aria-live="polite"></div>' +
        '<p><a href="#/signup">Don\'t have an account? Sign up</a></p>' +
        '<p>Your progress will be saved to your account and synced across your devices.</p></section>'
    );
  }

  // Render the available learning levels.
  function levelView() {
    var currentLevel = getCurrentLevelId();
    return container(
      "<h1>Choose your level</h1>" +
        '<div class="card-grid">' +
        // Render each selectable level.
        window.StudyMate.data.levels
          .map(function (level) {
            return (
              '<button type="button" class="level-card" data-action="set-level" data-id="' +
              escapeHtml(level.id) +
              '">' +
              "<h2>" +
              escapeHtml(level.name) +
              (level.id === currentLevel
                ? ' <span class="status-chip completed">Current</span>'
                : "") +
              "</h2><p>" +
              escapeHtml(level.description) +
              "</p></button>"
            );
          })
          .join("") +
        '</div><p><a class="btn btn-ghost" href="#/home">Back to home</a></p>'
    );
  }

  // Render subjects and their lesson availability for the selected level.
  function subjectsView() {
    var level = window.StudyMate.data.getLevelById(getCurrentLevelId());
    return container(
      "<h1>Subjects</h1>" +
        "<p>Current level: <strong>" +
        escapeHtml(level ? level.name : "Secondary School") +
        '</strong> · <a href="#/level">Change</a></p>' +
        '<div class="card-grid">' +
        // Render each subject and its availability.
        window.StudyMate.data.subjects
          .map(function (subject) {
            return subjectCard(subject, getCurrentLevelId(), true);
          })
          .join("") +
        "</div>"
    );
  }

  // Render topic links and progress status for a valid subject.
  function topicsView(subjectId) {
    var data = window.StudyMate.data;
    var subject = data.getSubjectById(subjectId);
    if (!subject) {
      return notFoundView();
    }
    var levelId = getCurrentLevelId();
    var level = data.getLevelById(levelId);
    var lastTopic = window.StudyMate.progress.getLastTopic();
    var topics = data.getTopics(subjectId, levelId);
    // Render each topic with its current progress status.
    var topicMarkup = topics
      .map(function (topic) {
        var complete = window.StudyMate.progress.isLessonComplete(topic.id);
        var inProgress = !complete && topic.id === lastTopic;
        var statusLabel = complete
          ? "Completed"
          : inProgress
            ? "In progress"
            : "Not started";
        var statusClass = complete
          ? "completed"
          : inProgress
            ? "in-progress"
            : "not-started";
        var difficultyClass =
          "badge-" + String(topic.difficulty || "").toLowerCase();
        return (
          '<article class="topic-item"><div><h2>' +
          escapeHtml(topic.title) +
          "</h2><p>" +
          escapeHtml(topic.description) +
          '</p><div class="topic-meta"><span class="badge ' +
          escapeHtml(difficultyClass) +
          '">' +
          escapeHtml(topic.difficulty) +
          "</span><span>" +
          escapeHtml(topic.estimatedTime) +
          '</span><span class="status-chip ' +
          statusClass +
          '">' +
          statusLabel +
          '</span></div></div><a class="btn btn-primary" href="#/lesson/' +
          encodeURIComponent(topic.id) +
          '">Open lesson</a></article>'
        );
      })
      .join("");
    return container(
      '<p><a class="btn btn-ghost" href="#/subjects">Back to subjects</a></p>' +
        "<h1>" +
        escapeHtml(subject.name) +
        "</h1><p>" +
        escapeHtml(level ? level.name : "") +
        "</p>" +
        (topics.length
          ? '<section class="attempt-list">' + topicMarkup + "</section>"
          : '<section class="empty-state"><p>No topics for this subject at this level yet.</p><a href="#/subjects">Back to subjects</a></section>')
    );
  }

  // Render a lesson with objectives, explanation, examples, and actions.
  function lessonView(topicId) {
    var data = window.StudyMate.data;
    var topic = data.getTopicById(topicId);
    if (!topic) {
      return notFoundView();
    }
    window.StudyMate.progress.setLastTopic(topicId);
    var level = data.getLevelById(topic.levelId);
    var complete = window.StudyMate.progress.isLessonComplete(topicId);
    var objectives = Array.isArray(topic.objectives) ? topic.objectives : [];
    var paragraphs = Array.isArray(topic.explanation) ? topic.explanation : [];
    var examples = Array.isArray(topic.examples) ? topic.examples : [];
    var keyPoints = Array.isArray(topic.keyPoints) ? topic.keyPoints : [];
    return container(
      '<p><a class="btn btn-ghost" href="#/subjects/' +
        encodeURIComponent(topic.subjectId) +
        '">Back to topics</a></p>' +
        '<header class="lesson-header"><h1>' +
        escapeHtml(topic.title) +
        (complete ? ' <span class="status-chip completed">Completed</span>' : "") +
        '</h1><div class="topic-meta"><span class="badge badge-' +
        escapeHtml(String(topic.difficulty || "").toLowerCase()) +
        '">' +
        escapeHtml(topic.difficulty) +
        "</span><span>" +
        escapeHtml(topic.estimatedTime) +
        "</span><span>" +
        escapeHtml(level ? level.name : "") +
        "</span></div></header>" +
        "<section><h2>Learning objectives</h2><ul class=\"objectives-list\">" +
        // Render each objective as a list item.
        objectives
          .map(function (objective) {
            return "<li>" + escapeHtml(objective) + "</li>";
          })
          .join("") +
        "</ul></section>" +
        '<section class="lesson-text"><h2>Explanation</h2>' +
        // Render each explanation paragraph.
        paragraphs
          .map(function (paragraph) {
            return "<p>" + escapeHtml(paragraph) + "</p>";
          })
          .join("") +
        "</section>" +
        "<section><h2>Worked examples</h2>" +
        // Render each worked example with its solution steps.
        examples
          .map(function (example) {
            var steps = Array.isArray(example.steps) ? example.steps : [];
            return (
              '<article class="example-box"><h3>' +
              escapeHtml(example.title) +
              "</h3><p>" +
              escapeHtml(example.problem) +
              "</p><ol>" +
              // Render each step in the worked example.
              steps
                .map(function (step) {
                  return '<li class="example-step">' + escapeHtml(step) + "</li>";
                })
                .join("") +
              "</ol><p><strong>Answer:</strong> " +
              escapeHtml(example.answer) +
              "</p></article>"
            );
          })
          .join("") +
        "</section>" +
        "<section><h2>Key points</h2><ul class=\"key-points\">" +
        // Render each key point as a list item.
        keyPoints
          .map(function (point) {
            return "<li>" + escapeHtml(point) + "</li>";
          })
          .join("") +
        '</ul></section><section class="summary-box"><h2>Summary</h2><p>' +
        escapeHtml(topic.summary) +
        "</p></section>" +
        '<p><a class="btn btn-primary" href="#/quiz/' +
        encodeURIComponent(topic.id) +
        '">Start Quiz</a> ' +
        (complete
          ? '<a class="btn btn-secondary" href="#/quiz/' +
            encodeURIComponent(topic.id) +
            '">Retake quiz</a>'
          : '<button type="button" class="btn btn-secondary" data-action="complete-lesson" data-id="' +
            escapeHtml(topic.id) +
            '">Mark as complete</button>') +
        "</p>"
    );
  }

  // Render a quiz error with a route back to its topic.
  function quizErrorView(topicId) {
    return container(
      '<section class="error-state"><h1>Quiz unavailable</h1><p>This topic does not have a quiz available right now.</p><a class="btn btn-primary" href="#/lesson/' +
        encodeURIComponent(topicId) +
        '">Back to lesson</a></section>'
    );
  }

  // Render the result panel and feedback for each quiz question.
  function quizResultView(topicId) {
    var quizState = window.StudyMate.quiz.getState();
    var score = window.StudyMate.quiz.getScore();
    var message =
      score.percent >= 80
        ? "Excellent work"
        : score.percent >= 60
          ? "Good progress"
          : score.percent >= 40
            ? "Keep practising"
            : "Review the lesson and try again";
    // Render each submitted question and its feedback.
    var review = quizState.questions
      .map(function (question, index) {
        var feedback = window.StudyMate.quiz.getFeedback(index);
        var chosen =
          feedback.selectedIndex == null
            ? "No answer selected"
            : question.options[feedback.selectedIndex];
        return (
          '<article class="attempt-row ' +
          (feedback.isCorrect ? "feedback-correct" : "feedback-wrong") +
          '"><div><h3>' +
          escapeHtml(question.question) +
          "</h3><p>Your answer: " +
          escapeHtml(chosen) +
          (feedback.isCorrect
            ? " — Correct"
            : " — Not quite. Correct answer: " +
              escapeHtml(question.options[feedback.correctIndex])) +
          "</p><p>" +
          escapeHtml(feedback.explanation) +
          "</p></div></article>"
        );
      })
      .join("");
    return container(
      '<section class="result-panel"><h1>Quiz results</h1><div class="score-circle">' +
        escapeHtml(score.percent) +
        '%</div><p class="stat-value">' +
        escapeHtml(message) +
        "</p><p>Score " +
        escapeHtml(score.correct) +
        " / " +
        escapeHtml(score.total) +
        "</p></section>" +
        '<section><h2>Answer review</h2><div class="attempt-list">' +
        review +
        '</div></section><p><button type="button" class="btn btn-primary" data-action="retry-quiz">Retry quiz</button> ' +
        '<a class="btn btn-secondary" href="#/lesson/' +
        encodeURIComponent(topicId) +
        '">Back to lesson</a></p>'
    );
  }

  // Render the active question, answer choices, feedback, and quiz navigation.
  function quizQuestionView(topicId) {
    var quizState = window.StudyMate.quiz.getState();
    var question = window.StudyMate.quiz.getCurrentQuestion();
    if (!quizState || !question || !Array.isArray(question.options)) {
      return quizErrorView(topicId);
    }
    var index = quizState.index;
    var total = quizState.questions.length;
    var feedback = window.StudyMate.quiz.getFeedback(index);
    var selected = feedback ? feedback.selectedIndex : null;
    var submitted = window.StudyMate.quiz.isCurrentSubmitted();
    // Render the four answer choices with feedback-based state classes.
    var options = question.options
      .map(function (option, optionIndex) {
        var classes = ["option"];
        if (selected === optionIndex) {
          classes.push("option-selected");
        }
        if (submitted && feedback.correctIndex === optionIndex) {
          classes.push("option-correct");
        }
        if (
          submitted &&
          selected === optionIndex &&
          !feedback.isCorrect
        ) {
          classes.push("option-wrong");
        }
        return (
          '<button type="button" class="' +
          classes.join(" ") +
          '" data-action="select-option" data-index="' +
          optionIndex +
          '"' +
          (submitted ? " disabled" : "") +
          ">" +
          escapeHtml(option) +
          "</button>"
        );
      })
      .join("");
    var feedbackMarkup = submitted
      ? '<section class="feedback ' +
        (feedback.isCorrect ? "feedback-correct" : "feedback-wrong") +
        '"><strong>' +
        (feedback.isCorrect ? "Correct" : "Not quite") +
        "</strong><p>" +
        escapeHtml(feedback.explanation) +
        "</p></section>"
      : "";
    var nextLabel = index === total - 1 ? "See results" : "Next question";
    return container(
      '<p><a class="btn btn-ghost" href="#/lesson/' +
        encodeURIComponent(topicId) +
        '">Quit quiz</a></p><p>Question ' +
        (index + 1) +
        " of " +
        total +
        '</p><progress class="quiz-progress" max="' +
        total +
        '" value="' +
        (index + 1) +
        '" aria-label="Question progress"></progress><h1 class="question-text">' +
        escapeHtml(question.question) +
        '</h1><div class="option-list">' +
        options +
        "</div>" +
        feedbackMarkup +
        '<nav class="quiz-nav"><button type="button" class="btn btn-secondary" data-action="prev-question"' +
        (index === 0 ? " disabled" : "") +
        '>Previous</button>' +
        (submitted
          ? '<button type="button" class="btn btn-primary" data-action="next-question">' +
            nextLabel +
            "</button>"
          : '<button type="button" class="btn btn-primary" data-action="submit-answer"' +
            (selected == null ? " disabled" : "") +
            ">Submit answer</button>") +
        "</nav>"
    );
  }

  // Start or resume a topic quiz and render its question or result.
  function quizView(topicId) {
    var topic = window.StudyMate.data.getTopicById(topicId);
    if (!topic) {
      return notFoundView();
    }
    var quizState = window.StudyMate.quiz.getState();
    if (!quizState || quizState.topicId !== topicId) {
      if (!window.StudyMate.quiz.start(topicId)) {
        return quizErrorView(topicId);
      }
      quizState = window.StudyMate.quiz.getState();
    }
    if (!quizState || quizState.questions.length === 0) {
      return quizErrorView(topicId);
    }
    return window.StudyMate.quiz.isFinished()
      ? quizResultView(topicId)
      : quizQuestionView(topicId);
  }

  // Render dashboard statistics, recent attempts, and available topics.
  function dashboardView() {
    var progress = window.StudyMate.progress;
    var data = window.StudyMate.data;
    var levelId = getCurrentLevelId();
    // Collect the topics available at the active level.
    var allTopics = data.topics.filter(function (topic) {
      return topic.levelId === levelId;
    });
    // Exclude topics already marked complete.
    var remainingTopics = allTopics.filter(function (topic) {
      return !progress.isLessonComplete(topic.id);
    });
    var attempts = progress.getRecentAttempts(5);
    var allAttempts = progress.getRecentAttempts(Number.MAX_SAFE_INTEGER);
    var average = allAttempts.length
      ? Math.round(
          // Sum percentages before calculating their average.
          allAttempts.reduce(function (sum, attempt) {
            return sum + attempt.percent;
          }, 0) / allAttempts.length
        )
      : null;
    var lastTopicId = progress.getLastTopic();
    var lastTopic = lastTopicId ? data.getTopicById(lastTopicId) : null;
    // Render recent quiz attempts with topic names and dates.
    var recentMarkup = attempts.length
      ? attempts
        // Render one recent attempt row.
        .map(function (attempt) {
            var topic = data.getTopicById(attempt.topicId);
            return (
              '<article class="attempt-row"><span>' +
              escapeHtml(topic ? topic.title : "Unknown topic") +
              '</span><span class="topic-meta">' +
              escapeHtml(attempt.score) +
              " / " +
              escapeHtml(attempt.total) +
              " · " +
              escapeHtml(attempt.percent) +
              "% · " +
              escapeHtml(formatDate(attempt.date)) +
              "</span></article>"
            );
          })
          .join("")
      : '<div class="empty-state"><p>No quiz attempts yet.</p></div>';
    var remainingMarkup = remainingTopics.length
      ? remainingTopics
        // Render a link for each remaining topic.
        .slice(0, 5)
          .map(function (topic) {
            return (
              '<a class="attempt-row" href="#/lesson/' +
              encodeURIComponent(topic.id) +
              '">' +
              escapeHtml(topic.title) +
              " — " +
              escapeHtml(topic.subjectId) +
              "</a>"
            );
          })
          .join("")
      : '<div class="empty-state"><p>You have completed every available topic. Excellent work.</p></div>';
    return container(
      "<h1>Your progress</h1>" +
        '<section class="stat-grid">' +
        '<div class="stat-card"><span class="stat-value">' +
        escapeHtml(progress.getCompletedCount()) +
        '</span><span class="stat-label">Lessons completed</span></div>' +
        '<div class="stat-card"><span class="stat-value">' +
        escapeHtml(allAttempts.length) +
        '</span><span class="stat-label">Quizzes taken</span></div>' +
        '<div class="stat-card"><span class="stat-value">' +
        (average === null ? "—" : escapeHtml(average) + "%") +
        '</span><span class="stat-label">Average score</span></div>' +
        '<div class="stat-card"><span class="stat-value">' +
        escapeHtml(remainingTopics.length) +
        '</span><span class="stat-label">Topics still to study</span></div>' +
        "</section>" +
        '<p><a class="btn btn-primary" href="' +
        (lastTopic ? "#/lesson/" + encodeURIComponent(lastTopic.id) : "#/subjects") +
        '">Continue Learning</a></p><section><h2>Recent quiz scores</h2><div class="attempt-list">' +
        recentMarkup +
        '</div></section><section><h2>Topics still to study</h2><div class="attempt-list">' +
        remainingMarkup +
        "</div></section>" +
        (pendingReset
          ? '<section class="notice-banner"><p>Reset all saved progress?</p><button type="button" class="btn btn-primary" data-action="confirm-reset">Yes, reset</button> <button type="button" class="btn btn-secondary" data-action="cancel-reset">Cancel</button></section>'
          : '<p><button type="button" class="btn btn-ghost" data-action="reset-progress">Reset my progress</button></p>') +
        '<p class="notice-banner">Progress is saved in this browser on this device only.</p>'
    );
  }

  // Render the search controls and the results container.
  function searchView() {
    var data = window.StudyMate.data;
    // Render level options and preserve the current filter.
    var levels = data.levels
      .map(function (level) {
        return (
          '<option value="' +
          escapeHtml(level.id) +
          '"' +
          (uiState.searchLevel === level.id ? " selected" : "") +
          ">" +
          escapeHtml(level.name) +
          "</option>"
        );
      })
      .join("");
    // Render subject options and preserve the current filter.
    var subjects = data.subjects
      .map(function (subject) {
        return (
          '<option value="' +
          escapeHtml(subject.id) +
          '"' +
          (uiState.searchSubject === subject.id ? " selected" : "") +
          ">" +
          escapeHtml(subject.name) +
          "</option>"
        );
      })
      .join("");
    return container(
      "<h1>Search topics</h1>" +
        '<div class="search-bar"><input class="text-input" id="search-input" type="search" value="' +
        escapeHtml(uiState.searchQuery) +
        '" placeholder="Search topics" aria-label="Search topics"></div>' +
        '<div class="filter-row"><select class="select-input" id="search-level" aria-label="Filter by level"><option value="">All levels</option>' +
        levels +
        '</select><select class="select-input" id="search-subject" aria-label="Filter by subject"><option value="">All subjects</option>' +
        subjects +
        '</select></div><div id="search-results"></div>'
    );
  }

  // Render matching search results without replacing the search controls.
  function renderSearchResults() {
    var resultsElement = qs("#search-results");
    if (!resultsElement) {
      return;
    }
    var data = window.StudyMate.data;
    var results = data.searchTopics(
      uiState.searchQuery,
      uiState.searchLevel || null,
      uiState.searchSubject || null
    );
    if (!results.length) {
      resultsElement.innerHTML =
        '<section class="empty-state"><p>No topics match your search.</p><button type="button" class="btn btn-secondary" data-action="clear-search">Clear filters</button></section>';
      return;
    }
    resultsElement.innerHTML =
      '<div class="card-grid">' +
      // Render every matching topic card.
      results
        .map(function (topic) {
          var subject = data.getSubjectById(topic.subjectId);
          var level = data.getLevelById(topic.levelId);
          return (
            '<a class="card" href="#/lesson/' +
            encodeURIComponent(topic.id) +
            '"><h2 class="card-title">' +
            escapeHtml(topic.title) +
            "</h2><p>" +
            escapeHtml(topic.description) +
            "</p><div class=\"topic-meta\"><span>" +
            escapeHtml(subject ? subject.name : "") +
            "</span><span>" +
            escapeHtml(level ? level.name : "") +
            '</span><span class="badge badge-' +
            escapeHtml(String(topic.difficulty || "").toLowerCase()) +
            '">' +
            escapeHtml(topic.difficulty) +
            "</span></div></a>"
          );
        })
        .join("") +
      "</div>";
  }

  // Render a friendly not-found page with the attempted route escaped.
  function notFoundView() {
    return container(
      '<section class="empty-state"><h1>Page not found</h1><p>We could not find the page at ' +
        escapeHtml(window.location.hash || "#/home") +
        '.</p><a class="btn btn-primary" href="#/home">Back to home</a></section>'
    );
  }

  var ROUTES = [
    { pattern: /^#?\/?$/, view: homeView, params: [] },
    { pattern: /^#\/home$/, view: homeView, params: [] },
    { pattern: /^#\/level$/, view: levelView, params: [] },
    { pattern: /^#\/subjects$/, view: subjectsView, params: [] },
    { pattern: /^#\/subjects\/([^/]+)$/, view: topicsView, params: ["subjectId"] },
    { pattern: /^#\/lesson\/([^/]+)$/, view: lessonView, params: ["topicId"] },
    { pattern: /^#\/quiz\/([^/]+)$/, view: quizView, params: ["topicId"] },
    { pattern: /^#\/dashboard$/, view: dashboardView, params: [] },
    { pattern: /^#\/search$/, view: searchView, params: [] },
    { pattern: /^#\/signup$/, view: signupView, params: [] },
    { pattern: /^#\/login$/, view: loginView, params: [] },
  ];

  // Match the current hash, render its view, then focus and scroll the app.
  async function render() {
    if (!appElement) {
      appElement = qs("#app");
    }
    if (!appElement) {
      return;
    }
    var hash = window.location.hash || "#/home";
    var markup = null;
    for (var index = 0; index < ROUTES.length; index += 1) {
      var match = hash.match(ROUTES[index].pattern);
      if (match) {
        var params = match.slice(1);
        try {
          params = params.map(decodeURIComponent);
        } catch (error) {
          markup = notFoundView();
          break;
        }
        markup = await ROUTES[index].view.apply(null, params);
        break;
      }
    }
    appElement.innerHTML = markup === null ? notFoundView() : markup;
    var accountArea = qs("#account-area");
    if (accountArea) {
      var user =
        window.StudyMate.auth && (await window.StudyMate.auth.getUser());
      accountArea.innerHTML = user
        ? "Hi, " +
          escapeHtml(user.email) +
          ' <button type="button" data-action="sign-out" class="btn btn-ghost">Sign out</button>'
        : '<a href="#/login" class="nav-link">Sign in</a> <a href="#/signup" class="nav-link">Sign up</a>';
    }
    if (hash === "#/search" || hash === "") {
      renderSearchResults();
    }
    appElement.focus();
    window.scrollTo(0, 0);
  }

  // Handle delegated click actions from the app and the external header control.
  async function handleAction(event) {
    var target = event.target.closest("[data-action]");
    if (!target) {
      return;
    }
    var action = target.getAttribute("data-action");
    var id = target.getAttribute("data-id");
    if (action === "sign-out") {
      if (window.StudyMate.auth) {
        await window.StudyMate.auth.signOut();
      }
      navigate("#/home");
    } else if (action === "go-level") {
      navigate("#/level");
    } else if (action === "set-level") {
      if (window.StudyMate.progress.setLevel(id)) {
        navigate("#/subjects");
      }
    } else if (action === "complete-lesson") {
      window.StudyMate.progress.markLessonComplete(id);
      render();
    } else if (action === "select-option") {
      window.StudyMate.quiz.selectAnswer(Number(target.getAttribute("data-index")));
      render();
    } else if (action === "submit-answer") {
      if (window.StudyMate.quiz.submitAnswer()) {
        if (window.StudyMate.quiz.isFinished()) {
          var quizState = window.StudyMate.quiz.getState();
          var score = window.StudyMate.quiz.getScore();
          window.StudyMate.progress.recordQuizAttempt(
            quizState.topicId,
            score.correct,
            score.total
          );
        }
        render();
      }
    } else if (action === "next-question") {
      window.StudyMate.quiz.next();
      render();
    } else if (action === "prev-question") {
      window.StudyMate.quiz.prev();
      render();
    } else if (action === "retry-quiz") {
      window.StudyMate.quiz.retry();
      render();
    } else if (action === "reset-progress") {
      pendingReset = true;
      render();
    } else if (action === "confirm-reset") {
      window.StudyMate.progress.resetAll();
      pendingReset = false;
      render();
    } else if (action === "cancel-reset") {
      pendingReset = false;
      render();
    } else if (action === "clear-search") {
      uiState.searchQuery = "";
      uiState.searchLevel = "";
      uiState.searchSubject = "";
      var searchInput = qs("#search-input");
      var searchLevel = qs("#search-level");
      var searchSubject = qs("#search-subject");
      if (searchInput) {
        searchInput.value = "";
      }
      if (searchLevel) {
        searchLevel.value = "";
      }
      if (searchSubject) {
        searchSubject.value = "";
      }
      renderSearchResults();
    }
  }

  // Submit signup and login forms through the auth module and display status messages.
  async function handleSubmit(event) {
    var form = event.target;
    if (form.id !== "signup-form" && form.id !== "login-form") {
      return;
    }

    event.preventDefault();
    var isSignup = form.id === "signup-form";
    var email = qs(isSignup ? "#signup-email" : "#login-email").value;
    var password = qs(isSignup ? "#signup-password" : "#login-password").value;
    var message = qs("#auth-message");
    var button = form.querySelector('button[type="submit"]');
    message.textContent = isSignup ? "Creating account..." : "Signing in...";
    message.classList.remove("error-state");
    button.disabled = true;

    var auth = window.StudyMate.auth;
    var result;
    try {
      result = auth
        ? await (isSignup
            ? auth.signUp(email, password)
            : auth.signIn(email, password))
        : { error: "Authentication is not available right now." };
    } catch (error) {
      result = { error: "Authentication could not be completed." };
    }

    if (result && result.error) {
      message.textContent = result.error;
      message.classList.add("error-state");
      button.disabled = false;
    } else if (result && result.user) {
      navigate("#/dashboard");
    } else {
      message.textContent = "Authentication could not be completed.";
      message.classList.add("error-state");
      button.disabled = false;
    }
  }

  // Handle updated search filter selections without replacing the page.
  function handleChange(event) {
    if (event.target.id === "search-level") {
      uiState.searchLevel = event.target.value;
      renderSearchResults();
    } else if (event.target.id === "search-subject") {
      uiState.searchSubject = event.target.value;
      renderSearchResults();
    }
  }

  // Debounce typed search input and update only its results region.
  function handleInput(event) {
    if (event.target.id !== "search-input") {
      return;
    }
    uiState.searchQuery = event.target.value;
    window.clearTimeout(searchInputTimer);
    searchInputTimer = window.setTimeout(renderSearchResults, 150);
  }

  // Attach the app and header event delegation exactly once.
  function initialize() {
    appElement = qs("#app");
    if (!appElement) {
      return;
    }
    appElement.addEventListener("click", handleAction);
    appElement.addEventListener("change", handleChange);
    appElement.addEventListener("input", handleInput);
    appElement.addEventListener("submit", handleSubmit);
    var header = qs(".site-header");
    if (header) {
      header.addEventListener("click", handleAction);
    }
    var yearElement = qs("#current-year");
    if (yearElement) {
      yearElement.textContent = String(new Date().getFullYear());
    }
    var auth = window.StudyMate.auth;
    if (auth && auth.init()) {
      auth.onChange(function (event, session) {
        render();
        if (event === "SIGNED_IN" && session) {
          window.StudyMate.progress.hydrateFromCloud().then(function () {
            render();
          });
        }
      });
      window.StudyMate.progress.hydrateFromCloud().then(function () {
        render();
      });
    }
    render();
  }

  document.addEventListener("DOMContentLoaded", initialize);
  window.addEventListener("hashchange", render);
})();