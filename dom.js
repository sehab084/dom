//making things stand out by changing odd
var odd = document.querySelectorAll("li:nth-child(odd)");

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "#DBDBDB";
}

var button = document
  .getElementById("button")
  .addEventListener("click", buttonClick);

function buttonClick() {
  console.log("button clicked");
  document.getElementById("header-title").textContent = "Changed";
  document.querySelector("#main").style.backgroundColor = "#DBDBDB";
}
