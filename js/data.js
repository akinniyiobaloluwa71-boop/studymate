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
        {
          id: "math-sec-algebra-basics-q6",
          question: "Solve x + 9 = 14.",
          options: ["x = 5", "x = 23", "x = 9", "x = 4"],
          correctIndex: 0,
          explanation:
            "Subtract 9 from both sides, the inverse of adding 9: x = 14 - 9 = 5.",
        },
        {
          id: "math-sec-algebra-basics-q7",
          question: "Solve x - 6 = 3.",
          options: ["x = -3", "x = 9", "x = 3", "x = 6"],
          correctIndex: 1,
          explanation:
            "Add 6 to both sides, the inverse of subtracting 6: x = 3 + 6 = 9.",
        },
        {
          id: "math-sec-algebra-basics-q8",
          question: "Solve 5x = 35.",
          options: ["x = 175", "x = 30", "x = 7", "x = 5"],
          correctIndex: 2,
          explanation:
            "Divide both sides by 5, the inverse of multiplying by 5: x = 35 / 5 = 7.",
        },
        {
          id: "math-sec-algebra-basics-q9",
          question: "Solve x/4 = 3.",
          options: ["x = 3", "x = 8", "x = 16", "x = 12"],
          correctIndex: 3,
          explanation:
            "Multiply both sides by 4, the inverse of dividing by 4: x = 3 * 4 = 12.",
        },
        {
          id: "math-sec-algebra-basics-q10",
          question: "Solve 2x + 5 = 17.",
          options: ["x = 6", "x = 11", "x = 12", "x = 22"],
          correctIndex: 0,
          explanation:
            "Subtract 5 from both sides to get 2x = 12, then divide by 2, the inverse of multiplying by 2: x = 6.",
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
        {
          id: "math-sec-fractions-basics-q6",
          question: "Add 1/5 + 3/5.",
          options: ["4/5", "4/10", "3/5", "1/5"],
          correctIndex: 0,
          explanation:
            "The denominators are the same, so add the numerators and keep the denominator: 1/5 + 3/5 = 4/5.",
        },
        {
          id: "math-sec-fractions-basics-q7",
          question: "Find the LCD of 1/6 and 1/4.",
          options: ["10", "12", "24", "2"],
          correctIndex: 1,
          explanation:
            "The least common multiple of 6 and 4 is 12, so the least common denominator is 12.",
        },
        {
          id: "math-sec-fractions-basics-q8",
          question: "Subtract 3/4 - 1/4 and simplify the result.",
          options: ["1/2", "2/8", "4/4", "1/4"],
          correctIndex: 0,
          explanation:
            "Keep the denominator and subtract the numerators: 3/4 - 1/4 = 2/4. Divide numerator and denominator by 2 to get 1/2.",
        },
        {
          id: "math-sec-fractions-basics-q9",
          question: "Add 1/3 + 1/6.",
          options: ["2/9", "1/2", "3/9", "7/6"],
          correctIndex: 1,
          explanation:
            "The LCD is 6. Rewrite 1/3 as 2/6, then 2/6 + 1/6 = 3/6 = 1/2.",
        },
        {
          id: "math-sec-fractions-basics-q10",
          question:
            "A recipe needs 2/3 cup of flour for one batch and 1/3 cup for another. How much flour is needed in total?",
          options: ["2/3 cup", "3/6 cup", "1 1/3 cups", "1 cup"],
          correctIndex: 3,
          explanation:
            "The denominators are the same, so add the numerators: 2/3 + 1/3 = 3/3 = 1 cup.",
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
        {
          id: "eng-sec-parts-of-speech-q6",
          question: "Identify the adverb in “She spoke softly.”",
          options: ["She", "spoke", "softly", "none"],
          correctIndex: 2,
          explanation:
            "An adverb modifies a verb and can tell how an action happens; “softly” describes how she spoke.",
        },
        {
          id: "eng-sec-parts-of-speech-q7",
          question: "Identify the pronoun in “They went to the market.”",
          options: ["went", "market", "They", "to"],
          correctIndex: 2,
          explanation:
            "A pronoun takes the place of a noun; “They” is the pronoun acting as the sentence's subject.",
        },
        {
          id: "eng-sec-parts-of-speech-q8",
          question: "Identify the preposition in “The book is on the table.”",
          options: ["book", "is", "on", "table"],
          correctIndex: 2,
          explanation:
            "A preposition shows a relationship between a noun or pronoun and another word; “on” relates the book to the table.",
        },
        {
          id: "eng-sec-parts-of-speech-q9",
          question:
            "Identify the conjunction in “I wanted tea but she wanted coffee.”",
          options: ["wanted", "tea", "she", "but"],
          correctIndex: 3,
          explanation:
            "A conjunction joins words, phrases, or clauses; “but” joins two contrasting clauses.",
        },
        {
          id: "eng-sec-parts-of-speech-q10",
          question: "Which word is a verb in “The children laughed loudly”?",
          options: ["children", "laughed", "loudly", "The"],
          correctIndex: 1,
          explanation:
            "A verb expresses an action or state; “laughed” names the action performed by the children.",
        },
      ],
    },
    {
      id: "math-poly-quadratic-equations",
      subjectId: "mathematics",
      levelId: "polytechnic",
      title: "Solving Quadratic Equations by Factorisation",
      description: "Learn to solve ax² + bx + c = 0 by finding factors.",
      difficulty: "Intermediate",
      estimatedTime: "12 min",
      objectives: [
        "Recognise a quadratic equation as an expression with a squared variable term.",
        "Factorise a quadratic expression into two linear factors.",
        "Use the zero-product principle to find both roots of the equation.",
      ],
      explanation: [
        "A quadratic equation is an equation in which the highest power of the variable is 2. Its general form is ax² + bx + c = 0, where a, b, and c are numbers and a is not zero.",
        "The standard form of a quadratic equation is written in descending powers of x. This makes it easier to recognise the squared term, the linear term, and the constant term.",
        "Factorisation works by rewriting the quadratic expression as the product of two binomials. For example, x² + 5x + 6 becomes (x + 2)(x + 3), because 2 and 3 multiply to 6 and add to 5.",
        "Once the equation is written as a product of factors, the zero-product principle states that if ab = 0, then a = 0 or b = 0. This is why a quadratic equation usually has two solutions.",
      ],
      examples: [
        {
          title: "Example A: Solve x² + 5x + 6 = 0",
          problem: "x² + 5x + 6 = 0",
          steps: [
            "Find two numbers whose product is 6 and whose sum is 5. The numbers are 2 and 3.",
            "Rewrite the middle term: x² + 2x + 3x + 6 = 0.",
            "Group the terms: x(x + 2) + 3(x + 2) = 0.",
            "Factorise the common bracket: (x + 2)(x + 3) = 0.",
            "Set each factor equal to zero: x + 2 = 0 or x + 3 = 0.",
            "Subtract 2 from both sides: x = -2.",
            "Subtract 3 from both sides: x = -3.",
            "Check: (-2)² + 5(-2) + 6 = 4 - 10 + 6 = 0. Correct.",
            "Check: (-3)² + 5(-3) + 6 = 9 - 15 + 6 = 0. Correct.",
          ],
          answer: "x = -2 or x = -3",
        },
        {
          title: "Example B: Solve x² - 7x + 12 = 0",
          problem: "x² - 7x + 12 = 0",
          steps: [
            "Find two numbers whose product is 12 and whose sum is -7. The numbers are -3 and -4.",
            "Rewrite the middle term: x² - 3x - 4x + 12 = 0.",
            "Group the terms: x(x - 3) - 4(x - 3) = 0.",
            "Factorise the common bracket: (x - 3)(x - 4) = 0.",
            "Set each factor equal to zero: x - 3 = 0 or x - 4 = 0.",
            "Add 3 to both sides: x = 3.",
            "Add 4 to both sides: x = 4.",
            "Check: 3² - 7(3) + 12 = 9 - 21 + 12 = 0. Correct.",
            "Check: 4² - 7(4) + 12 = 16 - 28 + 12 = 0. Correct.",
          ],
          answer: "x = 3 or x = 4",
        },
      ],
      keyPoints: [
        "A quadratic equation contains a squared variable term.",
        "Factorisation rewrites a quadratic as the product of two binomials.",
        "Set each factor equal to zero to find the solutions.",
        "Always verify each root by substitution into the original equation.",
      ],
      summary:
        "Quadratic equations are solved by factorising into two linear factors and applying the zero-product principle. Each solution should be checked by substitution so that you can confirm it satisfies the original equation.",
      questions: [
        {
          question: "Which of these is a quadratic equation?",
          options: ["x + 4 = 0", "x² + 5x + 6 = 0", "2x³ - 1 = 0", "x = 7"],
          correctIndex: 1,
          explanation:
            "A quadratic equation has a squared variable term as its highest power, so x² + 5x + 6 = 0 is the correct choice.",
        },
        {
          question: "Factorise x² + 5x + 6.",
          options: [
            "(x + 1)(x + 6)",
            "(x + 2)(x + 3)",
            "(x - 2)(x - 3)",
            "(x + 2)(x + 4)",
          ],
          correctIndex: 1,
          explanation:
            "The two numbers must multiply to 6 and add to 5, so 2 and 3 are the correct pair: (x + 2)(x + 3).",
        },
        {
          question: "Factorise x² - 5x - 6.",
          options: [
            "(x - 6)(x + 1)",
            "(x - 3)(x - 2)",
            "(x + 6)(x - 1)",
            "(x - 5)(x + 1)",
          ],
          correctIndex: 0,
          explanation:
            "The product is -6 and the sum is -5, so the factors are -6 and 1: (x - 6)(x + 1).",
        },
        {
          question: "Solve x² + x - 6 = 0.",
          options: [
            "x = -3 or x = 2",
            "x = 3 or x = -2",
            "x = -6 or x = 1",
            "x = 3 only",
          ],
          correctIndex: 0,
          explanation:
            "Factorise as (x + 3)(x - 2) = 0, then set each factor to zero to get x = -3 or x = 2.",
        },
        {
          question: "Which check correctly verifies that x = -2 is a root of x² + 5x + 6 = 0?",
          options: [
            "(-2)² + 5(-2) + 6 = 4 - 10 + 6 = 0",
            "(-2)² + 5(-2) + 6 = 4 + 10 + 6 = 20",
            "(-2)² + 5(-2) + 6 = -4 - 10 + 6 = -8",
            "(-2)² + 5(-2) + 6 = 4 - 5 + 6 = 5",
          ],
          correctIndex: 0,
          explanation:
            "Substituting x = -2 gives 4 - 10 + 6 = 0, so the equation is satisfied and -2 is a valid root.",
        },
        {
          id: "math-poly-quadratic-equations-q6",
          question: "Solve x² - 9 = 0.",
          options: [
            "x = 3 or x = -3",
            "x = 9 or x = -9",
            "x = 3 only",
            "x = -3 only",
          ],
          correctIndex: 0,
          explanation:
            "Factor the difference of squares as (x - 3)(x + 3) = 0. Setting each factor to zero gives x = 3 or x = -3; both make x² - 9 equal zero.",
        },
        {
          id: "math-poly-quadratic-equations-q7",
          question: "Solve x² + 7x + 12 = 0.",
          options: [
            "x = 3 or x = 4",
            "x = -3 or x = -4",
            "x = -3 or x = 4",
            "x = 3 or x = -4",
          ],
          correctIndex: 1,
          explanation:
            "Factorise as (x + 3)(x + 4) = 0. The zero-product method gives x = -3 or x = -4; substitution gives 9 - 21 + 12 = 0 and 16 - 28 + 12 = 0.",
        },
        {
          id: "math-poly-quadratic-equations-q8",
          question: "Factor x² - x - 6.",
          options: [
            "(x - 6)(x + 1)",
            "(x + 3)(x - 2)",
            "(x - 3)(x + 2)",
            "(x - 2)(x - 3)",
          ],
          correctIndex: 2,
          explanation:
            "Choose factors whose product is -6 and whose sum is -1: -3 and 2. Expanding (x - 3)(x + 2) gives x² + 2x - 3x - 6 = x² - x - 6.",
        },
        {
          id: "math-poly-quadratic-equations-q9",
          question: "What are the roots of (x - 5)(x + 1) = 0?",
          options: [
            "x = -5 or x = 1",
            "x = 5 or x = -1",
            "x = 5 or x = 1",
            "x = -5 or x = -1",
          ],
          correctIndex: 1,
          explanation:
            "By the zero-product principle, x - 5 = 0 or x + 1 = 0, so the roots are x = 5 and x = -1.",
        },
        {
          id: "math-poly-quadratic-equations-q10",
          question: "Solve x² - 4x - 5 = 0.",
          options: [
            "x = 5 or x = -1",
            "x = -5 or x = 1",
            "x = 5 only",
            "x = -1 or x = 4",
          ],
          correctIndex: 0,
          explanation:
            "Factorise as (x - 5)(x + 1) = 0, giving x = 5 or x = -1. Substitution gives 25 - 20 - 5 = 0 and 1 + 4 - 5 = 0.",
        },
      ],
    },
    {
      id: "eng-poly-technical-report",
      subjectId: "english",
      levelId: "polytechnic",
      title: "Writing a Technical Report",
      description: "Structure, tone and language for engineering and science reports.",
      difficulty: "Intermediate",
      estimatedTime: "10 min",
      objectives: [
        "Identify the main sections of a technical report and their purposes.",
        "Use formal, objective language suited to academic and engineering writing.",
        "Write a clear conclusion that summarises findings and recommendations.",
      ],
      explanation: [
        "A technical report is a formal document that presents information, procedures, findings, and recommendations in a clear structure. It is used in engineering, science, and applied studies to communicate results accurately.",
        "A standard technical report usually includes a title, abstract, introduction, methodology, results, discussion, and conclusion. Each section has a specific purpose and helps the reader follow the report logically.",
        "Objective language is based on facts and evidence rather than personal opinion. Subjective language includes personal judgement, emotion, or vague phrases such as ‘I think’ or ‘it seems good’.",
        "Common mistakes in technical writing include using informal wording, mixing opinion with evidence, and including unnecessary detail. Reports are more reliable when they are precise, concise, and easy to follow.",
        "Passive voice is often preferred in technical writing because it emphasises the process or result rather than the person performing the action. This creates a more formal and objective tone, especially in scientific and engineering contexts.",
      ],
      examples: [
        {
          title: "Example A: Rewrite informal language in a formal style",
          problem: "Informal: 'I think the machine broke because the pressure was too high and the filter got blocked.'",
          steps: [
            "Replace personal opinion with objective wording: 'The machine failed due to excessive pressure.'",
            "Add the second cause clearly: 'The machine failed due to excessive pressure and a blocked filter.'",
            "Use formal academic tone: 'The machine failed due to excessive pressure and a blocked filter during operation.'",
          ],
          answer:
            "The machine failed due to excessive pressure and a blocked filter during operation.",
        },
        {
          title: "Example B: Conclusion paragraph with labelled functions",
          problem: "Short conclusion paragraph",
          steps: [
            "Sentence 1 — Summarise the findings: 'The test results showed a 15% improvement in efficiency after the component update.'",
            "Sentence 2 — Recommend action: 'It is recommended that the revised component be adopted in the next production cycle.'",
            "Sentence 3 — State implication: 'This change should improve reliability and reduce maintenance costs over time.'",
          ],
          answer:
            "The paragraph summarises the results, recommends a course of action, and states the likely practical outcome.",
        },
      ],
      keyPoints: [
        "A technical report has a clear structure with defined sections.",
        "Formal writing uses objective, precise, and evidence-based language.",
        "Passive voice is often used to keep the writing neutral and professional.",
        "A conclusion should summarise findings and suggest the next step.",
      ],
      summary:
        "A technical report communicates findings in a structured, formal way. Good reports use clear headings, objective language, and a conclusion that links evidence to practical recommendations.",
      questions: [
        {
          question: "Where in a technical report would you place the procedure used to collect the data?",
          options: ["Abstract", "Methodology", "Introduction", "Conclusion"],
          correctIndex: 1,
          explanation:
            "The methodology section explains how the investigation was carried out, so it is the correct place for procedures and methods.",
        },
        {
          question: "Which sentence uses the most formal style?",
          options: [
            "I think the results look good.",
            "The results suggest improved efficiency.",
            "The thing seemed okay to me.",
            "It was not bad at all.",
          ],
          correctIndex: 1,
          explanation:
            "Formal writing avoids personal opinion and uses precise, objective wording: 'The results suggest improved efficiency.'",
        },
        {
          question: "Which sentence is written in passive voice?",
          options: [
            "The engineer analysed the sample.",
            "The sample was analysed by the engineer.",
            "The engineer checks the sample.",
            "The sample shows a pattern.",
          ],
          correctIndex: 1,
          explanation:
            "Passive voice focuses on the action performed on the subject: 'The sample was analysed by the engineer.'",
        },
        {
          question: "What is the main purpose of an abstract in a technical report?",
          options: [
            "To provide a full discussion of the findings.",
            "To give a brief overview of the aim, method, and key results.",
            "To describe the bibliography only.",
            "To express the writer's personal opinion.",
          ],
          correctIndex: 1,
          explanation:
            "An abstract is a short summary that gives the reader a clear overview of the report's purpose, method, and main findings.",
        },
        {
          question: "Which sentence contains subjective language?",
          options: [
            "The system operated efficiently under load.",
            "The results were consistent across three trials.",
            "The design was clearly superior to the previous model.",
            "The equipment was tested at 500°C.",
          ],
          correctIndex: 2,
          explanation:
            "'Clearly superior' is subjective because it expresses judgement rather than an objective fact supported by evidence.",
        },
        {
          id: "eng-poly-technical-report-q6",
          question: "Which section summarises the whole report?",
          options: ["Methodology", "Abstract", "Appendix", "References"],
          correctIndex: 1,
          explanation:
            "An abstract briefly summarises the report's purpose, method, main findings, and conclusions for readers.",
        },
        {
          id: "eng-poly-technical-report-q7",
          question: "Which section describes how data was collected?",
          options: ["Introduction", "Results", "Methodology", "Conclusion"],
          correctIndex: 2,
          explanation:
            "The methodology section explains the procedures and methods used to collect and analyse data.",
        },
        {
          id: "eng-poly-technical-report-q8",
          question: "Which sentence is objective rather than subjective?",
          options: [
            "I think the results are good.",
            "We were surprised by the outcome.",
            "Obviously the machine works better.",
            "The test results showed a 12% increase.",
          ],
          correctIndex: 3,
          explanation:
            "Objective report writing presents specific, measurable findings without personal opinions or unsupported judgements.",
        },
        {
          id: "eng-poly-technical-report-q9",
          question:
            "Which is the passive voice version of 'The engineer tested the motor'?",
          options: [
            "The engineer was tested by the motor.",
            "The motor tested the engineer.",
            "The motor was tested by the engineer.",
            "The engineer is testing the motor.",
          ],
          correctIndex: 2,
          explanation:
            "In passive voice, the object becomes the subject and takes a form of 'be' plus the past participle: 'The motor was tested'.",
        },
        {
          id: "eng-poly-technical-report-q10",
          question: "Where should recommendations appear in a technical report?",
          options: [
            "Only in the title",
            "In the conclusion or a dedicated recommendations section near the end",
            "In the list of references",
            "Before the report's findings are presented",
          ],
          correctIndex: 1,
          explanation:
            "Recommendations should follow from the findings and are placed in the conclusion or a clearly labelled section near the report's end.",
        },
      ],
    },
    {
      id: "math-uni-differentiation-basics",
      subjectId: "mathematics",
      levelId: "university",
      title: "Introduction to Differentiation",
      description:
        "Find the derivative of simple polynomial functions using the power rule.",
      difficulty: "Intermediate",
      estimatedTime: "12 min",
      objectives: [
        "Understand that a derivative measures the rate of change of a function.",
        "Apply the power rule to differentiate a power of x.",
        "Differentiate polynomial sums by working term by term.",
      ],
      explanation: [
        "Differentiation finds the derivative of a function, which measures how quickly its output changes as its input changes. Geometrically, the derivative at a point is the slope of the curve at that point.",
        "The derivative can be written as dy/dx when y depends on x, or as f'(x) when the function is named f. Both notations describe the rate of change with respect to x.",
        "The power rule states that d/dx(x^n) = n·x^(n-1). Multiply by the original exponent, then reduce that exponent by one.",
        "For a polynomial sum, differentiate each term separately and then combine the results. A constant has derivative zero because its value does not change as x changes.",
      ],
      examples: [
        {
          title: "Example A: Differentiate f(x) = x³",
          problem: "f(x) = x³",
          steps: [
            "Apply the power rule: d/dx(x^n) = n·x^(n-1)",
            "Here n = 3, so d/dx(x³) = 3·x^(3-1)",
            "Simplify: f'(x) = 3x²",
          ],
          answer: "f'(x) = 3x²",
        },
        {
          title: "Example B: Differentiate f(x) = 4x² + 3x - 5",
          problem: "f(x) = 4x² + 3x - 5",
          steps: [
            "Differentiate each term separately",
            "d/dx(4x²) = 4·2·x^(2-1) = 8x",
            "d/dx(3x) = 3",
            "d/dx(-5) = 0",
            "Combine: f'(x) = 8x + 3",
          ],
          answer: "f'(x) = 8x + 3",
        },
      ],
      keyPoints: [
        "A derivative measures a function's rate of change and gives the curve's slope at a point.",
        "dy/dx and f'(x) are notations for a derivative with respect to x.",
        "The power rule multiplies by the exponent and reduces the exponent by one.",
        "Differentiate polynomial terms separately; the derivative of a constant is zero.",
      ],
      summary:
        "Differentiation measures how a function changes, and its derivative gives the slope of its graph. Apply the power rule to each polynomial term separately, remembering that constants differentiate to zero.",
      questions: [
        {
          question: "What does the derivative of a function represent?",
          options: [
            "Its rate of change or the slope of its graph",
            "Its largest output value",
            "The area under its graph",
            "Its value when x equals zero",
          ],
          correctIndex: 0,
          explanation:
            "A derivative represents the instantaneous rate of change of a function and geometrically gives the slope of its graph at a point.",
        },
        {
          question: "Using the power rule, what is the derivative of x⁵?",
          options: ["x⁴", "5x⁴", "5x⁵", "4x⁵"],
          correctIndex: 1,
          explanation:
            "The power rule multiplies by the exponent and reduces the exponent by one: d/dx(x⁵) = 5x⁴.",
        },
        {
          question: "What is the derivative of 3x⁴?",
          options: ["3x³", "12x⁴", "12x³", "4x³"],
          correctIndex: 2,
          explanation:
            "Keep the coefficient 3, multiply it by the exponent 4, and reduce the power to 3: d/dx(3x⁴) = 12x³.",
        },
        {
          question: "Differentiate 2x³ + 5x.",
          options: ["6x² + 5", "6x³ + 5", "2x² + 5x", "6x² + 5x"],
          correctIndex: 0,
          explanation:
            "Differentiate each term: d/dx(2x³) = 6x² and d/dx(5x) = 5, so the derivative is 6x² + 5.",
        },
        {
          question: "What is the derivative of the constant function f(x) = 9?",
          options: ["9", "x", "1", "0"],
          correctIndex: 3,
          explanation:
            "A constant does not change as x changes, so its rate of change and derivative are zero.",
        },
        {
          id: "math-uni-differentiation-basics-q6",
          question: "Differentiate f(x) = x⁶.",
          options: ["6x⁵", "x⁵", "6x⁶", "5x⁶"],
          correctIndex: 0,
          explanation:
            "By the power rule, multiply by the exponent and reduce it by one: 6 × x^(6-1) = 6x⁵.",
        },
        {
          id: "math-uni-differentiation-basics-q7",
          question: "Differentiate f(x) = 5x³.",
          options: ["5x²", "15x²", "15x³", "3x²"],
          correctIndex: 1,
          explanation:
            "Keep the coefficient and multiply by the exponent, then reduce the power: 5 × 3 × x^(3-1) = 15x².",
        },
        {
          id: "math-uni-differentiation-basics-q8",
          question: "Differentiate f(x) = x² + 4x.",
          options: ["2x + 4", "x + 4", "2x + 4x", "x² + 4"],
          correctIndex: 0,
          explanation:
            "Differentiate term by term with the power rule: d/dx(x²) = 2x and d/dx(4x) = 4, giving 2x + 4.",
        },
        {
          id: "math-uni-differentiation-basics-q9",
          question: "Differentiate f(x) = 7x.",
          options: ["7x", "x", "0", "7"],
          correctIndex: 3,
          explanation:
            "By the power rule, 7 × x^(1-1) = 7 × x⁰ = 7 × 1 = 7.",
        },
        {
          id: "math-uni-differentiation-basics-q10",
          question: "What is the derivative of the constant function f(x) = 12?",
          options: ["12", "1", "x", "0"],
          correctIndex: 3,
          explanation:
            "A constant does not change as x changes, so its rate of change and derivative are zero.",
        },
      ],
    },
    {
      id: "eng-uni-academic-essay",
      subjectId: "english",
      levelId: "university",
      title: "Structuring an Academic Essay",
      description: "Plan, organise and write a clear argumentative essay.",
      difficulty: "Intermediate",
      estimatedTime: "11 min",
      objectives: [
        "Write a thesis statement that presents a specific, arguable claim.",
        "Structure body paragraphs with a topic sentence, evidence, analysis, and a link.",
        "Write a conclusion that synthesises the argument without introducing a new one.",
      ],
      explanation: [
        "An academic essay develops a focused answer to a question or problem. It uses a logical argument and relevant evidence to help readers understand and assess the writer's position.",
        "The thesis statement presents the essay's central claim and often indicates the direction of the argument. A strong thesis is specific and arguable rather than a vague statement of a topic.",
        "The introduction gives readers context, establishes the essay's focus, and leads to the thesis. It should orient the reader without trying to present every detail of the argument.",
        "Each body paragraph should develop one main point. A clear structure uses a topic sentence, relevant evidence, analysis explaining how the evidence supports the point, and a link to the thesis or next idea.",
        "The conclusion brings the argument together by restating its significance and synthesising the main points. It should not introduce a new major claim or simply repeat the introduction word for word.",
      ],
      examples: [
        {
          title: "Example A: Strengthen a thesis statement",
          problem: "Compare a weak thesis with a strong thesis.",
          steps: [
            "Weak: Social media is bad for students.",
            "Why it's weak: vague, no argument, no direction",
            "Strong: Social media use among university students correlates with reduced deep-reading ability because it rewards short-form attention.",
            "Why it's strong: specific, arguable, gives a reason",
          ],
          answer:
            "A strong thesis is specific, arguable and gives a reason.",
        },
        {
          title: "Example B: Identify the parts of a body paragraph",
          problem: "A paragraph about campus recycling",
          steps: [
            "Topic sentence: Campus recycling programmes can reduce the amount of waste sent to landfill.",
            "Evidence: The university's annual facilities report recorded a 20% increase in recycled material after labelled bins were installed.",
            "Analysis: This increase suggests that accessible, clearly marked bins can help students sort waste correctly.",
            "Link: Expanding the programme across campus would therefore support the university's waste-reduction goal.",
          ],
          answer:
            "The paragraph presents a claim, supports it with evidence, explains the evidence, and links the point to the wider argument.",
        },
      ],
      keyPoints: [
        "An academic essay develops a focused argument supported by evidence.",
        "A strong thesis is specific, arguable, and gives the essay direction.",
        "Body paragraphs connect a topic sentence to evidence through analysis.",
        "A conclusion synthesises the argument without introducing a new major claim.",
      ],
      summary:
        "A clear academic essay builds a focused argument around a specific thesis. Organise each body paragraph around one point supported by evidence and analysis, then use the conclusion to bring the argument together.",
      questions: [
        {
          question: "What is the main purpose of a thesis statement?",
          options: [
            "To present the essay's central, arguable claim and guide its direction",
            "To list every source used in the essay",
            "To provide a detailed summary of every paragraph",
            "To introduce an unrelated topic",
          ],
          correctIndex: 0,
          explanation:
            "A thesis statement presents the essay's central claim and guides the direction of the argument.",
        },
        {
          question: "Which is the stronger thesis statement?",
          options: [
            "Social media is bad for students.",
            "Many people use social media.",
            "Universities should teach digital-literacy skills because evaluating online sources improves students' research.",
            "This essay is about university libraries.",
          ],
          correctIndex: 2,
          explanation:
            "A strong thesis makes a specific, arguable claim and gives a reason; option C does both.",
        },
        {
          question: "Which sentence is a topic sentence for a paragraph about public transport?",
          options: [
            "The city survey collected responses from 600 commuters.",
            "Reliable public transport can reduce traffic congestion in the city.",
            "For example, the number of buses increased last year.",
            "This evidence supports investment in transit.",
          ],
          correctIndex: 1,
          explanation:
            "A topic sentence states the paragraph's main point, which the remaining sentences then develop and support.",
        },
        {
          question: "In a body paragraph, which sentence is evidence rather than analysis?",
          options: [
            "This result shows why regular feedback matters.",
            "Therefore, the policy should be expanded.",
            "A 2024 survey found that 72% of participants completed the training.",
            "This pattern may reflect improved access.",
          ],
          correctIndex: 2,
          explanation:
            "Evidence is verifiable information that supports a point; a survey result is evidence, while the other choices interpret or apply it.",
        },
        {
          question: "What should a conclusion do?",
          options: [
            "Introduce a new major claim that was not argued in the essay.",
            "Repeat the introduction word for word.",
            "Add unrelated evidence without explaining its relevance.",
            "Synthesise the main argument and its significance without adding a new major claim.",
          ],
          correctIndex: 3,
          explanation:
            "A conclusion synthesises the essay's argument and explains its significance; it should not introduce a new major claim.",
        },
        {
          id: "eng-uni-academic-essay-q6",
          question: "Where does the thesis statement normally appear?",
          options: [
            "At the end of the introduction",
            "In the reference list",
            "Only in the final sentence of the conclusion",
            "In the title of every body paragraph",
          ],
          correctIndex: 0,
          explanation:
            "A thesis normally appears near the end of the introduction, where it establishes the essay's central argument before the body develops it.",
        },
        {
          id: "eng-uni-academic-essay-q7",
          question: "What is the job of a topic sentence?",
          options: [
            "To list every source in the essay",
            "To state the main idea of a paragraph",
            "To introduce an unrelated argument",
            "To repeat the conclusion word for word",
          ],
          correctIndex: 1,
          explanation:
            "A topic sentence states the paragraph's main idea, which the remaining sentences explain and support.",
        },
        {
          id: "eng-uni-academic-essay-q8",
          question: "Which of these is the strongest thesis statement?",
          options: [
            "Studying abroad is good.",
            "I think studying abroad is nice.",
            "People study abroad.",
            "University students should study abroad because it builds independence, language skills, and cross-cultural awareness.",
          ],
          correctIndex: 3,
          explanation:
            "A strong thesis makes a specific, arguable claim and gives reasons that indicate how the essay will develop its argument.",
        },
        {
          id: "eng-uni-academic-essay-q9",
          question: "What should a conclusion NOT do?",
          options: [
            "Bring the main argument together",
            "Explain the significance of the discussion",
            "Introduce a completely new argument",
            "Synthesise the key points",
          ],
          correctIndex: 2,
          explanation:
            "A conclusion should synthesise the argument and its significance, not introduce a new argument that the essay has not developed.",
        },
        {
          id: "eng-uni-academic-essay-q10",
          question: "What is the difference between evidence and analysis?",
          options: [
            "Evidence is the fact or example; analysis explains how it supports the argument.",
            "Evidence is the thesis; analysis is the title.",
            "Evidence gives an opinion; analysis repeats it unchanged.",
            "There is no difference between evidence and analysis.",
          ],
          correctIndex: 0,
          explanation:
            "Evidence provides a fact or example, while analysis interprets it and explains its connection to the argument.",
        },
      ],
    },
    {
      id: "math-poly-simultaneous-equations",
      subjectId: "mathematics",
      levelId: "polytechnic",
      title: "Solving Simultaneous Linear Equations",
      description:
        "Solve two equations with two unknowns by elimination and substitution.",
      difficulty: "Intermediate",
      estimatedTime: "12 min",
      objectives: [
        "Recognise a pair of simultaneous linear equations with two unknowns.",
        "Solve simultaneous equations by eliminating one unknown.",
        "Solve simultaneous equations by expressing one unknown in terms of the other.",
      ],
      explanation: [
        "Simultaneous equations are two or more equations that share unknowns and must be true at the same time. Their solution is a set of values that satisfies every equation in the pair.",
        "Two unknowns usually require two independent equations because one equation alone can describe many possible pairs of values. The second equation provides the extra information needed to identify a unique pair.",
        "In the elimination method, arrange the equations so that one unknown has equal or opposite coefficients. Add or subtract the equations to remove that unknown, solve for the remaining one, and substitute back to find the other.",
        "In the substitution method, rearrange one equation to make one unknown the subject. Substitute that expression into the other equation, solve the resulting equation, and substitute back to find the second unknown.",
      ],
      examples: [
        {
          title: "Example A: Solve by elimination",
          problem: "Solve x + y = 10 and x - y = 4.",
          steps: [
            "Write both equations: x + y = 10 ... (1), x - y = 4 ... (2)",
            "Add equation (1) and equation (2): (x + y) + (x - y) = 10 + 4",
            "Simplify: 2x = 14",
            "Divide both sides by 2: x = 7",
            "Substitute x = 7 into (1): 7 + y = 10",
            "Subtract 7 from both sides: y = 3",
            "Check in (2): 7 - 3 = 4 ✓",
          ],
          answer: "x = 7, y = 3",
        },
        {
          title: "Example B: Solve by substitution",
          problem: "Solve 2x + y = 11 and x + y = 7.",
          steps: [
            "From equation (2), make y the subject: y = 7 - x",
            "Substitute into equation (1): 2x + (7 - x) = 11",
            "Simplify: x + 7 = 11",
            "Subtract 7 from both sides: x = 4",
            "Substitute x = 4 into y = 7 - x: y = 7 - 4 = 3",
            "Check in (1): 2(4) + 3 = 8 + 3 = 11 ✓",
            "Check in (2): 4 + 3 = 7 ✓",
          ],
          answer: "x = 4, y = 3",
        },
      ],
      keyPoints: [
        "A solution must satisfy both equations at the same time.",
        "Use elimination to remove one unknown by adding or subtracting equations.",
        "Use substitution by making one unknown the subject and replacing it in the other equation.",
        "Check the ordered pair in both original equations.",
      ],
      summary:
        "Simultaneous linear equations use two equations to find two unknowns. Elimination removes one unknown, while substitution replaces one unknown with an equivalent expression; check the result in both equations.",
      questions: [
        {
          question: "Solve x + y = 8 and x - y = 2.",
          options: [
            "x = 5, y = 3",
            "x = 3, y = 5",
            "x = 6, y = 2",
            "x = 4, y = 4",
          ],
          correctIndex: 0,
          explanation:
            "Adding the equations gives 2x = 10, so x = 5. Substituting into x + y = 8 gives y = 3; 5 + 3 = 8 and 5 - 3 = 2.",
        },
        {
          question: "Solve 3x + y = 13 and x + y = 7.",
          options: [
            "x = 4, y = 3",
            "x = 3, y = 4",
            "x = 2, y = 5",
            "x = 3, y = 7",
          ],
          correctIndex: 1,
          explanation:
            "Subtracting the second equation from the first gives 2x = 6, so x = 3. Then x + y = 7 gives y = 4; 3(3) + 4 = 13 and 3 + 4 = 7.",
        },
        {
          question:
            "What is the first step in elimination when the coefficients of one variable are the same?",
          options: [
            "Subtract the equations to eliminate that variable.",
            "Add the equations to double that variable.",
            "Solve only one equation and ignore the other.",
            "Swap the names of the two variables.",
          ],
          correctIndex: 0,
          explanation:
            "Subtracting equations with matching coefficients cancels that variable because its terms have equal values.",
        },
        {
          question: "Solve 2x + 3y = 12 and 2x + y = 8.",
          options: [
            "x = 2, y = 3",
            "x = 3, y = 2",
            "x = 4, y = 0",
            "x = 2, y = 4",
          ],
          correctIndex: 1,
          explanation:
            "Subtract the second equation from the first: 2y = 4, so y = 2. Then 2x + 2 = 8 gives x = 3; both equations are satisfied.",
        },
        {
          question:
            "Which pair satisfies both x + 2y = 7 and 2x - y = 4?",
          options: [
            "x = 2, y = 3",
            "x = 4, y = 1",
            "x = 3, y = 2",
            "x = 2, y = 2",
          ],
          correctIndex: 2,
          explanation:
            "For x = 3 and y = 2, x + 2y = 3 + 4 = 7 and 2x - y = 6 - 2 = 4, so the pair satisfies both equations.",
        },
        {
          id: "math-poly-simultaneous-equations-q6",
          question: "Solve x + y = 12 and x - y = 4.",
          options: [
            "x = 8, y = 4",
            "x = 4, y = 8",
            "x = 10, y = 2",
            "x = 6, y = 6",
          ],
          correctIndex: 0,
          explanation:
            "Add the equations to eliminate y: 2x = 16, so x = 8. Then x + y = 12 gives y = 4; 8 + 4 = 12 and 8 - 4 = 4.",
        },
        {
          id: "math-poly-simultaneous-equations-q7",
          question: "Solve 2x + y = 14 and x + y = 9.",
          options: [
            "x = 4, y = 5",
            "x = 5, y = 4",
            "x = 7, y = 2",
            "x = 9, y = 5",
          ],
          correctIndex: 1,
          explanation:
            "Subtract the second equation from the first to get x = 5. Substitute into x + y = 9 to get y = 4; 2(5) + 4 = 14 and 5 + 4 = 9.",
        },
        {
          id: "math-poly-simultaneous-equations-q8",
          question: "Solve 3x + 2y = 16 given that x = 2.",
          options: ["y = 2", "y = 4", "y = 5", "y = 8"],
          correctIndex: 2,
          explanation:
            "Substitute x = 2: 3(2) + 2y = 16, so 6 + 2y = 16, 2y = 10, and y = 5. Checking gives 6 + 10 = 16.",
        },
        {
          id: "math-poly-simultaneous-equations-q9",
          question: "Solve x + y = 5 and x - y = 1.",
          options: [
            "x = 2, y = 3",
            "x = 4, y = 1",
            "x = 3, y = 2",
            "x = 5, y = 1",
          ],
          correctIndex: 2,
          explanation:
            "Add the equations to eliminate y: 2x = 6, so x = 3. Then x + y = 5 gives y = 2; 3 + 2 = 5 and 3 - 2 = 1.",
        },
        {
          id: "math-poly-simultaneous-equations-q10",
          question:
            "What does it mean if two simultaneous linear equations have no solution?",
          options: [
            "The lines are identical and have infinitely many intersections.",
            "The lines meet at exactly one point.",
            "The lines are perpendicular and intersect at the origin.",
            "The lines are parallel and never intersect.",
          ],
          correctIndex: 3,
          explanation:
            "Two distinct parallel lines never meet, so their equations have no shared ordered pair that satisfies both.",
        },
      ],
    },
    {
      id: "eng-poly-formal-letter",
      subjectId: "english",
      levelId: "polytechnic",
      title: "Writing a Formal Letter",
      description:
        "Structure, tone, and language conventions for official letters.",
      difficulty: "Beginner",
      estimatedTime: "9 min",
      objectives: [
        "Identify the standard sections of a formal letter and their order.",
        "Use a polite, professional tone suited to an official reader.",
        "Write a clear purpose statement near the beginning of a letter.",
      ],
      explanation: [
        "A formal letter is a carefully organised written message sent to an individual or organisation in an official or professional context. Its structure helps the reader understand who is writing and why.",
        "Use a formal letter to make an official request, submit an application, raise a concern, provide information, or communicate with an institution such as a polytechnic.",
        "The standard sections are the sender's address, date, recipient's address, salutation, subject line, body, closing, and signature. The subject line follows the salutation and comes before the body.",
        "Use complete sentences, clear wording, respectful language, and a professional tone. Address the recipient appropriately, state the purpose directly, and keep each paragraph focused.",
        "Avoid slang, contractions, vague requests, spelling errors, missing addresses or dates, and an unclear subject. Before sending, check that the letter includes all sections and that the requested action is easy to identify.",
      ],
      examples: [
        {
          title: "Example A: Label a formal letter",
          problem:
            "A student writes to the polytechnic registrar to request an academic transcript.",
          steps: [
            "Sender's address: the student's postal address at the top of the letter.",
            "Date: the day the letter is written, below the sender's address.",
            "Recipient's address: the registrar's title and the polytechnic's address.",
            "Salutation: Dear Sir/Madam, when the registrar's name is unknown.",
            "Subject line: Request for an Academic Transcript.",
            "Body: state the transcript request, identify the student, and provide any necessary details.",
            "Closing: Yours faithfully, when the recipient's name is unknown.",
            "Signature: the student's signature and printed name.",
          ],
          answer:
            "The correct order is sender's address, date, recipient's address, salutation, subject line, body, closing, and signature.",
        },
        {
          title: "Example B: Rewrite a request formally",
          problem: "Rewrite informal transcript requests in a formal tone.",
          steps: [
            "Informal: Hi sir, I want my transcript urgently.",
            "Formal: I am writing to request a copy of my academic transcript.",
            "Informal: Please send it fast.",
            "Formal: I would be grateful if you could process this request at your earliest convenience.",
          ],
          answer:
            "Formal letters use complete sentences, polite phrasing, and avoid contractions and slang.",
        },
      ],
      keyPoints: [
        "Follow the standard order of addresses, date, salutation, subject, body, closing, and signature.",
        "Use a clear subject line after the salutation and before the body.",
        "State the reason for writing clearly near the start of the body.",
        "Choose polite, complete language and proofread before sending.",
      ],
      summary:
        "A formal letter uses a recognised structure and respectful, precise language. Place a clear subject line before the body, state the purpose early, and check the details before sending.",
      questions: [
        {
          question:
            "Which salutation is appropriate when the recipient's name is unknown?",
          options: [
            "Hey there,",
            "Dear Sir/Madam,",
            "Hi friend,",
            "To whom it may concern, hey,",
          ],
          correctIndex: 1,
          explanation:
            "Dear Sir/Madam is a conventional respectful salutation when the recipient's name is unknown.",
        },
        {
          question:
            "Which closing is correct when the recipient's name is unknown?",
          options: [
            "See you soon,",
            "Cheers,",
            "Yours faithfully,",
            "Later,",
          ],
          correctIndex: 2,
          explanation:
            "Yours faithfully is the standard formal closing when a letter begins with Dear Sir/Madam.",
        },
        {
          question: "Where does the subject line appear in a formal letter?",
          options: [
            "After the salutation and before the body",
            "Before the sender's address",
            "After the signature",
            "In place of the closing",
          ],
          correctIndex: 0,
          explanation:
            "The subject line follows the salutation and precedes the body, so the reader can see the topic before reading the details.",
        },
        {
          question: "Which sentence uses a formal tone?",
          options: [
            "Hey, just wondering if you can help.",
            "Yo, I need that transcript now.",
            "Can you sort this out for me?",
            "I am writing to enquire about obtaining my transcript.",
          ],
          correctIndex: 3,
          explanation:
            "I am writing to enquire uses a complete, polite sentence appropriate for official correspondence; Hey, just wondering is informal.",
        },
        {
          question:
            "What should the first paragraph of a formal letter do?",
          options: [
            "Tell an unrelated story before making the request.",
            "State the purpose of the letter clearly.",
            "Repeat the sender's address.",
            "Thank the recipient for an action that has not happened.",
          ],
          correctIndex: 1,
          explanation:
            "The opening paragraph should identify the reason for writing so the recipient understands the purpose immediately.",
        },
        {
          id: "eng-poly-formal-letter-q6",
          question: "Where does the sender's address go in a formal letter?",
          options: [
            "At the top of the letter, before the date",
            "After the signature",
            "In the middle of the body",
            "After the closing",
          ],
          correctIndex: 0,
          explanation:
            "The sender's address is placed at the top of the letter, with the date below it.",
        },
        {
          id: "eng-poly-formal-letter-q7",
          question:
            "Which greeting is correct when the recipient's name is known?",
          options: [
            "Dear Sir/Madam,",
            "Dear Mr Adeyemi,",
            "Hey Adeyemi,",
            "To whom it may concern,",
          ],
          correctIndex: 1,
          explanation:
            "When the recipient's name is known, address them by their appropriate title and surname, such as 'Dear Mr Adeyemi,'.",
        },
        {
          id: "eng-poly-formal-letter-q8",
          question:
            "Which closing pairs correctly with 'Dear Sir/Madam'?",
          options: [
            "Yours sincerely",
            "Best buddies",
            "Yours faithfully",
            "See you",
          ],
          correctIndex: 2,
          explanation:
            "Use 'Yours faithfully' when the salutation does not name the recipient, as in 'Dear Sir/Madam'.",
        },
        {
          id: "eng-poly-formal-letter-q9",
          question: "Which is NOT appropriate in a formal letter?",
          options: [
            "A clear subject line",
            "Complete sentences",
            "Polite phrasing",
            "Contractions like 'I'm' and 'don't'",
          ],
          correctIndex: 3,
          explanation:
            "Formal letters generally avoid contractions; use 'I am' and 'do not' for a more professional tone.",
        },
        {
          id: "eng-poly-formal-letter-q10",
          question: "What is the purpose of the subject line?",
          options: [
            "To state briefly what the letter is about",
            "To provide the sender's full address",
            "To replace the salutation",
            "To list every detail from the body",
          ],
          correctIndex: 0,
          explanation:
            "A subject line briefly identifies the letter's topic so the reader knows its purpose before reading the body.",
        },
      ],
    },
    {
      id: "math-uni-integration-basics",
      subjectId: "mathematics",
      levelId: "university",
      title: "Introduction to Integration",
      description:
        "Find the indefinite integral of polynomial functions using the power rule for integration.",
      difficulty: "Intermediate",
      estimatedTime: "12 min",
      objectives: [
        "Understand integration as the reverse of differentiation.",
        "Apply the power rule for integration to a power of x.",
        "Find indefinite integrals of sums of polynomial terms.",
      ],
      explanation: [
        "Integration is the reverse process of differentiation: it helps us find a function when its derivative is known.",
        "The notation ∫f(x)dx means to find an antiderivative of f(x) with respect to x. The expression f(x) is the integrand, and dx identifies the variable of integration.",
        "For a power of x, the power rule is ∫x^n dx = x^(n+1)/(n+1) + C, provided n ≠ -1. Increase the exponent by one, then divide by the new exponent.",
        "The constant of integration C is always added because differentiating any constant gives zero. Thus, all functions that differ only by a constant have the same derivative.",
      ],
      examples: [
        {
          title: "Example A: Integrate x³",
          problem: "Find ∫x³ dx.",
          steps: [
            "Apply the power rule: ∫x^n dx = x^(n+1)/(n+1) + C",
            "Here n = 3, so ∫x³ dx = x^(3+1)/(3+1) + C",
            "Simplify: ∫x³ dx = x⁴/4 + C",
          ],
          answer: "x⁴/4 + C",
        },
        {
          title: "Example B: Integrate 6x² + 4x - 5",
          problem: "Find ∫(6x² + 4x - 5) dx.",
          steps: [
            "Integrate each term separately",
            "∫6x² dx = 6 · x³/3 + C₁ = 2x³ + C₁",
            "∫4x dx = 4 · x²/2 + C₂ = 2x² + C₂",
            "∫-5 dx = -5x + C₃",
            "Combine and merge all constants into one C: 2x³ + 2x² - 5x + C",
          ],
          answer: "2x³ + 2x² - 5x + C",
        },
      ],
      keyPoints: [
        "Integration reverses differentiation.",
        "In ∫f(x)dx, f(x) is integrated with respect to x.",
        "For x^n, increase the exponent by one and divide by the new exponent, when n ≠ -1.",
        "Add +C because the derivative of a constant is zero.",
      ],
      summary:
        "Indefinite integration finds antiderivatives and reverses differentiation. Apply the power rule term by term to a polynomial and include the constant of integration C.",
      questions: [
        {
          question: "What is the main meaning of integration?",
          options: [
            "The reverse of differentiation; it can also describe signed area under a curve.",
            "The process of finding the slope of a curve at one point.",
            "The process of multiplying every term by x.",
            "A method for finding only the roots of a polynomial.",
          ],
          correctIndex: 0,
          explanation:
            "Integration reverses differentiation to find antiderivatives; definite integrals can also represent signed area under a curve.",
        },
        {
          question: "Find ∫x⁴ dx.",
          options: [
            "x⁵/5 + C",
            "x⁵ + C",
            "x⁴/4 + C",
            "x⁵/4 + C",
          ],
          correctIndex: 0,
          explanation:
            "Increase the exponent from 4 to 5 and divide by 5: ∫x⁴ dx = x⁵/5 + C.",
        },
        {
          question: "Find ∫3x² dx.",
          options: [
            "x³ + C",
            "3x³ + C",
            "x² + C",
            "x³/3 + C",
          ],
          correctIndex: 0,
          explanation:
            "The power rule gives 3 · x³/3 = x³, so the integral is x³ + C.",
        },
        {
          question: "Find ∫(2x + 1) dx.",
          options: [
            "x² + x + C",
            "2x² + x + C",
            "x² + 1 + C",
            "x²/2 + x + C",
          ],
          correctIndex: 0,
          explanation:
            "Integrate each term: ∫2x dx = x² and ∫1 dx = x, giving x² + x + C.",
        },
        {
          question: "What is the constant of integration C?",
          options: [
            "An unknown constant added because the derivative of any constant is zero.",
            "The coefficient of x in every polynomial.",
            "A value that must always equal one.",
            "The exponent used in the power rule.",
          ],
          correctIndex: 0,
          explanation:
            "Any constant disappears when differentiated, so an indefinite integral includes an arbitrary constant C.",
        },
        {
          id: "math-uni-integration-basics-q6",
          question: "Find ∫x² dx.",
          options: ["x²/2 + C", "x³/3 + C", "2x + C", "x³ + C"],
          correctIndex: 1,
          explanation:
            "By the power rule, raise the exponent from 2 to 3 and divide by 3: ∫x² dx = x³/3 + C.",
        },
        {
          id: "math-uni-integration-basics-q7",
          question: "Find ∫4x dx.",
          options: ["4x² + C", "2x + C", "2x² + C", "x² + C"],
          correctIndex: 2,
          explanation:
            "Apply the power rule and keep the coefficient: 4 × x²/2 = 2x², so the integral is 2x² + C.",
        },
        {
          id: "math-uni-integration-basics-q8",
          question: "Find ∫6 dx.",
          options: ["6 + C", "6x + C", "x⁶ + C", "6x² + C"],
          correctIndex: 1,
          explanation:
            "The integral of a constant is the constant multiplied by x: ∫6 dx = 6x + C.",
        },
        {
          id: "math-uni-integration-basics-q9",
          question: "Find ∫(2x + 3) dx.",
          options: ["2x² + 3 + C", "x² + 3 + C", "x² + 3x + C", "2x + 3x + C"],
          correctIndex: 2,
          explanation:
            "Integrate term by term: ∫2x dx = x² and ∫3 dx = 3x, giving x² + 3x + C.",
        },
        {
          id: "math-uni-integration-basics-q10",
          question: "Why must we add +C to an indefinite integral?",
          options: [
            "Because every integral must end with the letter C.",
            "Because any constant differentiates to zero, so its original value cannot be determined from the derivative alone.",
            "Because C is the coefficient of x in every function.",
            "Because adding C changes the derivative to one.",
          ],
          correctIndex: 1,
          explanation:
            "Differentiating any constant gives zero, so functions that differ by a constant have the same derivative; +C represents all of them.",
        },
      ],
    },
    {
      id: "eng-uni-critical-reading",
      subjectId: "english",
      levelId: "university",
      title: "Critical Reading and Analysis",
      description:
        "Read academic texts actively, identify arguments, and evaluate evidence.",
      difficulty: "Intermediate",
      estimatedTime: "11 min",
      objectives: [
        "Identify the main argument an author is defending.",
        "Distinguish claims from the evidence offered to support them.",
        "Evaluate whether evidence is reliable, relevant, and strong enough for a claim.",
      ],
      explanation: [
        "Critical reading is an active way of reading in which you examine how a text builds its meaning and argument. You ask questions about the author's purpose, reasoning, and support rather than accepting every statement at face value.",
        "Reading for information focuses on understanding what a text says. Reading for argument also looks at what the author wants readers to believe, how the points connect, and whether the support is convincing.",
        "To identify the thesis, look for the central position the author develops across the text. It may appear near the end of an introduction, but its location and wording can vary.",
        "A claim is an assertion or point that needs support. Evidence is the material used to support a claim, such as a verifiable fact, a statistic, a research finding, or a relevant example.",
        "Judge evidence by checking its source, specificity, reliability, and relevance to the claim. Evidence is not strong merely because it sounds confident; it must actually support the point being made.",
      ],
      examples: [
        {
          title: "Example A: Identify claim and evidence",
          problem:
            "Read this sample paragraph about online learning: Online learning can make higher education more accessible to students who live far from campus. A 2023 survey of 1,200 university students found that 68% of respondents used online courses while living more than 50 km from their campus.",
          steps: [
            "Claim sentence: Online learning can make higher education more accessible to students who live far from campus.",
            "Evidence sentence: A 2023 survey of 1,200 university students found that 68% of respondents used online courses while living more than 50 km from their campus.",
          ],
          answer:
            "The claim is the author's assertion; the evidence is the fact, statistic, or example offered to support it.",
        },
        {
          title: "Example B: Evaluate evidence",
          problem:
            "Compare the statement 'Everyone knows online learning improves results' with this sample: 'A 2023 study of 1,200 students found a higher course completion rate among students who used weekly online quizzes.'",
          steps: [
            "'Everyone knows' is weak evidence because it gives no source, data, or way to verify the statement.",
            "The study example is stronger because it names a source type, gives a sample size, and reports a specific finding.",
            "Check whether the study is reliable and whether course completion is relevant to the claim about improved results.",
          ],
          answer:
            "Strong evidence is specific, sourced, and relevant to the claim.",
        },
      ],
      keyPoints: [
        "Critical reading examines an author's reasoning as well as the information presented.",
        "A thesis is the central argument the author develops and defends.",
        "Claims make assertions; evidence provides support for those assertions.",
        "Strong evidence is relevant, specific, and supported by a credible source.",
      ],
      summary:
        "Critical reading means identifying an author's argument and examining how it is supported. Distinguish claims from evidence, then judge whether the evidence is credible and relevant to the claim.",
      questions: [
        {
          question: "What is a thesis statement?",
          options: [
            "The main argument the author is defending.",
            "A list of every example in the text.",
            "A fact that needs no explanation.",
            "The title of the text repeated as a sentence.",
          ],
          correctIndex: 0,
          explanation:
            "A thesis statement expresses the central argument or position that the author develops and supports.",
        },
        {
          question: "Which sentence is evidence rather than a claim?",
          options: [
            "Online courses are the best way to learn.",
            "A university report recorded a 12% rise in course completion after weekly online tutorials began.",
            "Students should use online learning more often.",
            "Online learning is clearly useful for everyone.",
          ],
          correctIndex: 1,
          explanation:
            "Evidence can be checked against a source; a report with a specific measured change is evidence, while the other choices assert opinions or conclusions.",
        },
        {
          question: "What makes evidence weak?",
          options: [
            "It is vague, unsourced, or irrelevant to the claim.",
            "It comes from a relevant, clearly identified study.",
            "It gives a specific result that can be checked.",
            "It directly supports the point being discussed.",
          ],
          correctIndex: 0,
          explanation:
            "Evidence is weak when readers cannot verify it, when it lacks detail, or when it does not support the claim at issue.",
        },
        {
          question: "What does it mean to read critically?",
          options: [
            "To memorise every sentence without considering its purpose.",
            "To read only the opening and closing paragraphs.",
            "To evaluate the argument and evidence, not just understand the text.",
            "To reject every argument before reading its support.",
          ],
          correctIndex: 2,
          explanation:
            "Critical reading involves understanding a text and evaluating the reasoning and evidence used to support its argument.",
        },
        {
          question:
            "When an author uses the word 'clearly' without support, what should a critical reader do?",
          options: [
            "Accept the claim because the author sounds confident.",
            "Ask what evidence supports the claim.",
            "Treat the word 'clearly' as evidence by itself.",
            "Ignore the rest of the argument.",
          ],
          correctIndex: 1,
          explanation:
            "Confident wording is not evidence; a critical reader asks for relevant support before accepting the claim.",
        },
        {
          id: "eng-uni-critical-reading-q6",
          question: "What is the difference between a claim and evidence?",
          options: [
            "A claim is what the author asserts; evidence is the support they offer.",
            "A claim is a source list; evidence is the title.",
            "A claim is always a statistic; evidence is always an opinion.",
            "There is no difference between a claim and evidence.",
          ],
          correctIndex: 0,
          explanation:
            "A claim is an assertion that needs support; evidence is the fact, example, or source material offered to support it.",
        },
        {
          id: "eng-uni-critical-reading-q7",
          question: "Which is a strong piece of evidence?",
          options: [
            "Everyone knows the policy works.",
            "It is obvious that the policy works.",
            "A 2024 study of 2,000 participants found a measurable improvement.",
            "Many people believe the policy works.",
          ],
          correctIndex: 2,
          explanation:
            "Specific evidence linked to an identifiable study and sample is more verifiable than vague statements such as 'everyone knows'.",
        },
        {
          id: "eng-uni-critical-reading-q8",
          question: "Why is source credibility important?",
          options: [
            "It makes every claim in a text automatically true.",
            "The strength of an argument depends on the reliability of its evidence.",
            "It removes the need to check whether evidence is relevant.",
            "It tells the reader to ignore the author's reasoning.",
          ],
          correctIndex: 1,
          explanation:
            "Credible sources make evidence more reliable; an argument's support is only as dependable as the evidence it uses.",
        },
        {
          id: "eng-uni-critical-reading-q9",
          question:
            "What should a critical reader do when they see 'clearly' without support?",
          options: [
            "Accept the statement because the author sounds certain.",
            "Treat the word 'clearly' as evidence.",
            "Ask what evidence supports the claim.",
            "Skip the rest of the argument.",
          ],
          correctIndex: 2,
          explanation:
            "Confident wording is not evidence; a critical reader asks for relevant support before accepting the claim.",
        },
        {
          id: "eng-uni-critical-reading-q10",
          question:
            "What is the difference between reading for information and reading critically?",
          options: [
            "Reading for information takes in the content; critical reading also evaluates the argument and evidence.",
            "Reading critically means memorising every sentence.",
            "Reading for information evaluates sources, while critical reading ignores evidence.",
            "There is no difference between the two approaches.",
          ],
          correctIndex: 0,
          explanation:
            "Reading for information focuses on understanding content, while critical reading also assesses the author's argument and supporting evidence.",
        },
      ],
    },
    {
      id: "math-poly-statistics-basics",
      subjectId: "mathematics",
      levelId: "polytechnic",
      title: "Mean, Median and Mode",
      description:
        "Calculate the three measures of central tendency for a data set.",
      difficulty: "Beginner",
      estimatedTime: "9 min",
      objectives: [
        "Define the mean, median, and mode of a data set.",
        "Calculate each measure of central tendency for a small data set.",
        "Choose which measure is most useful for a particular data set.",
      ],
      explanation: [
        "Measures of central tendency describe a typical or central value in a data set. The mean, median, and mode each describe the centre in a different way.",
        "To calculate the mean, add all the values and divide their sum by the number of values. The mean uses every value, so an unusually large or small value can affect it strongly.",
        "To find the median, first arrange the values in order. For an odd number of values, the median is the single middle value; for an even number, it is the average of the two middle values.",
        "The mode is the value that appears most often; a data set may have one mode, more than one mode, or no mode. The mean is useful for balanced numerical data, the median is useful when outliers may distort the mean, and the mode identifies the most common value.",
      ],
      examples: [
        {
          title: "Example A: Find the mean, median and mode",
          problem: "Find the mean, median and mode of 4, 7, 9, 3, 7.",
          steps: [
            "Mean: add all values. 4 + 7 + 9 + 3 + 7 = 30",
            "Divide by the number of values: 30 ÷ 5 = 6",
            "Mean = 6",
            "Median: sort the values. 3, 4, 7, 7, 9",
            "The middle value (3rd of 5) is 7. Median = 7",
            "Mode: 7 appears twice, all others once. Mode = 7",
          ],
          answer: "Mean = 6, Median = 7, Mode = 7",
        },
        {
          title: "Example B: Find the mean, median and mode",
          problem: "Find the mean, median and mode of 12, 15, 11, 14, 13, 20.",
          steps: [
            "Mean: 12 + 15 + 11 + 14 + 13 + 20 = 85",
            "85 ÷ 6 = 14.17 (to 2 decimal places)",
            "Median: sort. 11, 12, 13, 14, 15, 20",
            "With 6 values there is no single middle; take the average of the 3rd and 4th values: (13 + 14) ÷ 2 = 13.5",
            "Mode: every value appears once, so there is no mode.",
          ],
          answer: "Mean ≈ 14.17, Median = 13.5, Mode = none",
        },
      ],
      keyPoints: [
        "Mean = sum of the values divided by the number of values.",
        "Sort the values before finding the median.",
        "For an even number of values, average the two middle values.",
        "The mode is the most frequent value; a data set can have no mode.",
      ],
      summary:
        "The mean, median, and mode describe the centre of a data set in different ways. Calculate the mean from the sum, find the median from sorted values, and identify the most frequent value for the mode.",
      questions: [
        {
          question: "Find the mean of 2, 4, 6, 8, 10.",
          options: ["30", "5", "6", "8"],
          correctIndex: 2,
          explanation:
            "Add the values to get 30, then divide by the 5 values: 30 ÷ 5 = 6.",
        },
        {
          question: "Find the median of 5, 1, 9, 3, 7.",
          options: ["3", "5", "7", "9"],
          correctIndex: 1,
          explanation:
            "Sort the values as 1, 3, 5, 7, 9. The middle (third) value is 5.",
        },
        {
          question: "Find the mode of 3, 3, 5, 7, 8.",
          options: ["3", "5", "7", "8"],
          correctIndex: 0,
          explanation:
            "The mode is the value that occurs most often; 3 appears twice while each other value appears once.",
        },
        {
          question: "A student's scores are 60, 70, 80, 90. What is the mean?",
          options: ["70", "72.5", "75", "80"],
          correctIndex: 2,
          explanation:
            "Add the scores to get 300 and divide by 4: 300 ÷ 4 = 75.",
        },
        {
          question: "Which measure is most affected by an extreme outlier?",
          options: ["The mode", "The median", "The range only", "The mean"],
          correctIndex: 3,
          explanation:
            "The mean uses every value in its sum, so an extreme value can pull it toward the outlier more than it usually affects the median or mode.",
        },
      ],
    },
    {
      id: "eng-poly-comprehension",
      subjectId: "english",
      levelId: "polytechnic",
      title: "Reading Comprehension Strategies",
      description:
        "Read passages efficiently and answer questions accurately.",
      difficulty: "Beginner",
      estimatedTime: "10 min",
      objectives: [
        "Use skimming and scanning techniques to read efficiently.",
        "Distinguish a passage's main idea from its supporting details.",
        "Answer inference questions by locating and interpreting evidence accurately.",
      ],
      explanation: [
        "In an exam, reading comprehension means understanding a passage well enough to answer questions about its meaning, details, and implications. Answers should be grounded in what the passage says.",
        "Skimming means reading quickly to understand the general subject and main idea. Notice the title, opening and closing sentences, and repeated ideas rather than pausing over every detail.",
        "Scanning means moving quickly through a passage to find a particular fact, name, date, number, or phrase. Keep the question in mind and look for matching words or related information.",
        "The main idea is the central point the writer wants to communicate. Supporting details explain, illustrate, or provide evidence for that point, but are narrower than the main idea.",
        "For an inference question, first locate the relevant part of the passage. Combine its evidence with careful reasoning; do not choose an answer based only on outside assumptions.",
      ],
      examples: [
        {
          title: "Example A: Use skimming and scanning",
          problem:
            "Read this passage: The water cycle moves water between Earth's surface and the atmosphere. Sunlight warms water in lakes and oceans, causing some of it to evaporate into water vapour. At standard atmospheric pressure, liquid water boils at 100°C, though evaporation also occurs below that temperature.",
          steps: [
            "Skim for the main idea: the paragraph describes how water moves through part of the water cycle.",
            "Scan for the specific fact about boiling: look for the temperature and the condition stated in the passage.",
            "Answer from the passage: liquid water boils at 100°C under standard atmospheric pressure.",
          ],
          answer: "Skim for the main idea, scan for specific facts.",
        },
        {
          title: "Example B: Main idea and supporting details",
          problem:
            "Read this passage: Regular exercise supports overall health. A brisk walk can strengthen the heart, and scheduled activity can help people manage stress. These are examples of benefits that support the central point.",
          steps: [
            "Main idea: Regular exercise supports overall health.",
            "Supporting detail: A brisk walk can strengthen the heart.",
            "Supporting detail: Scheduled activity can help people manage stress.",
          ],
          answer:
            "The main idea is the writer's central point; supporting details are the facts, examples or reasons.",
        },
      ],
      keyPoints: [
        "Skim to understand the gist and main idea.",
        "Scan to locate a specific fact or detail.",
        "Separate the writer's central point from examples and supporting facts.",
        "For inferences, locate passage evidence before drawing a conclusion.",
      ],
      summary:
        "Use skimming to find a passage's gist and scanning to locate specific information. Identify the main idea separately from its supporting details, and base inferences on evidence in the passage.",
      questions: [
        {
          question: "What is skimming?",
          options: [
            "Reading quickly for the main idea",
            "Reading every word slowly and repeatedly",
            "Searching only for numbers",
            "Guessing the meaning without reading",
          ],
          correctIndex: 0,
          explanation:
            "Skimming is a quick read for the gist or main idea, not a search for every detail.",
        },
        {
          question: "What is scanning?",
          options: [
            "Reading quickly for a specific fact",
            "Writing a summary before reading",
            "Reading only the first sentence",
            "Finding the writer's opinion without evidence",
          ],
          correctIndex: 0,
          explanation:
            "Scanning means looking quickly through a passage for a particular fact or detail named in a question.",
        },
        {
          question:
            "What should you do first when answering an inference question?",
          options: [
            "Choose the answer that matches your personal experience.",
            "Find the part of the passage that contains the evidence.",
            "Ignore the passage and define every unfamiliar word.",
            "Select the longest answer option.",
          ],
          correctIndex: 1,
          explanation:
            "Begin by locating relevant passage evidence; use it to support the inference rather than relying on outside assumptions.",
        },
        {
          question:
            "Which sentence is a supporting detail rather than a main idea?",
          options: [
            "Regular exercise is important for health.",
            "There are many ways to maintain wellbeing.",
            "Studies show that walking 30 minutes a day lowers blood pressure.",
            "This passage explains why healthy habits matter.",
          ],
          correctIndex: 2,
          explanation:
            "A supporting detail gives a specific fact or example for a broader point; the study sentence supplies a particular piece of evidence.",
        },
        {
          question: "If a question asks 'What does the writer imply?', what type of question is it?",
          options: [
            "A spelling question",
            "A scanning question about an explicitly stated date",
            "A vocabulary definition question",
            "An inference question",
          ],
          correctIndex: 3,
          explanation:
            "To imply is to suggest something without stating it directly, so the reader must infer it from evidence in the passage.",
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