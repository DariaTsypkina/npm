const moment = require('moment');
require('moment/locale/ru.js');
moment.locale('ru');

let now = moment();
console.log(now.format('dddd, MMMM DD YYYY'));

const Chart = require('chart.js');
Chart.defaults.elements.point.radius = 0;
Chart.defaults.borderWidth = 0;

let ctx = document.getElementById('sessionsChart');
let labels = [];
for (let i = 9; i < 21; i++) {
    labels.push([i] + ":00");
}

let myChart = new Chart(ctx, {
    data: {
        datasets: [{
            type: 'line',
            data: [10, 8, 12, 13, 11, 10, 10, 15, 15, 20, 25, 21],
            borderColor: 'rgba(62, 107, 236, 1)',
            borderWidth: 1,
            tension: 0.5
        }, {
            type: 'line',
            data: [8, 7, 12, 13, 18, 17, 20, 19, 20, 20, 21, 19, 17, 18],
            borderColor: 'red',
            borderWidth: 1,
            tension: 0.5
        }],
        labels: labels
    }
});