// Define an array of questions and their answers
const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Jupiter"
    },
    {
      question: "What is the smallest country in the world?",
      choices: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
      answer: "Vatican City"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionContainer = document.getElementById("question");
  const choicesContainer = document.getElementById("choices");
  const submitButton = document.getElementById("submit");
  const resultContainer = document.getElementById("result");
  
  function loadQuestion() {
    questionContainer.textContent = questions[currentQuestion].question;
  
    choicesContainer.innerHTML = "";
  
    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
      const choice = document.createElement("button");
      choice.textContent = questions[currentQuestion].choices[i];
      choice.value = questions[currentQuestion].choices[i];
      choicesContainer.appendChild(choice);
    }
  }
  
  function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
  
    if (selectedAnswer === questions[currentQuestion].answer) {
      score++;
      resultContainer.textContent = "Correct!";
    } else {
      resultContainer.textContent = "Incorrect!";
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      // Display final score
      questionContainer.textContent = "Quiz Complete!";
      choicesContainer.innerHTML = `Your final score is ${score} out of ${questions.length}`;
      submitButton.style.display = "none";
    }
  }
  
  loadQuestion();
  
  submitButton.addEventListener("click", checkAnswer);
  