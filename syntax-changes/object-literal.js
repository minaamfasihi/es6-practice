let name = "Anna";
let age = 25;

// let obj = {
//     name: "Jane",
//     age: 12
// };

// console.log(obj); // Output: name: Jane, age: 12

// let obj = {
//     name,
//     age
// };

// console.log(obj); // Output: name: Anna, age: 25 because the object literal looks around for variables with the same names as properties

// let name = "anna";
// let age = 12;

// let obj = {
//     name: "Max",
//     age,
//     greet() {
//         console.log(this.name + ', ' + this.age);
//     }
// };

// obj.greet(); //Output: name: Max, age: 12

// let obj = {
//     "name": 'Max',
//     age,
//     "greet"() {
//         console.log(this.name + ', ' + this.age);
//     }
// };

// obj["greet"](); Output: name: Max, age: 12
//we use strings here because the keys are now strings

let ageField = "age";
let obj = {
    "name": "Max",
    [ageField]: 28,
    "greet me"() {
        console.log(this.name + ', ' + this.age);
    }
};

console.log(obj["age"]); //28
console.log(obj.age); //28
console.log(obj[ageField]); //28

// this allows for dynamic fields
