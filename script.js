$(".win").hide();

let winImage = "https://ak.picdn.net/shutterstock/videos/34233727/thumb/1.jpg";
let tieImage = "https://c.tenor.com/wyfhYqF1tJIAAAAC/mark-wahlberg-wahlberg.gif";
let loseImage = "https://www.freesoundslibrary.com/wp-content/uploads/2020/06/game-lose-720x340.jpg";

function declare(img) {
    $(".win").html(`<img src="${img}">`);
}

function compThrow() {
    let random = Math.random() * 3;
    let randomWhole = Math.ceil(random);
    if (randomWhole === 1) {
        return `Rock`;
    } else if (randomWhole === 2) {
        return `Paper`;
    } else {
        return `Scissors`;
    }
}

function game() {

    let shot = $("input").val();
    $(".you").text(`You chose ${shot}`);
    let result = compThrow();
    $(".computer").text(`The computer chose ${result}`);

    if ((shot === "Rock" || shot === "rock") && (result === "Rock")) {
        return declare(tieImage);
    } else if ((shot === "Scissors" || shot === "scissors") && (result === "Scissors")) {
        return declare(tieImage);
    } else if ((shot === "Paper" || shot === "paper") && (result === "Paper")) {
        return declare(tieImage);
    } else if ((shot === "paper" || shot === "Paper") && (result === "Rock")) {
        return declare(winImage);
    } else if ((shot === "Rock" || shot === "rock") && (result === "Scissors")) {
        return declare(winImage);
    } else if ((shot === "Scissors" || shot === "scissors") && (result === "Paper")) {
        return declare(winImage);
    } else {
        return declare(loseImage);
    }
}

$(".play").click(function() {
    $(".win").fadeIn();
    game();
});