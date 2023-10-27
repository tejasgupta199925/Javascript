// Lexical scope means that a function defined inside a function will have access to attributes outside itself
// Closures is the concept that a nested function (whether returned or not) will always have access to its outer scope's values
// Lexical as a term means in heirarchy (or in order) (or for code: where that specific code is present physically inside code)
// Lexical environment is the local memory of the current execution context along with the lexical environment of it's parent
// Lexical environment is created when an execution context is created
// So in a function's lexical environment's memory block, a reference is also present which points to it's parent's lexical environment
// So a child will get access to lexical environment of it's parent
// Lexical Environment = Memory Block of current execution context + lexical environment of parent
// For global execution context, the lexical environment reference points to null since it has no parent
/* 
    The process of finding a variable in current execution context, then lexically in parent's if not found in current execution context
    and so on until found or global execution context is also exhausted is known as Scope Chain.
    So scope chain is just a chain of lexical environment and parent lexical environment references.
*/

function test() {
    let a = 10

    function test1() {
        console.log(a)                          // Lexical scope. test1 has access to attributes outside it within test()
    }

    return test1
}

let fun = test()
// console.log(fun)
// fun()


function greet() {
    let name = 'Steve'

    function displayName() {
        let age = 20

        console.log(`Hi ${name}`)

        function displayAge() {
            console.log(`My age is ${age} and ${name}`)         // This nested inner function will also have access to name from greet
        }

        return displayAge
    }

    return displayName
}

let g1 = greet()
console.log(g1)
g1()                                            // Here we are actually calling displayName method

let g2 = g1()                                   // g2 will have displayAge function
console.log(g2)
g2()