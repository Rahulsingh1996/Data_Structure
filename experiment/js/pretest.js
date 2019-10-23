(function() {
  function buildQuiz() {
   
    const output = [];

    
    myQuestions.forEach((currentQuestion, questionNumber) => {
     
      const answers = [];

      for (letter in currentQuestion.answers) {
    
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "Given that c&#x00B2 = a&#x00B2 + b&#x00B2 and a = 8, b = 15, what is the value of c?",
      answers: {
        a: "17",
        b: "23",
        c: "289",
        d: "529",
      },
      correctAnswer: "a"
    },
    {
      question: "PYTHAGOREAN THEOREM state that for any right angled tringle called that..........",
      answers: {
        a: "Hypertenuse",
        b: "Hypochondriac",
        c: "Hypotenuse",
        d: "Hyperactive",
      },
      correctAnswer: "c"
    },
    {
      question: "A triangle is said to satisfy the rule c&#x00B2 = a&#x00B2 + b&#x00B2 for which special triangle?",
      answers: {
        a: "Acute angled",
        b: "Right angled",
        c: "Obtuse angled",
        d: "None of these"
      },
      correctAnswer: "b"
    }
  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})()