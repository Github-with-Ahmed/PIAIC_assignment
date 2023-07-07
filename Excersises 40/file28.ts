//Excersise 28

var age = 1
if (age < 2){
    console.log("baby")
}
else{
    console.log("toddler")
}

//Second version >2 and <4

var age2 = 2
var boy2 = age2 >= 2 && age2 <4
if (boy2 = true){
    console.log("toddler")
}
else {
    console.log("not toddler")
}

//third version >4 and <14

var person = 7
var personAge = person >= 4 && person <= 14
if ( personAge = true){
    console.log("kid")
}
else{
    console.log("not kid")
}

//fourth version >14 and <20

var person2 = 17
var personAge2 = person2 >= 13 && person2<=20
if (personAge2 = true){
    console.log("teenager")
}
else {
    console.log("not teenager,")
}

//fifth version >20 and <65

var person3 = 30
var personAge3 = person3 >=20 &&person3 <=65
if (personAge3 = true){
    console.log("adult")
}
else {
    console.log("not adult")
}

//sixth version >65
var person4 = 70
var personAge4 = person4 >=65 && person4 >=65
if (personAge4){
    console.log("older")
}
else {
    console.log("not older")
};
