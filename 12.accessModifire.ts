
class Student{
    public Name:string ;
     private session: string ; 
     readonly department: string ;
 
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
 
 //=================== for public method =====================
 let personName = tori.Name ;
 personName = 'Shakil Babu' ; // this is public that's why , we can reassign it 
 console.log(personName);
 
 
 // ============== for private method
 // console.log(tori.session);
 
 // this is not accessable cause , private value
 // that will be assignable within class
 
 
 //=============== for readonly method
 console.log(tori.department) ;
 // this is wrap with readonly method . 
 // in that case that can be read but not redeclare and alos reassign  ;
 