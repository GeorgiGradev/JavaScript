function attachEventsListeners() {
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    let daysButton = document.getElementById('daysBtn');
    let hoursButton = document.getElementById('hoursBtn');
    let minutesButton = document.getElementById('minutesBtn');
    let secondsButton = document.getElementById('secondsBtn');

    daysButton.addEventListener('click', days);
    hoursButton.addEventListener('click', hours);
    minutesButton.addEventListener('click', minutes);
    secondsButton.addEventListener('click', seconds);

   function days() {
    let days = Number(daysInput.value);

    hoursInput.value = days * 24;
    minutesInput.value = days * 24 * 60;
    secondsInput.value = days * 24 * 60 * 60
   }

   function hours() {
    let hours = Number(hoursInput.value);

    daysInput.value = hours / 24;
    minutesInput.value = hours * 60;
    secondsInput.value = hours * 60 * 60;
   }

   function minutes() {
    let minutes = Number(minutesInput.value);

    daysInput.value = minutes / 60 / 24;
    hoursInput.value = minutes / 60;
    secondsInput.value = minutes * 60
   }

   function seconds() {
    let seconds = Number(secondsInput.value);

    daysInput.value = seconds / 60 / 60 / 24;
    hoursInput.value = seconds / 60 / 60;
    minutesInput.value = seconds / 60

   }
}