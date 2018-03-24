class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(value) {
        if (value.length > 2) {
            this._name = value;
        }
        else {
            console.log('Rejected!');
        }
    }
}

let person = new Person('Max');
console.log(person.name);
console.log(person._name); //not really private, can be accessed this way
person.name = 'Anna';
console.log(person.name);
