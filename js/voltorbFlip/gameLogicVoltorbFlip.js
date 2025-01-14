document.addEventListener('DOMContentLoaded', () => {
    createCardLayout();
    assignValuesToLayout();
});

function writeToTextbox(line1, line2) {
    if (line1) { document.getElementById('textboxLine1').innerText = line1; }
    if (line2) { document.getElementById('textboxLine2').innerText = line2; }
}

function writeScore(levelScore, totalScore) {

    const formatScore = (score) => {
        const desiredLength = 5;
        return score.toString().padStart(desiredLength, '0');
    };

    if (levelScore !== undefined) {
        const levelScoreElement = document.getElementById('currentScore');
        levelScoreElement.innerText = formatScore(levelScore);
    }

    if (totalScore !== undefined) {
        const totalScoreElement = document.getElementById('totalScore');
        totalScoreElement.innerText = formatScore(totalScore);
    }
}




