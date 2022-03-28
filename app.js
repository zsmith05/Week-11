var win = 0;
var loose = 0;

var ctotal = 0;
var utotal = 0;

/////////////////////// Ask user for name //////////////////////

function askName() {
    var name = prompt("Enter your name:")
    return name
}


function greeting(a) {
    alert(`Hello, ${a}.`)
}

var n = askName()

greeting(n)

//////////////////// Random Number Function //////////////////

function random() {
    var ran = Math.floor(Math.random() * 11)
    return ran
}

    var newNum = random()
////////////////// User Function ///////////////////////

function user() {
    do {
        random()
        utotal = utotal + newNum;
        alert(`The new number is ${newNum} \n The user's total is ${utotal}`);
        var again = prompt("Would you like to draw another number? y for Yes, n for No.")
    }while (again == "y")
}

///////////////////// Computer Function /////////////////////

function computer() {
    do {
        random()
        ctotal = ctotal + newNum;
        alert(`The new number is ${newNum} \n The computer total is ${ctotal}`);
    }while (ctotal <= 16)

}

//////////////////// Compare Numnbers ///////////////////


function compareNumbers (computer , human) {
    if (human > 20){
        loose++
        alert(`Computer Wins! You got ${utotal} and Computer got ${ctotal}.`)
        alert(`The current score is User: ${win} Computer: ${loose}`)
    } else if (human > computer) {
        win++
        alert(`You win! You got ${utotal} and Computer got ${ctotal}.`)
        alert(`The current score is User: ${win} Computer: ${loose}`)
    }else if (human == computer) {
        win++
        loose++
        alert(`Its a tie! You got ${utotal} and Computer got ${ctotal}.`)
        alert(`The current score is User: ${win} Computer: ${loose}`)
    }else if (computer > human) {
        loose++
        alert(`Computer Wins! You got ${utotal} and Computer got ${ctotal}.`)
        alert(`The current score is User: ${win} Computer: ${loose}`)
    }else if(computer > 20) {
        win++
        alert("You win!")
        alert(`The current score is User: ${win} Computer: ${loose}`)
    }
}



function gameFunc() {
    alert("First, it is the Computer's turn.")
    computer();
    alert("Now it is the User's turn.")
    user();
    compareNumbers(computer(), user());
}

gameFunc()
