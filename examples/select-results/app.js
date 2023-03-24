async function calcArea(resultsElem, width, height) {
    const response = await fetch('views/area.html');
    const text = await response.text();

    resultsElem.innerHTML = text;

    const areaElem = document.getElementById('area');
    areaElem.innerHTML = `Area is: ${width * height}`;
}

async function calcPerimeter(resultsElem, width, height) {
    const response = await fetch('views/perimeter.html');
    const text = await response.text();

    resultsElem.innerHTML = text;

    const perimeterElem = document.getElementById('perimeter');
    perimeterElem.innerHTML = `Perimeter is: ${(2 * width) + (2 * height)}`;
}

function viewResults() {
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;

    const selectResultsElem = document.getElementById("selectResults");
    const resultsElem = document.getElementById('results');

    switch (selectResultsElem.value) {
        case "area":
            calcArea(resultsElem, width, height);
            break;
        case "perimeter":
            calcPerimeter(resultsElem, width, height);
            break;
    }
}

window.addEventListener('load', viewResults);
document.addEventListener('input', viewResults);
