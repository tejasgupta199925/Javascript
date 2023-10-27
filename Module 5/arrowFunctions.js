let test1 = function() {
    console.log(1)
}

let test2 = function(a) {
    console.log(a+2)
}

let test3 = function(a, b) {
    console.log(a+b)
}

test1()
test2(2)
test3(2, 4)

let testArrow1 = () => {
    console.log(1)
}

let testArrow2 = a => {                                     // No need of () in case of single argument
    console.log(a+2)
}

let testArrow3 = (a, b) => {
    console.log(a+b)
}

testArrow1()
testArrow2(2)
testArrow3(2, 4)