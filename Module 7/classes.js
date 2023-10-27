// Like constructor functions, class also works as a template. We can create a class and create different objects according to that.

class Person {
    constructor(_name, _age) {                   // Works like the constructor function
        this.name = _name
        this.age = _age
    }

    // Method for an object
    welcome() {                                 // No need to pass this keyword. No need to create inside constructor
        console.log(`Welcome ${this.name}`)
    }
    // When welcome() is called, it will be called for that particular object from which it is associated
}

let person1 = new Person('Adam', 19)
let person2 = new Person('Steve', 20)
let person3 = new Person('Mark', 21)

console.log(person1)
console.log(person2)
person1.welcome()
person2.welcome()