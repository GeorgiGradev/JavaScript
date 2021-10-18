function addDestination() {
    let cityField = document.querySelectorAll('#input input')[0];
    let countryField = document.querySelectorAll('#input input')[1];
    let seasonField = document.getElementById('seasons');

    let city = cityField.value;
    let country = countryField.value;
    let season = seasonField.value;

    if (city == '' || country == '') {
        return;
    }

    cityField.value = '';
    countryField.value = '';
    const tBody = document.getElementById('destinationsList');
    const tr = document.createElement('tr');
    const destinationValue = document.createElement('td');
    destinationValue.textContent = `${city}, ${country}`;
    const seasonValue = document.createElement('td');
    const firstLetter = season.substring(0,1);
    const otherLetters = season.substring(1, season.length);
    season = firstLetter.toUpperCase() + otherLetters;

    seasonValue.textContent = season;

    tr.appendChild(destinationValue);
    tr.appendChild(seasonValue);
    tBody.appendChild(tr);

    let summer = document.querySelector('#summer');
    let autumn = document.querySelector('#autumn');
    let winter = document.querySelector('#winter');
    let spring = document.querySelector('#spring');

    if (season === 'Summer') {
        summer.value = Number(summer.value) + 1;
    } else if (season === 'Autumn') {
        autumn.value = Number(autumn.value) + 1;
    } else if (season === 'Winter') {
        winter.value = Number(winter.value) + 1;
    } else if (season === 'Spring') {
        spring.value = Number(spring.value) + 1;
    }
}