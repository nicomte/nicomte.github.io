let noteMode = false;

function toggleNoteMode() {
    if (!noteMode) {
        noteMode = true;
        let cardBackground = document.querySelector(".cardBackground:has(#\\30)");
        cardBackground.id = "memo";

        let card = cardBackground.querySelector(".card");
        let memoPen = document.createElement("img");
        memoPen.src = "../img/VoltorbFlip/memoPen.png";
        memoPen.className = "memoPen";
        card.appendChild(memoPen);

    } else {
        noteMode = false;

        let memoElement = document.getElementById("memo");

        memoElement.id = "";

        let memoPen = memoElement.querySelector(".memoPen");
        memoPen.remove();
    }
}

function flipCard(element, values) {
    value = values[element.id];
    changeCardIcon(element, value);
    checkWinOrLoss(value, numberOfX2X3);
}

function changeCardIcon(element, value) {
    const backgroundMap = {
        x1: "../img/VoltorbFlip/value1.png",
        x2: "../img/VoltorbFlip/value2.png",
        x3: "../img/VoltorbFlip/value3.png",
        voltorb: "../img/VoltorbFlip/valueVoltorb.png"
    };

    if (backgroundMap[value]) {
        element.style.backgroundImage = `url("${backgroundMap[value]}")`;
    }
}

function displayOverlay(result) {
    document.getElementById("cardArea").innerHTML += '<div id="overlay" class="overlay"></div>';

    if (result === "loss") {
        document.getElementById("lvl" + parseInt(currentLevel + 1)).style.backgroundColor = "white";
        currentLevel = 0;
        writeToTextbox("Voltorb!!! You lose all gathered points!", "Click anywhere to retry");
    } else if (result === "win") {
        if (currentLevel === 7) {
            writeToTextbox("Wow, incredible! You beat every level!", "Click anywhere to restart!");
            currentLevel = 0;
        } else {
            currentLevel++;
            writeToTextbox("Congrats! You found all x2 and x3!", "Click anywhere to continue to the next level!");
        }
    }

    document.body.addEventListener("click", closeOverlay, { capture: true });
}

function closeOverlay() {
    document.body.removeEventListener("click", closeOverlay, { capture: true });
    document.getElementById("overlay").remove();
    writeToTextbox(" ", " ");
    createCardLayout();
    assignValuesToLayout();
    updateLevelHighlighter(currentLevel);
}

function updateLevelHighlighter(currentLevel) {
    document.getElementById("lvl" + parseInt(currentLevel + 1)).style.backgroundColor = "gold";
    document.getElementById("lvl" + parseInt(currentLevel)).style.backgroundColor = "white";
}

function checkWinOrLoss(value, numberOfX2X3) {
    switch (value) {
        case "x1":
            writeToTextbox("Found an x1!", "");
            if (parseInt(document.getElementById("currentScore").innerText) === 0) {
                writeScore(1);
            }
            break;
        case "x2":
            numberOfX2X3[0]--;
            writeToTextbox("Found an x2!", "");
            if (parseInt(document.getElementById("currentScore").innerText) === 0) {
                writeScore(parseInt(document.getElementById("currentScore").innerText) + 2);
            } else {
                writeScore(parseInt(document.getElementById("currentScore").innerText) * 2);
            }
            break;
        case "x3":
            numberOfX2X3[1]--;
            writeToTextbox("Found an x3!", "");
            if (parseInt(document.getElementById("currentScore").innerText) === 0) {
                writeScore(parseInt(document.getElementById("currentScore").innerText) + 3);
            } else {
                writeScore(parseInt(document.getElementById("currentScore").innerText) * 3);
            }
            break;
        case "voltorb":
            displayOverlay("loss");
            writeScore(0, 0);
            break;
    }

    if (numberOfX2X3[0] === 0 && numberOfX2X3[1] === 0) {
        displayOverlay("win");
        writeScore(
            0,
            parseInt(document.getElementById("currentScore").innerText) +
                parseInt(document.getElementById("totalScore").innerText)
        );
    }
}
