let lokTablesBody = [{ "sales": 0, "varMan": 0, "varAd": 0, "totalVar": 0, "contMarg": 0, "fixMan": 0, "fixAd": 0, "totalFix": 0, "opInc": 0 }];
let lokTablesColHeaders = ["Initial Values", "Variant 1", "Multpliers Var 1"];

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('input', updateCol);
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

function updateCol(event) {
    const classNameCol = event.target.classList[1];
    // Erstellen Sie ein Objekt, um die Werte der relevanten Felder zu speichern
    const values = {};

    // Durchsuchen Sie alle Eingabefelder mit der Klasse classNameCol und speichern Sie deren Werte
    document.querySelectorAll(`.${classNameCol}`).forEach(input => {
        const key = input.classList[0]; // Annahme: Die erste Klasse ist der Schlüssel (z.B. "sales", "varMan")
        values[key] = Number(input.value) || 0; // Wenn der Wert leer ist, verwenden Sie 0
    });

    console.log(values);

    // Berechnen Sie die abgeleiteten Werte
    values["totalVar"] = calcTotalVar(values);
    values["totalFix"] = calcTotalFix(values);
    values["contMarg"] = calcContrMarg(values);
    values["opInc"] = calcOperInc(values);

    // Aktualisieren Sie die berechneten Felder im DOM
    document.querySelector(`.totalVar.${classNameCol}`).textContent = values["totalVar"];
    document.querySelector(`.totalFix.${classNameCol}`).textContent = values["totalFix"];
    document.querySelector(`.contMarg.${classNameCol}`).textContent = values["contMarg"];
    document.querySelector(`.opInc.${classNameCol}`).textContent = values["opInc"];
}