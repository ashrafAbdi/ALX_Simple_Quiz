// Define the checkAnswer function
function checkAnswer() {
    const correctAnswer = "4"; // Correct answer to the quiz question
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value; // Get the user's selected answer

    const feedbackElement = document.getElementById("feedback"); // Select the feedback element

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done."; // Correct answer feedback
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!"; // Incorrect answer feedback
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);