// Shallow copy gives only 1 level of immutability in objects but Deep copy gives complete immutability in objects

let firstPerson = {
    name : 'Adam',
    age : 23,

    address : {
        city : 'Lucknow',
        state : 'UP'
    }
}

let secondPerson = JSON.parse(JSON.stringify(firstPerson))          // Create a deep copy of firstPerson
// JSON.parse and JSON.stringify will create a totally separate references for secondPerson object

console.log(firstPerson)
console.log(secondPerson)

secondPerson.name = 'Steve'
secondPerson.address.state = 'Delhi'

console.log(firstPerson)
console.log(secondPerson)