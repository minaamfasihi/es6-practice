//jshint esnext:true
// const age = 24;
// console.log(age);

// const AGES = [20, 21, 22, 25];
// console.log(AGES);

// AGES.push(90); // this is possible because AGES is just a reference to an actual array object
// // the constant pointer can't change but the values which are pointed by it can.
// console.log(AGES);

// const OBJ = {
//   name: 'Ma',
//   age: 24
// };

// console.log(OBJ);

// OBJ.age = 21;
// console.log(OBJ);

/*
Variable hoisting doesnt work the same way with let and const as it did with var
*/

// num = 23;
// console.log(num);
// let num; //error

// function doSmth() {
//     foo = 2125;
// }

// let foo;
// doSmth(); // foo is declared before it is used
// console.log(foo);

// var fn = () => 'Hello'; // we can remove the return keyword if we have to return only one line
// console.log(fn());

// var fn = (a, b) => a + b;
// console.log(fn(2, 5));

var fn = a => a + 5;
// console.log(fn(100w));

setTimeout(() => console.log('Hello'), 1000); //first argument is the callback which is a fat arrow function and the second argument is the timer
