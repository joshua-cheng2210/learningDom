function populateTimeOptions() {
    const hours = [...Array(24).keys()].map((hour) => (hour.toString().padStart(2, '0')));
    const minutes = [...Array(60).keys()].map((minute) => (minute.toString().padStart(2, '0')));

    const startHourSelect = document.getElementById('start-hour');
    const startMinuteSelect = document.getElementById('start-minute');
    const endHourSelect = document.getElementById('end-hour');
    const endMinuteSelect = document.getElementById('end-minute');

    hours.forEach(hour => {
        const dropdownOptions = document.createElement('option');
        dropdownOptions.value = hour;
        dropdownOptions.textContent = hour;
        startHourSelect.appendChild(dropdownOptions.cloneNode(true));
        endHourSelect.appendChild(dropdownOptions.cloneNode(true));
    });

    minutes.forEach(minute => {
        const dropdownOptions = document.createElement('option');
        dropdownOptions.value = minute;
        dropdownOptions.textContent = minute;
        startMinuteSelect.appendChild(dropdownOptions.cloneNode(true));
        endMinuteSelect.appendChild(dropdownOptions.cloneNode(true));
    });
}

function validateForm() {
    const startHour = document.getElementById('start-hour').value;
    const startMinute = document.getElementById('start-minute').value;
    const endHour = document.getElementById('end-hour').value;
    const endMinute = document.getElementById('end-minute').value;

    const startTime = `${startHour}:${startMinute}`;
    const endTime = `${endHour}:${endMinute}`;

    if (startTime >= endTime) {
        alert('your end time is before your start time. please change.');
        return false;
    }
    return true;
}

document.addEventListener('DOMContentLoaded', populateTimeOptions);