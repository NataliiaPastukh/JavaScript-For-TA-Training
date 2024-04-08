//Task 1
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};

function propsCount(object){
    return Object.keys(object).length;
}
alert(propsCount(mentor));

//Task 2
let user = { 
    id: 123, 
    name: "Івасик",
    surname: "Телесик",
    age: 27,
    wife: "Оленка"
};

console.log(Object.keys(user));
console.log(Object.values(user));

//***********************************var 2*************************
/*function showProps(user){
    return keys = Object.keys(user);
};
let keyArray = Array.from(showProps(user));
console.log(keyArray);

function showValues(user){
    return values = Object.values(user);
}
let valueArray = Array.from(showValues(user));
console.log(valueArray);*/


//Task 3
class Person{
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        return (this.name + " " + this.surname);
    }
}

class Student extends Person{
    constructor (name, surname, year){
        super(name, surname);
        this.year = year;
    }
    showFullName(middlename){
        super.showFullName();
        this.middlename = middlename;
    return (super.showFullName() + " " + this.middlename);    
    }
    showCourse(course){
        let currentTime = new Date();
        let currentYear = currentTime.getFullYear();
        return course = currentYear - this.year;
    }
}
const stud1 = new Student("Petrenko", "Petro", 2022);
console.log(stud1.showFullName("Petrovych")); 
console.log("Current course: " + stud1.showCourse()); 

//Task 4
class Worker{
        constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;    
    }
    showSalary(salary){
        this.salary = salary;
        this.salary = this.dayRate * this.workingDays;
        return salary;
    }
    #experience = 1.2;
    get experience() {
        return this.#experience;
    }
    set experience(value) {
        this.#experience = value;
    }
    showSalaryWithExperience(salaryWithExp){
        this.salaryWithExp = salaryWithExp;
        this.salaryWithExp = this.salary * this.#experience;
        return salaryWithExp;
    }
   
    showNewSalaryWithExperience(salaryWithExpNew){
        this.salaryWithExpNew = salaryWithExpNew;
        this.salaryWithExpNew = this.salary * experience;
        return salaryWithExpNew;
    }
}          

worker1 = new Worker("Jon Snow", 10, 5);
worker1.showSalary();
worker1.showSalaryWithExperience()
experience = 1.5;
worker1.showNewSalaryWithExperience()
console.log(worker1.fullName + ", " + "Experience: " + worker1.salaryWithExp + ", " +  "New Experience: " + worker1.salaryWithExpNew);

worker2 = new Worker("Rob Rain", 5, 5);
worker2.showSalary();
worker2.showSalaryWithExperience()
experience = 1.5;
worker2.showNewSalaryWithExperience()
console.log(worker2.fullName + ", " + "Experience: " + worker2.salaryWithExp + ", " +  "New Experience: " + worker2.salaryWithExpNew);

worker3 = new Worker("Will Wind", 6, 5);
worker3.showSalary();
worker3.showSalaryWithExperience()
experience = 1.5;
worker3.showNewSalaryWithExperience()
console.log(worker3.fullName + ", " + "Experience: " + worker3.salaryWithExp + ", " +  "New Experience: " + worker3.salaryWithExpNew);


const Salaries = [
    worker1.salaryWithExpNew,
    worker2.salaryWithExpNew,
    worker3.salaryWithExpNew
]
console.log("Sorted salary: " + Salaries.sort());


//************************var 2*************************
function compareSalary(a, b) {

    return a.salaryWithExpNew - b.salaryWithExpNew;
}
let sortedSlrs = Salaries.sort(compareSalary);
console.log("Sorted salary: " + sortedSlrs);

//Task 5
class GeometricFigure{
    constructor(){

    }
    getArea(){
        return 0;

    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;   
    }

}

class Triangle extends GeometricFigure{
    constructor(sideA, sideB, sideC){
        super();
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;

    }
    getArea(){
        let p = 0.5*(Number(this.sideA)+Number(this.sideB)+Number(this.sideC));
        return Math.sqrt(p*(p - this.sideA) * (p - this.sideB) * (p - this.sideC));
    }
}
      
class Square extends GeometricFigure{
    constructor(sqrside){
        super(); 
        this.sqrside = sqrside;
    }
    getArea(){
        return this.sqrside ** 2;
    }  
}
      
class Circle extends GeometricFigure{
    constructor(radius){
        super();
        this.radius = radius;
    }
    getArea(){
        return 3.14 * (this.radius ** 2);
    }    
}

const figures = [
    new Triangle(4, 5, 6), 
    new Square(7), 
    new Circle(5)
]

function handleFigures(figures) {
    for (let i = 0; i < figures.length; i++) {
    console.log(GeometricFigure.name + ": " + figures[i] + " - area: " + figures[i].getArea());
}
}
console.log(handleFigures(figures));

let totalArea = figures.reduce(function(acc, current) {
    return acc + current['getArea'](); }, 0);
console.log("Total area: " + totalArea);