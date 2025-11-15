// type alias

type User = {
  name: string;
  age: number;
};
type Role = {
  role: "admin" | "user";
};
type UserWithRole = User & Role;

const user1: UserWithRole = {
  name: "Mr. x",
  age: 23,
  role: "admin",
};

// interface : object type : array, object, function

interface IUser {
  name: string;
  age: number;
}

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}
const user2: IUserWithRole = {
  name: "Mr. x",
  age: 23,
  role: "admin",
};
//primitive data type
type isAdmin = boolean;
const isAdmin: isAdmin = true;

// function
type Add = (num1: number, num2: number) => number;
interface IAdd {
  (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => num1 + num2;
type friends = string[];
interface IFriends {
  [index: number]: string;
}
