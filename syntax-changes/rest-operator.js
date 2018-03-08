// let numbers = [1, 2, 3, 4, 5];

// function sumUp(toAdd) {
//     let result = 0;
//     for (let i = 0; i < toAdd.length; i++) {
//         result += toAdd[i];
//     }
//     return result;
// }

// console.log(sumUp(numbers));

//what if we dont know the number of parameters?

function sumUp(...toAdd) { // the rest operator converts the list of objects, numbers, strings or whatever into an array
    console.log(toAdd);
    let result = 0;
    for (let i = 0; i < toAdd.length; i++) {
        result += toAdd[i];
    }
    return result;
}

console.log(sumUp(100, 10, 20)); // 130
console.log(sumUp(100, 10, "20")); // "11020"
