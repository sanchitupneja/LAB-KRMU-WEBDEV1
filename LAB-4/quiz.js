
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
var score = 0;
for (var i = 0; i < questions.length; i++) { 
    var userAnswer = prompt(questions[i]);
    if (userAnswer === null) {
        alert("Quiz stopped.");
        break;
    }
    userAnswer = userAnswer.toLowerCase().trim();
    if (userAnswer === answers[i]) {
        alert("Correct!");
        score++;
    } else {
        alert("Wrong! Correct answer is: " + answers[i]);
    }
}
alert("Your final score: " + score + " / " + questions.length);

