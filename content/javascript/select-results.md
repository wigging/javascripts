---
title: Select results
date: March 23, 2023
---

In this example, number inputs are used as width and height parameters. These parameters are used to calculate area and perimeter results. The result views are in separate HTML files that are fetched with JavaScript.

<img src="../images/select-results.png" style="max-width:400px;" alt="select results">

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Example</title>
    <style>
        body {
            background-color: lightgrey;
            margin: 40px auto;
            max-width: 800px;
        }
    </style>
</head>
<body>

    <h2>Parameters</h2>

    <p>
        <label for="width">Enter width:</label>
        <input id="width" name="width" type="number" min="0" value="4.5">
    </p>

    <p>
        <label for="height">Enter height:</label>
        <input id="height" name="height" type="number" min="0" value="10.2">
    </p>

    <hr>

    <h2>Results</h2>

    <p>Select:
    <select id="selectResults">
        <option value="area">Area</option>
        <option value="perimeter" selected>Perimeter</option>
    </select>
    </p>

    <div id="results"></div>

    <script src="app.js"></script>

</body>
</html>
```

The result views are in the `area.html` and `perimeter.html` files as represented below.

```html
<!-- Contents of the area.html file -->

<h2>Area</h2>

<p id="area">Area is: 0</p>

<!-- Contents of the perimenter.html file -->

<h2>Perimeter</h2>

<p id="perimeter">Perimeter is: 0</p>
```

The JavaScript for this example is shown below.

```javascript
// app.js

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
```
