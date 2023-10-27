let sum = function(x, y) {
    console.log(x+y)
}

sum(2, 3)

let sumCurried = function(x) {
    return function(y) {
        console.log(x+y)
    }
}

let sumOfTwoNumbers = sumCurried(2)
sumOfTwoNumbers(3)