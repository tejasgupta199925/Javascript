// The for of statement creates a loop iterating over iterable objects, 
// including: built-in String, Array, array-like objects like NodeList and also map and set

var scores = [60, 90, 85, 97]

for(var score of scores){
    console.log(score)
}

let colors = ['Red', 'White', 'Green']

for(var [index, color] of colors.entries()){                        // To access key along with value in for-of loop
    console.log(index + ' --> ' + color)
    // colors[index] = color+' updated'                             // Can be used to update elements of array
}

// console.log(colors)

var str = 'scalar'

for(var c of str){
    console.log(c)
}