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
function updateScore(){


    document.getElementById(
        "scoreCard"
    ).innerText = score;


    document.getElementById(
        "correctCard"
    ).innerText = correctAnswers;


    document.getElementById(
        "wrongCard"
    ).innerText = wrongAnswers;


    let total =
    correctAnswers + wrongAnswers;


    let accuracy = 0;


    if(total > 0){

        accuracy =
        Math.round(
            (correctAnswers/total)*100
        );

    }


    document.getElementById(
        "accuracyCard"
    ).innerText =
    accuracy+"%";

}
nextBtn.addEventListener(
    "click",
    function(){


        currentQuestion++;


        if(
        currentQuestion <
        quizQuestions.length
        ){

            showQuestion();

        }
        else{

            showResult();

        }


    }
);
function startTimer(){


    clearInterval(timer);


    time=15;


    timerText.innerText=time;


    timer=setInterval(function(){


        time--;


        timerText.innerText=time;


        if(time<=0){


            clearInterval(timer);


            wrongAnswers++;


            updateScore();


            currentQuestion++;


            if(
            currentQuestion <
            quizQuestions.length
            ){

                showQuestion();

            }
            else{

                showResult();

            }

        }


    },1000);

}
// ===============================
// SHOW RESULT
// ===============================


function showResult(){


    clearInterval(timer);



    quizBox.style.display =
    "none";


    resultBox.style.display =
    "block";



    let percentage =
    Math.round(
        (score /
        (quizQuestions.length * 10))
        *100
    );



    document.getElementById(
        "finalScore"
    ).innerHTML =

    `
    Score : ${score}

    <br>

    Correct : ${correctAnswers}

    <br>

    Wrong : ${wrongAnswers}

    <br>

    Percentage : ${percentage}%

    `;



    let circle =
    document.getElementById(
        "resultCircle"
    );



    circle.innerText =
    percentage+"%";



    let degree =
    percentage * 3.6;



    circle.style.background =

    `
    conic-gradient(

    #22c55e ${degree}deg,

    #1e293b ${degree}deg

    )
    `;


}
// ===============================
// RESTART QUIZ
// ===============================


document.getElementById(
"restartBtn"
)
.addEventListener(
"click",
function(){

    location.reload();

});
// ===============================
// LEADERBOARD
// ===============================


function saveLeaderboard(
score,
percentage
){


let leaderboard =

JSON.parse(
localStorage.getItem(
"quizLeaderboard"
)
)
||
[];



leaderboard.push({

score:score,

percentage:percentage,

date:
new Date()
.toLocaleDateString()

});



leaderboard.sort(
function(a,b){

return b.score-a.score;

});



leaderboard =
leaderboard.slice(0,5);



localStorage.setItem(

"quizLeaderboard",

JSON.stringify(
leaderboard
)

);


}
function displayLeaderboard(){


let list =
document.getElementById(
"leaderboardList"
);



list.innerHTML="";



let leaderboard =

JSON.parse(
localStorage.getItem(
"quizLeaderboard"
)
)
||
[];



leaderboard.forEach(
function(item,index){


let li =
document.createElement(
"li"
);



li.innerHTML =

`
#${index+1}

Score:
${item.score}

(${item.percentage}%)

${item.date}

`;



list.appendChild(li);



});


}



displayLeaderboard();
// ===============================
// THEME TOGGLE
// ===============================


const themeButton =
document.getElementById(
"themeBtn"
);



let savedTheme =
localStorage.getItem(
"theme"
);



if(savedTheme==="light"){


document.body.classList.add(
"light-mode"
);


}



themeButton.addEventListener(
"click",
function(){


document.body.classList.toggle(
"light-mode"
);



if(
document.body.classList.contains(
"light-mode"
)
){


localStorage.setItem(
"theme",
"light"
);


}
else{


localStorage.setItem(
"theme",
"dark"
);


}



});
// ===============================
// SHUFFLE QUESTIONS
// ===============================


function shuffleQuestions(array){


    for(
        let i = array.length - 1;
        i > 0;
        i--
    ){


        let randomIndex =
        Math.floor(
            Math.random() * (i + 1)
        );


        let temp =
        array[i];


        array[i] =
        array[randomIndex];


        array[randomIndex] =
        temp;


    }


    return array;

}
// ===============================
// HIGH SCORE
// ===============================


function saveHighScore(){


    let oldScore =

    localStorage.getItem(
        "highScore"
    );



    if(oldScore === null){

        oldScore = 0;

    }



    if(score > oldScore){


        localStorage.setItem(

            "highScore",

            score

        );

    }

}
// ===============================
// KEYBOARD SHORTCUT
// ===============================


document.addEventListener(
"keydown",
function(event){


    if(event.key === "Enter"){


        nextBtn.click();


    }


});
// ===============================
// RESULT MESSAGE
// ===============================


function getMessage(
percentage
){


    if(percentage >= 90){


        return "🏆 Excellent";


    }


    else if(percentage >=70){


        return "🔥 Great Job";


    }


    else if(percentage >=50){


        return "👍 Good";


    }


    else{


        return "📚 Keep Practicing";


    }


}