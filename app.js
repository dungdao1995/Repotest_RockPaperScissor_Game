let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerSCore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random() * 3);//random from 0-2
    return choices[randomNum];
}

function convert(letter) {
    if (letter === 'r') return "ROCK";
    else if (letter === "p") return "PAPER";
    else return "SCISSOR";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerSCore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    userChoice_div = document.getElementById(userChoice);
    result_div_p.innerHTML = `${convert(userChoice)}${smallUserWord} beats ${convert(computerChoice)}${smallCompWord}. YOU WIN!!!`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerSCore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    userChoice_div = document.getElementById(userChoice);
    result_div_p.innerHTML = `${convert(userChoice)}${smallUserWord} loses to ${convert(computerChoice)}${smallCompWord}. YOU LOSE!!!`;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    userChoice_div = document.getElementById(userChoice);
    result_div_p.innerHTML = `${convert(userChoice)}${smallUserWord} equals to ${convert(computerChoice)}${smallCompWord}. IT'S DRAW!!!`;
    userChoice_div.classList.add("grey-glow");
    setTimeout(() => userChoice_div.classList.remove("grey-glow"), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;

    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissor_div.addEventListener('click', function () {
        game("s");
    })
}

main();

