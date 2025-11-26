class Person {
  name: string; //common
  age: number; //common
  address: string; //common
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  //common
  getSleep(numOfHours: number) {
    console.log(`${this.name}  ${numOfHours} ghonta ghumai`);
  }
}
// Student1
class Student extends Person {}
const student1 = new Student("Mr. Fakibaz", 18, "Bangladesh");
student1.getSleep(15);

// Student2
class Student0 extends Person {
  rollNo: number;
  constructor(name: string, age: number, address: string, rollNo: number) {
    super(name, age, address);
    this.rollNo = rollNo;
  }
}

const student2 = new Student0("Mr. Haron", 18, "Bangladesh", 2);

student2.getSleep(6);

//
class Teacher extends Person {
  designation: string; // own property

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }
  // own method
  takeclass(numOfHours: number) {
    console.log(`${this.name} ${numOfHours} ghonta class nei`);
  }
}

const teacher1 = new Teacher(
  "Mr. Smart Teacher",
  25,
  "Bangladesh",
  "Senior Teacher"
);
teacher1.getSleep(8);
teacher1.takeclass(4);
