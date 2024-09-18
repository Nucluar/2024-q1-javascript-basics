// @ts-check

/**@type { HTMLElement} */
//@ts-ignore We know its not a null
let playerControls = document.getElementById("player-controls");

//game-result
/**@type { HTMLElement} */
//@ts-ignore We know its not a null
let gameResultHeader  = document.getElementById("game-result");

/**@type { HTMLElement} */
//@ts-ignore We know its not a null
let gameRestartSection  = document.getElementById("game-restart");


gameResultHeader.innerText = "Hey there!!";


let btnRock = document.getElementById("btn-rock");
let btnPaper = document.getElementById("btn-paper");
let btnscissors = document.getElementById("btn-scissors");

let isGameOver = false;

let bombs = [
    {
        type: "Rock",
        beats: "Scissors"
    },
    {
        type: "Paper",
        beats: "Rock"
    },
    {
        type: "Scissors",
        beats: "Paper"
    }
]

function pickRandomBomb(bomb) {
    let randy = Math.floor(Math.random() * bombs.length);
    return bombs[randy];
}

function determineOutcome(playerBomb, computerBomb) {
    if(playerBomb.type === computerBomb.type) {
        return "it's a tie"
    }

    isGameOver = true;

    if(playerBomb.beats === computerBomb.type) {
        return `Player wins! ${playerBomb.type} beats ${computerBomb.type}`;
    }

     return `Compter wins! ${computerBomb.type} beats ${playerBomb.type}`;
}

//function rockClicked(name) {
    //console.log(name, " was selected");
//}
//btnRock?.addEventListener("click", rockClicked)
//function paperClicked(name) {
    //console.log(name, " was selected");
//}
//btnPaper?.addEventListener("click", paperClicked)
//function scissorsClicked(name) {
    //console.log(name, " was selected");
//}
//btnscissors?.addEventListener("click", scissorsClicked)

function playerControlHandler(e) {
//if(isGameOver) {
    //return;
//}

    let bombName = e.target.innerText;
    let playerBomb = bombs.find(b => b.type === bombName);
    if(!playerBomb) {
        console.log("ERROR! Player bomb undefined")
    }

    let computerBomb = pickRandomBomb(bombs);

    let result = determineOutcome(playerBomb, computerBomb);
    gameResultHeader.innerText = result;
    console.log(result);
    console.log(bombName, "was selected");
}

//function gameResultHandler(e) {
    //if(e.target)
//};

function gamerestarthandler(e) {

}

function showRestart() {
    gameRestartSection.style.display = "initail";

    playerControls.style.display = "none";
}

playerControls?.addEventListener("click", playerControlHandler);

gameRestartSection?.addEventListener("click", playerControlHandler);

