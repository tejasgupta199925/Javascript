// this with node.js in non-strict mode: there are 4 scenarios
// console.log(this) ==>                {}
// function ==>                         Global Object
// Object -> function ==>               Object itself
// Object -> function -> function ==>   Global Object

console.log(this)           // Empty Object
// Whenever we console.log this keyword in a global environment, we will get an empty object


function displayThis() {
    console.log(this)       // Global Object
}

// displayThis()
// A global object is an object inside node.js/browser that holds all these methods of node.js


let myObj = {
    name : 'Tejas',
    age : 23,
    
    myFn : function() {
        console.log(this)       // Refers to the object for which this function (or method) is created
    }
}

// myObj.myFn()                    
// Prints the whole object for which the method is part of. Can print object name using this.name


let myObj1 = {
    name : 'Tejas',
    age : 23,

    myFun : function() {
        function myFn3() {
            console.log(this)           // Global Object
        }

        myFn3()
    }
}

myObj1.myFun()
// Function inside of a method inside of an object gives Global Object