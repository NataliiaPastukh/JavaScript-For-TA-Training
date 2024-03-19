//Task 2
alert("Chutchenko");

//Task 3
//a
let dog;
let cat;
//b
dog = "Tom"
cat = "Jerry"
//c
alert(dog);
alert(cat);
//d
dog = cat;
//e
alert(dog);
alert(cat);

//Task 4
const person = {
    name: "John",
    age: 21,
    isAlive: true,
    hasChild: null,
    isHappy: undefined
};

//Task 5
let isAdult = confirm("Are you an adult?");
console.log(isAdult);

//Task 6
let myName = "Nataliia";
let mySurname = "Chutchenko";
let myGroup = "Q1";
const myBirthYear = 1986;
let isMarried = true;
console.log(myBirthYear, isMarried, myName, mySurname, myGroup);
let hasChildren;
let hasPets = null;
console.log(typeof hasChildren);
console.log(typeof hasPets);

//Task 7
let user = prompt("Please enter your login");
let email = prompt("Please enter your email");
let password = prompt("Please enter your password");
alert(`Dear ${user}, your email is ${email}, your password is ${password}`);

//Task 8
const hour = 60*60;
const day = 60*60*24;
const month = 60*60*24*30;
alert(`${hour}s in an hour, ${day}s in a day, ${month}s in a month`);
