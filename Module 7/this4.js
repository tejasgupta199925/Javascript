'use strict'

// this in browser environment in strict mode
// console.log(this) ==>                Window Object
// function ==>                         Undefined
// Object -> function ==>               Object itself
// Object -> function -> function ==>   Undefined


// console.log(this)                       
// Window Object (It carries all the javascript methods which can be used in browser javascript). Like global object for node js javascript



function displayThis() {
    console.log(this)
}

// displayThis()                           // Undefined



let myObj = {
    name : 'Tejas',
    age : 23,

    myFn : function() {
        console.log(this)                 // Refers to the object itself for which the method has been created
    }
}

// myObj.myFn()


let myObj1 = {
    name : 'Tejas',
    age : 23,

    myFn : function() {
        function myFn1() {
            console.log(this)            // Undefined
        }
        
        myFn1()
    }
}

myObj1.myFn()