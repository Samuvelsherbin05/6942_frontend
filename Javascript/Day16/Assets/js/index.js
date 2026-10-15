 let form = document.getElementById("myForm");
        let table = document.getElementById("table");

        let employees = JSON.parse(localStorage.getItem("employees")) || [];

        function display() {
            table.innerHTML = "";

            employees.forEach(function(emp) {
                table.innerHTML += `
                    <tr>
                        <td>${emp.name}</td>
                        <td>${emp.age}</td>
                        <td>${emp.department}</td>
                        <td>${emp.salary}</td>
                        <td><button onclick="removeEmployee(${emp.id})">Delete</button></td>
                    </tr>
                `;
            });
        }

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            let name = document.getElementById("name").value.trim();
            let age = Number(document.getElementById("age").value);
            let department = document.getElementById("department").value.trim();
            let salary = Number(document.getElementById("salary").value);

            if (name === "" || department === "" || age <= 0 || salary <= 0) {
                alert("Enter valid details");
                return;
            }

            let emp = {
                id: Date.now(),
                name: name,
                age: age,
                department: department,
                salary: salary
            };

            employees.push(emp);

            localStorage.setItem("employees", JSON.stringify(employees));

            display();
            form.reset();
        });

        function removeEmployee(id) {
            employees = employees.filter(function(emp) {
                return emp.id !== id;
            });

            localStorage.setItem("employees", JSON.stringify(employees));
            display();
        }

        display();