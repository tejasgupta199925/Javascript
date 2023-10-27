/*
    Primitive Datatypes: Numbers, Strings, null, Boolean, undefined
    Reference Datatypes: Arrays, Objects, Functions

    Primitive datatypes are immutable.
    But in objects, when we copy an object and try to change 1 property in the copy, the original object will also get affected.

    Primitive datatypes are created in Stack memory and Reference datatypes are created in Heap memory.
    When we assign a primitive datatype to another primitive datatype, the value itself gets assigned so secondPerson gets the value
    'Adam'. Now it is not possible to change this value because it is now fixed so to change the value of secondPerson, we will have 
    to reassign the secondPerson to a different data to update its value. The values of primitive datatypes are present in stack 
    memory so changes for both firstPerson and secondPerson are independent of each other.  
*/

let firstPerson = 'Adam'
let secondPerson =  firstPerson

console.log(firstPerson)
console.log(secondPerson)

firstPerson = 'Steve'

console.log(firstPerson)
console.log(secondPerson)