function createCardLayout() {
    const colorScheme = ["Red", "Green", "Yellow", "Blue", "Purple"];
    const cardArea = document.getElementById("cardArea");
    var infoBoxColorIndex = 0;

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const cardBackground = document.createElement("div");
            cardBackground.className = "cardBackground";

            const card = document.createElement("div");
            card.className = "card";
            card.id = i;

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
