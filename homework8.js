//Task 1
let arr = ["Tom", "Sam", "Ray", "Bob"];
const [firstName, secondName, thirdName, ...rest] = arr;
    console.log(firstName);
    console.log(secondName);
    console.log(rest);

//Task 2
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
 };
 const {names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4]} = data;
 console.log(name2); // "Tom"
 console.log(age2); // 24
 console.log(name4); // "Bob"
 console.log(age4); // 26 

 //Task 3
function mul(...numbers) {
    let product = 1;
      for (let i of numbers) {
         if (typeof i === 'number') {
            product *= i;
            return product;
         } else {
         return 0};
    } 
}

console.log(mul(2, "str", 2, 3, true)); 
console.log(mul(null, "str", false, true));

 //Task 4
 let server = {
    data: 0,
    convertToString: function(callback) {
       callback(() => {
          return this.data + "";
       });
    }
 };
 let client = {
    server: server,
    result: "",
    calc: function(data) {
       this.server.data = data;
       this.server.convertToString(this.notification());
    },
    notification: function() {
       return (callback => {
          this.result = callback();
       })
    }
 };
 client.calc(123);
 console.log(client.result); // "123"
 console.log(typeof client.result); // "string"

 //Task 5
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
function mapBuilder () {
    let map = new Map();
        for(let i = 0; i < keys.length; i++) {
        map.set(keys[i], values[i]);
    } 
    return map
}
let map = mapBuilder(keys, values);

console.log(map)
console.log(map.size); 
console.log(map.get(2));  

 
