var names2 = ["Sir zia ", "Junaid ", "Asad ", "Sana"];
var a = "You are invited to dinner seekh boti hogi ajaana";
console.log(names2[0] + a);
console.log(names2[1] + a);
console.log(names2[2] + a);
console.log(names2[3] + a);
//excluding guest from list
var newGuests = names2.slice(0);
console.log(names2[0] + "ka pait kharab hai wo nahi asake gain.");
newGuests.push("Sir Imran ");
console.log(newGuests[4] + a);
//adding new guests
newGuests.unshift("Hira ");
newGuests.splice(2, 0, "Fahad ");
newGuests.push("Muskan ");
console.log(newGuests + a);
