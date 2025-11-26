// class Animal {
//   name: string;
//   species: string;
//   sound: string;
//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }
//   makeSound() {
//     console.log(`${this.name}l is a making sound ${this.sound}  `);
//   }
// }

// or parameter properties

class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
  makeSound() {
    console.log(`${this.name} is making sound ${this.sound}
  `);
  }
}
const dog = new Animal("doges bhai", "dog", "Ghew ghew");
const cat = new Animal("pushi bhai", "cat", "Mew mew");

dog.makeSound();
cat.makeSound();
