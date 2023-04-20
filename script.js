const distance = document.getElementById('distance');
const velocity = document.getElementById('velocity');
const travelTime = document.getElementById('travelTime');
const timeFormat = document.getElementById('timeFormat');

// Variables for residential speeding tool
const resDistance = document.getElementById('resDistance');
const resSpeedLimit = document.getElementById('resSpeedLimit');
const resTime = document.getElementById('resTime');
const resTimeIfBy5 = document.getElementById('resTimeIfBy5');
const resTimeIfBy10 = document.getElementById('resTimeIfBy10');
const resTimeIfBy15 = document.getElementById('resTimeIfBy15');
const resDifferenceIfBy5 = document.getElementById('resDifferenceIfBy5');
const resDifferenceIfBy10 = document.getElementById('resDifferenceIfBy10');
const resDifferenceIfBy15 = document.getElementById('resDifferenceIfBy15');

// Compute output using initial values
computeResidentialTime();
// Compute output when values are changed
resDistance.oninput = computeResidentialTime;
resSpeedLimit.oninput = computeResidentialTime;


function computeResidentialTime() {
    if (resDistance.value === '') {
        return;
    }
    resTime.value = toTwoDecimals(parseInt(resDistance.value) / parseInt(resSpeedLimit.innerText) * 60);

    // resTimeIfBy5.value = toTwoDecimals(parseInt(resDistance.value) / (parseInt(resSpeedLimit.innerText) + 5) * 60);
    // resDifferenceIfBy5.value = toTwoDecimals(resTime.value - resTimeIfBy5.value);
    // resTimeIfBy10.value = toTwoDecimals(parseInt(resDistance.value) / (parseInt(resSpeedLimit.innerText) + 10) * 60);
    // resDifferenceIfBy10.value = toTwoDecimals(resTime.value - resTimeIfBy10.value);
    // resTimeIfBy15.value = toTwoDecimals(parseInt(resDistance.value) / (parseInt(resSpeedLimit.innerText) + 15) * 60);
    // resDifferenceIfBy15.value = toTwoDecimals(resTime.value - resTimeIfBy15.value);
}

function toTwoDecimals(num) {
    return Math.round(num * 100) / 100;
}

// Make destination text change on an interval
const resDestination = document.getElementById('resDestination');
const destinations = [
    "to the post office",
    "to the grocery store", 
    "to pick up some flowers",
    "to get some coffee",
    "to pick up the kids",
    "to catch up with a friend"
]
let destIndex = 1;
// Change resDestination's text every 3 seconds
setInterval(() => {
    // Increment the index, resetting to 0 when reaching the length of the index
    destIndex = (destIndex + 1) % destinations.length;
    // Change the text
    resDestination.textContent = destinations[destIndex];
}, 5000);


// Enable scrolling to change speed limit
resSpeedLimit.addEventListener('mouseover', )





