// Find returns the first element of an array that satisfies that condition

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]

// It will run a loop over transactions. -898 will be the first element which satisfies the condition so it will be returned
let firstWithdrawl = transactions.find(function(n) {
    return n<0
});

console.log(firstWithdrawl)

// Index of first element which satisfies the given condition
let firstWithdrawlIndex = transactions.findIndex((n) => {
    return n<0
})

console.log(firstWithdrawlIndex)