/* 
    We have a coffee shop where we take only coffee orders, for each coffee order we return a receipt. Upon getting the receipt the 
    person must wait for some time for the coffee to be made. Only after the coffee processing time, the customer will be served 
    with coffee.
*/

function placeOrder(drink) {
    return new Promise(function(resolve, reject) {
        if(drink === 'coffee') {
            resolve('Order for coffee received')
        }
        else {
            reject('Other orders rejected')
        }
    })
}

function processOrder(order) {
    // No need for reject as the coffee will be served so promise can't be rejected
    // Promise don't require resolve, reject always. Only resolve is also fine in according situations
    return new Promise(function(resolve) {
        console.log('Order is being processed')
        resolve(`${order} and is served`)
    })
}

// placeOrder('coffee').then(function(orderPlaced) {
//     console.log(orderPlaced)
//     let orderIsPlaced = processOrder(orderPlaced)
//     return orderIsPlaced
// }).then(function(processedOrder) {
//     console.log(processedOrder)
// }).catch(function(err) {
//     console.log(err)
// })                                                  // Chaining of promises (Solution with promises))
    
// placeOrder('tea').catch(err => console.log(err))

// Async Await - Syntactic sugar for Promises
// Both are keywords and both work with functions

async function serveOrder() {
    try {
        let orderPlaced = await placeOrder('coffee')
        console.log(orderPlaced)

        let processedOrder = await processOrder(orderPlaced)
        console.log(processedOrder)
    }
    catch(error) {
        console.log(error)
    }
}

serveOrder()