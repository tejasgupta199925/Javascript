var a=4

// Impure Function
function addImpure(x) {
    console.log(x+a)
    a++
}
                     
/* 
    If value of a is changed, then the function add will give different output for same input 2. This happens because the output of this
    function depends on an external factor a whose value can be changed. 
    For a function to be pure, it should give same output for an input everytime it is called. The external factor a makes add an impure 
    function.
*/
addImpure(2) 
addImpure(2) 
addImpure(2)          // For same argument the function will give different result

// Pure Function
function addPure(x, a) {
    // console.log(x+a)
    return a+x
}

// addPure(2, 3)
// addPure(2, 3)
// addPure(2, 3)        // For same arguments, the function will give same result everytime

// So for writing pure function, do not use any external factor that can affect the output.
/* 
    addPure() is still not pure. In addPure, we are using external resource console to print our result. Using console.log does not 
    make it impure but the only task of this function is to add these 2 numbers not to print them. According to Functional Programming 
    Paradigm, a function should not do anything else rather than what it is expected to do. So it should just return the sum.
    Using console.log is a side effect of a pure function.
*/

console.log(addPure(2, 3))
console.log(addPure(2, 3))      // Now addPure is a pure function as it does not rely on any external factor or resource