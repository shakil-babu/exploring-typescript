// First program in TypeScript

function addNumbers(a: number, b: number) {
    return a + b;
}
let sum: number = addNumbers(10, 15)
console.log('Sum of the two numbers is: ' +sum);


// same program
function AddNumbers(a: number, b: number):number{
    return a + b;
}
let Sum= AddNumbers(10, 15)
console.log('Sum of the two numbers is: ' +Sum);