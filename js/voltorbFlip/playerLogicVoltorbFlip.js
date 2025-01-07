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
    if(result === "loss"){
        document.body.innerHTML += '<div id="overlay" class="overlay"><div id="popup" class="popup"><h2>Game Over</h2><p>You lost the game. Try again!</p><button id="closeButton">Close</button></div></div>';
        document.getElementById('closeButton').addEventListener('click', closeOverlay);
    } else if (result === "win"){
        document.body.innerHTML += '<div id="overlay" class="overlay"><div id="popup" class="popup"><h2>You won!</h2><p>You found all x2 and x3. Good Luck in the next Level!</p><button id="closeButton">Close</button></div></div>';
        document.getElementById('closeButton').addEventListener('click', closeOverlay);
    }
}

function closeOverlay() {
    document.getElementById('overlay').remove();

    createCardLayout();
    assignValuesToLayout();
}

function checkWinOrLoss(value, numberOfX2X3){
    switch(value){
        case "x2":
            numberOfX2X3[0]--;
            break;
        case "x3":
            numberOfX2X3[1]--;
            break;
        case "voltorb":
            failGame();
            break;
    }

    if(numberOfX2X3[0] === 0 && numberOfX2X3[1] === 0){
        nextLevel();
    }
}

function nextLevel(){
    currentLevel++;
    displayOverlay("win");
}