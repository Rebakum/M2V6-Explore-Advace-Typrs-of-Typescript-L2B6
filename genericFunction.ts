// const createArrayWithString = (value: string) => [value];
// const createArrayWithNumber = (value: number) => [value];
// const createArrayWithUserObject = (value: { id: number; name: string }) => [
//   value,
// ];

// const arrString = createArrayWithString("apple");
// const arrNumber = createArrayWithNumber(222);
// const arrObject = createArrayWithUserObject({
//   id: 123,
//   name: "mr. x",
// });
// // Generic Function
const createArrayWithGeneric = <T>(value: T) => {
  return [value];
};

const arrString = createArrayWithGeneric("apple");
const arrNumber = createArrayWithGeneric(222);
const arrObject = createArrayWithGeneric({
  id: 123,
  name: "mr. x",
});
console.log(arrString);
console.log(arrNumber);
console.log(arrObject);

// tuple
// const createArrayWithTuple = (param1: string, param2: string) => [
//   param1,
//   param2,
// ];
// or
const createArrayTupleWithGeneric = <x, y>(param1: x, param2: y) => [
  param1,
  param2,
];
const res1 = createArrayTupleWithGeneric("Mezba", false);
const res2 = createArrayTupleWithGeneric(222, {
  name: "Mezba",
});

const addStudentToCourse = <T>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};
const student1 = {
  id: 123,
  name: "Mezba",
  hasPen: true,
};
const student2 = {
  id: 1234,
  name: "Jhankar Mahbub",
  hasCar: true,
  isMarried: true,
};
const result = addStudentToCourse(student2);
console.log(result);
