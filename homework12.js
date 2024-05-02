//Task 1
function checkFirstLetter(string){
    let firstLetterUppercase = /^[A-Z]/;
    return firstLetterUppercase.test(string)
}
console.log(checkFirstLetter("RegExp"));


//Task 2
function validateEmail(email) {
  let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return emailRegex.test(email);
}
console.log(validateEmail("Qmail2@gmail.com"));

//Task 3
function findString(str){
    let rex = /([d])(b+)(d)/gi;
    return result = rex.exec(str);
}
console.log(findString("cdbBdbsbz"));

//Task 4
function switchString(string){
let regEx = /(\w+)\s(\w+)/;
return string.replace(regEx, "$2, $1");
}
console.log(switchString("Java Script"));

//Task 5
function checkCardNumber() {
    let re = /^(?:\d{4}-){3}\d{4}|\d{16}?$/;
    return re.test(cardNumber); 
}
cardNumber = "9999-9999-9999-9999";
checkCardNumber(cardNumber) ? console.log(`Your card number is correct`) : console.log(`${cardNumber} is not a correct card number!`);

//Task 6
function validateEmail2(email) {
    let eRegex = /^(?![_-])(?!.*--)(\w\-)+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return eRegex.test(email);
  }
  email = "my_ma--il@gmail.com";
  validateEmail2(email) ? console.log(`Your email is  correct`) : console.log(`Your email is not correct`);

//Task 7
function validateLogin(login){
    let reGex = /^(?![0-9])[a-zA-Z0-9.]{2,10}$/;
    return reGex.test(login);
}
console.log(validateLogin("ee1.1ret3"));
console.log(/\d+\.\d+/g.exec("ee1.1ret3"));
