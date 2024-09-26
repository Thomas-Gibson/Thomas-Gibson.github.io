/* 
  Name: Thomas Gibson
  Date: 09.25.2024
  CSC 372-01

  This is the source file for index.html and plan.html.
*/


let food_image = document.querySelectorAll(".unselected");

for (i = 0; i < food_image.length; i++) {
        food_image[i].addEventListener("click", makeBig);
}

let buttons = document.querySelectorAll("button");

for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", addFood);
}

/**
 * When the user selects an image the image style will change to indicate it was selected.
 * Text will display describing the dish.
 * @param {*} event 
 */
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

/**
 * Puts a food item in the users list and sums the cost of all items as they are added.
 * @param {*} event 
 */
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

/**
 * Rmoves a food item from the users list.
 */
function removeFood(event) {
        const target = event.currentTarget;

        const cost = target.getAttribute("cost");
        total_cost -= parseFloat(cost);

        costDisplay.textContent = total_cost;
        target.remove();
}
