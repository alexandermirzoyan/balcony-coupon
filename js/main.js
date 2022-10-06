const DATE_FORMAT = 'DD.MM.YYYY';

const startDateLabel = document.getElementById('start-date');
const endDateLabel = document.getElementById('end-date');

startDateLabel.textContent = moment().format(DATE_FORMAT);
endDateLabel.textContent = moment().add(7, 'days').format(DATE_FORMAT);
