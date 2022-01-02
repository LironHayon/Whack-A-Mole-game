//counterClicked():
//once the "Reset Game" button is clicked the function "counterClicked()" is called:
//the game reset the hole.
//the score reset to zero.
//the counter starts coutning back 60 seconds.
//the funtion "countDown()" is called.

var count = 60;
var t = setInterval();

function counterClicked() {
    count = 60;

    document.getElementById(1).src = "hole.png";
    document.getElementById(2).src = "hole.png";
    document.getElementById(3).src = "hole.png";
    document.getElementById(4).src = "hole.png";
    document.getElementById(5).src = "hole.png";
    document.getElementById(6).src = "hole.png";
    document.getElementById(7).src = "hole.png";
    document.getElementById(8).src = "hole.png";
    document.getElementById(9).src = "hole.png";

    document.getElementById("score").innerHTML = 0;
    document.getElementById("counter").innerHTML = count;

    clearInterval(t);
    t = setInterval(countDown, 1000);
}

//countDown():
//the function count down using an interval every seconds and changing the element.
//the function pop up alert when 60 seconds is over.
//the function generate a random number "r" for changing hole into mole.
//the function called another function "randomMole()" with the random number "r".

var r = 0;
function countDown() {

    if (count == 0) {
        clearInterval(t);
        alert("60 seconds up!");
    }
    else {
        count = count - 1;
        document.getElementById("counter").innerHTML = count;

        //random number for the mole place
        //Returns a random integer from 0 to 10 (0 - 9 for moles spots, 10 for "do nothing").

        r = Math.floor(Math.random() * 11);
        randomMole(r);
    }
}


//randomMole(r):
//random mole for the game - the function change the source of the hole into mole
//the function call randomHole with the random number "r".

function randomMole(r) {

    document.getElementById(r).src = "mole.png";
    randomHole(r);
}

//randomHole(r):
//the function wait a random time using the return value from the function "randomSeconds()"
//then -> the function changes back the mole into hole.

function randomHole(r) {
    setTimeout(() => { document.getElementById(r).src = "hole.png"; }, randomSeconds());
}


//randomSeconds():
//the function generate a random number (between 0.5 and 2.5)

var n = 0;
function randomSeconds() {

    //random seconds from 0.5 second up to 2.5 seconds.

    n = Math.floor(Math.random() * (2500 - 500)) + 500;
    return n;
}


//moleHoleClicked(idP):
//when clicking on a mole = increase 10 points -> change to a hole
//when clicking on a hole = do nothing

var scoreGame = 0;

function moleHoleClicked(idP) {
    scoreGame = Number(document.getElementById("score").innerHTML);

    var pic = document.getElementById(idP);

    if (pic.getAttribute('src') == "mole.png") {
        scoreGame = scoreGame + 10;
        document.getElementById("score").innerHTML = scoreGame;
        document.getElementById(idP).src = "hole.png";
    }

}