
class Student {
  fullName: String;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Student's name: " + person.firstName + " " + person.lastName; 
}

var user = new Student("John", "Q", "Public");
document.getElementById("student-output").innerHTML = greeter(user);