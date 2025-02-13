//Support variables for color scheme
const colorScheme = ["Red", "Green", "Yellow", "Blue", "Purple"];

function createCardLayout() {
    clearLayout();

    //Get id of div where cards are placed
    const cardArea = document.getElementById("cardArea");

    //Create 5x5 card-tiles with id from 0-24
    //Every 6th tile will be a row info tile with id rowInfo[color]
    //Append both to cardArea
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            createCardRow(i, j, cardArea, colorScheme);
        }
        createInfoBox("Row", i, cardArea, colorScheme);

        for (let k = 0; k < 5; k++) {
            createColoredLineVertical(k, cardArea, colorScheme);
        }
    }

    //Create additional 6th row with column info tiles
    for (let i = 0; i < 5; i++) {
        createInfoBox("Column", i, cardArea, colorScheme);
    }

    addInfoBox();
    addLanguageSelectionBox();
}

function addInfoBox() {
    const overlay = document.createElement("div");
    overlay.id = "overlayHelpBox";
    overlay.className = "overlay";
    overlay.innerHTML = `
            <div id="helpBox">
                <span class="helpTitle" data-key="5">How to play</span><br />
                <span class="helpText" data-key="6">Behind each card hides a 1, 2, 3 or Voltorb. You win by flipping all of the x2 and x3 cards in a level.</span>
                <span class="helpText" data-key="7">Should you flip a Voltorb you lose all points and fall back to level 1.</span><br />
                <span class="helpText" data-key="8">The coloured boxes help you decide which card to flip. The top number tells you the sum of all numbers in a row/column, while the bottom number tells you how many Voltorb are hiding in each row/column.</span><br />
                <span class="helpText" data-key="9">The memo button allows you to place memos on each card if you suspect to know what value it hides. While Memo-Mode is active, you cannot accidentally flip a card.</span>
                <div id="closeHelpButton"><span class="helpText" data-key="10">Close</span></div>
            </div>
        `;
    document.getElementById("cardArea").appendChild(overlay); // Append instead of replacing

    document.getElementById("closeHelpButton").addEventListener("click", toggleHelpBox);
}

function addLanguageSelectionBox() {
    const overlay = document.createElement("div");
    overlay.id = "overlayLanguageSelectionBox";
    overlay.className = "overlay";
    overlay.innerHTML = `
            <div id="languageSelectionBox">
                <div id="en" class="languageOption"></div>
                <div id="de" class="languageOption"></div>
            </div>
        `;
    document.getElementById("cardArea").appendChild(overlay); // Append instead of replace
    attachELToLanguageOption();
}

function createColoredLineVertical(index, container, colorScheme) {
    const coloredLineBackground = document.createElement("div");
    coloredLineBackground.className = "coloredLineBackgroundVertical";

    const coloredLine = document.createElement("div");
    coloredLine.className = "coloredLineVertical";
    coloredLine.id = "coloredLineVertical" + colorScheme[index];

    coloredLineBackground.appendChild(coloredLine);
    container.appendChild(coloredLineBackground);

    const spacer = document.createElement("div");
    spacer.className = "spacer";
    container.appendChild(spacer);
    if (index == 4) {
        const spacer = document.createElement("div");
        spacer.className = "spacer";
        container.appendChild(spacer);
    }
}

function createCardRow(rowIndex, columnIndex, container, colorScheme) {
    const cardBackground = document.createElement("div");
    cardBackground.className = "cardBackground";

    const card = document.createElement("div");
    card.className = "card";
    card.id = rowIndex * 5 + columnIndex;
    card.addEventListener("click", function () {
        if (!card.classList.contains("clicked")) {
            flipCard(card, valuesCardLayout);
        }
    });

    cardBackground.appendChild(card);
    container.appendChild(cardBackground);

    const coloredLineBackground = document.createElement("div");
    coloredLineBackground.className = "coloredLineBackgroundHorizontal";

    const coloredLine = document.createElement("div");
    coloredLine.className = "coloredLineHorizontal";
    coloredLine.id = "coloredLineHorizontal" + colorScheme[rowIndex];

    coloredLineBackground.appendChild(coloredLine);
    container.appendChild(coloredLineBackground);
}

function createInfoBox(rowOrColumn, index, container, colorScheme) {
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

    if (rowOrColumn === "Column") {
        const coloredLineBackground = document.createElement("div");
        coloredLineBackground.className = "coloredLineBackgroundInfoBox";

        const coloredLine = document.createElement("div");
        coloredLine.className = "coloredLineHorizontal";
        coloredLine.id = "coloredLineHorizontalInfoBox";

        coloredLineBackground.appendChild(coloredLine);
        container.appendChild(coloredLineBackground);
    }
}

function clearLayout() {
    document.getElementById("cardArea").innerHTML = "";
}
