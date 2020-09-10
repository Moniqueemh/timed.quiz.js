// create variables
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const startButton = document.getElementById("Start");

//build quiz, show results
function operateQuiz() { }

function startQuiz() {
    // hide start button
    startButton.style.visibility = "hidden";
    //start timer

    //show Q and As


}
// execute timer
let secondsLeft = 60

function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;

        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);

        }

    }, 1000);
}

startButton.addEventListener("click", startQuiz);


//display questions using object literals, while using one big array
const questions = [
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
        question: "",
        answers: {
            a: "",
            b: "",
            c: ""
        },
        correctAnswer: ""
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: ""
        },
        correctAnswer: ""
    },



]
