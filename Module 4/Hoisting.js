/* 
    In js, in memory execution phase every variable and function are stored in key value pair. First of all the variables get value 
    undefined in memory execution whereas functions are stored with their whole body in memory execution. Therefore, when we are 
    trying to print value of a (before declaring it) it hasn't reached it's value defining stage in code execution so undefined is printed.
    But we can call functions before and after declaration because it's whole body is stored in memory execution phase only. 
    This concept is known as Hoisting. 
    It is a concept in javascript which allows us to move our declarations on top. So we can initialize our variables and call function
    before declaring and defining them. 

    The difference between normal function and function expression is that the latter is inside a variable. We cannot call function 
    expression before declaring that.
*/

console.log(a)                  // undefined
greet()                         // Hello
add(2, 5)                       // Will give error as add is a variable and it will contain undefined which is not a function
console.log(add)

var a=10
function greet() {
    console.log('Hello')
}

var add = function(a, b) {
    console.log(a+b)
}

add(2, 3)                       // 5