var arr = [2, 3, 4, 5, 6, 7]
var squared = []

for(var i=0 ; i<arr.length ; i++){
    squared.push(arr[i]*arr[i])
}

console.log(squared)

var i=2, n=10

while(i<=10){
    console.log(i)
    i+=2
}

var i=10, n=9

do{
    console.log(i)
    i++
} while(i<=n)