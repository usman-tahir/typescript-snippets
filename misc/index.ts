
let isDone: boolean = false;
console.log("isDone -> " + isDone);

// Basic numeric values
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log("decimal -> " + decimal);
console.log("hex -> " + hex);
console.log("binary -> " + binary);
console.log("octal -> " + octal);

// String representation
let color: string = "blue";
console.log("color -> " + color);

color = "red";
console.log("color -> " + color);

// Template string usage
let fullName: string = `John Doe`;
let age: number = 18;
let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month.`;
console.log(sentence);

// Arrays (with and without generics)
let listOne: number[] = [1, 2, 3];
listOne.forEach(function (number) {
  console.log(number);
});

let listTwo: Array<number> = [1, 2, 3];
listTwo.forEach(function (number) {
  console.log(number);
});

// Tuple usage
let person: [string, number]; // Name and age

person = ["John Doe", 18];
console.log("person[string, number] -> " + person.toString());

// Enum example
enum Color {
  Red = 1,
  Green = 2,
  Blue = 3
};

let c: Color = Color.Green;
console.log("c -> " + c);

// Use of the 'any' type
let y: any = "string";
console.log("y is currently a -> " + typeof(y));
y = false;
console.log("y is now a -> " + typeof(y));

// Usage of void
function messenger(message: string): void {
  console.log(message);
}
messenger("testing the void messenger function");

// A functuon returning never must have an unreachable end point
function error(message: string): never {
  throw new Error(message);
}

// Basic type assertion example
let someValue: any = "this is a string";
let someLength: number = (<string>someValue).length;
console.log("The length of the string is -> " + someLength);

someLength = (someValue as string).length;
console.log("The length of the string is -> " + someLength);