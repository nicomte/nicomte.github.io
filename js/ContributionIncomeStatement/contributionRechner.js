let lokTablesColHeaders = ["Initial Values", "Variant 1", "Multpliers Var 1"];

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.calc-value-col').forEach(input => {
        input.addEventListener('input', updateTable);
    });

    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('input', updateRow);
    });

});


function calcTotalVar(dict) {
    return dict["varMan"] + dict["varAd"];
}

function calcTotalFix(dict) {
    return dict["fixMan"] + dict["fixAd"];
}

function calcContrMarg(dict) {
    return dict["sales"] - calcTotalVar(dict);
}

function calcOperInc(dict) {
    return calcContrMarg(dict) - calcTotalFix(dict);
}

function updateTable(event) {
    updateCol(event);
    updateRow(event);
}

function updateCol(event) {
    const classNameCol = event.target.classList[1];
    const values = {};

    document.querySelectorAll(`.${classNameCol}`).forEach(input => {
        const key = input.classList[0];
        values[key] = Number(input.value) || Number(input.textContent) || 0;
    });

    values["totalVar"] = calcTotalVar(values);
    values["totalFix"] = calcTotalFix(values);
    values["contMarg"] = calcContrMarg(values);
    values["opInc"] = calcOperInc(values);


    document.querySelector(`.totalVar.${classNameCol}`).textContent = values["totalVar"];
    document.querySelector(`.totalFix.${classNameCol}`).textContent = values["totalFix"];
    document.querySelector(`.contMarg.${classNameCol}`).textContent = values["contMarg"];
    document.querySelector(`.opInc.${classNameCol}`).textContent = values["opInc"];
}

function updateRow(event) {
    console.log("row updated");
    const classNameRow = event.target.classList[0]; // z.B. "sales", "varMan"
    // const classNameCol = event.target.classList[1]; // z.B. "init-val", "mult-var-1"

    // Initialwert und Multiplikator abrufen
    const initValue = Number(document.querySelector(`.${classNameRow}.init-val`).value) || 0;
    const multiplier = Number(document.querySelector(`.${classNameRow}.mult-var-1`).value) || 0;

    // Aktualisieren Sie den entsprechenden var-n Wert
    const varValue = initValue * multiplier;
    const varElement = document.querySelector(`.${classNameRow}.var-1`); // Angenommen, es gibt nur var-1
    if (varElement) {
        varElement.textContent = varValue;
    }

    // Aktualisieren Sie die berechneten Werte in der Spalte
    updateCol({ target: document.querySelector(`.${classNameRow}.var-1`) });
}