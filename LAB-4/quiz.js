// Simple Quiz Game for Beginners

// Questions and Answers
var questions = [
    "What is the capital of India?",
    "How many days are in a week?",
    "Which language runs in the browser? (js, python, c++)",
    "What is 5 + 5?",
    "Which is used to style web pages? (css/html/js)"
];

var answers = [
    "delhi",
    "7",
    "js",
    "10",
    "css"
];

// Score starts at 0
var score = 0;

// Loop through each question
for (var i = 0; i < questions.length; i++) {
    
    var userAnswer = prompt(questions[i]);

    // If user cancels
    if (userAnswer === null) {
        alert("Quiz stopped.");
        break;
    }

    // Clean the input
    userAnswer = userAnswer.toLowerCase().trim();

    // Check the answer
    if (userAnswer === answers[i]) {
        alert("Correct!");
        score++;
    } else {
        alert("Wrong! Correct answer is: " + answers[i]);
    }
}

// Final Score
alert("Your final score: " + score + " / " + questions.length);
