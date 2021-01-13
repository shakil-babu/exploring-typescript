// type conversion / casting / assertion

let firstNumber = '1';
let secondNumber = '2';
let sum = Number(firstNumber) + Number(secondNumber);
console.log(sum);


// unknown to string
let dream:unknown = 'Software Engineer';
console.log((dream as string).length)

// another example
let destiny:unknown = 'Software Developer' ;
console.log((<string>destiny).length);

// any to number
let Code:any = 123 ;
let convertCodee = <number>Code ;
console.log(typeof(convertCodee));

// any to number
let code:any = 123 ;
let convertCode = <number>code ;
console.log(typeof(convertCode));

// any to number
let num:number = 202 ;
let convertNum = (num as number);
console.log(typeof(convertNum));
