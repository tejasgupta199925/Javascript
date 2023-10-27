// How to produce a promise
// promise can be either fullfilled or rejected

let myPromise = new Promise(function(resolve, reject) {
    const a = 4
    const b = 5

    setTimeout(() => {
        if(a===b) {
            resolve('The values are equal')
        }
        else {
            reject('The values are not equal')
        }
    })
})

// Pending state
// console.log(myPromise)

// Fullfilled state (consuming promise)
// When promise gets resolved, the argument of resolve() will get passed to the callback function of then()
myPromise.then(function(result) {
    console.log(result)
})

// Rejected state (consuming promise)
// When promise gets rejected, the argument of reject() will get passed to the callback function of catch()
myPromise.catch(function(result) {
    console.log(result)
})