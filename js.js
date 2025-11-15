function createHelloWorld() {
  return function () {
    return "Hello World";
  };
}

const f = createHelloWorld();
console.log(f()); // "Hello World"
console.log(f(1, 2)); // still "Hello World"
console.log(f("x")); // still "Hello World"
