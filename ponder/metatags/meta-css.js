

// variables vs constants
//constant
const PI = 3.1415926535;
//variable
let radius;

radius = 3;

let area = radius * radius * PI;


console.log(area);


radius = 20;

area = radius * radius * PI;


console.log(area);



radius = 50;

area = radius * radius * PI;


console.log(area);


// type coersion

const one = 1;
const two = '2';

let result = one * two;
console.log(result);


//use Number() to force it to become a number
result = one + two;
console.log(result);


result = one + Number(two);
console.log(result);




let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
                    



