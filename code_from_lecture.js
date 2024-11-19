"use strict";
// internal object properties

// non-enumerable
// let obj = { a: 1, b: 2 };

// // when there is no key C it's going to be created on the go
// obj.c = 3;
// Object.defineProperty(obj, "d", { value: 4, enumerable: false });
// console.log("🚀 ~ ob.d:", obj.d); // => 4
// for (let key in obj) console.log(obj[key]); //1 2 3
// console.log("🚀 ~ Object.keys(obj):", Object.keys(obj)); // => ["a", "b", "c"]

// non-writable

// let obj = { a: 1 };
// Object.defineProperty(obj, "b", { value: 2, writable: false });
// console.log("🚀 ~ ob.b:", obj.b); // => 2
// obj.b = 10;
// console.log("🚀 ~ ob.b:", obj.b); // => 2

// non-configurable

// let obj = {};
// Object.defineProperty(obj, "a", {
//   configurable: false,
//   writable: true,
//   value: 12,
// });
// // Object.defineProperty(obj, "a", { enumerable: true }); // TypeError
// // Object.defineProperty(obj, "a", { value: 12 }); // TypeError
// Object.defineProperty(obj, "a", { writable: false }); // allowed
// // Object.defineProperty(obj, "a", { configurable: true }); // TypeError
// // Object.defineProperty(obj, "a", { writable: true }); // TypeError
// console.log("🚀 ~ obj.a:", obj.a); // => 12
// delete obj.a; // => nothing happens
// console.log("🚀 ~ obj.a:", obj.a); // => 12

//  freeze & seal

// let dog = { name: "Sharo", age: 4 };
// Object.freeze(dog);
// dog.age = 10; // Error in strict mode
// dog.gender = "male"; // Error in strict mode
// console.log(dog); // { name: 'Sharo', age: 4 }

// Object.seal(dog);
// dog.age = 10; // OK
// // delete dog.age; // Error in strict mode
// dog.color = "brown"; // TypeError
// console.log(dog); // { name: 'Sharo', age: 10 }

// --------------------------------------------------------

// prototype & inheritance

// function Person(first, last, age) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
// }
// Person.prototype.homeTown = "Varna";
// Person.prototype.sayName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// const person = new Person("Gergi", "Gerginov", 33);
// console.log("🚀 ~ person:", person);
// console.log("🚀 ~ person:", person.homeTown);

// const person2 = new Person("NeGergi", "NeGerginov", 33);
// console.log("🚀 ~ person2:", person2);
// console.log("🚀 ~ person2:", person2.homeTown);
// console.log("🚀 ~ person2.sayName():", person2.sayName());
// console.log("🚀 ~ person2:", Person.prototype);

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
// }
// Rectangle.prototype.area = function () {
//   return this.width * this.height;
// };

// let rect = new Rectangle(3, 5);
// console.log("🚀 ~ rect.area():", rect.area());

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   area() {
//     return this.width * this.height;
//   }
// }

// const rec = new Rectangle(2, 5);
// console.log("🚀 ~ rec:", rec);
// console.log("🚀 ~ Rectangle.prototype:", rec.area()); // => 10

// const dog = {
//   name: "Sharo",
//   printInfo: function () {
//     console.log(`My name is ${this.name}`);
//   },
// };
// const myDog = Object.create(dog);
// myDog.name = "Ares"; // inherited properties can be overwritten
// myDog.breed = "shepherd"; // breed is a property of myDog
// myDog.printInfo(); // My name is Ares

// console.log("🚀 ~ dog.breed:", dog.breed) // => undefined

// prototype inheritance

// the old way
// function Foo(name) {
//   this.me = name;
// }
// Foo.prototype.identify = function () {
//   return "I am " + this.me;
// };

// function Bar(name) {
//   Foo.call(this, name);
// }
// Bar.prototype = Object.create(Foo.prototype);

// Bar.prototype.speak = function () {
//   console.log("Hello, " + this.identify() + ".");
// };

// let obj1 = new Bar("a");
// let obj2 = new Bar("b");
// obj1.speak();
// obj2.speak();

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHi() {
//     return `hello, I'm ${this.name} I'm ${this.age}  years old`;
//   }
// }

// // const person = new Person("Jeraldo", 12);
// // person.sayHi();

// class Student extends Person {
//   constructor(name, age, grades) {
//     super(name, age);
//     this.grades = grades;
//   }

//   tellGrades() {
//     console.log(this.sayHi(), "my grades are ", this.grades);
//   }
// }

// const pepi = new Student("pepi", 19, 2.49);

// pepi.tellGrades();
