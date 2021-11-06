var questionCount = 0;
var result1Score = 0; //Mini-USB
var result2Score = 0; //Micro-USB
var result3Score = 0; //USB-C
var result4Score = 0; //Lightning Cable
var result5Score = 0; //Laptop Charger
var result6Score = 0; //USB Micro-B Super Speed

document.getElementById("head").style.color = "#242b26";

var result = document.getElementById("result");
var resultText = document.getElementById("resultText");
var otherResult1 = document.getElementById("otherResult1");
var otherResult2 = document.getElementById("otherResult2");
var otherResult3 = document.getElementById("otherResult3");
var otherResult4 = document.getElementById("otherResult4");
var otherResult5 = document.getElementById("otherResult5");
var otherResult6 = document.getElementById("otherResult6");
var resultsBlock = document.getElementById("resultsBlock");
var resultsButton = document.getElementById("resultsButton");
var reset = document.getElementById("reset");

var q1a1 = document.getElementById("q1a1"); // 5 2
var q1a2 = document.getElementById("q1a2"); // 4 3
var q1a3 = document.getElementById("q1a3"); // 6 1

var q2a1 = document.getElementById("q2a1"); // 6
var q2a2 = document.getElementById("q2a2"); // 2
var q2a3 = document.getElementById("q2a3"); // 3
var q2a4 = document.getElementById("q2a4"); // 4
var q2a5 = document.getElementById("q2a5"); // 5
var q2a6 = document.getElementById("q2a6"); // 1

var q3a1 = document.getElementById("q3a1"); // 6 3
var q3a2 = document.getElementById("q3a2"); // 4 2
var q3a3 = document.getElementById("q3a3"); // 5 1

var q4a1 = document.getElementById("q4a1"); // 3
var q4a2 = document.getElementById("q4a2"); // 4 2
var q4a3 = document.getElementById("q4a3"); // 6
var q4a4 = document.getElementById("q4a4"); // 5
var q4a5 = document.getElementById("q4a5"); // 1

var q5a1 = document.getElementById("q5a1"); // 3
var q5a2 = document.getElementById("q5a2"); // 4
var q5a3 = document.getElementById("q5a3"); // 5 6 1
var q5a4 = document.getElementById("q5a4"); // 2

q1a1.addEventListener("click", result);
q1a1.addEventListener("click", result2);
q1a2.addEventListener("click", result4);
q1a2.addEventListener("click", result3);
q1a3.addEventListener("click", result6);
q1a3.addEventListener("click", result1);
q1a1.addEventListener("click", questionAnswered);
q1a2.addEventListener("click", questionAnswered);
q1a3.addEventListener("click", questionAnswered);

q2a1.addEventListener("click", result6);
q2a2.addEventListener("click", result2);
q2a3.addEventListener("click", result3);
q2a4.addEventListener("click", result4);
q2a5.addEventListener("click", result5);
q2a6.addEventListener("click", result1);
q2a1.addEventListener("click", questionAnswered);
q2a2.addEventListener("click", questionAnswered);
q2a3.addEventListener("click", questionAnswered);
q2a4.addEventListener("click", questionAnswered);
q2a5.addEventListener("click", questionAnswered);
q2a6.addEventListener("click", questionAnswered);

q3a1.addEventListener("click", result6);
q3a1.addEventListener("click", result3);
q3a2.addEventListener("click", result4);
q3a2.addEventListener("click", result2);
q3a3.addEventListener("click", result5);
q3a3.addEventListener("click", result1);
q3a1.addEventListener("click", questionAnswered);
q3a2.addEventListener("click", questionAnswered);
q3a3.addEventListener("click", questionAnswered);

q4a1.addEventListener("click", result3);
q4a2.addEventListener("click", result4);
q4a2.addEventListener("click", result2);
q4a3.addEventListener("click", result6);
q4a4.addEventListener("click", result5);
q4a5.addEventListener("click", result1);
q4a1.addEventListener("click", questionAnswered);
q4a2.addEventListener("click", questionAnswered);
q4a3.addEventListener("click", questionAnswered);
q4a4.addEventListener("click", questionAnswered);
q4a5.addEventListener("click", questionAnswered);

q5a1.addEventListener("click", result3);
q5a2.addEventListener("click", result4);
q5a3.addEventListener("click", result5);
q5a3.addEventListener("click", result6);
q5a3.addEventListener("click", result1);
q5a4.addEventListener("click", result2);
q5a1.addEventListener("click", questionAnswered);
q5a2.addEventListener("click", questionAnswered);
q5a3.addEventListener("click", questionAnswered);
q5a4.addEventListener("click", questionAnswered);

function questionAnswered() {
  questionCount += 1;
  if (questionCount >= 5) {
    document.getElementById("resultsButton").style.cursor = "allowed";
    if (result1Score >= 3) {
      result.innerHTML = "Mini-USB: It's a " + result1Score * 20 + "% match!";
      resultText.innerHTML =
        "You're an old soul and have been around for while. You prefer to go about your work slowly and don't take easily to change. However, sometimes you accept that something, or someone, better has come along.";
    } else if (result2Score >= 3) {
      result.innerHTML = "Micro-USB: It's a " + result2Score * 20 + "% match!";
      resultText.innerHTML =
        "You're young and have only been around for while, but you're making the most of it. You prefer to go about your work leisurely and don't take easily to change. There's nothing super unique about you, but that's what makes you special";
    } else if (result3Score >= 3) {
      result.innerHTML = "USB-C: It's a " + result3Score * 20 + "% match!";
      resultText.innerHTML =
        "You're a kid at heart and like to move around a bit. You prefer to live your life at a fast pace and are always ready for something new. You're considered the classy one among your friends.";
    } else if (result4Score >= 3) {
      result.innerHTML = "Lightning: It's a " + result4Score * 20 + "% match!";
      resultText.innerHTML =
        "You're a teenager on the inside, and a popular one at that. Sometimes you prefer to stay at home, but aren't afraid to head out, taking life at a leisurely pace. When times are changing, you're flexible but not fast to react.";
    } else if (result5Score >= 3) {
      result.innerHTML =
        "Laptop charger: It's a " + result5Score * 20 + "% match!";
      resultText.innerHTML =
        "Is this even a cable? Anyways, you're one-of-a-kind and love to move around. At heart, you're an adult, so it takes a bit for you to change your ways.";
    } else if (result6Score >= 3) {
      result.innerHTML =
        "Mirco-USB SuperSpeed: It's a " + result6Score * 20 + "% match!";
      resultText.innerHTML =
        "Have you even heard of this cable? Well probably not, but that's what makes it quirky, just like you. As a young adult, you're slowly adjusting to change. It's as fast as possible for you, even if you like staying home.";
    } else {
      result.innerHTML = "Multi charging: A bit of everything";
      resultText.innerHTML =
        "You have many different ways of living your life, and that's okay. You can't be put into a box, and decided to adapt!";
    }
    otherResult1.innerHTML = "Mini-USB: " + result1Score * 20 + "% match";
    otherResult2.innerHTML = "Micro-USB: " + result2Score * 20 + "% match";
    otherResult3.innerHTML = "USB-C: " + result3Score * 20 + "% match";
    otherResult4.innerHTML = "Lightning: " + result4Score * 20 + "% match";
    otherResult5.innerHTML = "Laptop charger: " + result5Score * 20 + "% match";
    otherResult6.innerHTML =
      "Micro-USB SuperSpeed: " + result6Score * 20 + "% match";
  }
}

function result1() {
  result1Score += 1;
}

function result2() {
  result2Score += 1;
}

function result3() {
  result3Score += 1;
}

function result4() {
  result4Score += 1;
}

function result5() {
  result5Score += 1;
}

function result6() {
  result6Score += 1;
}

function disableq1a1() {
  document.getElementById("q1a1").disabled = "true";
  document.getElementById("q1a1").style.cursor = "not-allowed";
  document.getElementById("q1a1").style.color = "#F6FFEE";
  document.getElementById("q1a1").style.background = "#F48882";
  document.getElementById("q1a1").style.opacity = "0.8";
  document.getElementById("q1a2").style.cursor = "not-allowed";
  document.getElementById("q1a2").style.opacity = "0.3";
  document.getElementById("q1a3").style.cursor = "not-allowed";
  document.getElementById("q1a3").style.opacity = "0.3";
}
function disableq1a2() {
  document.getElementById("q1a2").disabled = "true";
  document.getElementById("q1a2").style.cursor = "not-allowed";
  document.getElementById("q1a2").style.color = "#F6FFEE";
  document.getElementById("q1a2").style.background = "#F48882";
  document.getElementById("q1a1").style.cursor = "not-allowed";
  document.getElementById("q1a1").style.opacity = "0.3";
  document.getElementById("q1a2").style.cursor = "not-allowed";
  document.getElementById("q1a2").style.opacity = "0.8";
  document.getElementById("q1a3").style.cursor = "not-allowed";
  document.getElementById("q1a3").style.opacity = "0.3";
}
function disableq1a3() {
  document.getElementById("q1a3").disabled = "true";
  document.getElementById("q1a3").style.cursor = "not-allowed";
  document.getElementById("q1a3").style.color = "#F6FFEE";
  document.getElementById("q1a3").style.background = "#F48882";
  document.getElementById("q1a1").style.cursor = "not-allowed";
  document.getElementById("q1a1").style.opacity = "0.3";
  document.getElementById("q1a2").style.cursor = "not-allowed";
  document.getElementById("q1a2").style.opacity = "0.3";
  document.getElementById("q1a3").style.cursor = "not-allowed";
  document.getElementById("q1a3").style.opacity = "0.8";
}

function disableq2a1() {
  document.getElementById("q2a1").disabled = "true";
  document.getElementById("q2a1").style.cursor = "not-allowed";
  document.getElementById("q2a1").style.color = "#F6FFEE";
  document.getElementById("q2a1").style.background = "#F48882";
  document.getElementById("q2a1").style.cursor = "not-allowed";
  document.getElementById("q2a1").style.opacity = "0.8";
  document.getElementById("q2a2").style.cursor = "not-allowed";
  document.getElementById("q2a2").style.opacity = "0.3";
  document.getElementById("q1a3").style.cursor = "not-allowed";
  document.getElementById("q2a3").style.opacity = "0.3";
  document.getElementById("q2a4").style.cursor = "not-allowed";
  document.getElementById("q2a4").style.opacity = "0.3";
  document.getElementById("q2a5").style.cursor = "not-allowed";
  document.getElementById("q2a5").style.opacity = "0.3";
  document.getElementById("q2a6").style.cursor = "not-allowed";
  document.getElementById("q2a6").style.opacity = "0.3";
}
function disableq2a2() {
  document.getElementById("q2a2").disabled = "true";
  document.getElementById("q2a2").style.cursor = "not-allowed";
  document.getElementById("q2a2").style.color = "#F6FFEE";
  document.getElementById("q2a2").style.background = "#F48882";
  document.getElementById("q2a1").style.cursor = "not-allowed";
  document.getElementById("q2a1").style.opacity = "0.3";
  document.getElementById("q2a2").style.cursor = "not-allowed";
  document.getElementById("q2a2").style.opacity = "0.8";
  document.getElementById("q1a3").style.cursor = "not-allowed";
  document.getElementById("q2a3").style.opacity = "0.3";
  document.getElementById("q2a4").style.cursor = "not-allowed";
  document.getElementById("q2a4").style.opacity = "0.3";
  document.getElementById("q2a5").style.cursor = "not-allowed";
  document.getElementById("q2a5").style.opacity = "0.3";
  document.getElementById("q2a6").style.cursor = "not-allowed";
  document.getElementById("q2a6").style.opacity = "0.3";
}
function disableq2a3() {
  document.getElementById("q2a3").disabled = "true";
  document.getElementById("q2a3").style.cursor = "not-allowed";
  document.getElementById("q2a3").style.color = "#F6FFEE";
  document.getElementById("q2a3").style.background = "#F48882";
  document.getElementById("q2a1").style.cursor = "not-allowed";
  document.getElementById("q2a1").style.opacity = "0.3";
  document.getElementById("q2a2").style.cursor = "not-allowed";
  document.getElementById("q2a2").style.opacity = "0.3";
  document.getElementById("q1a3").style.cursor = "not-allowed";
  document.getElementById("q2a3").style.opacity = "0.8";
  document.getElementById("q2a4").style.cursor = "not-allowed";
  document.getElementById("q2a4").style.opacity = "0.3";
  document.getElementById("q2a5").style.cursor = "not-allowed";
  document.getElementById("q2a5").style.opacity = "0.3";
  document.getElementById("q2a6").style.cursor = "not-allowed";
  document.getElementById("q2a6").style.opacity = "0.3";
}
function disableq2a4() {
  document.getElementById("q2a4").disabled = "true";
  document.getElementById("q2a4").style.cursor = "not-allowed";
  document.getElementById("q2a4").style.color = "#F6FFEE";
  document.getElementById("q2a4").style.background = "#F48882";
  document.getElementById("q2a1").style.cursor = "not-allowed";
  document.getElementById("q2a1").style.opacity = "0.3";
  document.getElementById("q2a2").style.cursor = "not-allowed";
  document.getElementById("q2a2").style.opacity = "0.3";
  document.getElementById("q1a3").style.cursor = "not-allowed";
  document.getElementById("q2a3").style.opacity = "0.3";
  document.getElementById("q2a4").style.cursor = "not-allowed";
  document.getElementById("q2a4").style.opacity = "0.8";
  document.getElementById("q2a5").style.cursor = "not-allowed";
  document.getElementById("q2a5").style.opacity = "0.3";
  document.getElementById("q2a6").style.cursor = "not-allowed";
  document.getElementById("q2a6").style.opacity = "0.3";
}
function disableq2a5() {
  document.getElementById("q2a5").disabled = "true";
  document.getElementById("q2a5").style.cursor = "not-allowed";
  document.getElementById("q2a5").style.color = "#F6FFEE";
  document.getElementById("q2a5").style.background = "#F48882";
  document.getElementById("q2a1").style.cursor = "not-allowed";
  document.getElementById("q2a1").style.opacity = "0.3";
  document.getElementById("q2a2").style.cursor = "not-allowed";
  document.getElementById("q2a2").style.opacity = "0.3";
  document.getElementById("q1a3").style.cursor = "not-allowed";
  document.getElementById("q2a3").style.opacity = "0.3";
  document.getElementById("q2a4").style.cursor = "not-allowed";
  document.getElementById("q2a4").style.opacity = "0.3";
  document.getElementById("q2a5").style.cursor = "not-allowed";
  document.getElementById("q2a5").style.opacity = "0.8";
  document.getElementById("q2a6").style.cursor = "not-allowed";
  document.getElementById("q2a6").style.opacity = "0.3";
}
function disableq2a6() {
  document.getElementById("q2a6").disabled = "true";
  document.getElementById("q2a6").style.cursor = "not-allowed";
  document.getElementById("q2a6").style.color = "#F6FFEE";
  document.getElementById("q2a6").style.background = "#F48882";
  document.getElementById("q2a1").style.cursor = "not-allowed";
  document.getElementById("q2a1").style.opacity = "0.3";
  document.getElementById("q2a2").style.cursor = "not-allowed";
  document.getElementById("q2a2").style.opacity = "0.3";
  document.getElementById("q1a3").style.cursor = "not-allowed";
  document.getElementById("q2a3").style.opacity = "0.3";
  document.getElementById("q2a4").style.cursor = "not-allowed";
  document.getElementById("q2a4").style.opacity = "0.3";
  document.getElementById("q2a5").style.cursor = "not-allowed";
  document.getElementById("q2a5").style.opacity = "0.3";
  document.getElementById("q2a6").style.cursor = "not-allowed";
  document.getElementById("q2a6").style.opacity = "0.8";
}

function disableq3a1() {
  document.getElementById("q3a1").disabled = "true";
  document.getElementById("q3a1").style.cursor = "not-allowed";
  document.getElementById("q3a1").style.color = "#F6FFEE";
  document.getElementById("q3a1").style.background = "#F48882";
  document.getElementById("q3a1").style.cursor = "not-allowed";
  document.getElementById("q3a1").style.opacity = "0.8";
  document.getElementById("q3a2").style.cursor = "not-allowed";
  document.getElementById("q3a2").style.opacity = "0.3";
  document.getElementById("q3a3").style.cursor = "not-allowed";
  document.getElementById("q3a3").style.opacity = "0.3";
}
function disableq3a2() {
  document.getElementById("q3a2").disabled = "true";
  document.getElementById("q3a2").style.cursor = "not-allowed";
  document.getElementById("q3a2").style.color = "#F6FFEE";
  document.getElementById("q3a2").style.background = "#F48882";
  document.getElementById("q3a1").style.cursor = "not-allowed";
  document.getElementById("q3a1").style.opacity = "0.3";
  document.getElementById("q3a2").style.cursor = "not-allowed";
  document.getElementById("q3a2").style.opacity = "0.8";
  document.getElementById("q3a3").style.cursor = "not-allowed";
  document.getElementById("q3a3").style.opacity = "0.3";
}
function disableq3a3() {
  document.getElementById("q3a3").disabled = "true";
  document.getElementById("q3a3").style.cursor = "not-allowed";
  document.getElementById("q3a3").style.color = "#F6FFEE";
  document.getElementById("q3a3").style.background = "#F48882";
  document.getElementById("q3a1").style.cursor = "not-allowed";
  document.getElementById("q3a1").style.opacity = "0.3";
  document.getElementById("q3a2").style.cursor = "not-allowed";
  document.getElementById("q3a2").style.opacity = "0.3";
  document.getElementById("q3a3").style.cursor = "not-allowed";
  document.getElementById("q3a3").style.opacity = "0.8";
}

function disableq4a1() {
  document.getElementById("q4a1").disabled = "true";
  document.getElementById("q4a1").style.cursor = "not-allowed";
  document.getElementById("q4a1").style.color = "#F6FFEE";
  document.getElementById("q4a1").style.background = "#F48882";
  document.getElementById("q4a1").style.cursor = "not-allowed";
  document.getElementById("q4a1").style.opacity = "0.8";
  document.getElementById("q4a2").style.cursor = "not-allowed";
  document.getElementById("q4a2").style.opacity = "0.3";
  document.getElementById("q4a3").style.cursor = "not-allowed";
  document.getElementById("q4a3").style.opacity = "0.3";
  document.getElementById("q4a4").style.cursor = "not-allowed";
  document.getElementById("q4a4").style.opacity = "0.3";
  document.getElementById("q4a5").style.cursor = "not-allowed";
  document.getElementById("q4a5").style.opacity = "0.3";
}
function disableq4a2() {
  document.getElementById("q4a2").disabled = "true";
  document.getElementById("q4a2").style.cursor = "not-allowed";
  document.getElementById("q4a2").style.color = "#F6FFEE";
  document.getElementById("q4a2").style.background = "#F48882";
  document.getElementById("q4a1").style.cursor = "not-allowed";
  document.getElementById("q4a1").style.opacity = "0.3";
  document.getElementById("q4a2").style.cursor = "not-allowed";
  document.getElementById("q4a2").style.opacity = "0.8";
  document.getElementById("q4a3").style.cursor = "not-allowed";
  document.getElementById("q4a3").style.opacity = "0.3";
  document.getElementById("q4a4").style.cursor = "not-allowed";
  document.getElementById("q4a4").style.opacity = "0.3";
  document.getElementById("q4a5").style.cursor = "not-allowed";
  document.getElementById("q4a5").style.opacity = "0.3";
}
function disableq4a3() {
  document.getElementById("q4a3").disabled = "true";
  document.getElementById("q4a3").style.cursor = "not-allowed";
  document.getElementById("q4a3").style.color = "#F6FFEE";
  document.getElementById("q4a3").style.background = "#F48882";
  document.getElementById("q4a1").style.cursor = "not-allowed";
  document.getElementById("q4a1").style.opacity = "0.3";
  document.getElementById("q4a2").style.cursor = "not-allowed";
  document.getElementById("q4a2").style.opacity = "0.3";
  document.getElementById("q4a3").style.cursor = "not-allowed";
  document.getElementById("q4a3").style.opacity = "0.8";
  document.getElementById("q4a4").style.cursor = "not-allowed";
  document.getElementById("q4a4").style.opacity = "0.3";
  document.getElementById("q4a5").style.cursor = "not-allowed";
  document.getElementById("q4a5").style.opacity = "0.3";
}
function disableq4a4() {
  document.getElementById("q4a4").disabled = "true";
  document.getElementById("q4a4").style.cursor = "not-allowed";
  document.getElementById("q4a4").style.color = "#F6FFEE";
  document.getElementById("q4a4").style.background = "#F48882";
  document.getElementById("q4a1").style.cursor = "not-allowed";
  document.getElementById("q4a1").style.opacity = "0.3";
  document.getElementById("q4a2").style.cursor = "not-allowed";
  document.getElementById("q4a2").style.opacity = "0.3";
  document.getElementById("q4a3").style.cursor = "not-allowed";
  document.getElementById("q4a3").style.opacity = "0.3";
  document.getElementById("q4a4").style.cursor = "not-allowed";
  document.getElementById("q4a4").style.opacity = "0.8";
  document.getElementById("q4a5").style.cursor = "not-allowed";
  document.getElementById("q4a5").style.opacity = "0.3";
}
function disableq4a5() {
  document.getElementById("q4a5").disabled = "true";
  document.getElementById("q4a5").style.cursor = "not-allowed";
  document.getElementById("q4a5").style.color = "#F6FFEE";
  document.getElementById("q4a5").style.background = "#F48882";
  document.getElementById("q4a1").style.cursor = "not-allowed";
  document.getElementById("q4a1").style.opacity = "0.3";
  document.getElementById("q4a2").style.cursor = "not-allowed";
  document.getElementById("q4a2").style.opacity = "0.3";
  document.getElementById("q4a3").style.cursor = "not-allowed";
  document.getElementById("q4a3").style.opacity = "0.3";
  document.getElementById("q4a4").style.cursor = "not-allowed";
  document.getElementById("q4a4").style.opacity = "0.3";
  document.getElementById("q4a5").style.cursor = "not-allowed";
  document.getElementById("q4a5").style.opacity = "0.8";
}

function disableq5a1() {
  document.getElementById("q5a1").disabled = "true";
  document.getElementById("q5a1").style.cursor = "not-allowed";
  document.getElementById("q5a1").style.color = "#F6FFEE";
  document.getElementById("q5a1").style.background = "#F48882";
  document.getElementById("q5a1").style.cursor = "not-allowed";
  document.getElementById("q5a1").style.opacity = "0.8";
  document.getElementById("q5a2").style.cursor = "not-allowed";
  document.getElementById("q5a2").style.opacity = "0.3";
  document.getElementById("q5a3").style.cursor = "not-allowed";
  document.getElementById("q5a3").style.opacity = "0.3";
  document.getElementById("q5a4").style.cursor = "not-allowed";
  document.getElementById("q5a4").style.opacity = "0.3";
}
function disableq5a2() {
  document.getElementById("q5a2").disabled = "true";
  document.getElementById("q5a2").style.cursor = "not-allowed";
  document.getElementById("q5a2").style.color = "#F6FFEE";
  document.getElementById("q5a2").style.background = "#F48882";
  document.getElementById("q5a1").style.cursor = "not-allowed";
  document.getElementById("q5a1").style.opacity = "0.3";
  document.getElementById("q5a2").style.cursor = "not-allowed";
  document.getElementById("q5a2").style.opacity = "0.8";
  document.getElementById("q5a3").style.cursor = "not-allowed";
  document.getElementById("q5a3").style.opacity = "0.3";
  document.getElementById("q5a4").style.cursor = "not-allowed";
  document.getElementById("q5a4").style.opacity = "0.3";
}
function disableq5a3() {
  document.getElementById("q5a3").disabled = "true";
  document.getElementById("q5a3").style.cursor = "not-allowed";
  document.getElementById("q5a3").style.color = "#F6FFEE";
  document.getElementById("q5a3").style.background = "#F48882";
  document.getElementById("q5a1").style.cursor = "not-allowed";
  document.getElementById("q5a1").style.opacity = "0.3";
  document.getElementById("q5a2").style.cursor = "not-allowed";
  document.getElementById("q5a2").style.opacity = "0.3";
  document.getElementById("q5a3").style.cursor = "not-allowed";
  document.getElementById("q5a3").style.opacity = "0.8";
  document.getElementById("q5a4").style.cursor = "not-allowed";
  document.getElementById("q5a4").style.opacity = "0.3";
}
function disableq5a4() {
  document.getElementById("q5a4").disabled = "true";
  document.getElementById("q5a4").style.cursor = "not-allowed";
  document.getElementById("q5a4").style.color = "#F6FFEE";
  document.getElementById("q5a4").style.background = "#F48882";
  document.getElementById("q5a1").style.cursor = "not-allowed";
  document.getElementById("q5a1").style.opacity = "0.3";
  document.getElementById("q5a2").style.cursor = "not-allowed";
  document.getElementById("q5a2").style.opacity = "0.3";
  document.getElementById("q5a3").style.cursor = "not-allowed";
  document.getElementById("q5a3").style.opacity = "0.3";
  document.getElementById("q5a4").style.cursor = "not-allowed";
  document.getElementById("q5a4").style.opacity = "0.8";
}

function disableGet() {
  if (questionCount >= 5) {
    document.getElementById("resultsButton").style.display = "none";
    document.getElementById("resultsBlock").style.display = "block";
    document.getElementById("reset").style.display = "block";
  }
}
