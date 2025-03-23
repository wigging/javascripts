---
title: Input number
date: March 18, 2023
---

The example below demonstrates how to calculate the area from width and length inputs. Notice the type of each input is defined as number. Click the button to calculate the area or use an event listener to automatically run the area function.

<img src="../images/input-number.png" style="max-width:400px;" alt="input number">

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
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

<p>
    Enter the width:
    <input id="width" type="number" value="9">
</p>

<p>
    Enter the length:
    <input id="length" type="number" value="8">
</p>

<p>
    <button onclick="calcArea();">Calculate area</button>
</p>

<p id="area"></p>

<script src="app.js"></script>

</body>
</html>
```

```javascript
// app.js

// Get width, length, and area elements

const widthElem = document.getElementById("width");
const lengthElem = document.getElementById("length");
const areaElem = document.getElementById("area");

// Calculate the area from width and length values

function calcArea() {
    const width = widthElem.value;
    const length = lengthElem.value;
    const area = width * length;
    areaElem.innerHTML = `Calculated area is: ${area}`;
}

// Uncomment this line to call function when the input changes
// document.addEventListener("input", calcArea);
```
