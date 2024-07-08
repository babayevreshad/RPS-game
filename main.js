const intro = document.querySelector("#intro")
const beginBtn = document.querySelector("#beginBtn");
const cancelBtn = document.querySelector("#cancelBtn");

cancelBtn.addEventListener("click", function(){
    window.close()
})

beginBtn.addEventListener("click", function(){
    intro.style.display = "none" 
    game.style.display = "block"
})


const game = document.querySelector("#game")
const userPoint = document.querySelector("#userPoint")
const winPoint = document.querySelector("#winPoint")
const losePoint = document.querySelector("#losePoint")
const pcPoint = document.querySelector("#pcPoint")
const humanHand = document.querySelector("#humanHand")
const computerHand = document.querySelector("#computerHand")
const win = document.getElementById("win");
const lose = document.getElementById("lose");


let userScore = 0
let compScore = 0
let winScore = 0
let loseScore = 0

function randomHandSelector() {
    const hands = ["r", "p", "s"];
    let randomHand = Math.floor(Math.random() * 3);
    computerHand.setAttribute("src", `./images/${hands[randomHand]}.png`);
    return hands[randomHand];
}

function rockBtn() {
    humanHand.setAttribute("src", "./images/r.png");
    let userChoice = 'r';
    let computerChoice = randomHandSelector();
    result(userChoice, computerChoice);
}

function paperBtn() {
    humanHand.setAttribute("src", "./images/p.png");
    let userChoice = 'p';
    let computerChoice = randomHandSelector();
    result(userChoice, computerChoice);
}

function scissorBtn() {
    humanHand.setAttribute("src", "./images/s.png");
    let userChoice = 's';
    let computerChoice = randomHandSelector();
    result(userChoice, computerChoice);
}

function result(user, comp) {
    if (
        (user === "r" && comp === "s") ||
        (user === "p" && comp === "r") ||
        (user === "s" && comp === "p")
    ) {
        userScore++;
        if (userScore === 3) {
            win.style.display = "block";
            winPoint.textContent = ++winScore;
            document.querySelector(".buttons_container").style.display = "none";
            setTimeout(() => {
                win.style.display = "none";
                userPoint.textContent = 0;
                pcPoint.textContent = 0;
                userScore = 0;
                compScore = 0;
                humanHand.setAttribute("src", "./images/r.png");
                computerHand.setAttribute("src", "./images/r.png");
                document.querySelector(".buttons_container").style.display = "flex";
            }, 1000);
        }
    } else if (
        (comp === "r" && user === "s") ||
        (comp === "p" && user === "r") ||
        (comp === "s" && user === "p")
    ) {
        compScore++;
        if (compScore === 3) {
            lose.style.display = "block";
            document.querySelector(".buttons_container").style.display = "none";
            losePoint.textContent = ++loseScore;
            setTimeout(() => {
                lose.style.display = "none";
                userPoint.textContent = 0;
                pcPoint.textContent = 0;
                userScore = 0;
                compScore = 0;
                computerHand.setAttribute("src", "./images/r.png");
                humanHand.setAttribute("src", "./images/r.png");
                document.querySelector(".buttons_container").style.display = "flex";
            }, 1000);
        }
    }
    
    userPoint.textContent = userScore;
    pcPoint.textContent = compScore;
}


