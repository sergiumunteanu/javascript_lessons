const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

const myQuestions = [
  {
    question: "What is the capital of France?",
    answers: {
      a: "London",
      b: "Paris",
      c: "Berlin"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the largest country in the world?",
    answers: {
      a: "USA",
      b: "China",
      c: "Russia"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the currency of Japan?",
    answers: {
      a: "Dollar",
      b: "Euro",
      c: "Yen"
    },
    correctAnswer: "c"
  }
];

function buildQuiz() {
  const output = [];

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (letter in currentQuestion.answers) {
      answers.push(
        `<label class="answer">
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
      );
    }

    output.push(
      `<div class="question">${currentQuestion.question}</div>
      <div class="answers">${answers.join('')}</div>`
    );
  });

  quizContainer.innerHTML = output.join('');
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.answers');

  let numCorrect = 0;

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      answerContainer.style.color = 'lightgreen';
    } else {
      answerContainer.style.color = 'red';
    }
  });

  alert(`You got ${numCorrect} out of ${myQuestions.length}`);
}

submitButton.addEventListener("click", () => {
    showResults();
});

buildQuiz()