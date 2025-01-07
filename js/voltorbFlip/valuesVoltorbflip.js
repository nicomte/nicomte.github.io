let currentLevel = 0;
const valuesCardLayout = Array(25);
const assignedIndices = new Set();
const numberOfX2X3 = Array(2);

function assignValuesToLayout() {
    resetValues();

    option = selectOption();

    numberOfX2X3[0] = option["x2"];
    numberOfX2X3[1] = option["x3"];

    fillLayout("x2", option);


    fillLayout("x3", option);

    fillLayout("voltorb", option);

    for (let i = 0; i < valuesCardLayout.length; i++) {
        if (valuesCardLayout[i] === 0) {
            valuesCardLayout[i] = "x1";
        }
    }

    countValues("row");
    countValues("column");

}

function countValues(type) {
    for (let i = 0; i < 5; i++) {
        let coinValue = 0;
        let voltorb = 0;

        let coinSumElement, voltorbSumElement;
        if (type === "row") {
            coinSumElement = document.getElementById("coinSumRow" + colorScheme[i]);
            voltorbSumElement = document.getElementById("voltorbSumRow" + colorScheme[i]);
        } else if (type === "column") {
            coinSumElement = document.getElementById("coinSumColumn" + colorScheme[i]);
            voltorbSumElement = document.getElementById("voltorbSumColumn" + colorScheme[i]);
        }


        for (let j = 0; j < 5; j++) {
            const index = type === "row" ? i * 5 + j : i + 5 * j;
            switch (valuesCardLayout[index]) {
                case "x1":
                    coinValue++;
                    break;
                case "x2":
                    coinValue += 2;
                    break;
                case "x3":
                    coinValue += 3;
                    break;
                case "voltorb":
                    voltorb++;
                    break;
            }
        }

        coinSumElement.innerText = coinValue;
        voltorbSumElement.innerText = voltorb;
    }
}


function fillLayout(valueType, option) {
    const count = option[valueType];
    // console.log(count);
    let assignedCount = 0;

    while (assignedCount < count) {
        let cardToAssignValue = getRandomIntInclusive(0, 24);
        if (!assignedIndices.has(cardToAssignValue)) {
            assignedIndices.add(cardToAssignValue);
            valuesCardLayout[cardToAssignValue] = valueType;
            assignedCount++;
        }
    }
}


function selectOption() {
    randomSelection = getRandomIntInclusive(0, 4);
    return lvlOptions[currentLevel][randomSelection];
}

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function resetValues(){
    valuesCardLayout.fill(0);
    assignedIndices.clear();
}

const lvlOptions = [
    [{ x2: 3, x3: 1, voltorb: 6 },
    { x2: 0, x3: 3, voltorb: 6 },
    { x2: 5, x3: 0, voltorb: 6 },
    { x2: 2, x3: 2, voltorb: 6 },
    { x2: 4, x3: 1, voltorb: 6 }
    ],
    [{ x2: 1, x3: 3, voltorb: 7 },
    { x2: 6, x3: 0, voltorb: 7 },
    { x2: 3, x3: 2, voltorb: 7 },
    { x2: 0, x3: 4, voltorb: 7 },
    { x2: 5, x3: 1, voltorb: 7 },
    ],
    [{ x2: 2, x3: 3, voltorb: 8 },
    { x2: 7, x3: 0, voltorb: 8 },
    { x2: 4, x3: 2, voltorb: 8 },
    { x2: 1, x3: 4, voltorb: 8 },
    { x2: 6, x3: 1, voltorb: 8 },
    ],
    [{ x2: 3, x3: 3, voltorb: 8 },
    { x2: 0, x3: 5, voltorb: 8 },
    { x2: 8, x3: 0, voltorb: 10 },
    { x2: 5, x3: 2, voltorb: 10 },
    { x2: 2, x3: 4, voltorb: 10 },
    ],
    [{ x2: 7, x3: 1, voltorb: 10 },
    { x2: 4, x3: 3, voltorb: 10 },
    { x2: 1, x3: 5, voltorb: 10 },
    { x2: 9, x3: 0, voltorb: 10 },
    { x2: 6, x3: 2, voltorb: 10 },
    ],
    [{ x2: 3, x3: 4, voltorb: 10 },
    { x2: 0, x3: 6, voltorb: 10 },
    { x2: 8, x3: 1, voltorb: 10 },
    { x2: 5, x3: 3, voltorb: 10 },
    { x2: 2, x3: 5, voltorb: 10 },
    ],
    [{ x2: 7, x3: 2, voltorb: 10 },
    { x2: 4, x3: 4, voltorb: 10 },
    { x2: 1, x3: 6, voltorb: 13 },
    { x2: 9, x3: 1, voltorb: 13 },
    { x2: 6, x3: 3, voltorb: 10 },
    ],
    [{ x2: 0, x3: 7, voltorb: 10 },
    { x2: 8, x3: 2, voltorb: 10 },
    { x2: 5, x3: 4, voltorb: 10 },
    { x2: 2, x3: 6, voltorb: 10 },
    { x2: 7, x3: 3, voltorb: 10 },
    ]
];
