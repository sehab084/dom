// EXAMINE THE DOCUMENT OBJECT //

//console.dir(document);

//console.dir(document.URL);
//document.title = "Hello world";
//console.log(document.all[10]);
//document.all[15].textContent = "my bad";
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';

// GETELEMENTBYID //
// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");
// header.style.borderBottom = "solid 2px #003";
// //console.log(headerTitle);
// //console.log(headerTitle.innerText);
// headerTitle.innerHTML = "<h3>This is innerHTML</h3>";
// headerTitle.style.borderTop = "solid 1px #fff";
// var iteams = document.getElementsByClassName("list-group-item");
//console.log(iteams);
//console.log(iteams[1]);
//iteams[3].style.fontWeight = "bold";

// for (var i = 0; i < iteams.length; i++) {
//   iteams[i].style.fontWeight = "bold";
//   console.log(i);
// }
//query selector
// var header = document.querySelector("#main-header");
// console.log(header);

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// var changeSecondTitle = document.querySelectorAll(".title");
// console.log(changeSecondTitle[1]);
// changeSecondTitle[1].textContent = "make me";

//making things stand out by changing odd
var odd = document.querySelectorAll("li:nth-child(odd)");

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "#f2f2f2";
}

var newDiv = document.createElement("div");
var newText = document.createTextNode("Hello World");
newDiv.appendChild(newText);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

container.insertBefore(newDiv, h1);

console.log(newDiv);

c;
