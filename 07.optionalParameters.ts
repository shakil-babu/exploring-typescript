interface Person {
    name:string;
    department:string;
    id?:number
}

// const person : Person = {
//     name:'Shakil Babu',
//     department:'computer',
//     id:34
// }

// console.log(person)


// another

interface Details {
    fullName:string;
    nickName? : string ; // called optional parameters
    age: number ;
    deparment:string
}

const details : Details = {
    fullName:'Shakil Babu',
    age:21,
    deparment:'Computer'
}

console.log(details);