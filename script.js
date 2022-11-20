 const quizData = [
    {
        question: "How many children does Tony Blair have?",
        a: "3",
        b: "2",
        c: "4",
        d: "None Of the Above",
        correct: "c",
    },

    {
        question: "In what year was Maggie Thatcher first elected UK Prime Minister?" ,
        a: "1990",
        b: "1944",
        c: "1938",
        d: "1940",
        correct: "d",
    },

    {
        question: "Who replaced MacArthur as UN commander in Korea??",
        a: "Barrack Obama",
        b: "Matthew Ridgway",
        c: "Kofi Annan",
        d: "Hall Maul",
        correct: "b",
    },

    {
        question: "Goodluck Jonathan was former Head of State of which country?",
        a: "Nigeria",
        b: "Australia",
        c: "Ghana",
        d: "South Africa",
        correct: "a",
    },

    {
        question: "Enda Kenny is the Prime Minister of which country?",
        a: "Great Britain",
        b: "France",
        c: "Australia",
        d: "Republic of Ireland",
        correct: "d",
    },
 ];

 const quiz = document.getElementById("quiz");

 const answerEls = document.querySelectorAll(".answer");
 const questionEl = document.getElementById("question");
 const a_text = document.getElementById("a_text");
 const b_text = document.getElementById("b_text");
 const c_text = document.getElementById("c_text");
 const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerE1) => {
        if(answerE1.checked){
            answer = answerE1.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) =>{
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        
        }
        else{
            quiz.innerHTML = `
             <h1>You Have Answered ${score}/${quizData.length} questions correctly.</h1>
             <button onclick="location.reload()">RELOAD</button>
             `;
        }
    }
});