const input = document.getElementById("inputText");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent.trim(); // Trim spaces

        switch (value) {
            case "=":
                try {
                    expression = eval(expression).toString();
                    input.value = expression;
                } catch {
                    input.value = "error";
                    expression = "";
                }
                break;

            default:
                if (/[\d+\-*/.]/.test(value)) { // Allow only valid characters
                    expression += value;
                    input.value = expression;
                }
        }
    });
});
