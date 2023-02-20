
const width_elem = document.getElementById("width");
const length_elem = document.getElementById("length");
const area_elem = document.getElementById("area");

// Uncomment this line to call function when the input changes
document.addEventListener("input", calc_area);

function calc_area() {
    const width = width_elem.value;
    const length = length_elem.value;
    const area = width * length;
    area_elem.innerHTML = `Calculated area is ${area}`;
}