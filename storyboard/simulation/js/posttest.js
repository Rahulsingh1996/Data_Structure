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
      question: "Why Red-black trees are preferred over hash tables though hash tables have constant time complexity?",
      answers: {
        a: "No they are not preferred.",
        b: "because of resizing issues of hash table and better ordering in redblack trees.",
        c: "because they can be implemented using trees.",
        d: "because they are balanced"
      },
      correctAnswer: "b"
    },
    {
      question: "How can you save memory when storing color information in Red-Black tree?",
      answers: {
        a: "using least significant bit of one of the pointers in the node for color information",
        b: " using another array with colors of each node",
        c: "storing color information in the node structure",
        d: "using negative and positive numbering"
      },
      correctAnswer: "a"
    },
    {
      question: "Find the RED/BLACK TREE, arry Insert 2, 1, 4, 5, 9, 3, 6, 7",
      answers: {
        
      },
      
    }
  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})()