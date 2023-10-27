var a=20

var a=35                            // Redeclaring variables allowed

console.log(a)

if(a===35) {
    var b=50
    console.log(b)
}

// Variables declared with var are not block scoped. 
// They are function scoped. Variables declared with var inside function won't be accessible out of that function.
console.log(b)                      // Variable accessible outside of it's block of scope

function test() {
    var c=100
    console.log(c)
}

test()
// console.log(c)                   // Will give error