//create questions

var questions = [
    new Question("What is the meaning of life?",["23","55","42"],"42");
    new Question("Why did the chicken cross the road?",["To be difficult","To get to the other side","None of these"],"To get to the other side");
];

//create quiz
var quiz = new Quiz(questions);

//display quiz
quizUI.displayNext();