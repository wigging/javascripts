async function loadHTML() {

    // Load the HTML content for left column
    const response1 = await fetch('left.html');
    const text1 = await response1.text();
    const paramsElem = document.getElementById('parameters');
    paramsElem.innerHTML = text1;

    // Load the HTML content for right column
    const response2 = await fetch('right.html');
    const text2 = await response2.text();
    const resultsElem = document.getElementById('results');
    resultsElem.innerHTML = text2;

    // Calculate results after loading HTML
    calcResults();
}

function calcResults() {
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;

    const areaElem = document.getElementById('area');
    areaElem.innerHTML = `Area is: ${width * height}`;

    const perimElem = document.getElementById('perimeter');
    perimElem.innerHTML = `Perimeter is: ${width * 2 + height * 2}`;
}

window.addEventListener('load', loadHTML);
document.addEventListener('input', calcResults);
