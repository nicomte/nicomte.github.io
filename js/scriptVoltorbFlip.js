function createCardLayout() {

    //Get id of div where cards are placed
    const cardArea = document.getElementById("cardArea");

    //Create 5x5 card-tiles with id from 0-24
    //Every 6th tile will be a row info tile with id rowInfo[color]
    //Append both to cardArea
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const cardBackground = document.createElement("div");
            cardBackground.className = "cardBackground";

            const card = document.createElement("div");
            card.className = "card";
            card.id = i * 5 + j;

            cardBackground.appendChild(card);
            cardArea.appendChild(cardBackground);
        }
        createInfoBox("Row", i, cardArea);
    }

    //Create additional 6th row with column info tiles
    for (let i = 0; i < 5; i++) {
        createInfoBox("Column", i, cardArea);
    }
}

function createInfoBox(rowOrColumn, index, container) {

    //Support variables for row/column info
    const colorScheme = ["Red", "Green", "Yellow", "Blue", "Purple"];

    //Create div background for columnInfo
    const infoBoxBackground = document.createElement("div");
    infoBoxBackground.className = "cardBackground";

    //Create div columnInfo
    const infoBox = document.createElement("div");
    infoBox.className = "infoBox";
    infoBox.id = "infoBox" + rowOrColumn + colorScheme[index];

    //Create div for coinSum
    const coinSumContainer = document.createElement("div");
    coinSumContainer.className = "coinSumContainer";

    //Create span for coinSum, append to columnInfo
    const coinSum = document.createElement("span");
    coinSum.className = "coinSum";
    coinSum.id = "coinSum" + rowOrColumn + colorScheme[index];
    coinSum.innerText = 0;

    coinSumContainer.appendChild(coinSum);
    infoBox.appendChild(coinSumContainer);

    //Create div for voltorbSum
    const voltorbSumContainer = document.createElement("div");
    voltorbSumContainer.className = "voltorbSumContainer";

    //Create and append img for voltorb icon
    const voltorbIcon = document.createElement("img");
    voltorbIcon.className = "voltorbIcon";
    voltorbIcon.src = "../img/VoltorbFlip/voltorb.png";
    voltorbSumContainer.appendChild(voltorbIcon);

    //Create span for voltorbSum, append to voltorbSumContainer
    const voltorbSum = document.createElement("span");
    voltorbSum.className = "voltorbSum";
    voltorbSum.id = "voltorbSum" + rowOrColumn + colorScheme[index];
    voltorbSum.innerText = 0;
    voltorbSumContainer.appendChild(voltorbSum);

    //Append voltorbSumContainer to columnInfo
    infoBox.appendChild(voltorbSumContainer);

    //Append columnInfo to background, append card to cardArea
    infoBoxBackground.appendChild(infoBox);
    container.appendChild(infoBoxBackground);
}
