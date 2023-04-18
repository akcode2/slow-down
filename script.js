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

// Convert time to hours and minutes
function timeConvert(num) {
    let hours;
    let minutes;
    if (num === 1) {
        return `1 hour`;
    }
    else if (num < 1) {
        minutes = num * 60;
        if (minutes === 1) {
            return `1 minute`;
        }
        return `${minutes} minutes`;
    }
    else if (num > 1 && num < 2) {
        hours = Math.floor(num);
        minutes = (num - hours) * 60;
        return `${hours} hour and ${minutes} minutes`
    }
    else {
        hours = Math.floor(num);
        minutes = (num - hours) * 60;
        return `${hours} hours and ${minutes} minutes`
    }
}

