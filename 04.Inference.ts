
// Type inference  in TypeScript


/*
inference: jokhon kono akta variable a sathe sathe value
assign korte hoi tokhon amader type bole dit hobe nah r aitai type inference.

karon typescript sathe sathe value ta k catch kore fele j tar type ta ki .

Example :
*/

// Example-1

let Name = 'Shakil Babu'  ; // don't need to say type annotation
console.log(typeof(Name)) // string

var a = "Po Po";
var b = 123;
a = b; // Compiler Error: Type 'number' is not assignable to type 'string'

// akhane typescript automatically inference er maddhome catch kore felce
// and akhane shudhu string chara r kono kichui assign kore jabe nah;
// tai error dicce


// Example-2 with array

let arr = ['shakil',34] ; // don't need to say type annotation
// arr = [string | number]
// there has ['shakil' --> string] [34 --> number] ;
// but we have to remember that , the arr (Array) can be accept only (string) and (numbers) value ;

// so lets try to push boolean value into arr
arr.push(true);
// error --> Argument of type 'boolean' is not assignable to parameter of type 'string | number'.



// so, jokhon amader age thekei jana thake j kono akta variable a ki ki
// type data thakte pare sei onujaye amader type inference korte hobe
// jana nah thakle type annotation korte hobe


// End of inference