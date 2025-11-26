//Type Guard
// in typrof
type Alphanewmeric = number | string;

const add = (num1: Alphanewmeric, num2: Alphanewmeric) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};

console.log(add(2, 2)); // 4
console.log(add(2, "2")); // 22
console.log(add("2", 2)); // 22
console.log(add("2", "2")); // 22

// in guard
type NormalUser = {
  name: string;
};
type AdminUser = {
  name: string;
  role: "Admin";
};
const getUserInfo = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`This ${user.name} and role is : ${user.role}`);
  } else {
    console.log(`This is ${user.name} `);
  }
};
getUserInfo({ name: "Normal", role: "Admin" });
