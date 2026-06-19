// ===============================
// QUESTIONS DATABASE
// ===============================

const questions = [

    {
        category: "html",
        difficulty: "easy",
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },


    {
        category: "css",
        difficulty: "easy",
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Creative Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    },


    {
        category: "js",
        difficulty: "easy",
        question: "What is DOM?",
        options: [
            "Document Object Model",
            "Data Object Method",
            "Dynamic Output Method",
            "Document Output Method"
        ],
        answer: "Document Object Model"
    }

];



// ===============================
// QUIZ VARIABLES
// ===============================


let quizQuestions = [];

let currentQuestion = 0;

let score = 0;

let correctAnswers = 0;

let wrongAnswers = 0;

let timer;

let time = 15;
// ===============================
// SELECT HTML ELEMENTS
// ===============================


const startBtn =
document.getElementById("startBtn");


const nextBtn =
document.getElementById("nextBtn");


const questionText =
document.getElementById("question");


const optionsBox =
document.getElementById("options");


const quizBox =
document.getElementById("quizSection");


const resultBox =
document.getElementById("resultSection");


const timerText =
document.getElementById("timer");


const progressBar =
document.getElementById("progressFill");


const currentQuestionNumber =
document.getElementById("currentQuestion");


const totalQuestionNumber =
document.getElementById("totalQuestions");
startBtn.addEventListener(
    "click",
    startQuiz
);


function startQuiz(){

    let selectedCategory =
    document.getElementById("category").value;


    let selectedDifficulty =
    document.getElementById("difficulty").value;



    quizQuestions =
    questions.filter(function(question){


        let categoryMatch =
        selectedCategory === "all" ||
        question.category === selectedCategory;


        let difficultyMatch =
        question.difficulty === selectedDifficulty;


        return categoryMatch &&
        difficultyMatch;


    });



    if(quizQuestions.length === 0){

        alert("No Questions Found");

        return;

    }


    currentQuestion = 0;

    score = 0;

    correctAnswers = 0;

    wrongAnswers = 0;


    quizBox.style.display="block";

    resultBox.style.display="none";


    totalQuestionNumber.innerText =
    quizQuestions.length;


    showQuestion();

}
function showQuestion(){


    startTimer();


    let question =
    quizQuestions[currentQuestion];


    questionText.innerText =
    question.question;


    currentQuestionNumber.innerText =
    currentQuestion + 1;


    progressBar.style.width =
    (
        (currentQuestion /
        quizQuestions.length)
        *100
    )+"%";


    optionsBox.innerHTML="";



    question.options.forEach(function(option){


        let button =
        document.createElement("button");


        button.innerText = option;


        button.className =
        "option-btn";


        button.onclick=function(){

            checkAnswer(
                button,
                option
            );

        };


        optionsBox.appendChild(button);


    });

}
function checkAnswer(
    button,
    selectedAnswer
){


    clearInterval(timer);


    let correctAnswer =
    quizQuestions[currentQuestion].answer;


    let buttons =
    document.querySelectorAll(
        ".option-btn"
    );


    buttons.forEach(function(btn){


        btn.disabled=true;


        if(btn.innerText === correctAnswer){

            btn.classList.add(
                "correct"
            );

        }

    });



    if(selectedAnswer === correctAnswer){


        score +=10;

        correctAnswers++;


    }
    else{


        wrongAnswers++;

        button.classList.add(
            "wrong"
        );

    }


    updateScore();


}