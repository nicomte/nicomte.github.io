function flipCard(element, values) {
    value = values[element.id];
    changeIcon(element, value);
    checkWinOrLoss(value, numberOfX2X3);

}

function changeIcon(element, value) {

    const backgroundMap = {
        "x1": "../img/VoltorbFlip/value1.png",
        "x2": "../img/VoltorbFlip/value2.png",
        "x3": "../img/VoltorbFlip/value3.png",
        "voltorb": "../img/VoltorbFlip/valueVoltorb.png"
    };

    if (backgroundMap[value]) {
        element.style.backgroundImage = `url("${backgroundMap[value]}")`;
    }
}

function failGame() {
    currentLevel = 0;
    displayOverlay("loss");
}

function displayOverlay(result) {
    document.getElementById('cardArea').innerHTML += '<div id="overlay" class="overlay"></div>';

    if (result === "loss") {
        writeToTextbox("Voltorb!!! You lose all gathered points!", "Click to continue");
    } else if (result === "win") {
        writeToTextbox("Congrats! You found all x2 and x3!", "Click to continue to the next level!");
    }

    document.body.addEventListener('click', closeOverlay, {capture: true});
}


function closeOverlay() {
    document.body.removeEventListener('click', closeOverlay, {capture: true});
    document.getElementById('overlay').remove();
    writeToTextbox(" ", " ");
    createCardLayout();
    assignValuesToLayout();
}

function checkWinOrLoss(value, numberOfX2X3) {
    switch (value) {
        case "x2":
            numberOfX2X3[0]--;
            writeToTextbox("Found an x2!", "")
            break;
        case "x3":
            numberOfX2X3[1]--;
            writeToTextbox("Found an x3!", "")
            break;
        case "voltorb":
            failGame();
            break;
    }

    if (numberOfX2X3[0] === 0 && numberOfX2X3[1] === 0) {
        nextLevel();
    }
}

function nextLevel() {
    currentLevel++;
    displayOverlay("win");
}

