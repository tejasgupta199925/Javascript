// Undefined

let a

console.log(a)                  // Undefined
// Javascript will always assign undefined if we are not explicitly assigning any value to a variable
// By default undefined value is assigned to variable

let arr = [1, 2, , 4]           // Empty element at 2

console.log(arr[2])             // Undefined
// When we have an empty element inside an array, it will also be undefined

function add(a, b) {
    let c = a+b
    // return c
}

let sum = add(2, 3)
console.log(sum)                // If we don't return anything from function, then sum will be undefined


// Null
// It is just an explicit value that we assign to say that a particular variable has no value

let myLife = null
console.log(myLife)


// Not Defined
// It means that we haven't even defined that stuff

// let b                          // We have defined variable b but the default value undefined is assigned to it

console.log(b)                    // Directly trying to access b without defining it 