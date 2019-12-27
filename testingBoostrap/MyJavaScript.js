// JavaScript source code
function ShowHelloMessage() {
    var name = document.getElementById("myname");
    document.getElementById("hellomessage").innerHTML = "Hello, " + name.value;
}
document.getElementById("mybutton").onclick = ShowHelloMessage;

function animate_string(id) {
    var element = document.getElementById(id);
    var textNode = element.childNodes[0];



    var text = textNode.data;

    setInterval(function () {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}

var y = Math.ceil(Math.random() * 10);
var guess = 1;

document.getElementById("submitguess").onclick = function () {
    var x = document.getElementById("guessNumber").value;
    if (x === y || x < y) {
        //alert("well done" + guess);
        document.getElementById("demo2").innerHTML = "well done";

    }
    else {
        guess++;
        //alert("sorry not matched" + guess);
        document.getElementById("demo2").innerHTML = "not matched" + " " + "Nr of guess:" + guess;
    }
};


function showLeftDaysXmas() {
    var now = new Date();
    var thisYear = now.getFullYear();
    var Xmas = "December 25, " + thisYear;
    var nextXmas = new Date(Xmas);
    // Number of milliseconds per day
    var msPerDay = 24 * 60 * 60 * 1000;
    var daysLeft = (nextXmas.getTime()
        - now.getTime()) / msPerDay;
    daysLeft = Math.round(daysLeft);
    //alert("Number of Days until Christmas: "
    //    + daysLeft);
    document.getElementById("DaysLeftXmas").innerHTML = "Number of Days until Christmas: " + daysLeft;
}

function string_check(str1) {

    if (str1 === null || str1 === undefined || str1.substring(0, 2) === "Py") {
        return str1;
    }
    else if (str1.substring(0, 4) === "thon") {
        return str1;
    }

}

document.getElementById("Py").innerHTML = string_check("Python");

document.getElementById("thon").innerHTML = string_check("thon");



function near_100(x, y) {
    if (x != y) {
        x1 = Math.abs(x - 100);
        y1 = Math.abs(y - 100);

        if (x1 < y1) {
            return x;
        }
        if (y1 < x1) {
            return y;
        }
        return 0;
    }
    else
        return false;
}
document.getElementById("FirstNearestNr").innerHTML = "First nearest number:" + " " + near_100(90, 89);
document.getElementById("SecondNearestNr").innerHTML = "Second nearest number: " + " " + near_100(-90, -89);
document.getElementById("ThirdNearestNr").innerHTML = "Third nearest number: " + " " + near_100(90, 90);