// let numbers = [1, 2, 3];

// let [a, b, c] = numbers;

// console.log(a); //1
// console.log(b); //2
// console.log(c); //3
// console.log(numbers); //[1,2,3] - original array remains the same

let numbers = [1, 2, 3];
let [a, ...b] = numbers;
let [a = 'Default', b, c = 10] = numbers; //a will get the value 1, overriding 'Default', b will get 2 and c will get 3
// the rest operator makes a new array
console.log(b); // [2, 3]


// let a = 4;
// let b = 10;
// let [b, a] = [a, b]; // swaps the 2 variables


let numbers = [1, 2, 3];
let [a, , c] = numbers; // ignores the second value
console.log(a, c); // 1, 3


let [a, b] = [1, 2, 3];
console.log(a, b); // 1, 2
