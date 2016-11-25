function greeter(person) {
    return "Hello, " + person;
}
var user = "John Doe";
document.getElementById("hello-output").innerHTML = greeter(user);
