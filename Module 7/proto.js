let myObj = {

}

console.log(myObj)
// The object will appear empty (no key-value pair) but it will contain some prototype object with lot of methods and properties

let person1 = {
    name : 'Adam',
    age : 25
}

console.log(person1)
// The first object will be empty and second object will have name and age property along with prototype object

console.log(person1.hasOwnProperty('name'))                    // true
// This method will search for the particular key inside the object for which the function has been called

console.log(person1.hasOwnProperty('gender'))                  // false

/* 
    hasOwnProperty() is not defined by our object. It is inbuilt method provided by javascript
    This function is present inside the prototype object. This method is javascript inbuilt provided for objects. So when we create an 
    object, this prototype object gets linked to that object by default. So methods and properties from the prototype object can be used 
    for given object.
*/


// Object using constructor function
function person(_name, _age) {
    this.name = _name
    this.age = _age
}

let person2 = new person('Steve', 30)
console.log(person2)
// Will create a new object with name, age and prototype object. Inside this prototype object, there will be another prototype object.
// Inside the inner prototype object, the prototype object properties and methods will be present.
// In first prototype, the constructor is of type object but in person2, the outer prototype is of type person, inner of type object.

/*
    When we create a normal object, a prototype object provided by javascript gets attached to that object. When we create an object
    using class or constructor function, a prototype object of that class or function type is created which gets attached to the new
    object and a javascript prototype object is also created which gets attached to class prototype object.
    class or constructor prototype object constructor is of type of that class or construction function.
    javascript prototype object constructor is of type object.
    We can create our own class methods and put it in class prototype object.
    When we call hasOwnProperties() for person2, it will search for it in its own prototype first, when not found then it will look for
    in the object prototype.
    The object prototype is attached to null container which contains nothing. When a method is not found even in object prototype, it 
    will look for it in null container which contains nothing, so it will pass an error.

    Person Prototype        ==>         Object Prototype        ==>         Null Container        ==>         Error
    (Custom prototype)      link        (Prebuilt prototype)    link                              
    
    The above chaining of links is known is Prototype Chaining.
*/