// In js, every value will have a boolean value
/*
    Set of values for which Falsy is associated:
    //  false
    //  0 (zero)
    //  -0 (minus zero)
    //  0n (BigInt zero)
    //  '', "", `` (empty string)
    //  null
    //  undefined
    //  NaN

    Every other possible value (even empty array or object) will be truthy
*/

let a = 0

if(a) {
    console.log('I am Truthy')
}
else {
    console.log('I am Falsy')
}