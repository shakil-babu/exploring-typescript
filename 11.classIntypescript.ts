

// class Employee {
//     empCode: number;
//     empName: string;

//     constructor(code: number, name: string) {
//             this.empName = name;
//             this.empCode = code;
//     }

//     getSalary() : number {
//         return 10000;
//     }
// }


// let shakil = new Employee(1002, 'Shakil Babu') ;
// console.log(shakil);



// class Player {
//     plyName: string ; 
//     plyCode :number ;

//     constructor(code:number, name:string){
//         this.plyCode = code ;
//         this.plyName = name ;
//     }

//     sayName():string {
//         return `Hey ${this.plyName} welcome to our course.`
//     }
// }

// let player1 = new Player(2002,'Torikus Sadik Raihan' ) ;
// let greeting = player1.sayName();
// console.log(greeting);




class Student{
    Name:string ;
    session: string ; 
    department: string ;

    constructor(name:string , s: string  , dp:string){
        this.Name = name ;
        this.session = s ;
        this.department = dp ; 
    }

    sayDep():string {
        return `Hey ${this.Name} your deparment name is  ${this.department}`
    }
}

let tori = new Student('Torikus Sadik ','2018-2019', 'Computer');
console.log(tori.Name);


