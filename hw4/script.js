"use strict";

/**
 * @author Thomas Gibson
 * 10/20/2024
 * 
 * Script listing for Rock Paper Scissors.
 */
(function () {
    const choices = document.querySelectorAll("#player-feild img");
    const button = document.querySelector("button");

    let gameStarted = false;


    choices.forEach(element => {
        element.addEventListener("click", function (event) {

            if (gameStarted) {
                return;
            }

            gameStarted = true;

            const target = event.currentTarget;

            let list = target.classList;

            // remove existing selection
            let selected = document.querySelector("#player-feild .selected");
            if (selected)
                selected.classList.remove("selected");
            list.add("selected");

            setTimeout(
                function () {
                    ComputerTurn(target.getAttribute("value"));
                }, 3000);
        });
    });

    function ComputerTurn(playerChoice) {
        let cpuImage = document.querySelector("#computer-feild img")

        let cpuChoice = parseInt(Math.random() * 3 + 1);

        console.log(cpuChoice);

        switch (cpuChoice) {
            case 1: // Rock
                cpuImage.src = "images/rock.PNG";

                if (playerChoice == "Rock")
                    Tie();

                if (playerChoice == "Paper")
                    Win();

                if (playerChoice == "Scissor")
                    Lose();
                break;

            case 2: // Paper
                cpuImage.src = "images/paper.PNG"

                if (playerChoice == "Rock")
                    Lose();

                if (playerChoice == "Paper")
                    Tie();

                if (playerChoice == "Scissor")
                    Win();

                break;

            case 3: // Scissors
                cpuImage.src = "images/scissors.PNG"

                if (playerChoice == "Rock")
                    Win();

                if (playerChoice == "Paper")
                    Lose();

                if (playerChoice == "Scissor")
                    Tie();

                break;
        }


    }

    let tieCount = 0;
    let winCount = 0;
    let loseCount = 0;

    const result = document.getElementById("result");
    const wins = document.getElementById("wins");
    const ties = document.getElementById("ties");
    const losses = document.getElementById("losses");

    function Tie() {
        tieCount++;
        ties.textContent = tieCount;
        result.textContent = "You tied";
    }

    function Win() {
        winCount++
        wins.textContent = winCount;
        result.textContent = "You won";
    }

    function Lose() {
        loseCount++;
        losses.textContent = loseCount;
        result.textContent = "You lost";
    }

    button.addEventListener("click", () => {

        if (!gameStarted) {
            return;
        }

        let selected = document.querySelector("#player-feild .selected");
        selected.classList.remove("selected");

        selected.classList.remove("selected");
        gameStarted = false;

        let cpuImage = document.querySelector("#computer-feild img")

        cpuImage.src = "images/question-mark.PNG";
    })

})();
