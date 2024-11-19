// internal object properties
let obj = { a: 1, b: 2 };

// when there is no key C it's going to be created on the go
obj.c = 3;
Object.defineProperty(obj, "d", { value: 4, enumerable: false });
console.log("🚀 ~ ob.d:", obj.d); // => 4
for (let key in obj) console.log(obj[key]); //1 2 3
console.log("🚀 ~ Object.keys(obj):", Object.keys(obj)); // => ["a", "b", "c"]
