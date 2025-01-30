let username = "";
let currentQuestionIndex = 0;
let score = 0;

const questions = [
    { question: "Which sport is Sachin Tendulkar associated with?", options: ["Football", "Cricket", "Hockey"], answer: 1 },
    { question: "Who is known as the Flying Sikh of India?", options: ["Milkha Singh", "P.T. Usha", "Saina Nehwal"], answer: 0 },
    { question: "Which Indian state is famous for hosting the Ranji Trophy?", options: ["Tamil Nadu", "Maharashtra", "All States"], answer: 2 },
    { question: "Who was the first Indian to win an individual Olympic gold medal?", options: ["Leander Paes", "Abhinav Bindra", "Karnam Malleswari"], answer: 1 },
    { question: "Which sport is associated with the Santosh Trophy?", options: ["Cricket", "Football", "Badminton"], answer: 1 },
    { question: "Which Indian city hosts the IPL team Chennai Super Kings?", options: ["Bangalore", "Mumbai", "Chennai"], answer: 2 },
    { question: "Who was the first Indian woman to win an Olympic medal?", options: ["Saina Nehwal", "Mary Kom", "Karnam Malleswari"], answer: 2 },
    { question: "Which Indian athlete won gold in javelin throw at the Tokyo 2020 Olympics?", options: ["Bajrang Punia", "Neeraj Chopra", "PV Sindhu"], answer: 1 },
    { question: "Which sport is associated with the Thomas Cup?", options: ["Badminton", "Tennis", "Hockey"], answer: 0 },
    { question: "Which Indian cricketer is known as 'The Wall'?", options: ["Virat Kohli", "Rahul Dravid", "MS Dhoni"], answer: 1 }
];


function startQuiz() {
    username = document.getElementById("username").value;
    if (username.trim() === "") {
        alert("Please enter your name.");
        return;
    }
    document.getElementById("user-form").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }
    const questionObj = questions[currentQuestionIndex];
    document.getElementById("question").innerText = questionObj.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    questionObj.options.forEach((option, index) => {
        optionsDiv.innerHTML += `<button onclick="checkAnswer(${index})">${option}</button>`;
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("result").innerText = `${username}, your final score is: ${score}/${questions.length}`;
}