const questionaire = [{question: "Which is the largest country in the world?", choice1: "Russia", choice2: "America", choice3: "Africa", choice4: "China", answer: document.getElementById("choice1")},
            {question: "Which country has the largest population in the world?", choice1: "Russia", choice2: "America", choice3: "China", choice4: "India", answer: document.getElementById("choice3")},
            {question: "In which country would you find the Leaning Tower of Pisa?", choice1: "Greece", choice2: "Italy", choice3: "France", choice4: "Macedonia", answer: document.getElementById("choice2")},
            {question: "What is the name of the biggest ocean on Earth?", choice1: "Pacific", choice2: "Indian", choice3: "Atlantic", choice4: "Arctic", answer: document.getElementById("choice1")},
            {question: "The United States consists of how many states?", choice1: "48", choice2: "49", choice3: "50", choice4: "51", answer: document.getElementById("choice3")},
            {question: "Which planet is nearest to the Earth?", choice1: "Mercury", choice2: "Pluto", choice3: "Mars", choice4: "Venus", answer: document.getElementById("choice4")}]


document.getElementById("start").addEventListener("click", start);
function start(){
    document.getElementById("instructions").style.display = "none";
    document.getElementById("quiz").style.display = "block";
}


var c = -1, p = 0, bool = true, correct = 0, wrong = 0, selected;
next();
document.getElementById("choice1").addEventListener("click", points);
document.getElementById("choice2").addEventListener("click", points);
document.getElementById("choice3").addEventListener("click", points);
document.getElementById("choice4").addEventListener("click", points);
document.getElementById("next").addEventListener("click", next);
function points(){
    if (bool){
        bool = false;
        if (this == questionaire[c].answer){
            p += 1;
            correct += 1;
        }
        else{
            p -= 0.5;
            wrong += 1;
        }
        selected = this;
        selected.style.backgroundColor = "rgb(98, 182, 255)";
    }
}
function next(){
    if (c>-1){
        selected.style.backgroundColor = "rgb(170, 214, 252)";
    }
    bool = true;
    c += 1;
    if (c < 6){
        document.getElementById("ques").innerHTML = questionaire[c].question;
        document.getElementById("choice1").innerHTML = questionaire[c].choice1;
        document.getElementById("choice2").innerHTML = questionaire[c].choice2;
        document.getElementById("choice3").innerHTML = questionaire[c].choice3;
        document.getElementById("choice4").innerHTML = questionaire[c].choice4;
    }
    else{
        document.getElementById("quiz").style.display = "none";
        document.getElementById("result").style.display = "block";
        document.getElementById("p").innerHTML = " " + p + " ";
        document.getElementById("correct").innerHTML = " " + correct + " ";
        document.getElementById("wrong").innerHTML = " " + wrong + " ";
    }
}