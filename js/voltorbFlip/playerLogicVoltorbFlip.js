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

function displayOverlay(result) {
    document.getElementById('cardArea').innerHTML += '<div id="overlay" class="overlay"></div>';

    if (result === "loss") {
        document.getElementById('lvl'+ parseInt(currentLevel+1)).style.backgroundColor = "white";
        currentLevel = 0;
        writeToTextbox("Voltorb!!! You lose all gathered points!", "Click anywhere to retry");
    } else if (result === "win") {

        if(currentLevel === 7 ){
            writeToTextbox("Wow, incredible! You beat every level!", "Click anywhere to restart!");
            currentLevel = 0;
        }else {
            currentLevel++;
            writeToTextbox("Congrats! You found all x2 and x3!", "Click anywhere to continue to the next level!");
        }
    }

    document.body.addEventListener('click', closeOverlay, {capture: true});
}


function closeOverlay() {
    document.body.removeEventListener('click', closeOverlay, {capture: true});
    document.getElementById('overlay').remove();
    writeToTextbox(" ", " ");
    createCardLayout();
    assignValuesToLayout();
    updateLevelHighlighter(currentLevel);
}

function updateLevelHighlighter(currentLevel){
    document.getElementById('lvl'+ parseInt(currentLevel+1)).style.backgroundColor = "gold";
    document.getElementById('lvl'+ parseInt(currentLevel)).style.backgroundColor = "white";
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
            displayOverlay("loss");
            break;
    }

    if (numberOfX2X3[0] === 0 && numberOfX2X3[1] === 0) {
        displayOverlay("win");
    }
}