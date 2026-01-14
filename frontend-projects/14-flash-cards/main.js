const flashcards = [
    {
        question: "What is JavaScript?",
        answer: "JavaScript is a programming language used to make web pages interactive."
    },
    {
        question: "What is HTML?",
        answer: "HTML is the standard markup language for creating web pages."
    },
    {
        question: "What is CSS?",
        answer: "CSS is used to style and layout web pages."
    }
];

let currentIndex = 0;

const cardText = document.querySelector("#answer-place1");
const showAnswerBtn = document.querySelector("#showAnswer1");
const progressFill = document.querySelector(".progress-fill");
const progressPercent = document.querySelector("#progress-percent");
const progressCount = document.querySelector("#progress-count");

const nextBtn = document.querySelector(".icon2").nextElementSibling;
const prevBtn = document.querySelector(".icon1").nextElementSibling;

function updateCard() {
    cardText.textContent = flashcards[currentIndex].question;
    cardText.style.fontStyle = "normal";

    const percent = Math.round(((currentIndex + 1) / flashcards.length) * 100);

    progressFill.style.width = percent + "%";
    progressPercent.textContent = percent + "%";
    progressCount.textContent = `${currentIndex + 1} of ${flashcards.length}`;
}

showAnswerBtn.addEventListener("click", () => {
    cardText.textContent = flashcards[currentIndex].answer;
    cardText.style.fontStyle = "italic";
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        updateCard();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCard();
    }
});

updateCard();
