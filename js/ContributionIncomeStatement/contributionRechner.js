let lokTablesBody = [{ "sales": 0, "varMan": 0, "varAd": 0, "totalVar":0, "contMarg":0, "fixMan": 0, "fixAd": 0, "totalFix":0, "opInc":0}];
let lokTablesColHeaders = ["Initial Values", "Variant 1", "Multpliers Var 1"];

function calcTotalVar(dict) {
    return Number(dict["varMan"] + dict["varAd"]);
}
function calcTotalFix(dict) {
    return Number(dict["fixMan" + dict["fixAd"]]);
}
function calcContrMarg(dict) {
    return Number(dict["sales"] - calcTotalVar(dict));
}
function calcOperInc(dict) {
    return Number(calcContrMarg(dict) - calcTotalFix(dict));
}

 