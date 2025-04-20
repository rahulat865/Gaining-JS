const input = document.getElementById("inputText");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button =>{
    button.addEventListener("click" , () =>{
        const value = button.textContent;

        switch(value){
            case "=":
                try{
                    expression = eval(expression).toString();
                    input.value = expression;

                }
                catch{
                    input.value = "error";
                    expression ="";
                }
                break;

                default:
                    expression += value;
                    input.value = expression;

        }
    });
});