function Person(_name, _age){
    this.name = _name
    this.age = _age

//  Adding a function inside the class object instead of its prototype
    // this.getNameAndAge = function() {
    //     console.log(`I am ${this.name} and my age is ${this.age}`)
    // }
}

let Person1 = new Person('Adam', 25)
let Person2 = new Person('Steve', 30)

// Adding a function to Person prototype object

Person.prototype.getNameAndAge = function() {
    console.log(`I am ${this.name} and my age is ${this.age}`)
}

console.log(Person1)
console.log(Person2)
console.log(Person1.getNameAndAge())

/*
    We have created a constructor function of type Person. 1 prototype will get created for this Person constructor. We have created 2 
    Person objects and the Person prototype object will get linked to both these objects. The prebuilt object prototype object already is
    linked to Person prototype object. 
    We are getting 2 objects Person1 and Person2 and both have 2 keys name and age with different respective values but there is third key
    getNameAndAge with same value (a function). So the function declared in construction function is repeating for both the objects and 
    appearing with other object properties. 
    This is not the right approach to incorporate functions inside an object because we are voilating a dry rule "Do not repeat yourself".
    But here we are creating 2 objects for which name and age property will be different according to their values but the function 
    property will be same because a function is a body and we are providing it 2 times here. For each object, the function definition 
    will be repeated which is same for every object.
    To avoid this, we should incorporate the function inside the prototype.
    Instead of keeping the getNameAndAge() inside the object, we can put that function inside the Person prototype. Then all the Person 
    objects can take that function from that Person prototype which is linked to all Person objects. 
*/
