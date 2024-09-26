//"use strict";


let food_image = document.querySelectorAll(".unselected");

for (i = 0; i < food_image.length; i++) {
        food_image[i].addEventListener("click", makeBig);
}

let buttons = document.querySelectorAll("button");

for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", addFood);
}

function makeBig(event) {

        const target = event.currentTarget;
        const last = document.querySelector(".selected");

        if (last) {
                last.classList.remove('selected');
                last.classList.add('unselected');
        }

        target.classList.remove('unselected');
        target.classList.add('selected');

        const text = target.getAttribute('text');

        const container = target.parentNode.parentNode;
        const paragraph = container.querySelector(".description");
        paragraph.textContent = text;

        console.log(text);
}

let total_cost = 0.0;
const costDisplay = document.getElementById("cost_display");

function addFood(event) {
        const target = event.currentTarget;
        const selections = document.getElementById("selections");

        const cost = target.getAttribute("cost");
        const item = target.getAttribute("item");

        let paragraph = document.createElement("p");
        let text = document.createTextNode(item);

        paragraph.appendChild(text);
        paragraph.setAttribute("cost", cost);
        paragraph.addEventListener("click", removeFood);

        selections.appendChild(paragraph);

        total_cost += parseFloat(cost);
        costDisplay.textContent = total_cost;
        console.log(cost);
}

function removeFood(event) {
        const target = event.currentTarget;

        const cost = target.getAttribute("cost");
        total_cost -= parseFloat(cost);

        costDisplay.textContent = total_cost;
        target.remove();
}

// let addButton = document.querySelector("#add-btn ");

// addButton.addEventListener("click", function () {

//         let num1 = parseInt(document.querySelector("#first").value);
//         let num2 = parseInt(document.querySelector("#second").value);
//         let res = num1 + num2;
//         let resultDiv = document.querySelector("#result");
//         resultDiv.textContent = num1 + " + " + num2 + " = " + res;

// });

// var boxBtn = document.getElementById("random-btn");
// boxBtn.addEventListener("click", boxFunction);
// function boxFunction() {
//         console.log("this in event handler:" + this)
// }