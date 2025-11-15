// dynamically generalize: Generic
type GenericArray<T> = Array<T>;

// const friends: string[] = ["mr. x", "mr. y", "mr. z"]

const friends: Array<string> = ["mr. x", "mr. y", "mr. z"];

// const rollNumber: number[] = [4, 7, 11]
const rollNumbers: Array<number> = [4, 7, 11];

// const isEligibleList: boolean[] = [true, false, true];
const isEligibleList: Array<boolean> = [true, false, true];

//Generic Array  and Object
type TUser = {
  name: string;
  age: number;
};
const userList: GenericArray<TUser> = [
  {
    name: "mr. x",
    age: 22,
  },

  {
    name: "mr. y",
    age: 25,
  },
];

const sqrFunc = (value: number) => {
  return value * value;
};
sqrFunc(4);
//generic

type Coordinates<x, y> = [x, y];

const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];
