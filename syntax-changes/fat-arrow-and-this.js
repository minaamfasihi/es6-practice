var button = document.querySelector('button');

var fn2 = () => console.log(this);

function fn() {
    console.log(this);
}

button.addEventListener('click', fn); // this keyword will print the button object
button.addEventListener('click', fn2); // this keyword will still print the window object
// that's the main difference b/w fat arrow and regular functions. this keyword in fat arrow functions ALWAYS keep its global state (i.e. window object).
