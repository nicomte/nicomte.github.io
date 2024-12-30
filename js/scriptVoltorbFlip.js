function createCardLayout() {
    //Support variables for row/column info
    const colorScheme = ["Red", "Green", "Yellow", "Blue", "Purple"];
    var infoBoxColorIndex = 0;

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

        const rowInfoBackground = document.createElement("div");
        rowInfoBackground.className = "cardBackground";

        const rowInfo = document.createElement("div");
        rowInfo.className = "rowInfo";
        rowInfo.id = "rowInfo" + colorScheme[infoBoxColorIndex];
        infoBoxColorIndex++;

        rowInfoBackground.appendChild(rowInfo);
        cardArea.appendChild(rowInfoBackground);

    }

    infoBoxColorIndex = 0;

    //Create additional 6th row with column info tiles
    for (let i = 0; i < 5; i++) {
        const columnInfoBackground = document.createElement("div");
        columnInfoBackground.className = "cardBackground";

        const columnInfo = document.createElement("div");
        columnInfo.className = "columnInfo";
        columnInfo.id = "columnInfo" + colorScheme[infoBoxColorIndex];
        infoBoxColorIndex++;

        columnInfoBackground.appendChild(columnInfo);
        cardArea.appendChild(columnInfoBackground);
    }
}
