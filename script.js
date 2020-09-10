// create variables
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const startButton = document.getElementById("Start");
const timeEl = document.querySelector(".time");
const question = document.querySelector("#question");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

// when you click on the start button, the timer should start

function startQuiz() {
    // hide start button
    startButton.style.visibility = "hidden";
    //start timer

    let secondsLeft = 60

    // execute timer
    function setTime() {
        let timerInterval = setInterval(function () {
            secondsLeft--;

            timeEl.textContent = secondsLeft;

            if (secondsLeft === 0) {
                clearInterval(timerInterval);

            }

        }, 1000);
    }
    setTime();


}

startButton.addEventListener("click", startQuiz);


//display questions using object literals, while using one big array
const myQuestions = [
    {
        question: "What is the DOM?",
        answers: {
            a: "Develop Operating Machine",
            b: "Document Object Model",
            c: "Document Obvious Method"
        },
        correctAnswer: "b"
    },
    {
        question: "Name the two Selector API methods.",
        answers: {
            a: "querySelector and querySelectorAll",
            b: "element and method",
            c: "selector and document"
        },
        correctAnswer: "a"
    },
    {
        question: "Which one is not considered a CSS Selector?",
        answers: {
            a: ".class",
            b: "#id",
            c: "function"
        },
        correctAnswer: "c"
    },
    {
        question: "What property will return the element's value attribute?",
        answers: {
            a: ".value",
            b: ".style",
            c: ".appendChild"
        },
        correctAnswer: "a"
    },
    {
        question: "Which one is not an essential Element Method?",
        answers: {
            a: ".getAttribute",
            b: "Javascript",
            c: ".addEventListener"
        },
        correctAnswer: "b"
    },



];

let currentQuestion = myQuestions[0]

question.textContent = currentQuestion.question;
button1.textcontent = currentQuestion.answers[0];
button2.textcontent = currentQuestion.answers[1];
button3.textcontent = currentQuestion.answers[2];






// now we should be able to see the questions one at a time

function buildQuiz() {

}

