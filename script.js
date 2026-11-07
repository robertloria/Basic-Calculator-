
const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            result.value = "";
        } 
        else if (value === "=") {
            try {
                result.value = Function(
                    '"use strict"; return (' + result.value + ')'
                )();
            } catch {
                result.value = "Error";
            }
        } 
        else {
            if (result.value === "Error") {
                result.value = "";
            }
            result.value += value;
        }
    });
});
