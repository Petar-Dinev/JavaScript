function getPersons() {
  class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }

    toString() {
      return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
  }

  let persons = [];

  let personOne = new Person("Anna", "Simpson", 22, "anna@yahoo.com");
  let personTwo = new Person("SoftUni");
  let personThree = new Person("Stephan", "Johnson", 25);
  let personFour = new Person("Gabriel", "Peterson", 24, "g.p@gmail.com");

  persons.push(personOne);
  persons.push(personTwo);
  persons.push(personThree);
  persons.push(personFour);

  return persons;
}
