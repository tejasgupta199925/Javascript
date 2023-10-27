/* 
    The destructuring assignment syntax is a Javascript expression that makes it possible to unpack values from arrays, or properties from 
    objects, into distinct variables.
*/

let arr = ['Hi', 'I', 'am', , 'Tejas']

let a1=arr[1]
let a2=arr[2]

console.log(a1, a2)

let [a, b, c, d, e, f] = arr                           // Assign array element values to different variables sequentially

console.log(a, b, c, d, e, f)

let myObj = {
    name : 'Adam',
    age : 20,
    gender : 'Male',

    address : {
        country : "England",
        city : "London"
    }
}

let {x, y, z} = myObj                                 // x y and z will be undefined
let {name, age, gender} = myObj                       // Will get proper values
// In array destructuring, any variables can be used. In object destructuring, we have to use same key names as variables for destructuring

console.log(x, y, z)
console.log(name, age, gender)

// Providing alternate variable names for object destructuring
let {name: n, age: ag, gender: g} = myObj
console.log(n, ag, g)

// Destructuring a nested object
let {name : n1, age : ag1, gender : g1, address : ad1, address : {country : c1, city : ci1}} = myObj
console.log(n1, ag1, g1, ad1, c1, ci1)