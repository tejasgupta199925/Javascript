class Person {
    constructor(_name, _age) {
        this.name = _name
        this.age = _age
    }

    welcome() {
        console.log(`Welcome ${this.name}`)
    }
}

/* 
    Both teacher and student will also have name and age. Instead of defining name and age for them separately, we can make teacher and 
    student class inherit these properties from person class which already has these properties. Then we can add some extra properties to 
    teacher and student class specific to them. In addition to properties, we can also inherit methods.
*/
class Teacher extends Person {
    constructor(_name, _age, _classStrength) {
        super(_name, _age)
        this.classStrength = _classStrength
    }

    test() {
        super.welcome()                         // Using parent class' method
    }
}

class Student extends Person {
    constructor(_name, _age, _cgpa) {
        super(_name, _age)
        this.cgpa = _cgpa
    }
}

let Person1 = new Person('Adam', 23)
console.log(Person1)

let Teacher1 = new Teacher("Mark", 30, 40)
console.log(Teacher1)

let Student1 = new Student('Steve', 12, 9.5)
console.log(Student1)

Teacher1.test()