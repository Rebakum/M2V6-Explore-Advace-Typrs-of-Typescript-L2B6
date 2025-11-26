// oop: instance  i of type guard / type narrowing
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getSleep(numOfHours: number) {
    console.log(`${this.name} every day sleep ${numOfHours} hrs`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }
  doStudy(numOfHours: number) {
    console.log(`${this.name} every day study ${numOfHours} hrs`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }
  takeClass(numOfHours: number) {
    console.log(`${this.name} every day take  class  ${numOfHours} hrs`);
  }
}
//function guard
const isStudent = (user: Person): user is Student => {
  return user instanceof Student; // user is Student
};
const isTeacher = (user: Person): user is Teacher => {
  return user instanceof Teacher; // user is Teacher
};
const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(10);
  } else if (isTeacher(user)) {
    user.takeClass(5);
  } else {
    user.getSleep(8);
  }
};

const student1 = new Student("Mr. student");
const teacher = new Teacher("Mr. teacher");
const person1 = new Person("Mr. person");
getUserInfo(student1);
getUserInfo(teacher);
getUserInfo(person1);
