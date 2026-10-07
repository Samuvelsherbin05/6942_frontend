let employees = [

{ name: "Arun", salary: 25000 },

{ name: "Priya", salary: 45000 },

{ name: "Kumar", salary: 30000 },

{ name: "Ravi", salary: 50000 }

];

let result = employees.filter((employee)=>{

    return employee .salary >= 30000;    
    
     
});

console.log(result);

