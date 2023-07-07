//Excersise 18 
var emptyList1 = ["Pakistan ", "china ", "Bangladesh ", "France ", "America"];
var newList = emptyList1;
console.log(newList);
//in sort list W/O changing original order
console.log(newList.sort());
//now in reverse alphabetical
console.log(newList.sort(function (a, b) { return b.localeCompare(a); }));
