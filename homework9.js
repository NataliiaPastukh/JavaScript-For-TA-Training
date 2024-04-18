//Task 1
/*function getPromise(message, delay) {
    const promise = new Promise(function(resolve){
        setTimeout(function(){
            resolve(message);
        }, delay)
    })
    return promise;
}

getPromise("test promise", 2000).then(function(data) {
    console.log(data);
    });*/

//Task2

/*function calcArrProduct(arr){
    let numbers = [];
    const promise = new Promise (function (resolve, reject) {
        for (i of arr) {
            if (typeof(i) === 'number'){
                numbers.push(i);
            }else{
                reject('Error! Incorrect array!');
            }
        }
        let product = numbers.reduce((acc,value) => acc*value,1)
        resolve(product);
    })
    return promise;
}

calcArrProduct([3,4,5]).then(result => console.log(result));
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));*/

//Task3
/*const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
let time = Math.floor((Math.random() * 2000) + 1);
function showNumbers() {
    let numbers = [];
	for (let i = 0; i<11; i++){
        numbers.push(delay(i, time));
     }
    Promise.resolve(numbers).then(function (result) {
        console.log(result);
     });
     for (i of numbers){
        i.then(i => console.log(i));
    }
};
showNumbers();*/

//Task4
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
let time = Math.floor((Math.random() * 2000) + 1);
async function showNumbers() {
    let numbers = [];
	for (let i = 0; i<11; i++){
        numbers.push(delay(i, time));
     }
    for (i of numbers){
        let result = await i;
        console.log(result);
    }
};
showNumbers();