// Using function as an expression

// This function does not have any name. A function which does not have a name is known as anonymuous function
var add = function(a, b) {                      // add variable represents whole function body
    console.log(a+b)
}

add(3, 4)

var add = function(a, b) {
    return a+b
}

var result = add(5, 10)
console.log(result)