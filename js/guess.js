let randomValue = Math.floor(Math.random() * 20);
function guessNumber() {
  var value = document.getElementsByClassName("number")[0].value;
  if (value == randomValue) {
    alert("congratulation");
  } else {
    alert("loser");
  }
}
