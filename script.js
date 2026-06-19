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

      // ================= HTML =================

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
        category: "html",
        difficulty: "easy",
        question: "Which tag is used for paragraph?",
        options: ["<p>", "<h1>", "<div>", "<span>"],
        answer: "<p>"
    },

    {
        category: "html",
        difficulty: "easy",
        question: "Which tag creates a hyperlink?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        answer: "<a>"
    },

    {
        category: "html",
        difficulty: "medium",
        question: "Which attribute is used for image source?",
        options: ["src", "href", "link", "path"],
        answer: "src"
    },

    {
        category: "html",
        difficulty: "medium",
        question: "Semantic tag for navigation?",
        options: ["<nav>", "<div>", "<span>", "<section>"],
        answer: "<nav>"
    },

    {
        category: "html",
        difficulty: "medium",
        question: "Which tag is used for table row?",
        options: ["<tr>", "<td>", "<th>", "<table>"],
        answer: "<tr>"
    },

    {
        category: "html",
        difficulty: "hard",
        question: "Which tag is used for form input?",
        options: ["<input>", "<form>", "<label>", "<textarea>"],
        answer: "<input>"
    },

    {
        category: "html",
        difficulty: "hard",
        question: "What is the use of meta tag?",
        options: [
            "SEO and metadata",
            "Styling page",
            "Creating buttons",
            "Database connection"
        ],
        answer: "SEO and metadata"
    },


    // ================= CSS =================

    {
        category: "css",
        difficulty: "easy",
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Computer Style System",
            "Creative Style Sheets",
            "Color Style Syntax"
        ],
        answer: "Cascading Style Sheets"
    },

    {
        category: "css",
        difficulty: "easy",
        question: "Which property changes text color?",
        options: ["color", "text-color", "font-color", "style"],
        answer: "color"
    },

    {
        category: "css",
        difficulty: "easy",
        question: "Which property controls spacing inside element?",
        options: ["padding", "margin", "spacing", "border"],
        answer: "padding"
    },

    {
        category: "css",
        difficulty: "medium",
        question: "Which system is one-dimensional layout?",
        options: ["Flexbox", "Grid", "Table", "Block"],
        answer: "Flexbox"
    },

    {
        category: "css",
        difficulty: "medium",
        question: "Which property is used for background color?",
        options: ["background-color", "color", "bgcolor", "background-style"],
        answer: "background-color"
    },

    {
        category: "css",
        difficulty: "medium",
        question: "Which unit is relative in CSS?",
        options: ["em", "px", "cm", "mm"],
        answer: "em"
    },

    {
        category: "css",
        difficulty: "hard",
        question: "Which CSS property creates animation?",
        options: ["animation", "transform", "transition", "motion"],
        answer: "animation"
    },

    {
        category: "css",
        difficulty: "hard",
        question: "Which layout uses rows and columns?",
        options: ["Grid", "Flexbox", "Float", "Position"],
        answer: "Grid"
    },


    // ================= JAVASCRIPT =================

    {
        category: "js",
        difficulty: "easy",
        question: "What is DOM?",
        options: [
            "Document Object Model",
            "Data Object Model",
            "Digital Output Model",
            "None"
        ],
        answer: "Document Object Model"
    },

    {
        category: "js",
        difficulty: "easy",
        question: "Which symbol is used for comments?",
        options: ["//", "<!-- -->", "#", "**"],
        answer: "//"
    },

    {
        category: "js",
        difficulty: "easy",
        question: "Which keyword declares variable?",
        options: ["let", "define", "varr", "int"],
        answer: "let"
    },

    {
        category: "js",
        difficulty: "medium",
        question: "What is an array?",
        options: [
            "Collection of items",
            "Single variable",
            "Function",
            "Object only"
        ],
        answer: "Collection of items"
    },

    {
        category: "js",
        difficulty: "medium",
        question: "Which method adds element in array?",
        options: ["push()", "pop()", "shift()", "slice()"],
        answer: "push()"
    },

    {
        category: "js",
        difficulty: "medium",
        question: "What is a function?",
        options: [
            "Reusable block of code",
            "Variable",
            "Loop",
            "Object"
        ],
        answer: "Reusable block of code"
    },

    {
        category: "js",
        difficulty: "hard",
        question: "What is closure?",
        options: [
            "Function with outer scope access",
            "CSS feature",
            "Loop type",
            "Array method"
        ],
        answer: "Function with outer scope access"
    },

    {
        category: "js",
        difficulty: "hard",
        question: "What is async/await used for?",
        options: [
            "Handle asynchronous code",
            "Styling",
            "Looping",
            "DOM creation"
        ],
        answer: "Handle asynchronous code"
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