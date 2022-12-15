let score1 = document.getElementById("score1")
let score2 = document.getElementById("score2")


let count1 = 0;
let count2 = 0;

function scoreOneHome() {
    count1 += 1
    score1.textContent = count1
}

function scoreTwoHome() {
    count1 += 2
    score1.textContent = count1
}

function scoreThreeHome() {
    count1 += 3
    score1.textContent = count1
}

function scoreOneAway() {
    count2 += 1
    score2.textContent = count2
}

function scoreTwoAway() {
    count2 += 2
    score2.textContent = count2
}

function scoreThreeAway() {
    count2 += 3
    score2.textContent = count2
}

function newGame() {
    count1 = 0
    count2 = 0
    score1.textContent = 0
    score2.textContent = 0
}

 

