//Task 1
let x = 1;
let y = 2;

let res1 = x + "2";
console.log(res1);
console.log(typeof res1);

let res2 = "true" + y
console.log(res2);
console.log(typeof res2);

let res3 = x < y;
console.log(res3); 
console.log(typeof res3); 

let res4 = x + y / NaN;
console.log(res4); 
console.log(typeof res4); 

//Task 2
let n = prompt("Please enter number");
if (n % 2 === 0 && n > 0) {console.log("yes")}
else {console.log("no")};
if (n % 7 === 0) {console.log("yes")}
else {console.log("no")};

//Task 3
let myArray = [12, "Hello", true, null]
alert(myArray.length);
let element5 = prompt("Please enter any variable");
myArray.push(element5); 
alert(myArray[4]);
myArray.shift();
alert(myArray);

//Task 4
let cities = ["Rome", "Lviv", "Warsaw"];
let joinedCities = cities.join("*");
alert(joinedCities);

//Task 5
let isAdult = prompt("How old are you?");
if (isAdult >= 18 ) {
    alert("Ви досягли повнолітнього віку");
} else {
    alert("Ви ще надто молоді")
}

//Task6
let a = prompt("Please indicate side a");
if (isNaN(a) || (a) <= 0) {
    alert("Incorrect data");
}
let b = prompt("Please indicate side b");
if (isNaN(b) || (b) <= 0) {
    alert("Incorrect data");
}
let c = prompt("Please indicate side c");
if (isNaN(c) || (c) <= 0) {
    alert("Incorrect data");
}
if (a**2 + b**2 == c**2 || b**2 + c**2 == a**2 || a**2 + c**2 == b**2) {
    alert("Це прямокутний трикутник");
} else (alert("Це не прямокутний трикутник"))

let p = 0.5*(Number(a)+Number(b)+Number(c));
let S = Math.sqrt(p*(p - a) * (p - b) * (p - c));
console.log(S.toFixed(3));


//Task 7
let currentDay = new Date();
let currentHour = currentDay.getHours();
if (currentHour >= 23 && currentHour < 5) {
    alert("Доброї ночі");
} else 
if (currentHour >= 5 && currentHour < 11) {
    alert("Доброго ранку");
} else
if (currentHour >= 11 && currentHour < 17) {
    alert("Доброго дня");
} else
if (currentHour >= 17 && currentHour < 23) {
    alert("Доброго вечора");
}

switch(true) {
case (currentHour >= 23 && currentHour < 5):
    alert("Доброї ночі");
    break;
case (currentHour >= 5 && currentHour < 11):
    alert("Доброго ранку");
    break;
case (currentHour >= 11 && currentHour < 17):
    alert("Доброго дня");
    break;
case (currentHour >= 17 && currentHour < 23):
    alert("Доброї ночі");
    break;
}
