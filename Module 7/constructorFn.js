// Constructor Functions are very useful when we want to create multiple objects. It works as a template.

function createCar(_name, _company, _color) {                           // Template to create multiple objects
    this.name = _name
    this.company = _company
    this.color = _color

    this.drive = function() {
        console.log(`I am driving ${this.name} car and it is of ${this.color} color`)
    }
}
/* 
    When we use new keyword with a function and we use this keyword in the function, the function will become a constructor function and a 
    constructor function points the this keyword to an empty object.
    When we use new keyword, the new keyword points this keyword to an empty object.
    this -> {}
    this.name will create a key called name for that empty object and for this key, we are giving the value _name (given in argument).
    In the same way, the company and color keys are also created for that empty object.
*/

let car1 = new createCar('X4', 'BMW', 'Red')        // Using new keyword to create a new car
let car2 = new createCar('S-Class', 'Mercedes', 'White')

console.log(car1)
console.log(car2)

// In this way we can create multiple objects using 1 template createCar()
car1.drive()