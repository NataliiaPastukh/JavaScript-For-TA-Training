//Task 1
/*let div = document.getElementById('test');
//let div = document.getElementsByTagName("div");
//let div = document.querySelector(".div");
console.log(div);
console.log(div.innerHTML);
div.innerHTML = "Last";*/

//Task 2
//let img = document.getElementsByClassName("image");
//img.src = "cat.jpg";
//alert(src.innerHTML);


//Task 3
/*let divElem = document.querySelectorAll("div > p")
console.log("Selector text 0: " + divElem[0].innerHTML);
console.log("Selector text 1: " + divElem[1].innerHTML);
console.log("Selector text 2: " + divElem[2].innerHTML);*/

//Task 4
/*let list = document.getElementById("list");
let listItem = list.querySelector("li");
alert(list.firstElementChild.innerHTML);
alert(list.lastElementChild.innerHTML);
alert(list.firstElementChild.nextElementSibling.innerHTML);
alert(list.lastElementChild.previousElementSibling.innerHTML);
let item3 = list.firstElementChild.nextElementSibling;
alert(item3.nextElementSibling.innerHTML);*/

//Task 5
/*let header = document.querySelector("h1");
header.style.backgroundColor = "green";
let paragraph = document.querySelectorAll("div > p")
paragraph[0].style.fontWeight = "900";
paragraph[1].style.color = "red";
paragraph[2].style.textDecoration  = "underline";
paragraph[3].style.fontStyle  = "italic"; 
let list = document.querySelectorAll("ul li");
for (i = 0; i < list.length; i++) {list[i].style.display = "inline"};
let span = document.getElementsByTagName("span")[0];
span.style.color = "transparent";*/

//Task 6
/*let answer1 = prompt("Please enter answer 1");
let answer2 = prompt("Please enter answer 2");
let input1 = document.getElementById("input1").value = answer1;
let input2 = document.getElementById("input2").value = answer2;
let x = input1;
input1 = input2;
input2 = x;
document.getElementById('input1').value = input1;
document.getElementById('input2').value = input2;*/

//Task 7
let crEl = document.createElement.bind(document);
let body = crEl("body");
let main = crEl('main');
main.setAttribute("class", "mainClass check item");
body.appendChild(main);
let div = crEl("div");
div.setAttribute("id", "myDiv");
main.appendChild(div);
let paragraph = crEl('p');
paraContent = document.createTextNode("First paragraph");
paragraph.appendChild(paraContent);
div.appendChild(paragraph);
console.log(body);
