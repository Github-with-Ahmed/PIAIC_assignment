//Excersis 37
function makeShirt(size: string = "large", message: string = "hello world"): void {
  console.log(`size: ${size}`);
  console.log(`message: ${message}`);
  console.log(`T-shirt created with size ${size} and message is ${message}`);
}

makeShirt();
makeShirt("small",);
makeShirt("small", "I love typescript");

  