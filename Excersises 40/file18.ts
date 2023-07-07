
//Excersise 18 

const emptyList1 = ["Pakistan ","china ","Bangladesh ","France ","America"]

var newList = emptyList1
console.log(newList)

//in sort list W/O changing original order

console.log(newList.sort())

//now in reverse alphabetical

console.log(newList.sort((a, b) => b.localeCompare(a)));