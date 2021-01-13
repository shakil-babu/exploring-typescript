
// interface

interface Person{
    name:string ;
    sl:number ;
    dep:string ;
    skill:(string | number | boolean)[] ;
}
const person:Person = {
    name:'Shakil Babu',
    sl:1,
    dep:'Computer',
    skill:['JavaScript',false]
}

console.log(person.skill[0]) ;



// another example of interface

interface aboutPerson {
    name:string ;
    fatherName:string;
    isMarried:boolean ;
    religion:string ;
    idNo:number ;
}

const personDetails :aboutPerson = {
    name:'Shakil Babu',
    fatherName:'Hasanur Rahman',
    isMarried:false,
    religion:'Islam',
    idNo:12
}

function sayName(name:string):void{
    console.log("Hey, "+name)
}
sayName(personDetails.name)


//
interface Employee{
    name:string ;
    code:number ;
}
let employe:Employee = {
    name:'john',
    code:33
};

console.log(employe);

// another way is
interface Emp {
    name:string ;
    code:number
}
let emp = <Emp>{};
emp.name = 'John' ;
emp.code = 344;

console.log(emp);
