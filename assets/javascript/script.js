document.addEventListener("DOMContentLoaded", main);

function main() {
    let buttons = document.getElementsByClassName("button");
    let string = ""

    for (let button of buttons) {
        button.addEventListener("click", function() {

            string = String(string)

            if (this.getAttribute("class") === "button number") {
                console.log("You Clicked A Number");
                string += button.innerHTML;

            } 
            
            else if (this.getAttribute("class") === "button symbol") {
                console.log("You Clicked A Operator");
                if (button.innerHTML === "x") {
                    string += " * ";
                } else if (button.innerHTML === "÷") {
                    string +=" / ";
                } else {
                    string += ` ${button.innerHTML} `
                }
            } 
            
            else if (this.getAttribute("class") === "button function") {
                console.log("You Clicked A Function");
                if (button.innerHTML === "AC") {
                    string = "";
                }
                else {
                    string = string.slice(0, -1);
                }
            } 
            
            else if (this.getAttribute("class") === "button symbol equals") {
                console.log("You Clicked The Equals")
                string = eval(string)
            } 
            
            else {
                throw `Unknown Button: ${button}. Aborting!`;
            }

            let display = document.getElementById("awnser-display");
            display.innerHTML = string;
        })};
};