
type funcStructure = (name:string,place:string, age:number) => string ;

let sayDetails:funcStructure = (name,place,age)=>{
    return `I am ${name} from ${place}. I'm ${age} year's old.` ;
}

let result = sayDetails('Shakil Babu','Bogura',20);
// console.log(result);


// rest parameter
// Sum element with rest parameter

type sumElement = (...numbers:number[]) => number ;

let sumallElement:sumElement = (...numbers)=>{
    let sum:number = 0 ;
    for(var i:number =0 ; i<numbers.length ; i++){
        sum += numbers[i];
    }
    return sum ;
}
let res = sumallElement(1,2,3,4);
// console.log(res);


// // default parameter
type indentity = (name:string,skill:string[], nickName?:string) => string ;
let Shakil:indentity = (name, skill, nickName)=>{
    return `I am ${name} . I've good skill on ${skill[0]}`;
}
let r = Shakil('Shakil Babu',['JavaScript','Python']) ;
console.log(r);

