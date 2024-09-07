let quizData = [
  {
    question: "Full form of CPU",
    option: [
      "Central Processing Unit",
      "Computer Processing Unit",
      "Computer Principle Unit",
      "Control Processing Unit",
    ],
    currect: 0,
  },
  {
    question: "Who is the father of Computers?",
    option: [
      "James Gosling",
      "Charles Babbage",
      "Dennis Ritchie",
      "Bjarne Stroustrup",
    ],
    currect: 1,
  },
  {
    question: "Who is the father of HTML?",
    option: [
      "Tim Berners-Lee",
      "Charles Babbage",
      "Dennis Ritchie",
      "Bjarne Stroustrup",
    ],
    currect: 0,
  },
  {
    question: "Type of memory?",
    option: ["4 types", "3 types", "2 types", "None of these"],
    currect: 2,
  },
  {
    question: "Parts of CPU? ",
    option: ["MU ALU CU", "Memory RAM", "CU MU", "None of these"],
    currect: 0,
  },
  {
    question: "Div tag is a",
    option: ["Inline tag", "Block tag", "Both a and b", "None of these"],
    currect: 1,
  },
  {
    question: "Insert a pragraph to use",
    option: ["<p>", "<pre></pre>", "<p></p>", "<pragraph></pragraph>"],
    currect: 2,
  },
  {
    question: "Full form of Div?",
    option: ["Division", "Div", "Disition", "None of these"],
    currect: 0,
  },
  {
    question: "Type of ROM",
    option: [
      "EROM, EPROM",
      "EROPM, EPORM, EPPROM",
      "EPROM, EPPROM",
      "None of these",
    ],
    currect: 1,
  },
  {
    question: "1GB is Equal to",
    option: ["1000KB", "1240KB ", "1024KB ", "None of these"],
    currect: 2,
  },
  {
    question: "Binary number is",
    option: ["1, 2", "0, 1 ", "1, 2, 0 ", "All"],
    currect: 1,
  },
  {
    question: "Currect Hexadecimal value is",
    option: ["#12r34e", "#jj7876h ", "18b9a6 ", "#22ab34"],
    currect: 3,
  },
  {
    question: "RGB value of white color",
    option: ["#ccc", "#fff ", "#000 ", "#ffff"],
    currect: 1,
  },
  {
    question: "Char code of 'A'",
    option: ["58", "48", "65", "34"],
    currect: 2,
  },
  {
    question: "use to <p></p> tag",
    option: ["Pragraph", "Picture", "Print", "None of these"],
    currect: 0,
  },
  {
    question: "RGBA value of black color",
    option: [
      "RGBA(255, 255, 255, 0.5)",
      "RGB(255, 255, 255)",
      "RGBA(255, 255, 255, 0)",
      "RGBA(255, 255, 255, 1)",
    ],
    currect: 3,
  },
];

let submitBtn = document.getElementById("submit");
let answerEle = document.querySelectorAll(".answer");
let [questionEle, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    ".question, #option_1, #option_2, #option_3, #option_4"
  );

let quiz = document.querySelector(".quiz");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
  const { question, option } = quizData[currentQuiz];
  questionEle.textContent = `${currentQuiz + 1}. ${question}`;
  option.forEach(
    (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
  );
};

loadQuiz();

const getSelectedOption = () => {
  //? first method to find index
  // let ans_index;
  // answerEle.forEach((curOption, index) => {
  //   if(curOption.checked){
  //     ans_index = index;
  //   }
  // });
  // return ans_index;

  //? second method to find index

  let answerElement = Array.from(answerEle);
  return answerElement.findIndex((curEle) => curEle.checked);
};

const deselectedAnswer = () => {
  return answerEle.forEach((curEle) => (curEle.checked = false));
};

submitBtn.addEventListener("click", () => {
  let selectedOptionIndex = getSelectedOption();
  if (selectedOptionIndex === quizData[currentQuiz].currect) {
    score++;
  }
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    deselectedAnswer();
    loadQuiz();
  } else {
    quiz.innerHTML = `
    <div class="result">
      <h1>🏆 Your score: ${score}/${quizData.length} Currect Answer</h1>
      <p>Congratulations on completing the quiz! 😍</p>
      <button class="reloadBtn" onclick="location.reload()">Play again</button>
    </div>
    `;
  }
});
