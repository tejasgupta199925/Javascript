var person = {
    firstName : 'Adam',
    secondName : 'Smith',
    age : 15,
    ownsCar : false
}

console.log(person)
console.log(person.age)                 // Dot notation to access a particular object property
console.log(person['firstName'])        // Bracket notation to access a particular object property

var cap = {
    firstName : 'Steve',
    lastName : 'Rogers',
    age : 102,

    friends : ['Bucky Barnes', 'Bruce Banner', 'Tony Stark'],

    isAvenger : true,

    address : {
        state : 'New York',
        city : {
            name : 'Brooklyn',
            pinCode: 123456
        }
    }
}

console.log(cap.friends[1])
console.log(cap.address.city.name)

cap.isAvenger = false
console.log(cap)

cap.movies = ['Age of Ultron', 'Civil War', 'First Avenger']            // Add new property to object
console.log(cap)

delete cap.age                                                          // Delete a property of the object
console.log(cap)