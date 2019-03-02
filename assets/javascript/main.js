$(document).ready(function () {

    crystals = [
        {color: 'red'},
        {color: 'green'},
        {color: 'magenta'},
        {color: 'blue'},
    ]
    var numberToMatch = 0;
    var randomNumber = randomnumberGen();
    var wins = 0;
    var losses = 0;
    var crystals;


    function randomnumberGen() {
        return Math.floor(Math.random() * 102) + 19;
    }
    // console.log(randomnumGen())

    function randomNumCrystals() {
        return {
            bluegem: {
                points: Math.floor(Math.random() * 13) + 1,
            },
            greengem: {
                points: Math.floor(Math.random() * 13) + 1,
            },
            magentagem: {
                points: Math.floor(Math.random() * 13) + 1,
            },
            redgem: {
                points: Math.floor(Math.random() * 13) + 1,
            }
        }
    }

    $('.crystal').on("click", function() {
        score += crystals[this.id].value;

        $('#score')
    }

    // RESET GAME
    function resetGame() {

        crystals = randomNumCrystals();

        randomNum = randomnumberGen();
        $("#numbertoMatch").text(randomNumber);

    }




    resetGame();


})