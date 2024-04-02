//Task 1
let width = prompt("Please enter the width of rectangular");
let height = prompt("Please enter the height of rectangular");
let s = width * height;
function calcRectangleArea() {
    return s;
}
try {
    if(s > 0) alert(calcRectangleArea())
    if(width.trim() == "") throw "is empty";
    if(isNaN(width)) throw "is not a number";
    if(width < 0) throw "is a negative number";
    if(width == 0) throw "cannot be 0";
    width = Number(width);
    if(height.trim() == "") throw "is empty";
    if(isNaN(height)) throw "is not a number";
    if(height < 0) throw "is a negative number";
    if(height == 0) throw "cannot be 0";
    height = Number(height); 
  }
  catch(err) {
    alert("Input " + err + ". Please enter a positive number");
  } 
  
//Task 2
let age = prompt("How old are you?");
function checkAge() {
    return "Enjoy the film!"
};
if (Number(age) >= 14) {
    alert(checkAge())
    }
try {
    if (age.trim() == "") throw "The field is empty! Please enter your age";
    if (isNaN(age)) throw "This is not a number! Please enter your age";
    if(age < 14) throw "You are too young!";
}
catch(err) {
    alert(err);
}

//Task 3
class MonthException {
    constructor() {
      this.message  = "Incorrect month number";
      this.name = "MonthException";
    }
  }

let month = prompt("Please enter a month number");
function showMonthName (){
    switch (Number(month)) {
        case 1:
            return "Jan";
        case 2:
            return "Feb"
        case 3:
            return "Mar"
        case 3:
            return "Apr"
        case 5:
            return "May"
        case 6:
            return "Jun"
        case 7:
            return "Jul"
        case 8:
            return "Aug"
        case 9:
            return "Sep"
        case 10:
            return "Oct"
        case 11:
            return "Nov"
        case 12:
            return "Dec";
        }
} 
alert (showMonthName(Number(month)));
try{
    if (month<=0) throw new MonthException;
    if (month > 12) throw new MonthException;
    if(month.trim() == "") throw new MonthException;
    if(isNaN(month)) throw new MonthException;

}
catch(error) {
    alert(error.name);
    alert(error.message);
}

//Task 4
let usersID = [
    {id: 1},
    {id: 2},
    {id: -3}];
let positiveIDs = [];
let negativeIDs = [];
let positiveID = usersID.filter (function(value){ if(value.id > 0)
    return positiveIDs.push(value.id);
});
function showUsers(){
    return positiveIDs
}
alert(showUsers());

let negativeID = usersID.filter (function(value){ if(value.id < 0)
    return negativeIDs.push(value.id);})
function shownegUsers(){
        return negativeIDs
    }
alert("ID must not be negative: "+ shownegUsers());