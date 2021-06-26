
let rock = document.querySelector(".rock-img");
let paper = document.querySelector(".paper-img");
let scissors = document.querySelector(".scissors-img");
let heading = document.querySelector("h1");
let hd = document.querySelector(".horizontal-div");

rock.addEventListener("click", playRock);
paper.addEventListener("click", playPaper);
scissors.addEventListener("click", playScissors);

function playRock(){
    computerPlay("rock");
}

function playPaper(){
    computerPlay("paper");
}

function playScissors(){
    computerPlay("scissors");
}

function computerPlay(playerMove){
    let options = ["rock","paper","scissors"]
    let computerMove = options[Math.floor(Math.random() * 3)];
    declareWinner(playerMove, computerMove);
}

function declareWinner(playerMove, computerMove){
    let message = "";
    if (playerMove === computerMove){
        message = "You chose " + playerMove + ", the computer chose " + computerMove + "\nDRAW";
    } else if (playerMove == "rock" && computerMove == "scissors"){
        message = "You chose " + playerMove + ", the computer chose " + computerMove + "\nVICTORY";
    } else if (playerMove == "rock" && computerMove == "paper"){
        message = "You chose " + playerMove + ", the computer chose " + computerMove + "\nDEFEAT";
    } else if (playerMove == "paper" && computerMove == "rock"){
        message = "You chose " + playerMove + ", the computer chose " + computerMove + "\nVICTORY";
    } else if (playerMove == "paper" && computerMove == "scissors"){
        message = "You chose " + playerMove + ", the computer chose " + computerMove + "\nDEFEAT";
    } else if (playerMove == "scissors" && computerMove == "rock"){
        message = "You chose " + playerMove + ", the computer chose " + computerMove + "\nDEFEAT";
    } else if (playerMove == "scissors" && computerMove == "paper"){
        message = "You chose " + playerMove + ", the computer chose " + computerMove + "\nVICTORY";
    } else {
        message = "something went terribly wrong";
    }

    result();
    gameOver(message);
}

function result(){
    rock.classList.add("game-over");
    paper.classList.add("game-over");
    scissors.classList.add("game-over");
    heading.classList.add("game-over");
}

function gameOver(message){
    const gameOver = document.createElement("h1");
    gameOver.textContent = message;
    hd.appendChild(gameOver);
}