// In JS, a function can be passed as an argument to another function and can be invoked later

function printFirstName(name, cb) {
    console.log(name)
    cb('Rogers')
}

printFirstName('Steve', printLastName)

function printLastName(name) {
    console.log(name)
}

// printLastName('Rogers')

// Check if a number is even and print result
const isEven = a => {
    return a%2 == 0
}

let printResult = (evenFn, num) => {
    let isNumEven = evenFn(num)
    console.log(`The number ${num} is an Even number ${isNumEven}`)
}

printResult(isEven, 16)

