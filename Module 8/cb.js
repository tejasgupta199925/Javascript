const fs = require('fs')                            // Importing file system module

console.log("First Line")

// let data = fs.readFileSync('f1.txt')                // Reading data from file synchronously
// console.log('File 1 data: '+data)                   // If the file is large, reading the data from file will take time

// let data2 = fs.readFileSync('f2.txt')
// console.log('File 2 data: '+data2)

// fs.readFile('f1.txt', cb1)                          // Read file asynchronously. It will take a callback function as an argument 

// function cb1(error, data) {
//     if(error) {
//         console.log(error)
//     }

//     console.log("File 1 data: "+data)
// }

// fs.readFile('f2.txt', cb2)

// function cb2(error, data) {
//     if(error){
//         console.log(error)
//     }

//     console.log('File 2 data: '+data)
// }

/*
    Now the code will not wait for file reading functions to execute. So First Line Last Line will be printed first before file data.
    The program will not wait for time-taking functions to finish executing, it will parallely execute them and move the code forward.

    Asynchronous code order can be random like file 3 first, then file 2 and then file 1 depending on Event Loop and callback queue. For
    serial execution of these asynchronous callback functions, we can make the succeeding callback dependent on previous callbacks.
*/

fs.readFile('f1.txt', cb1)

function cb1(error, data) {
    if(error){
        console.log(error)
    }

    console.log('File 1 data: '+data)
    fs.readFile('f2.txt', cb2)          // For serial execution of callback, now file 2 will be read only after file 1 is read
}


function cb2(error, data) {
    if(error){
        console.log(error)
    }

    console.log('File 2 data: '+data)
    fs.readFile('f3.txt', cb3)          // For serial execution of callback, now file 3 will be read only after file 2 is read
}

function cb3(error, data) {
    if(error){
        console.log(error)
    }

    console.log('File 3 data: '+data)
}

// Now file 2 will always be read after file 1 is read completely and similarly file 3 only after file 2

console.log("Last Line")