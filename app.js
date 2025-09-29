const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button")

buttons.forEach((button) => {
    button.addEventListener("click", (evt) => {
        switch (evt.target.innerText) {
            case "C":
                display.innerText = "0"
                break;
            case "=":
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case "%":
                const passNum = display.innerText + "/100"
                display.innerText = eval(passNum)
                break;
            case "+/-":
                display.innerText = "-"
                break;
            default:
                if (display.innerText === "0" && evt.target.innerText !== ".") {
                    display.innerText = evt.target.innerText;
                } else {
                    display.innerText += evt.target.innerText;
                }
        }
    })
})