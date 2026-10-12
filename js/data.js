window.StudyMate = window.StudyMate || {};

window.StudyMate.data = {
  levels: [
    {
      id: "secondary",
      name: "Secondary School",
      description: "For students preparing for SSCE, WAEC and NECO examinations.",
    },
    {
      id: "polytechnic",
      name: "Polytechnic",
      description: "For National Diploma and Higher National Diploma students.",
    },
    {
      id: "university",
      name: "University",
      description: "For undergraduate students in their first and second years.",
    },
  ],
  subjects: [
    {
      id: "mathematics",
      name: "Mathematics",
      description:
        "Build confidence with numbers, algebra and geometry through clear worked examples.",
      icon: "∑",
    },
    {
      id: "english",
      name: "English",
      description:
        "Improve grammar, comprehension and written expression step by step.",
      icon: "A",
    },
  ],
  topics: [
    {
      id: "math-sec-algebra-basics",
      subjectId: "mathematics",
      levelId: "secondary",
      title: "Solving Simple Linear Equations",
      description:
        "Learn how to isolate an unknown value using inverse operations.",
      difficulty: "Beginner",
      estimatedTime: "10 min",
      objectives: [
        "Understand an equation as a statement that two expressions have equal value.",
        "Use inverse operations to isolate the unknown on one side.",
        "Check an answer by substituting it into the original equation.",
      ],
      explanation: [
        "An equation is a mathematical statement showing that two expressions have the same value. The equals sign means both sides are equal.",
        "Think of an equation as a balanced scale. Whatever operation you perform on one side must also be performed on the other to keep the equality true.",
        "Inverse operations undo one another: addition and subtraction are inverses, and multiplication and division are inverses. Use them in reverse order to isolate the unknown.",
        "Check your answer by substituting it into the original equation. If both sides have the same value, the solution is correct.",
      ],
      examples: [
        {
          title: "Example A: Solve x + 7 = 12",
          problem: "x + 7 = 12",
          steps: [
            "x + 7 - 7 = 12 - 7",
            "x = 5",
          ],
          answer: "x = 5",
        },
        {
          title: "Example B: Solve 3x - 4 = 11",
          problem: "3x - 4 = 11",
          steps: [
            "3x - 4 + 4 = 11 + 4",
            "3x = 15",
            "3x ÷ 3 = 15 ÷ 3",
            "x = 5",
          ],
          answer: "x = 5",
        },
      ],
      keyPoints: [
        "An equation states that two expressions are equal.",
        "Keep an equation balanced by doing the same operation to both sides.",
        "Use inverse operations to isolate the unknown.",
        "Substitute the solution into the original equation to check it.",
      ],
      summary:
        "Solve a linear equation by undoing operations in reverse order while keeping both sides balanced. Substitute your result into the original equation to verify it.",
      questions: [
        {
          question: "Solve x + 6 = 10.",
          options: ["x = 4", "x = 16", "x = 6", "x = 3"],
          correctIndex: 0,
          explanation:
            "Subtract 6 from both sides: x = 10 - 6 = 4.",
        },
        {
          question: "Solve x - 3 = 5.",
          options: ["x = 2", "x = 8", "x = -8", "x = 15"],
          correctIndex: 1,
          explanation:
            "Add 3 to both sides: x = 5 + 3 = 8.",
        },
        {
          question: "Solve 4x = 20.",
          options: ["x = 80", "x = 16", "x = 5", "x = 4"],
          correctIndex: 2,
          explanation:
            "Divide both sides by 4: x = 20 ÷ 4 = 5.",
        },
        {
          question: "Solve 2x + 3 = 13.",
          options: ["x = 8", "x = 5", "x = 10", "x = 16"],
          correctIndex: 1,
          explanation:
            "Subtract 3 from both sides to get 2x = 10, then divide by 2 to get x = 5.",
        },
        {
          question: "Is x = 5 a solution to x + 4 = 9?",
          options: [
            "Yes, because 5 + 4 = 9.",
            "No, because 5 - 4 = 1.",
            "No, because 5 + 4 = 10.",
            "Yes, because 9 - 5 = 5.",
          ],
          correctIndex: 0,
          explanation:
            "Substitute 5 for x in the original equation: 5 + 4 = 9, so both sides are equal.",
        },
      ],
    },
    {
      id: "math-sec-fractions-basics",
      subjectId: "mathematics",
      levelId: "secondary",
      title: "Adding and Subtracting Fractions",
      description:
        "Find common denominators and combine fractions correctly.",
      difficulty: "Beginner",
      estimatedTime: "8 min",
      objectives: [
        "Add and subtract fractions that have the same denominator.",
        "Find a least common denominator before combining unlike fractions.",
        "Simplify a fraction and use fractions to solve a simple word problem.",
      ],
      explanation: [
        "A fraction represents part of a whole. Its denominator tells how many equal parts make the whole, while its numerator tells how many of those parts are being considered.",
        "When denominators are the same, the parts are the same size. Add or subtract the numerators and keep the denominator unchanged.",
        "When denominators differ, first find a common denominator. The least common denominator (LCD) is the smallest number that is a multiple of both denominators.",
        "Rewrite each fraction as an equivalent fraction with the LCD, then add or subtract the numerators. Do not add or subtract the denominators.",
        "Simplify the result by dividing its numerator and denominator by their greatest common factor. In a word problem, identify the fractional amounts and whether they are being combined or compared.",
      ],
      examples: [
        {
          title: "Example A: Add 1/4 + 2/4",
          problem: "1/4 + 2/4",
          steps: [
            "The denominators are the same, so add the numerators: 1 + 2 = 3.",
            "Keep the denominator 4.",
          ],
          answer: "1/4 + 2/4 = 3/4",
        },
        {
          title: "Example B: Subtract 2/3 - 1/4",
          problem: "2/3 - 1/4",
          steps: [
            "The LCD of 3 and 4 is 12.",
            "Rewrite 2/3 as 8/12 and 1/4 as 3/12.",
            "Subtract the numerators: 8 - 3 = 5, and keep the denominator 12.",
          ],
          answer: "2/3 - 1/4 = 5/12",
        },
      ],
      keyPoints: [
        "With like denominators, combine the numerators and keep the denominator.",
        "Use the least common denominator to combine unlike fractions.",
        "Rewrite fractions as equivalent fractions before combining them.",
        "Simplify the final fraction when numerator and denominator have a common factor.",
      ],
      summary:
        "Fractions must refer to equal-sized parts before they can be added or subtracted. Find a common denominator, combine the numerators, and simplify the result if possible.",
      questions: [
        {
          question: "What is 2/9 + 4/9?",
          options: ["6/18", "2/3", "6/9", "2/9"],
          correctIndex: 2,
          explanation:
            "For like denominators, add the numerators and keep the denominator: 2/9 + 4/9 = 6/9.",
        },
        {
          question: "What is the least common denominator of 1/3 and 1/4?",
          options: ["7", "12", "9", "24"],
          correctIndex: 1,
          explanation:
            "A common denominator is a common multiple of both denominators; the least common multiple of 3 and 4 is 12.",
        },
        {
          question: "What is 3/4 - 1/6?",
          options: ["2/2", "7/12", "2/12", "1/2"],
          correctIndex: 1,
          explanation:
            "The LCD is 12. Rewrite 3/4 as 9/12 and 1/6 as 2/12; then subtract the numerators: 9/12 - 2/12 = 7/12.",
        },
        {
          question: "Simplify 6/8.",
          options: ["3/4", "2/3", "6/4", "1/4"],
          correctIndex: 0,
          explanation:
            "Divide both the numerator and denominator by their greatest common factor, 2: 6/8 = 3/4.",
        },
        {
          question:
            "A ribbon is cut into equal parts. If 1/4 is used in the morning and 2/4 in the afternoon, what fraction is used altogether?",
          options: ["3/8", "1/4", "3/4", "2/4"],
          correctIndex: 2,
          explanation:
            "The denominators are alike, so add the numerators and keep the denominator: 1/4 + 2/4 = 3/4.",
        },
      ],
    },
    {
      id: "eng-sec-parts-of-speech",
      subjectId: "english",
      levelId: "secondary",
      title: "The Eight Parts of Speech",
      description: "Identify how words work in a sentence.",
      difficulty: "Beginner",
      estimatedTime: "9 min",
      objectives: [
        "Recognise nouns that name people, places, things, or ideas.",
        "Identify verbs and adjectives by the work they do in a sentence.",
        "Recognise adverbs that modify verbs, adjectives, or other adverbs.",
      ],
      explanation: [
        "A word's part of speech describes the job it performs in a sentence. Recognising word functions helps you understand sentence meaning and construct clear, grammatical writing.",
        "A noun names a person, place, thing, or idea. In a sentence, a noun can act as a subject or an object.",
        "A verb expresses an action, an occurrence, or a state of being. It often tells what the subject does or is.",
        "An adjective describes or limits a noun or pronoun. An adverb modifies a verb, an adjective, or another adverb, often explaining how, when, where, or to what degree.",
        "The remaining parts of speech are pronouns, prepositions, conjunctions, and interjections. Their functions include replacing nouns, showing relationships, joining words or clauses, and expressing sudden feeling.",
      ],
      examples: [
        {
          title: "Example A: Label each word in the sentence",
          problem: "The tall girl quickly solved the difficult problem.",
          steps: [
            "The — article (a type of determiner).",
            "tall — adjective describing the girl.",
            "girl — noun naming a person.",
            "quickly — adverb describing how she solved.",
            "solved — verb expressing the action.",
            "the — article (a type of determiner).",
            "difficult — adjective describing the problem.",
            "problem — noun naming a thing or issue.",
          ],
          answer:
            "The (article), tall (adjective), girl (noun), quickly (adverb), solved (verb), the (article), difficult (adjective), problem (noun).",
        },
        {
          title: "Example B: The word “light” in three sentences",
          problem: "The word “light” can do different jobs in a sentence.",
          steps: [
            "Noun: The light is bright. “Light” names a thing.",
            "Adjective: She carried a light bag. “Light” describes the noun “bag.”",
            "Verb: Please light the candle. “Light” expresses the action.",
          ],
          answer:
            "“Light” is a noun, adjective, or verb depending on its function in the sentence.",
        },
      ],
      keyPoints: [
        "A noun names a person, place, thing, or idea.",
        "A verb expresses an action, occurrence, or state of being.",
        "An adjective describes a noun or pronoun.",
        "An adverb modifies a verb, adjective, or another adverb.",
      ],
      summary:
        "Parts of speech identify the jobs words perform in sentences. Use the word's function in context to distinguish nouns, verbs, adjectives, adverbs, and the other four parts of speech.",
      questions: [
        {
          question: "Which word is a noun in “The river flows quietly”?",
          options: ["The", "river", "flows", "quietly"],
          correctIndex: 1,
          explanation:
            "A noun names a person, place, thing, or idea; “river” names a thing.",
        },
        {
          question: "Which word is the verb in “Amira opened the window”?",
          options: ["Amira", "opened", "the", "window"],
          correctIndex: 1,
          explanation:
            "A verb expresses an action, occurrence, or state of being; “opened” expresses the action.",
        },
        {
          question: "Which word is an adjective in “We saw a narrow path”?",
          options: ["We", "saw", "narrow", "path"],
          correctIndex: 2,
          explanation:
            "An adjective describes or limits a noun; “narrow” describes the noun “path.”",
        },
        {
          question: "Which word is an adverb in “The baby slept peacefully”?",
          options: ["baby", "slept", "peacefully", "The"],
          correctIndex: 2,
          explanation:
            "An adverb can modify a verb by explaining how an action happens; “peacefully” explains how the baby slept.",
        },
        {
          question:
            "In “The soup smells delicious,” what part of speech is “delicious”?",
          options: ["Noun", "Verb", "Adjective", "Adverb"],
          correctIndex: 2,
          explanation:
            "An adjective describes a noun or pronoun; “delicious” describes the noun “soup” after the linking verb “smells.”",
        },
      ],
    },
  ],
};

// Find a level by its identifier, or return null when it does not exist.
window.StudyMate.data.getLevelById = function (id) {
  return window.StudyMate.data.levels.find(function (level) {
    return level.id === id;
  }) || null;
};

// Find a subject by its identifier, or return null when it does not exist.
window.StudyMate.data.getSubjectById = function (id) {
  return window.StudyMate.data.subjects.find(function (subject) {
    return subject.id === id;
  }) || null;
};

// Find a topic by its identifier, or return null when it does not exist.
window.StudyMate.data.getTopicById = function (id) {
  return window.StudyMate.data.topics.find(function (topic) {
    return topic.id === id;
  }) || null;
};

// Return the subjects that have topics for the requested level.
window.StudyMate.data.getSubjectsForLevel = function (levelId) {
  var subjectIds = new Set(
    window.StudyMate.data.topics
      .filter(function (topic) {
        return topic.levelId === levelId;
      })
      .map(function (topic) {
        return topic.subjectId;
      })
  );

  return window.StudyMate.data.subjects.filter(function (subject) {
    return subjectIds.has(subject.id);
  });
};

// Return matching topics ordered from Beginner through Advanced.
window.StudyMate.data.getTopics = function (subjectId, levelId) {
  var difficultyOrder = {
    Beginner: 0,
    Intermediate: 1,
    Advanced: 2,
  };

  return window.StudyMate.data.topics
    .filter(function (topic) {
      return topic.subjectId === subjectId && topic.levelId === levelId;
    })
    .slice()
    .sort(function (first, second) {
      return (
        (difficultyOrder[first.difficulty] ?? Number.MAX_SAFE_INTEGER) -
        (difficultyOrder[second.difficulty] ?? Number.MAX_SAFE_INTEGER)
      );
    });
};

// Count topics matching the subject and level filters.
window.StudyMate.data.getLessonCount = function (subjectId, levelId) {
  return window.StudyMate.data.getTopics(subjectId, levelId).length;
};

// Search matching topic titles and descriptions with optional filters.
window.StudyMate.data.searchTopics = function (query, levelId, subjectId) {
  var normalizedQuery = String(query || "").trim().toLowerCase();

  return window.StudyMate.data.topics.filter(function (topic) {
    var matchesLevel = levelId == null || topic.levelId === levelId;
    var matchesSubject = subjectId == null || topic.subjectId === subjectId;
    var matchesQuery =
      normalizedQuery.length === 0 ||
      topic.title.toLowerCase().includes(normalizedQuery) ||
      topic.description.toLowerCase().includes(normalizedQuery);

    return matchesLevel && matchesSubject && matchesQuery;
  });
};