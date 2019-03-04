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

//Writes text to html for the Number users need to math
$('.numberToMatch').text(numberToMatch);
//writes text to score section of html
$('.score').text(score)


// set random number for each gem in the game
var gem1=Math.floor(Math.random()*15+1);
var gem2=Math.floor(Math.random()*15+1);
var gem3=Math.floor(Math.random()*15+1);
var gem4=Math.floor(Math.random()*15+1);

//writes text for wins and losses to html
$('.win').text(wins);
$('.losses').text(losses);


//resets game, sets new random number to guess
//writes new random number to guess
//makes new random number for gems
//sets score back to 0
//writes score back to html
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


//sets the function to run when user wins
    function win() {
        alert("You won! Play again?")
        wins++;
        $(".win").text(wins);
        resetGame();
    }
// sets the function to run when user loses
    function lose() {
        alert("You lost! Play again?")
        losses++;
        $(".losses").text(losses);
        resetGame();
    }

    
//sets the variables for when a user presses each gem
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