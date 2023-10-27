/*
    Reference datatypes involve both stack and heap memory.
    When we create a Reference datatype, the value is not stored in stack memory. Stack stores the pointer location of the object value
    which is created in heap memory. In Reference datatype, when we assign 1 object to another variable, the values are not assigned,
    instead the pointer location gets assigned to the variable. 
    So the pointer of both variable in stack memory points to the same location in heap memory. 
    Any change made in secondPerson will make the change to the object in heap memory and since it is being accessed by both objects, 
    the change will be reflected in both objects.
*/

let firstPerson = {
    name : 'Adam',
    age : 23
}

let secondPerson = firstPerson

console.log(firstPerson)
console.log(secondPerson)

secondPerson.name = 'Steve'                          // This will change the value of name attribute for both firstPerson and secondPerson

console.log(firstPerson)
console.log(secondPerson)