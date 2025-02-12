let noteMode = false;

function toggleNoteMode() {
    let memoSelectionContainer = document.getElementById("memoSelectionContainer");

    if (!noteMode) {
        noteMode = true;
        memoSelectionContainer.style.display = "grid";

        let cardBackground = document.querySelector(".cardBackground:has(#\\30)");
        cardBackground.id = "memo";

        updateMemoSelection();

        let card = cardBackground.querySelector(".card");
        let memoPen = document.createElement("img");
        memoPen.src = "../img/VoltorbFlip/memoPen.png";
        memoPen.className = "memoPen";
        card.appendChild(memoPen);
    } else {
        noteMode = false;
        memoSelectionContainer.style.display = "none";

        let memoElement = document.getElementById("memo");
        memoElement.id = "";

        let memoPen = memoElement.querySelector(".memoPen");
        memoPen.remove();
    }
}

function toggleMemoOption(element) {
    if (element.className !== "memoSelectOptionActive") {
        element.className = "memoSelectOptionActive";
        addMemoIcon(element);
    } else {
        element.className = "memoSelectOption";
        removeMemoIcon(element);
    }
}

function addMemoIcon(element) {
    let activeCard = document.querySelector(".cardBackground#memo .card");

    const iconToAdd = element.id;
    activeCard.classList.add(iconToAdd);

    const img = document.createElement("img");
    img.src = `../img/VoltorbFlip/${iconToAdd}.png`;
    img.classList.add("icon", iconToAdd);
    activeCard.appendChild(img);
}

function removeMemoIcon(element) {
    let activeCard = document.querySelector(".cardBackground#memo .card");
    const iconToRemove = element.id;
    activeCard.classList.remove(iconToRemove);

    activeCard.querySelector(`.${iconToRemove}`)?.remove();
}

function removeAllMemoIcons(card) {
    // Get all classes that match memo icons
    const memoIcons = ["memo1", "memo2", "memo3", "memoVoltorb"];

    // Remove memo-related classes
    memoIcons.forEach((icon) => card.classList.remove(icon));

    // Remove any memo image elements inside the card
    card.querySelectorAll(".icon").forEach((img) => img.remove());
}

function updateMemoSelection() {
    // Aktives .card-Element ermitteln
    const activeCard = document.querySelector(".cardBackground#memo .card");
    if (!activeCard) return;

    // Liste der möglichen Icons
    const memoIcons = ["memo1", "memo2", "memo3", "memoVoltorb"];

    // Alle memoSelectOption-Elemente zurücksetzen
    document.querySelectorAll(".memoSelectOptionActive").forEach((option) => {
        option.classList.replace("memoSelectOptionActive", "memoSelectOption");
    });

    // Prüfen, welche Icons enthalten sind, und die entsprechende Option aktivieren
    memoIcons.forEach((icon) => {
        const element = document.getElementById(icon);
        if (element && activeCard.classList.contains(icon)) {
            element.classList.replace("memoSelectOption", "memoSelectOptionActive");
        }
    });
}

function flipCard(card, values) {
    if (noteMode === true) {
        document.getElementById("memo")?.removeAttribute("id");
        document.querySelector(".memoPen").remove();

        card.parentElement.id = "memo";
        let memoPen = document.createElement("img");
        memoPen.src = "../img/VoltorbFlip/memoPen.png";
        memoPen.className = "memoPen";
        card.appendChild(memoPen);
        updateMemoSelection();
    } else {
        card.classList.add("clicked");
        removeAllMemoIcons(card);
        updateMemoSelection();
        value = values[card.id];
        changeCardIcon(card, value);
        checkWinOrLoss(value, numberOfX2X3);
    }
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

function toggleLanguageOptions() {
    const check = document.getElementById("languageSelectionBox");
    if (check) {
        document.getElementById("overlay").remove();
    } else {
        document.getElementById("cardArea").innerHTML +=
            '<div id="overlay" class="overlay"><div id="languageSelectionBox"><div id="english" class="languageOption"></div><div id="deutsch" class="languageOption"></div></div></div>';
        attachELToLanguageOption();
    }
}

function translateText(element) {
    const selectedLanguage = element.id;
    switch (selectedLanguage){
        case "english":
            document.getElementById("languageBox").style.backgroundImage = "url('../img/VoltorbFlip/english.png')";
            break;
        case "deutsch":
            document.getElementById("languageBox").style.backgroundImage = "url('../img/VoltorbFlip/deutsch.png')";
            break;
    }
    document.getElementById("overlay").remove();
}
