$(document).ready(function () {

// Variables ------------------

// The number for the user to match
var numberToMatch = Math.floor(Math.random() * 100 + 19);
//sets user wins
var wins = 0;
//sets user losses
var losses = 0;
//User score so far
var score = 0;


$('.numberToMatch').text(numberToMatch);

var gem1=Math.floor(Math.random()*15+1);
var gem2=Math.floor(Math.random()*15+1);
var gem3=Math.floor(Math.random()*15+1);
var gem4=Math.floor(Math.random()*15+1);

$('.win').text(wins);
$('.losses').text(losses);

function resetGame() {
    numberToMatch = Math.floor(Math.random() * 100 + 19);
    // console.log(numberToMatch);
    $('.numberToMatch').text(numberToMatch);
    var gem1=Math.floor(Math.random()*15+1);
    var gem2=Math.floor(Math.random()*15+1);
    var gem3=Math.floor(Math.random()*15+1);
    var gem4=Math.floor(Math.random()*15+1);
    score = 0;
    $('.score').text(score);
    }

    function win() {
        alert("You won! Play again?")
        wins++;
        $(".win").text(wins);
        resetGame();
    }

    function lose() {
        alert("You lost! Play again?")
        losses++;
        $(".losses").text(losses);
        resetGame();
    }

    $('#blue').on('click', function(){
        score = score + gem1;

        $(".score").text(score);
        if (score === numberToMatch) {
            win();
        } else if (score > numberToMatch) {
            lose();
        }
    })
    $('#green').on('click', function(){
        score = score + gem2;

        $(".score").text(score);
        if (score === numberToMatch) {
            win();
        } else if (score > numberToMatch) {
            lose();
        }
    })
    $('#magenta').on('click', function(){
        score = score + gem3;

        $(".score").text(score);
        if (score === numberToMatch) {
            win();
        } else if (score > numberToMatch) {
            lose();
        }
    })
    $('#red').on('click', function(){
        score = score + gem4;

        $(".score").text(score);
        if (score === numberToMatch) {
            win();
        } else if (score > numberToMatch) {
            lose();
        }
    })

})