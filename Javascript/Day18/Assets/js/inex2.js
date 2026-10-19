
function calculateSalary(salary, callback) {
    return callback(salary);
}

const addBonus = (salary) => salary + 5000;

const deductSalary = (salary) => salary - 2000;

let salary = 20000;

console.log("Original Salary: " + salary);
console.log("Salary After Bonus: " + calculateSalary(salary, addBonus));
console.log("Salary After Deduction: " + calculateSalary(salary, deductSalary));
