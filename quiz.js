//creates a quiz
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
    {
        question: "Joahnna Smith is currently a moderator of:",
        answers:{
            a: "Introduction to coding for Researchers",
            b: "Human-computer interaction",
            C: "Interactive programming languages",
            d: "Low and high fidelity prototyping"
        },
        correctAnswer: "a"
    },
    {
        question: "Joahnna works closely with:",
        answers:{
            a: "Undergraduate Students",
            b: "Honours students",
            c: "Higher Degree Research Students",
            d: "All of the above"
        },
        correctAnswer:"c"
    },
    {
        question: "Johanna's web design and development skills are:",
        answers:{
            a: "Contextual inquiry",
            b: "Participant observation",
            c: "User interface design",
            d: "Prototyping sorting"
        },
        correctAnswer: "c"
    },
    {
        question: "Johanna is super passionate about:",
        answers:{
            a: "People",
            b: "Innovation",
            c: "Human-centred design",
            d: "All of the above and more!"
        },
        correctAnswer: "d"
    }
];
function buildQuiz() {
    // variable to store the HTML output
    const Output =[];
    for(i=0;i<quizQuestions.length;i++){
    // variable to store the list of possible answers
    const answers = [];
     // for each variable answer to this question add a html radio button
     for(letter in quizQuestions[i].answers)
            {
            answers.push(
                '<label>'
                +'<input type = "radio" name="question'+i+'"value="'+letter+"">''
                +letter+': '
                + quizQuestions[i].answers[letter]
                +'</label>'
            );
        }
        // add this question and its answers to the output
        output.push(
            '<div class="question">' + quizQuestions[i].question+'</div>'
            +'<div class="answers">' + answers.join('') + '</div>'
        );
    }
    // combine our output list into one string of HTML and put it on the page 
        quizContainer.innerHTML=output.join('');
}
function showResults(){
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    // keep track of user's anwers 
    var numCorrect = 0;
    // for each question find the selected answer
    for(i=0;i<quizQuestions.length;i++){
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        // if anwer is correct add to the number of correct answers
        if(userAnswer===quizQuestions[i].correctAnswer){
        numCorrect++;
        // and color the answers green 
        answerContainers[i].style.color='lightgreen';
        }
        // if the anwer is wrong or blank 
        else{
        // colors the anwers red
        answerContainers[i].style.color='red';
        }
    }
    // show the number of correct annswers out of total
    if(numCorrect===0){
        resultsContainer.innerHTML="That wasnot your best effort-you didnot get a single answer correct.";
    }
    if(numCorrect===1){
        resultsContainer.innerHTML="There's room for improvement there ! You only got one correct answer.";
    }
    if(numCorrect===2){
        resultsContainer.innerHTML="That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that";
    }
    if(numCorrect===3){
        resultsContainer.innerHTML="Congratulations ! You got a good score of 3 out of 4 for your responses. You know Johanna pretty well.";
    }
    if(numCorrect===4){
        resultsContainer.innerHTML="Congratulations! You got a perfect score of 4 out of 4 for your response. You know Johanna so well!."
    }
}
// load quiz
buildQuiz();
submitButton.onclick=function(){
    showResults();
}

