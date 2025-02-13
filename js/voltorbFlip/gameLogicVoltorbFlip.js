document.addEventListener("DOMContentLoaded", () => {
    createCardLayout();
    assignValuesToLayout();
    attachELToNotesButton();
    attachELToMemoOptions();
    attachELToLanguageBox();
    attachELToHelpBox();
});

function attachELToNotesButton() {
    document.getElementById("memoContainer").addEventListener("click", toggleNoteMode);
}
function attachELToMemoOptions() {
    document.querySelectorAll(".memoSelectOption").forEach((p) => {
        p.addEventListener("click", function () {
            toggleMemoOption(this);
        });
    });
}
function attachELToLanguageBox() {
    document.getElementById("languageBox").addEventListener("click", toggleLanguageOptions);
}
function attachELToLanguageOption() {
    document.querySelectorAll(".languageOption").forEach((p) => {
        p.addEventListener("click", function () {
            translateText(this);
        });
    });
}
function attachELToHelpBox() {
    document.getElementById("infoBox").addEventListener("click", toggleHelpBox);
}

function writeToTextbox(line1, line2) {
    if (line1) {
        document.getElementById("textboxLine1").innerText = line1;
    }
    if (line2) {
        document.getElementById("textboxLine2").innerText = line2;
    }
}

function writeScore(levelScore, totalScore) {
    const formatScore = (score) => {
        const desiredLength = 5;
        return score.toString().padStart(desiredLength, "0");
    };

    if (levelScore !== undefined) {
        const levelScoreElement = document.getElementById("currentScore");
        levelScoreElement.innerText = formatScore(levelScore);
    }

    if (totalScore !== undefined) {
        const totalScoreElement = document.getElementById("totalScore");
        totalScoreElement.innerText = formatScore(totalScore);
    }
}

function changeLanguage(lang) {
    document.querySelectorAll("span").forEach(element => {
        const key = element.getAttribute("data-key");
        if (key && translations[lang][key]) { // Check if data-key is not empty and exists in translations
            element.textContent = translations[lang][key];
        }
    });
}


const translations = {
    en: {
        1: "Score this Level:",
        2: "Total Score:",
        3: "OPEN",
        4: "MEMO",
        5: "How to play",
        6: "Behind each card hides a 1, 2, 3 or Voltorb. You win by flipping all of the 2 and 3 cards in a level.",
        7: "Should you flip a Voltorb you lose all points and fall back to level 1.",
        8: "The coloured boxes help you decide which card to flip. The top number tells you the sum of all numbers in a row/column, while the bottom number tells you how many Voltorb are hiding in each row/column.",
        9: "The memo button allows you to place memos on each card if you suspect to know what value it hides. While Memo-Mode is active, you cannot accidentally flip a card.",
        10: "Close"
    },
    de: {
        1: "Punkte in diesem Level:",
        2: "Gesamtpunktzahl:",
        3: "ÖFFNE",
        4: "MEMO",
        5: "Spielanleitung",
        6: "Hinter jeder Karte verbirgt sich eine 1, 2, 3 oder ein Voltobal. Du gewinnst, indem du alle 2 und 3-Karten in einem Level aufdeckst.",
        7: "Solltest du ein Voltobal aufdecken, verlierst du alle Punkte und fällst auf Level 1 zurück.",
        8: "Die farbigen Felder helfen dir zu entscheiden, welche Karte du aufdecken solltest. Die obere Zahl zeigt die Summe aller Zahlen in einer Reihe oder Spalte an, während die untere Zahl angibt, wie viele Voltorb sich dort verbergen.",
        9: "Die Memo-Taste erlaubt es dir, Notizen auf jeder Karte zu setzen, wenn du vermutest, welchen Wert sie hat. Während der Memo-Modus aktiv ist, kannst du keine Karte versehentlich aufdecken.",
        10: "Schließen"
    }
};
