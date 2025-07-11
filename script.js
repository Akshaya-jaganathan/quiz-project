let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;

const questions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "What is the boiling point of water?",
    options: ["100°C", "90°C", "120°C", "80°C"],
    answer: "100°C"
  },
  {
    question: "Which is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale"
  },
  {
    question: "Who wrote the national anthem of India?",
    options: ["Bankim Chandra", "Rabindranath Tagore", "Gandhiji", "Nehru"],
    answer: "Rabindranath Tagore"
  },
  {
    question: "Which gas do plants use for photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide"
  },
  {
    question: "What is the capital of Tamil Nadu?",
    options: ["Madurai", "Trichy", "Coimbatore", "Chennai"],
    answer: "Chennai"
  },
  {
    question: "How many sides does a hexagon have?",
    options: ["5", "6", "7", "8"],
    answer: "6"
  },
  {
    question: "What is the smallest prime number?",
    options: ["1", "2", "3", "0"],
    answer: "2"
  }
];

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 30;

  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => {
      if (option === q.answer) score++;
      nextQuestion();
    };
    optionsDiv.appendChild(btn);
  });

  document.getElementById("timer").innerText = `⏱ Time left: ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = `⏱ Time left: ${timeLeft}s`;
    if (timeLeft === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    localStorage.setItem("score", score);
    window.location.href = "result.html";
  }
}

window.onload = loadQuestion;
