
// 1. boolean type
// ==> The most basic datatype in the simple true / false . which is the js and ts call as a boolean .

let isLogin: boolean = false ;
let result = isLogin ? 'Hey! Shakil welcome to our destiny .' : 'Please create an accoutn or sign in .'
// console.log(result)


// 2. number type
// ==> As in JavaScript, all numbers in TypeScript are either floating point values or BigIntegers. These floating point numbers get the type number, while BigIntegers get the type bigint. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.

let normalNumber:number = 10 ;
let binaryNumber:number = 0b1010 ;
// console.log(normalNumber + 10);

// 3. string type
let Name:string = 'Shakil Babu' ;
let age: number = 19 ;

let greeting: string = `My name is ${Name} and i'll be ${age+1} year in next month.`
// console.log(greeting);


// 04. array type
let names: Array<string> = ['Shakil','Babu','Torikus','Morshed','Haque'];
let Names: string[] = ['Shakil', 'Babu', 'Torikus', 'Morshed', 'Haque'];

// Names.map((item) => {
//     console.log(item)
// })

//


// 05. object type

interface Person{
    name: string ;
    dep: string ;
    sl: number ;
    skill: string[];
};

const person: Person = {
    name:'Shakil Babu',
    dep:'Computer',
    sl:1,
    skill:['JS']
}

function Deposite(obj:Person, skill:string):string{
    obj.skill.push(skill);
    return skill;
}

let a = Deposite(person, 'TypeScript');
// console.log(person.skill);



// 06. void type
// void type that means program nothing return okay ?
let fullName:string = 'Shakil Babu';
function sayGreeting(name:string):void{
    // console.log(name)
}
sayGreeting(fullName)

// 07. any type
let details:any[] = ['shakil','babu',112906,false];
let department:any = null ;

// 08. unknow type  -- similar like any
let identity:unknown[] = ['Torikus','Sadik',112902,true];
let dep:unknown = undefined ;

// union type
let Age:number | string = '20 year'  ;

