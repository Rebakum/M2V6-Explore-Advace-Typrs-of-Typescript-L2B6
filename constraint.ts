// Constraint strice rules
type Student = { id: number; name: string };

const addStudentToCourseGeneric = <T extends Student>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};
const student12 = {
  id: 123,
  name: "Mezba",
  hasPen: true,
};
const student22 = {
  id: 1234,
  name: "Jhankar Mahbub",
  hasCar: true,
  isMarried: true,
};
const student3 = {
  id: 12345,
  name: "Jhankar ",
  hasWatch: true,
};
const result1 = addStudentToCourseGeneric(student12);
const result2 = addStudentToCourseGeneric(student22);
const result3 = addStudentToCourseGeneric(student3);
console.log(result3);
