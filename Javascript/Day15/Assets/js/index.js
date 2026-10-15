     let form = document.getElementById("calculatorForm");
        let result = document.getElementById("result");

        form.addEventListener("submit", function(event) {

            event.preventDefault();

            let first = document.getElementById("num1").value;
            let second = document.getElementById("num2").value;
            let operation = document.getElementById("operation").value;

            if (first === "" || second === "") {
                result.textContent = "Please enter both numbers";
                return;
            }

            let num1 = Number(first);
            let num2 = Number(second);

            let answer = calculate(num1, num2, operation);

            result.textContent = "Result: " + answer;

        });

        function calculate(a, b, operation) {

            if (operation === "add") {
                return a + b;
            }
            else if (operation === "subtract") {
                return a - b;
            }
            else if (operation === "multiply") {
                return a * b;
            }
            else if (operation === "divide") {

                if (b === 0) {
                    return "Cannot divide by zero";
                }

                return a / b;
            }
        }

        document.getElementById("clear").addEventListener("click", function() {
            result.textContent = "Result:";
        });