/* 
    Encapsulation means hiding properties and methods of a class from its outside. It says that keep your functions and methods inside 
    your class only and do not expose them outside so that they cannot be changed by someone.
*/

function Person(_name, _age) {
    this.name = _name
    this.age = _age
}

let Person1 = new Person('Adam', 20)
console.log(Person1)

Person1.name = 'Steve'                      // Changes allowed outside of constructor function which is undesirable
console.log(Person1)



function PersonModified(_name, _age) {
    var name = _name
    this.age = _age

    this.getName = function() {
        return name
    }
}

let Person2 = new PersonModified('Adam', 20)
console.log(Person2)                        
// Now it will give getName function as a key and this function needs to be invoked to get to the name property
console.log(Person2.getName())              // Now we won't be able to change this property