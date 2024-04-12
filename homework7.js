//Task 1
/*let newWindow = window.open("", "", "width = 300, height = 300");
setTimeout(() => {
    newWindow.resizeTo(500, 500);
  }, 2000);

 setTimeout(() => {
    newWindow.moveTo(200, 200);
  }, 4000);
  
  setTimeout(() => {
    newWindow.close();
  }, 6000);*/

//Task 2
/*function changeStyle () {
    document.getElementById('text').style.color = 'orange';
    document.getElementById('text').style.fontSize = '20px';
    document.getElementById('text').style.fontFamily = 'Comic Sans MS';
}*/

//Task 3
/*let body = document.querySelector("body");
function changeColorB1() {
    body.style.backgroundColor  = "blue";
  }

function changeColorB2() {
    body.style.backgroundColor  = "pink";
  }

function changeColorB2() {
    body.style.backgroundColor  = "pink";
  } 

function mouseDownB3() {
    body.style.backgroundColor  = "brown";
  }
  
  function mouseUpB3() {
    body.style.backgroundColor  = "white";
  }

  function mouseOverL3() {
    body.style.backgroundColor  = "yellow";
  }

  function  onmouseOutL3() {
    body.style.backgroundColor  = "white";
  }*/

  //Task 4
  /*function selectDel() {
    let select = document.getElementsByTagName('select')[0];
if (select && select.selectedIndex >= 0) {
    select.removeChild(select[select.selectedIndex]);
}
  }*/

//Task 5
/*let button5 = document.getElementById("btntask5");
let para = document.getElementById("test");

button5.addEventListener("click", function () {
    para.innerHTML = "I was pressed!";
  })
button5.addEventListener("mouseover", function () {
    para.innerHTML = "Mouse on me!";
  })
button5.addEventListener("mouseout", function () {
    para.innerHTML = "Mouse not on me!";
  })*/


//Task 6
/*const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function reportWindowSize() {cityDropdown
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}
  
window.onresize = reportWindowSize;
window.addEventListener("resize", reportWindowSize);*/

//Task 7
let countryDropdown = document.getElementById("country");
let cityDropdown = document.getElementById("cities");
let cities = {
  'ger': ['Dresden', 'Berlin', 'Hamburg'],
  'usa': ['New-York', 'Washington', 'Chicago'],
  'ukr': ['Kharkiv', 'Kyiv', 'Lviv']
}

countryDropdown.addEventListener('change', createCityList);
countryDropdown.addEventListener('change', showSelected);
cityDropdown.addEventListener('change', showSelected);

function createCityList (){
  cityDropdown.innerHTML = "";
  let country = countryDropdown.value;
  for (let i =0;i < cities[country].length; i++) {
    let newOption = document.createElement("option");
    newOption.innerHTML = cities[country][i];
    cityDropdown.appendChild(newOption);
  }
}

let paragraph = document.querySelector("p");
function showSelected() {
  let country = countryDropdown.options[countryDropdown.selectedIndex].text;
  let city = cityDropdown.options[cityDropdown.selectedIndex].text;;
  paragraph.innerHTML = country +", " + city;
}
