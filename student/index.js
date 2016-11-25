var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Student's name: " + person.firstName + " " + person.lastName;
}
var user = new Student("John", "Q", "Public");
document.getElementById("student-output").innerHTML = greeter(user);
