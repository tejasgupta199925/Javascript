// It is a timer function means we can provide it a time and after that time only it will execute what's inside it
// setTimeout(cb, 2000) means execute cb function after 2 seconds
// It works asynchronously

console.log('Before')

function greet() {
    console.log('Hello from setTimeout')
}

setTimeout(greet, 2000)             // will wait for 2 seconds for executing greet()

console.log('After')