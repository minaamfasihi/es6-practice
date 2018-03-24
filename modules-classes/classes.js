class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log('Hello, my name is ' + this.name);
    }
}

let person = new Person('Minaam');
person.greet();


console.log(person.__proto__ == Object.prototype); // false
console.log(person.__proto__ == Object); // false
console.log(person.__proto__ == Person.prototype); // true
