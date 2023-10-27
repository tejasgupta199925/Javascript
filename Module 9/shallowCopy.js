/*
    To make the reference datatype immutable (creating a copy and changing its attribute shouldn't affect first object attribute), 
    there are 2 ways to do that: shallow copy and deep copy.
    To create shallow copy, spread operator is used {...}. 
    Spread operator takes out first properties inside any object and creates a separate reference.  
*/

let firstPerson = {
    name : 'Adam',
    age : 23,

    address : {
        city : 'Lucknow',
        state : 'UP'
    }
}

let secondPerson = {...firstPerson}                         // Shallow copy
// secondPerson.address = {...firstPerson.address}          // To avoid the nested object mutability problem

console.log(firstPerson)
console.log(secondPerson)

secondPerson.name = 'Steve'                 // Now only second person's name will be updated
secondPerson.address.city = 'Delhi'         // city will be changed for both persons

console.log(firstPerson)
console.log(secondPerson)