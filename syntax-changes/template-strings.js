let name = 'Max';

let description = `
 Hello, I'm ${name + '!!!'}
`;

console.log(description); //Hello, I'm Max

//also, make sure that the template strings contain only string inside the pair of curly braces

// if you want to escape the literals, you can do as below:
// let description = `
//  Hello, I'm \${name + '!!!'}
// `;

// console.log(description); // Hello, I'm ${name + '!!!'}
