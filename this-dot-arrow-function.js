let People = function(person, age) { 
        this.person = person; 
        this.age = age; 
        this.info = function() { 
  
            // logs People 
            console.log(this);  
  
           setTimeout(() => {  
            // arrow function to make lexical "this" binding 
            // here this=People."this" has been inherited 
            console.log(this.person + " is " + this.age  
                                           + " years old"); 
           }, 3000); 
        } 
    }  
let person1 = new People('John', 21); 

  
// logs : John is 21 years old after 3 seconds 
person1.info();
// console.log(person1.info());