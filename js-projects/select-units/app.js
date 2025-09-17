
function calcVolume(diameter, height) {
    const radius = diameter / 2;
    const vol = (Math.PI * radius * radius) * height;
    return vol;
}

function convert(value, units) {

    let factor;

    switch (units) {
        case "centimeter":
            factor = 0.01;
            break;
        case "inch":
            factor = 0.0254;
            break;
        default:
            factor = 1;
            break;
    }

    return value * factor
}

function update() {

    // Get parameter values
    let diameter = document.getElementById("diameter").value;
    let height = document.getElementById("height").value;

    // Get unit values
    const diamUnits = document.getElementById("diameterUnits").value;
    const htUnits = document.getElementById("heightUnits").value;

    // Convert parameter values to units of meter
    diameter = convert(diameter, diamUnits);
    height = convert(height, htUnits);

    // Set results
    const diamResult = document.getElementById("diameterResult");
    diamResult.innerHTML = "Diameter is: " + diameter + " m";

    const htResult = document.getElementById("heightResult");
    htResult.innerHTML = "Height is: " + height + " m";

    const volume = calcVolume(diameter, height);
    const volResult = document.getElementById("volumeResult");
    volResult.innerHTML = "Cylinder volume is: " + volume + " m<sup>3</sup>";
}

window.addEventListener('load', update);
document.addEventListener("input", update);
