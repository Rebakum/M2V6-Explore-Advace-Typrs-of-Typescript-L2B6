type RichPeoplesVehicle = {
  car: string;
  bike: string;
  cng: string;
};
type MyVehicle = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeoplesVehicle;

const MyVehicle: MyVehicle2 = "cng";

type User = {
  id: string;
  name: string;
  address: {
    city: string;
  };
};
const user = {
  id: 222,
  name: "mezba",
  address: {
    city: "ctg",
  },
};
// const myId = user["id"];
// const myName = user["name"];
// const address = user["address"];
// console.log(myId, myName, address);
const getPropertyFromObj = <x>(obj: x, key: keyof x) => {
  return obj[key];
};
const result = getPropertyFromObj(user, "name");
console.log(result);
const product = {
  brand: "HP",
};
const result12 = getPropertyFromObj(product, "brand");
console.log(result12);

const student = {
  id: 12345,
  class: "five",
};
const result23 = getPropertyFromObj(student, "class");
console.log(result23);
