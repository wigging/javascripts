---
title: Load content from HTML files
date: March 26, 2023
---

Content from HTML files can be loaded asynchronously using the `fetch()` method. In the example below, the content of the left and right columns are loaded from HTML files. The column layout is from the [Bootstrap](https://getbootstrap.com) CSS.

<img src="../images/load-html.png" style="max-width:660px;" alt="load html">

```html
<!-- index.html -->

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
    <title>Example</title>

    <style>
        body {
            background-color: lightgrey;
            margin-top: 40px;
        }
        .container {
            max-width: 800px;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="row">

        <!-- Left column -->
        <div class="col">
            <div id="parameters"></div>
        </div>

        <!-- Right column -->
        <div class="col">
            <div id="results"></div>
        </div>

    </div>
</div>

<script src="app.js"></script>

</body>
</html>
```

The HTML content for the left and right columns are shown below.

```html
<!-- left.html -->

<h2>Parameters</h2>

<p>Input parameters below.</p>

<label>
    Width:
    <input id="width" class="form-control mb-3 w-50" type="number" min="0" value="8">
</label>

<label>
    Height:
    <input id="height" class="form-control w-50" type="number" min="0" value="10">
</label>

<!-- right.html -->

<h2>Results</h2>

<p>See below for calculated results.</p>

<h3>Area</h3>

<p id="area">Area is: 0</p>

<h3>Perimeter</h3>

<p id="perimeter">Perimeter is: 0</p>
```

Below is the JavaScript to fetch the HTML content, get the parameter values from the left column, and calculate the results for the right column.

```javascript
// app.js

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
```
