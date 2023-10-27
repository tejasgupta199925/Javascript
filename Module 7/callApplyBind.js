let person1 = {
    firstName : 'Steve',
    lastName : 'Rogers',
    age : 102,

//  Making this object global
    // printDetails : function() {
    //     console.log(`Hi I am ${this.firstName} ${this.lastName} and I am ${this.age} years old`)
    // }
}

let person2 = {
    firstName : 'Tony',
    lastName : 'Stark',
    age : 41,

// Giving printDetails() in this object leads to repeating code which is a voilation of the Dry Rule.
    // printDetails : function() {
    //     console.log(`Hi I am ${this.firstName} ${this.lastName} and I am ${this.age} years old`)
    // }
}

// person1.printDetails()
// person2.printDetails()

/*
    In the above 2 objects, we have the same keys but the values are different according to objects. We are repeating the printDetails 
    function in both the objects. So here we are voilating the Dry Rule which states that "Do not repeat yourself". Suppose we have to 
    create some more similar objects, the firstName, lastName, age properties will not be repeating since they are getting different 
    values but printDetails() will be repeated with every object. 
    1 solution of this is to use a class to create these objects and put printDetails() inside the class prototype object. But this 
    solution won't work here because we are not creating any classes or constructor function here. 
    Another solution of this is to use call method.
*/

// call
// person1.printDetails.call(person2)
// When we are calling this method for person2, this keyword inside that function  will refer to object for which it is called (person2) 
// We are borrowing the function from person1 and then calling this for person2

// person1.printDetails()
// person2.printDetails()

/*
    Suppose we don't want printDetails() to be dependent on the object person1. Right now we have to call that function from inside 
    person1 object (person1.printDetails()). We can make that object global by bringing it out of the object.
*/

let printDetails = function(city, power) {
    console.log(`Hi I am ${this.firstName} ${this.lastName} and I am ${this.age} years old and I am from ${city}
    I have the ${power}`)
}

// Call
printDetails.call(person2, 'New York', 'Iron Man Armour')      // Now printDetails() is global so it can be called without person1 reference
// If we need to pass an argument to such a function, pass it after the object argument

// Apply
printDetails.apply(person2, ['New York', 'Iron Man Armour'])
// When we use apply method, we are expected to put our arguments inside of an array (that's the only difference between call and apply)

// Bind
// Bind allows us to store our function and call it at later stage of time
// It works like call, only advantage is we can store function result in a variable and use it at a later stage
let myFun = printDetails.bind(person2, 'New York', 'Iron Man Armour')
console.log(myFun)              

// printDetails function gets bound, means it has been stored inside variable myFun. When we call this variable, it will invoke the function
myFun()