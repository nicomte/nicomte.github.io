document.addEventListener('DOMContentLoaded', () => {
    createCardLayout();
    assignValuesToLayout();
});

function writeToTextbox(line1, line2) {
    if (line1) { document.getElementById('textboxLine1').innerText = line1; }
    if (line2) { document.getElementById('textboxLine2').innerText = line2; }
}

