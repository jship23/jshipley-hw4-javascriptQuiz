//array of questions and answers
var questions = [
    {
        question: "Who is the author of the Stormlight Archive?",
        choices: ["Brandon Sanderson", "Patrick Rothfuss", "Joe Abercrombie", "Jim Butcher"],
        answer: "Brandon Sanderson"
    },
    {
        question: "Kaladin is bridge leader of which bridge crew?",
        choices: ["Bridge 8", "Bridge 12", "Bridge 1", "Bridge 4"],
        answer: "Bridge 4"
    },
    {
        question: "What is the name of Shallan's spren?",
        choices: ["Syl", "Pattern", "Ivory", "Stormfather"],
        answer: "Pattern"
    },
    {
        question: "which is not an order of the Knights Radiant?",
        choices: ["Windrunner", "Edgedancer", "Dawnshard","Truthwatcher"],
        answer: "Dawnshard"
    },
    {
        question: "What is the name of Dalinar's brother who was murdered?",
        choices: ["Sadeas","Adolin","Gavilar", "Renarin"],
        answer: "Gavilar"
    }
]

// set variables
var question = document.getElementById("question");
var answer1 = document.getElementById("btn1");
var answer2 = document.getElementById("btn2");
var answer3 = document.getElementById("btn3");
var answer4 = document.getElementById("btn4");
var initials = document.getElementById("initials");

var highScore = document.getElementById("high-score");
var startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", startGame);

//start game
function startGame() {
console.log("started")
window.location.replace("quiz.html")

};

//render questions
function getQuestion(){
  
}

//Next question
function nextQuestion() {


}

//select answer
function selectAnswer() {


}

