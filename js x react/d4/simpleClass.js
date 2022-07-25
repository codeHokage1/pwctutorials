class Student {
    constructor(firstName, lastName, age, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.dob = new Date(dob);
    }
    getName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getAge() {
        return this.age;
    }
}

const firstStudent = new Student('Farhan', 'Sodiq', 22, '4-3-2000');
console.log(firstStudent.getName());