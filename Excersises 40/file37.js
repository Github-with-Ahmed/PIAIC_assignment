//Excersis 37
function makeShirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "hello world"; }
    console.log("size: ".concat(size));
    console.log("message: ".concat(message));
    console.log("T-shirt created with size ".concat(size, " and message is ").concat(message));
}
makeShirt();
makeShirt("small");
makeShirt("small", "I love typescript");
