var names = ["Sir zia ", "Junaid ", "Asad ", "Sana"];
var a = "You are invited to dinner seekh boti hogi ajaana";
console.log(names[0] + a);
console.log(names[1] + a);
console.log(names[2] + a);
console.log(names[3] + a);
//excluding guest from list
var newGuests = names.slice(0);
console.log(names[0] + "ka pait kharab hai wo nahi asake gain.");
newGuests.push("Sir Imran ");
console.log(newGuests[4] + a);
//adding new guests
newGuests.unshift("Hira ");
newGuests.splice(2, 0, "Fahad ");
newGuests.push("Muskan ");
console.log(newGuests + a);
//Excersise 17
//Removing guests from list
var b = "Sorry to say but you are no longer invited";
newGuests.splice(0, 1);
console.log(newGuests);
console.log(newGuests[0] + b);
console.log(newGuests[1] + b);
//Now to empty the list
var emptyList = newGuests.splice(0, 1);
console.log(emptyList);
