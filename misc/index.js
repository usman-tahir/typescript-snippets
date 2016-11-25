var isDone = false;
console.log("isDone -> " + isDone);
// Basic numeric values
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log("decimal -> " + decimal);
console.log("hex -> " + hex);
console.log("binary -> " + binary);
console.log("octal -> " + octal);
// String representation
var color = "blue";
console.log("color -> " + color);
color = "red";
console.log("color -> " + color);
// Template string usage
var fullName = "John Doe";
var age = 18;
var sentence = "Hello, my name is " + fullName + ". I'll be " + (age + 1) + " years old next month.";
console.log(sentence);
// Arrays (with and without generics)
var listOne = [1, 2, 3];
listOne.forEach(function (number) {
    console.log(number);
});
var listTwo = [1, 2, 3];
listTwo.forEach(function (number) {
    console.log(number);
});
// Tuple usage
var person; // Name and age
person = ["John Doe", 18];
console.log("person[string, number] -> " + person.toString());
// Enum example
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log("c -> " + c);
// Use of the 'any' type
var y = "string";
console.log("y is currently a -> " + typeof (y));
y = false;
console.log("y is now a -> " + typeof (y));
// Usage of void
function messenger(message) {
    console.log(message);
}
messenger("testing the void messenger function");
// A functuon returning never must have an unreachable end point
function error(message) {
    throw new Error(message);
}
// Basic type assertion example
var someValue = "this is a string";
var someLength = someValue.length;
console.log("The length of the string is -> " + someLength);
someLength = someValue.length;
console.log("The length of the string is -> " + someLength);
