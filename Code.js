//Better Countdown Timer with loops
function btrCountdownTimer() {
    var count = 10; //Displays the top number that the loops counts down from

    for (var i = 0; i < 10; i++) { //Using a loop to scrunch down code and to make timer easier
        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = count;
            count--;
        }, 1000 * i); //Takes the timer down by 1 second
    }

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!"; //Displays Blastoff once timer hits 0
    }, 10000);

}
//as requested by the fleetamdmiral, we will go to Warning Less than 1/2 way to launch, time left = 5 sec
function evenBtrCountdownTimer() {
    var count = 10; //Displays the top number that the loops counts down from

    for (var i = 0; i < 11; i++) { //Using a loop to scrunch down code and to make timer easier


        if (i == 10) { //tells the code to start counting down from 10
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!";
            }, i * 1000);
        } else if (i > 4) { //If the number is greater than 4 starts the loop displaying the message below
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Warning Less than ½ way to launch, time left = " + count;
                count--;
            }, i * 1000);

        } else { //Starts the countdown
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = count;
                count--;
            }, i * 1000);
        }
    }
}
 
//wk1-2 countdown timer should run 10....1 then blastoff
function startCountdown() {
    var count = 10;
    //The countdowntimer should display 10
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1; //Set the wait time as 1 sec

    setTimeout(function () {
        //The countdowntimer should display9
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 1000); //Set the wait time as 2 sec

    setTimeout(function () {
        //The countdowntimer should display 8
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 2000); //Set the wait time as 3 sec

    setTimeout(function () {
        //The countdowntimer should display 7
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 3000); //Set the wait time as 4 sec

    setTimeout(function () {
        //The countdowntimer should display 6
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 4000); //Set the wait time as 5 sec

    setTimeout(function () {
        //The countdowntimer should display 5
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 5000); //Set the wait time as 6 sec

    setTimeout(function () {
        //The countdowntimer should display 4
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 6000); //Set the wait time as 7 sec

    setTimeout(function () {
        //The countdowntimer should display 3
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 7000); //Set the wait time as 8 sec

    setTimeout(function () {
        //The countdowntimer should display 2
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 8000); //Set the wait time as 9 sec

    setTimeout(function () {
        //The countdowntimer should display 1
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 9000); //Set the wait time as 10 sec

    setTimeout(function () {
        //The countdowntimer should display Blastoff!!!
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
    }, 10000);

}

//Function to play Craps
function playCraps() {
    console.log("playCraps has started"); //Says in console playcraps has started
    var die1;
    die1 = Math.ceil(Math.random() * 6);  //Rounds down a number

    document.getElementById("die1Results").innerHTML = "The value of die1 is: " + die1 //Writes the value of die 1
    var die2;
    die2 = Math.ceil(Math.random() * 6);  //Rounds down a number
    document.getElementById("die2Results").innerHTML = "The value of die2 is: " + die2;
    var dieSum = die1 + die2; //Adding die1 + die2 to display the sum of both die
    document.getElementById("sumResults").innerHTML = "The sum of die1 plus die2 is: " + dieSum; //Shows the Su
    if (dieSum == 7 || dieSum == 11) { //If either die roll a 7 or 11 pop up the message below
        document.getElementById("crapsResults").innerHTML = "Craps! You Lose!!!"; //Displays Craps! You Lose Message if you rolled a 7 or 11
    } else {
        document.getElementById("crapsResults").innerHTML = "Please try again."; //Displays the text Please try again if you did not roll even die
    }
}

function sandboxTest() {
    console.log("Sandbox test started");
    var i = 0;
    while (i < 10) { //Start of a while Loop Couldn't get this working at the time
        setTimeout(function () {
            document.getElementById("sandRes").innerHTML = i;
            i++;
        }, 1000 * i);


    }
}