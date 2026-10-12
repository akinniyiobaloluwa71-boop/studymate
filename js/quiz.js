window.StudyMate = window.StudyMate || {};

window.StudyMate.quiz = (function () {
  var state = null;

  // Copy a question without exposing its answer key.
  function copyQuestion(question) {
    if (!question || typeof question !== "object") {
      return null;
    }
    var copy = {};
    Object.keys(question).forEach(function (key) {
      if (key !== "correctIndex") {
        copy[key] = Array.isArray(question[key])
          ? question[key].slice()
          : question[key];
      }
    });
    return copy;
  }

  // Return a safe snapshot of quiz state without exposing answer keys.
  function getState() {
    if (!state) {
      return null;
    }
    return {
      topicId: state.topicId,
      questions: state.questions.map(copyQuestion),
      index: state.index,
      answers: state.answers.slice(),
      submitted: state.submitted.slice(),
      finished: state.finished,
    };
  }

  // Start a quiz for a topic that contains a question array.
  function start(topicId) {
    var data = window.StudyMate.data;
    if (!data || typeof data.getTopicById !== "function") {
      return false;
    }
    var topic = data.getTopicById(topicId);
    if (!topic || !Array.isArray(topic.questions)) {
      return false;
    }
    state = {
      topicId: topicId,
      questions: topic.questions.slice(),
      index: 0,
      answers: [],
      submitted: [],
      finished: false,
    };
    for (var questionIndex = 0; questionIndex < state.questions.length; questionIndex += 1) {
      state.answers.push(null);
      state.submitted.push(false);
    }
    return true;
  }

  // Return the current question without exposing its answer key.
  function getCurrentQuestion() {
    if (!state || state.index < 0 || state.index >= state.questions.length) {
      return null;
    }
    return copyQuestion(state.questions[state.index]);
  }

  // Select a valid option for the current unanswered question.
  function selectAnswer(optionIndex) {
    if (
      !state ||
      state.index < 0 ||
      state.index >= state.questions.length ||
      state.submitted[state.index] ||
      typeof optionIndex !== "number" ||
      !Number.isInteger(optionIndex) ||
      optionIndex < 0 ||
      optionIndex > 3
    ) {
      return false;
    }
    var options = state.questions[state.index].options;
    if (!Array.isArray(options) || optionIndex >= options.length) {
      return false;
    }
    state.answers[state.index] = optionIndex;
    return true;
  }

  // Submit the selected option and finish when this is the last question.
  function submitAnswer() {
    if (
      !state ||
      state.index < 0 ||
      state.index >= state.questions.length ||
      state.answers[state.index] === null ||
      state.submitted[state.index]
    ) {
      return false;
    }
    state.submitted[state.index] = true;
    if (state.index === state.questions.length - 1) {
      state.finished = true;
    }
    return true;
  }

  // Report whether the current question has been submitted.
  function isCurrentSubmitted() {
    return !!(
      state &&
      state.index >= 0 &&
      state.index < state.submitted.length &&
      state.submitted[state.index]
    );
  }

  // Advance to the next question when it exists.
  function next() {
    if (!state || state.index + 1 >= state.questions.length) {
      return false;
    }
    state.index += 1;
    return true;
  }

  // Move to the previous question when one exists.
  function prev() {
    if (!state || state.index <= 0) {
      return false;
    }
    state.index -= 1;
    return true;
  }

  // Jump to a valid question index.
  function goTo(index) {
    if (
      !state ||
      typeof index !== "number" ||
      !Number.isInteger(index) ||
      index < 0 ||
      index >= state.questions.length
    ) {
      return false;
    }
    state.index = index;
    return true;
  }

  // Reset answers and submission state while keeping the current questions.
  function retry() {
    if (!state) {
      return false;
    }
    state.index = 0;
    state.answers = [];
    state.submitted = [];
    for (var questionIndex = 0; questionIndex < state.questions.length; questionIndex += 1) {
      state.answers.push(null);
      state.submitted.push(false);
    }
    state.finished = false;
    return true;
  }

  // Return the number correct, total number, and rounded percentage.
  function getScore() {
    if (!state) {
      return { correct: 0, total: 0, percent: 0 };
    }
    var correct = 0;
    for (var questionIndex = 0; questionIndex < state.questions.length; questionIndex += 1) {
      if (
        state.submitted[questionIndex] &&
        state.answers[questionIndex] === state.questions[questionIndex].correctIndex
      ) {
        correct += 1;
      }
    }
    var total = state.questions.length;
    return {
      correct: correct,
      total: total,
      percent: total ? Math.round((correct / total) * 100) : 0,
    };
  }

  // Report whether the current quiz has been finished.
  function isFinished() {
    return !!(state && state.finished);
  }

  // Return feedback for a question while withholding its answer until submission.
  function getFeedback(index) {
    if (
      !state ||
      typeof index !== "number" ||
      !Number.isInteger(index) ||
      index < 0 ||
      index >= state.questions.length
    ) {
      return null;
    }
    var question = state.questions[index];
    var submitted = state.submitted[index];
    var correctIndex = submitted ? question.correctIndex : null;
    return {
      submitted: submitted,
      selectedIndex: state.answers[index],
      correctIndex: correctIndex,
      isCorrect:
        submitted && state.answers[index] === question.correctIndex,
      explanation: submitted ? question.explanation : null,
    };
  }

  return {
    start: start,
    getState: getState,
    getCurrentQuestion: getCurrentQuestion,
    selectAnswer: selectAnswer,
    submitAnswer: submitAnswer,
    isCurrentSubmitted: isCurrentSubmitted,
    next: next,
    prev: prev,
    goTo: goTo,
    retry: retry,
    getScore: getScore,
    isFinished: isFinished,
    getFeedback: getFeedback,
  };
})();