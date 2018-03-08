function isEqualTo(number, compare = number) {
    console.log(number);
    console.log(compare);
}

console.log(isEqualTo(10)); // compare will also have value 10 as a default value

let a = 10;
// function isEqualTo(number, compare = a) { // compare will now have 10 as the default value
//     console.log(number);
//     console.log(compare);
// }

// function isEqualTo(number = compare, compare = 10) { //this wont work because compare is used before it is defined
//     console.log(number);
//     console.log(compare);
// }

// function isEqualTo(number = 10, compare) {
//     console.log(number);
//     console.log(compare);
// }

// console.log(isEqualTo(11)); // this will override the default value of number but still nothing will be passed to compare
