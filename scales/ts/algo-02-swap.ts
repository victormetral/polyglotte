let a: string = "Ravel";
let b: string = "Liszt";

console.log(`avant : a = ${a}, b = ${b}`);

const tmp = a;
a = b;
b = tmp;

console.log(`apres : a = ${a}, b = ${b}`);