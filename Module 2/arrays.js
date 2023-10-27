var arr = [1, "Different Datatype", true, 10.5]

console.log(arr)
console.log(arr[1]+" "+typeof(arr[1]))

arr[2] = false

console.log(arr[2])
console.log(arr.length)

console.log(arr.pop())                  // Removes last element
console.log('Popped Array ', arr)

arr.push(100)                           // Adds new element at last
console.log('Pushed Array ', arr)

console.log(arr.shift())                // Removes first element
console.log('Shifted Array ', arr)

arr.unshift('New First Element')        // Adds an element at the beginning
console.log('Unshifted Array ', arr)