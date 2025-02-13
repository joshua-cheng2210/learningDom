let myscheduleDB = [
    {
        "Day": "Monday",
        "Event": "CSCI 4131 lec",
        "start hour": 11,
        "start minute": 15,
        "end hour": 12,
        "end minute": 30,
        "Event Location (Virtual or Physical)": "anderson hall",
        "Phone Number": "No Phone number",
        "link": "https://umtc.catalog.prod.coursedog.com/courses/7906541",
        "data-thumbnail": "https://cdn-icons-png.flaticon.com/512/9414/9414296.png",
        "data-thumbnail-alt": "web dev"
    },
    {
        "Day": "Monday",
        "Event": "Jour 3765 lec",
        "start hour": 13,
        "start minute": 0,
        "end hour": 14,
        "end minute": 15,
        "Event Location (Virtual or Physical)": "amundson hall",
        "Phone Number": "No Phone number",
        "link": "https://umtc.catalog.prod.coursedog.com/courses/0002431",
        "data-thumbnail": "https://media.tenor.com/xd3erlw5b5UAAAAM/lies-mass.gif",
        "data-thumbnail-alt": "social media journalism"
    },
    {
        "Day": "Monday",
        "Event": "CSCI 4211 lec",
        "start hour": 13,
        "start minute": 0,
        "end hour": 14,
        "end minute": 15,
        "Event Location (Virtual or Physical)": "amundson hall",
        "Phone Number": "No Phone number",
        "link": "https://umtc.catalog.prod.coursedog.com/courses/7906551",
        "data-thumbnail": "https://i.gifer.com/6Je7.gif",
        "data-thumbnail-alt": "computer networking"
    },
    {
        "Day": "Tuesday",
        "Event": "PE 1033",
        "start hour": 10,
        "start minute": 10,
        "end hour": 11,
        "end minute": 0,
        "Event Location (Virtual or Physical)": "cooke hall 308",
        "Phone Number": "No Phone number",
        "link": "https://umtc.catalog.prod.coursedog.com/courses/0026611",
        "data-thumbnail": "https://64.media.tumblr.com/58d58d03adf159a56a33261ac0a525d7/tumblr_p347tfSpdv1svxf0ao1_1280.gif",
        "data-thumbnail-alt": "fencing"
    },
    {
        "Day": "Wednesday",
        "Event": "CSCI 4131 lec",
        "start hour": 11,
        "start minute": 15,
        "end hour": 12,
        "end minute": 30,
        "Event Location (Virtual or Physical)": "anderson hall",
        "Phone Number": "No Phone number",
        "link": "https://umtc.catalog.prod.coursedog.com/courses/7906541",
        "data-thumbnail": "https://cdn-icons-png.flaticon.com/512/9414/9414296.png",
        "data-thumbnail-alt": "web dev"
    },
    {
        "Day": "Wednesday",
        "Event": "Jour 3765 lec",
        "start hour": 13,
        "start minute": 0,
        "end hour": 14,
        "end minute": 15,
        "Event Location (Virtual or Physical)": "amundson hall",
        "Phone Number": "No Phone number",
        "link": "https://umtc.catalog.prod.coursedog.com/courses/0002431",
        "data-thumbnail": "https://media.tenor.com/xd3erlw5b5UAAAAM/lies-mass.gif",
        "data-thumbnail-alt": "social media journalism"
    },
    {
        "Day": "Wednesday",
        "Event": "CSCI 4211 lec",
        "start hour": 13,
        "start minute": 0,
        "end hour": 14,
        "end minute": 15,
        "Event Location (Virtual or Physical)": "amundson hall",
        "Phone Number": "No Phone number",
        "link": "https://umtc.catalog.prod.coursedog.com/courses/7906551",
        "data-thumbnail": "https://i.gifer.com/6Je7.gif",
        "data-thumbnail-alt": "computer networking"
    },
    {
        "Day": "Thursday",
        "Event": "PE 1033",
        "start hour": 10,
        "start minute": 10,
        "end hour": 11,
        "end minute": 0,
        "Event Location (Virtual or Physical)": "cooke hall 308",
        "Phone Number": "No Phone number",
        "link": "https://umtc.catalog.prod.coursedog.com/courses/0026611",
        "data-thumbnail": "https://64.media.tumblr.com/58d58d03adf159a56a33261ac0a525d7/tumblr_p347tfSpdv1svxf0ao1_1280.gif",
        "data-thumbnail-alt": "fencing"
    },
    {
        "Day": "Friday",
        "Event": "lab work",
        "start hour": 10,
        "start minute": 10,
        "end hour": 14,
        "end minute": 0,
        "Event Location (Virtual or Physical)": "byonton",
        "Phone Number": "No Phone number",
        "link": "https://mcrlab.umn.edu",
        "data-thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKvMvFuNBpbCRSdg_zVGlr26jpH35NIVQfjQ&s",
        "data-thumbnail-alt": "lab work"
    },
    {
        "Day": "Saturday",
        "Event": "gym-exercise",
        "start hour": 17,
        "start minute": 0,
        "end hour": 18,
        "end minute": 0,
        "Event Location (Virtual or Physical)": "the rec",
        "Phone Number": "No Phone number",
        "link": "https://recwell.umn.edu/",
        "data-thumbnail": "https://cdn.shopify.com/s/files/1/0720/1079/3270/files/transform_gym_denver.png?v=1721095735",
        "data-thumbnail-alt": "gym"
    },
    {
        "Day": "Sunday",
        "Event": "at home resting",
        "start hour": 0,
        "start minute": 0,
        "end hour": 23,
        "end minute": 59,
        "Event Location (Virtual or Physical)": "home",
        "Phone Number": "No Phone number",
        "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBpQcGixfQ-RibVNI4BxS1YfufI7vVxOxH5Q&s",
        "data-thumbnail": "https://media0.giphy.com/media/iAn1Wh7Fdnh6rKg4Tq/200w.gif?cid=6c09b9528p187pu5bulvo529naj5l6diawpnvn6q3crycci8&ep=v1_gifs_search&rid=200w.gif&ct=g",
        "data-thumbnail-alt": "resting"
    }
];

function changeScheduleIMG(url, alt) {
    var theimage = document.getElementById("schedule-image");
    theimage.src = url;
    theimage.alt = alt;
}

function populateScheduleTable() {
    const tableBody = document.querySelector('.schedule-table tbody');
    myscheduleDB.forEach(event => {
        const row = document.createElement('tr');
        row.classList.add('schedule-row');
        row.setAttribute('onmouseover', `changeScheduleIMG('${event["data-thumbnail"]}', '${event["data-thumbnail-alt"]}')`);
        row.innerHTML = `
            <th>${event.Day}</th>
            <th>${event.Event}</th>
            <th>${event["start hour"]}:${event["start minute"].toString().padStart(2, '0')} - ${event["end hour"]}:${event["end minute"].toString().padStart(2, '0')}</th>
            <th>${event["Event Location (Virtual or Physical)"]}</th>
            <th>${event["Phone Number"]}</th>
            <th><a href="${event.link}">${event.Event} Info</a></th>
        `;
        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', populateScheduleTable);