const distance = document.getElementById('distance');
const velocity = document.getElementById('velocity');
const travelTime = document.getElementById('travelTime');
const timeFormat = document.getElementById('timeFormat');

velocity.oninput = computeTravelTime;
distance.oninput = computeTravelTime;


function computeTravelTime() {
    // If either input is empty, do nothing
    if (velocity.value === '' || distance.value === '') {
        return;
    }
    result = timeConvert(parseInt(distance.value) / parseInt(velocity.value));
    travelTime.value = result;
}


