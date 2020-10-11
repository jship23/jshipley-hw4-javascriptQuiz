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
var startBtn = document.getElementById("start-btn");
var buttonEl = document.createElement("button");
var containerEl = document.getElementsByClassName("container")
var score = 0;

// click start
startBtn.addEventListener("click",startQuiz);

//start quiz
function startQuiz() {
//first question
  headEl.innerHTML = questions[0].question;
  console.log(questions[0].question);
  startBtn.remove();

  for (var i = 0; i < questions[0].choices.length; i++) {
    var buttonEl = document.createElement("button");
    buttonEl.innerHTML = questions[0].choices[i];
    console.log(questions[0].choices[i]);
    buttonEl.classList.add("answer-button");
    headEl.append(buttonEl);
  }

  var nextBtn = document.createElement("button");
  nextBtn.innerHTML = "Next";
  nextBtn.classList.add("next-button");
  headEl.append(nextBtn);

  //next question
  nextBtn.addEventListener("click", nextQuestion);
  function nextQuestion() {
    headEl.innerHTML = questions[1].question;
    console.log(questions[1].question);
    startBtn.remove();

    for (var i = 0; i < questions[1].choices.length; i++) {
      var buttonEl = document.createElement("button");
      buttonEl.innerHTML = questions[1].choices[i];
      console.log(questions[1].choices[i]);
      buttonEl.classList.add("answer-button");
      headEl.append(buttonEl);
    }

    var nextBtn = document.createElement("button");
    nextBtn.innerHTML = "Next";
    nextBtn.classList.add("next-button");
    headEl.append(nextBtn);

    //next question
    nextBtn.addEventListener("click", nextQuestion);
    function nextQuestion() {
      headEl.innerHTML = questions[2].question;
      console.log(questions[2].question);
      startBtn.remove();
  
      for (var i = 0; i < questions[2].choices.length; i++) {
        var buttonEl = document.createElement("button");
        buttonEl.innerHTML = questions[2].choices[i];
        console.log(questions[2].choices[i]);
        buttonEl.classList.add("answer-button");
        headEl.append(buttonEl);
      }

      var nextBtn = document.createElement("button");
      nextBtn.innerHTML = "Next";
      nextBtn.classList.add("next-button");
      headEl.append(nextBtn);


      //next question
      nextBtn.addEventListener("click", nextQuestion);
      function nextQuestion() {
        headEl.innerHTML = questions[3].question;
        console.log(questions[3].question);
        startBtn.remove();
    
        for (var i = 0; i < questions[3].choices.length; i++) {
          var buttonEl = document.createElement("button");
          buttonEl.innerHTML = questions[3].choices[i];
          console.log(questions[3].choices[i]);
          buttonEl.classList.add("answer-button");
          headEl.append(buttonEl);
        }

        var nextBtn = document.createElement("button");
        nextBtn.innerHTML = "Next";
        nextBtn.classList.add("next-button");
        headEl.append(nextBtn);

        //Next question
        nextBtn.addEventListener("click", nextQuestion);
        function nextQuestion() {
          headEl.innerHTML = questions[4].question;
          console.log(questions[4].question);
          startBtn.remove();
      
          for (var i = 0; i < questions[4].choices.length; i++) {
            var buttonEl = document.createElement("button");
            buttonEl.innerHTML = questions[4].choices[i];
            console.log(questions[4].choices[i]);
            buttonEl.classList.add("answer-button");
            headEl.append(buttonEl);

        }
        //submit button
        var submitBtn = document.createElement("button");
        submitBtn.innerHTML = "Submit";
        submitBtn.classList.add("next-button")
        headEl.append(submitBtn);


    }
    }
    }
    }
    
};


