const questions = [
  {
    question: "What does Ghunnah mean?",
    answers: [
      {
        text: "To Stretch",
        correct: "false",
      },
      {
        text: "To Bounce",
        correct: "false",
      },
      {
        text: "To Hide",
        correct: "false",
      },
      {
        text: "Sound from nasal cavity",
        correct: "true",
      },
    ],
  },
  {
    question: "What does Qalqalah mean?",
    answers: [
      {
        text: "To Stretch",
        correct: "false",
      },
      {
        text: "To Bounce",
        correct: "true",
      },
      {
        text: "To Hide",
        correct: "false",
      },
      {
        text: "Nasalisation",
        correct: "false",
      },
    ],
  },
  {
    question: "How many throat letters do we have?",
    answers: [
      {
        text: "7",
        correct: "false",
      },
      {
        text: "2",
        correct: "false",
      },
      {
        text: "5",
        correct: "false",
      },
      {
        text: "6",
        correct: "true",
      },
    ],
  },
  {
    question: "Which part of the throat does the letter ء come from?",
    answers: [
      {
        text: "Upper",
        correct: "false",
      },
      {
        text: "Lower",
        correct: "true",
      },
      {
        text: "Mouth",
        correct: "false",
      },
      {
        text: "Bottom",
        correct: "false",
      },
    ],
  },
  {
    question: "Do we bounce the letter ب ?",
    answers: [
      {
        text: "Yes",
        correct: "true",
      },
      {
        text: "No",
        correct: "false",
      },
    ],
  },
  {
    question: "What does Idhaar Halqi mean?",
    answers: [
      {
        text: "To Make Clear",
        correct: "true",
      },
      {
        text: "To Merge",
        correct: "false",
      },
      {
        text: "Ghunnah",
        correct: "false",
      },
      {
        text: "To Bounce",
        correct: "false",
      },
    ],
  },
  {
    question: "What is Idhaar Halqi applied to",
    answers: [
      {
        text: "Throat Letters",
        correct: "false",
      },
      {
        text: "Qalqalah",
        correct: "false",
      },
      {
        text: "Ikhfah",
        correct: "false",
      },
      {
        text: "Nooon Saakinah and Tanween",
        correct: "true",
      },
    ],
  },
  {
    question: "what is كفوا أحد an example of?",
    answers: [
      {
        text: "Idghaam",
        correct: "false",
      },
      {
        text: "Ikhfah",
        correct: "false",
      },
      {
        text: "Iqlaab",
        correct: "false",
      },
      {
        text: "Idhaar Halqi",
        correct: "true",
      },
    ],
  },
  {
    question: "Is من يعمل an example of Idhaar Halqi?",
    answers: [
      {
        text: "Yes",
        correct: "false",
      },
      {
        text: "No",
        correct: "true",
      },
    ],
  },
  {
    question: "What comes after a Noon saakinah or Tanween for a Idhaar rule?",
    answers: [
      {
        text: "ب",
        correct: "false",
      },
      {
        text: "Qalqalah Letters",
        correct: "false",
      },
      {
        text: "Any of the throat letters",
        correct: "true",
      },
      {
        text: "غ",
        correct: "false",
      },
    ],
  },
  {
    question: "How many heavy letters do we have?",
    answers: [
      {
        text: "2",
        correct: "false",
      },
      {
        text: "4",
        correct: "false",
      },
      {
        text: "7",
        correct: "true",
      },
      {
        text: "5",
        correct: "false",
      },
    ],
  },
  {
    question: "When is the letter ر heavy?",
    answers: [
      {
        text: "When it has a Sukoon",
        correct: "false",
      },
      {
        text: "When it has a Madd",
        correct: "false",
      },
      {
        text: "When it has a Kasrah",
        correct: "false",
      },
      {
        text: "When it has a Fat-hah and Dummah",
        correct: "true",
      },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;

  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true") {
        button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = 'block'
}



function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block'
}

function handleNextButton() {
currentQuestionIndex++;
if(currentQuestionIndex < questions.length) {
    showQuestion();
} else {
    showScore();
}
}

nextButton.addEventListener("click", () => {
if(currentQuestionIndex < questions.length) {
    handleNextButton();
} else {
    startQuiz()
}
});

startQuiz();
