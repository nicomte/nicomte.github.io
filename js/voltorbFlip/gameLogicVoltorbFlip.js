document.addEventListener("DOMContentLoaded", () => {
    createCardLayout();
    assignValuesToLayout();
    attachELToNotesButton();
    attachELToMemoOptions();
    attachELToLanguageBox();
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
function attachELToLanguageBox(){
    document.getElementById("languageBox").addEventListener("click", toggleLanguageOptions);
}
function attachELToLanguageOption(){
    document.querySelectorAll(".languageOption").forEach((p) => {
        p.addEventListener("click", function() {
            translateText(this);
        });
    });
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
