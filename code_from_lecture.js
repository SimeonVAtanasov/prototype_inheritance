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

let dog = { name: "Sharo", age: 4 };
// Object.freeze(dog);
// dog.age = 10; // Error in strict mode
// dog.gender = "male"; // Error in strict mode
// console.log(dog); // { name: 'Sharo', age: 4 }

Object.seal(dog);
dog.age = 10; // OK
// delete dog.age; // Error in strict mode
dog.color = "brown"; // TypeError
console.log(dog); // { name: 'Sharo', age: 10 }
