let val = document.getElementById("value");
let warning = document.getElementById("warning");
let btn = document.querySelectorAll("button");
let value = val.innerText;

val.style.fontSize = "80px";
val.style.fontWeight = "500px";
val.style.marginBottom = "32px";

btn[0].addEventListener("click", function () {
  //   this.innerHTML = "clicked";
  val.style.color = "black";
  val.innerText = parseInt(val.innerText) + 1;
  let value = parseInt(val.innerText);
  //   value++;
  if (value >= 20) {
    alert("value is maximum.!");
    val.innerText = "20";
    val.style.color = "red";
  }
});

btn[1].addEventListener("click", function () {
  val.style.color = "black";
  val.innerText = parseInt(val.innerText) - 1;
  let value = parseInt(val.innerText);
  //   value++;
  if (value <= 0) {
    alert("value is manimum.!");
    val.innerText = "0";
    val.style.color = "red";
  }
});

let b = document.getElementsByClassName("b");
b[0].addEventListener("click", function () {
  document.getElementsByClassName("c-modal")[0].style.display = "block";
});
