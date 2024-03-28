//Task1
let arr = [2, 3, 4, 5];
let product = 1;
let i = 0;
for (i = 0; product = product * arr[i]; i++) {
    console.log(product)
}

while (arr[i]) {
    product = product * arr[i];
    console.log(product); 
    i++;
}

//Task 2
for (let x = 0; x <= 15; x++) 
if(x % 2 == 0) { 
        alert(x + " is even");
} else {
    alert(x + " is odd");
}

//Task 3
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
let randArray = [i];
for (let i = 0; i < 5; i++){
    randArray[i] = randomInteger(1, 500);
}
console.log(randArray);

//Task 4
let a = +prompt("Enter a base");
let b = +prompt("Enter an exponensial");
let raiseToDegree = Math.pow(a, b)
if (Number.isInteger(a) && Number.isInteger(b)) {    
    alert(raiseToDegree);
} else {
    alert("Invalid data")
}

//Task 5
array = [4,3,7,1];
function findMin() {
    return Math.min(...array);
  }
    alert(findMin(array)); 


//Task 6
let list = [33, 45, 45, 24];
let uniqueList = list.filter(function (x, i, a) { 
    return a.indexOf(x) == i; 
}); 
if (JSON.stringify(list) === JSON.stringify(uniqueList)) {
    alert(true)
} else {
    alert(false)
}
  
//Task 7
let myArray = [];
function lastElem (myArray, x) {
    return r = myArray.slice(-x)
}
console.log(lastElem([4, 5, 6, 8, 9], 2));

//Task 8
let str = "";
function uppercase(str) {
    return result = str.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
}
console.log(uppercase("i love java script"));
 