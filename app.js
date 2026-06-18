let userScore=0;
let comScore=0;

const choices =document.querySelectorAll(".choice");

const genCompChoice =()=>{
    const options=["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
}
const drawGame= ()=>{
    msg.innerText=msg.innerText=`Game Was Draw! Try Again`
}

const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")


const playGame=(userChoice) =>{
    const compChoice=genCompChoice();

    if (userChoice === compChoice) {
    // draw
    drawGame();
    msg.style.backgroundColor ="#1f2937"

}
else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
) {
    // user wins
    userScore++;
    userScorePara.innerText=userScore
     msg.innerText="You Won Sukesh"
    // msg.innerText=`you Won! Your ${userChoice} beats ${compChoice}`
     msg.style.backgroundColor ="green"
}
else {
    // computer wins
    comScore++;
    compScorePara.innerText=comScore
    msg.innerText="You lost Sukesh"
    msg.style.backgroundColor ="red"
    // msg.innerText=`you lost!${compChoice} beats your ${userChoice}`
}
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
});
});
