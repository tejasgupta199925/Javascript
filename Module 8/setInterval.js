// It will set an interval of time after which the function will run again. It is also asynchronous function.

function hello() {
    console.log('Hello')
}

// setInterval(hello, 2000)                // Execute hello every 1 second (this will run without stopping unless manually stopped)

let timer = setInterval(hello, 1000)

setTimeout(function() {
    clearTimeout(timer)
}, 5000);                          // This will stop the setInterval after 5 seconds (setTimeout works every 1 second for 5 seconds)