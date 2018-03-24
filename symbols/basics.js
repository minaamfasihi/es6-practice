// symbols are not iterable
// they provide a unique id
// symbols are not printed

let symbol = Symbol('debug');
console.log(symbol);
console.log(symbol.toString()); // "Symbol('debug')"
console.log(typeof symbol); // "symbol"

let anotherSymbol = Symbol('debug');
console.log(symbol == anotherSymbol); // false

let obj = {
    name: 'max',
    [symbol]: 22
}

console.log(obj); // { name: "Max" }
// symbol is not printed when an object is printed
console.log(obj[symbol]); // 22
// symbols are useful for meta-programming like when a file was created, updated etc.

