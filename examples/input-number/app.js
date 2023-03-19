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
