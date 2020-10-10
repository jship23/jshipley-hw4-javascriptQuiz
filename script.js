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
var headEl = document.querySelector(".head");
var next = document.getElementById("next-btn");
var startBtn = document.getElementById("start-btn");
var buttonEl = document.createElement("button");
var containerEl = document.getElementsByClassName("container")

startBtn.addEventListener("click",startQuiz);

//start quiz
function startQuiz() {
    
    headEl.innerHTML = questions[0].question;
    containerEl.append(headEl)
    console.log(questions[0].question)
 
    
    for(var i = 0; i < questions[0].choices.length; i++) {
        buttonEl.innerText = questions[0].choices[i];
        console.log(questions[0].choices[i]);
        var buttonEl = document.createElement("button");
        buttonEl.classList.add("answer-button");
        headEl.append(buttonEl);
        }
      
};




//select answer
function selectAnswer() {

}


//Next question
function nextQuestion() {

}


