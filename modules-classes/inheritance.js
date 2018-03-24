export class Helper { // the export keyword exports the class Helper
    logTwice(msg) {
        console.log(msg);
        console.log(msg);
    }
}

let helper = new Helper(); // we dont want to instantiate it
helper.logTwice('Logged!');

// Solution:

class Helper {
    static logTwice(msg) {
        console.log(msg);
    }
}

Helper.logTwice("Hello");

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log('Hello, my name is ' + this.name);
    }
}

class Max extends Person {
    constructor(age) {
        super('Max'); // must call the parent's ctor otherwise it will throw an error. if you dont want a ctor in child, then you wont mention the child ctor explicitly.
        this.age = age;
    }

    greet() {
        console.log('Hello');
    }

    greetTwice() {
        this.greet(); // Output: 'Hello'
        this.greet(); // Output: 'Hello'
    }

    greetTwice2() {
        super.greet(); // Output: 'Hello, my name is Max'
        super.greet(); // Output: 'Hello, my name is Max'
    }
}

let max = new Max(28);
max.greetTwice();
max.greetTwice2();

console.log(max.__proto__ == Person.prototype); // false
console.log(max.__proto__ == Max.prototype); // true
