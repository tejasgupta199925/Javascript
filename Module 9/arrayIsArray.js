// Array.isArray can be used to check whether an array is an array (typeof for an array)

let arr = [1, 2, 3, 4]
let a = 2

let checkForArray = Array.isArray(arr)              // Returns true if arr is an array otherwise false

console.log(checkForArray)
console.log(Array.isArray(a))