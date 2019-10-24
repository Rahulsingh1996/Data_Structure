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
      question: "What is the special property of red-black trees and what root should always be?",
      answers: {
        a: "A color which is either red or black and root should always be black color only",
        b: "Height of the tree",
        c: "Pointer to next node",
        d: "A color which is either green or black",
      },
      correctAnswer: "a"
    },
    {
      question: "What are the operations that could be performed in O(log n) time complexity by red-black tree?",
      answers: {
        a: "Insertion, deletion, finding predecessor, successor",
        b: "Only insertion",
        c: "Only finding predecessor, successor",
        d: "For sorting",
      },
      correctAnswer: "a"
    },
    {
      question: "Which of the following is an application of Red-black trees and why",
      answers: {
        a: "used to store strings efficiently",
        b: "used to store integers efficiently",
        c: "can be used in process schedulers, maps, sets",
        d: "for efficient sorting"
      },
      correctAnswer: "c"
    }
    
  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})()