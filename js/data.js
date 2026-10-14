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