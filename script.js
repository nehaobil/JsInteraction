var fortuneButton;
var fortuneInput;
var fortuneOutput;
var text;
var restyleButton;

var rap = ["baby", "lil", "asap", "daddy", "snoop"];

document.addEventListener("DOMContentLoaded", function(){
  fortuneButton = document.getElementById("fortune-button");
  fortuneInput = document.getElementById("fortune-input");
  fortuneOutput = document.getElementById("fortune-output");
  text = document.getElementById("outputText");
  restyleButton = document.getElementById("restyle-button");

  fortuneButton.addEventListener("click", function(){
    var fortuneOutput = fortuneInput.value;
    displayRap(fortuneOutput);
  });

  restyleButton.addEventListener("click", restyle);

});

function displayRap(name) {
  var givenRap = name;
  givenRap = rap[Math.floor(Math.random() * rap.length)] + " " + givenRap;
  text.innerText = givenRap;
}

function restyle() {
  var randomRed = Math.floor(Math.random()*255);
  var randomGreen = Math.floor(Math.random()*255);
  var randomBlue = Math.floor(Math.random()*255);
  var outputColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";

  var randomRotation = -10 + (Math.random()*30)

  text.style.color = outputColor;
  text.style.transform = "rotate(" + randomRotation + "deg)";
}
