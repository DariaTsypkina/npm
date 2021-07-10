const moment = require('moment');
require('moment/locale/ru.js');
moment.locale('en');

const Chart = require('chart.js');

const anychart = require('anychart');

document.addEventListener("DOMContentLoaded", function(event) {
    createDays();
    createMainChart();
    
    let audienceChart = document.getElementById('audienceChart');
    let audiencePersent = [53, 70, 60];
    let audienceData = {
        datasets: [{
            data: audiencePersent,
            backgroundColor: [
            'rgba(253, 222, 105, 1)',
            'rgba(66, 63, 198, 1)',
            'rgba(228, 88, 81, 1)'
        ],
        hoverOffset: 4
        }]
    };
    
    let chartAudience = new Chart(audienceChart, {
        type: 'doughnut',
        data: audienceData,
        options: {
            plugins: {
                legend: {
                display: false
                }
            }
        }
    });
    
    let languageChart = document.getElementById('languageChart');
    let languagePercent = [43, 90, 60];
    let languageData = {
        datasets: [{
            data: languagePercent,
            backgroundColor: [
            'rgba(228, 88, 81, 1)',
            'rgba(98, 202, 118, 1)',
            'rgba(66, 63, 198, 1)'
        ],
        hoverOffset: 4
        }]
    };
    
    let chartLanguage = new Chart(languageChart, {
        type: 'doughnut',
        data: languageData,
        options: {
            plugins: {
                legend: {
                display: false
                }
            }
        }
    });
    
    let ratedata1 = [1, 2, 5, 4, 7, 10, 5, 8];
    let ratedata2 = [2, 5, 6, 4, 8, 3, 5,9]
    
    // create a chart
    chart = anychart.line();
    chart.xAxis().stroke("none");
    chart.xAxis().ticks(false);
    chart.yAxis().stroke("none");
    chart.yAxis().ticks(false);
    let xLabels = chart.xAxis().labels();
    xLabels.enabled(false);
    let yLabels = chart.yAxis().labels();
    yLabels.enabled(false);
    // create a line series and set the data
    let series1 = chart.spline(ratedata1);
    series1.stroke('#E45851');
    
    let series2 = chart.spline(ratedata2);
    series2.stroke('#FDDE69');
    // set the container id
    chart.container(rateChart);
    
    // initiate drawing the chart
    chart.draw();    
});

function createMainChart() {
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
        },
        options: {
            plugins: {
                legend: {
                display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                        drawBorder: false,
                        drawTicks: false
                    }
                },
                y: {
                    grid: {
                        display: false,
                        drawBorder: false,
                        drawTicks: false
                    }
                }
            }
        }
    });
}

function createDays() {
    let now = moment();
    let today = now.format("[Today]");
    let days = [today];
    
    for (let i = 1; i < 4; i++) {
        days.push(now.add(1, 'days').format("ddd"));
    }

    let dayList = document.getElementById('dayList');
    dayList.innerHTML = "";

    let selectDays = document.getElementById("day");
    selectDays.innerHTML = "";
    
    days.forEach(item => {
        dayList.innerHTML +=
        `<li class="sessions__day-item">${item}</li>`;

        selectDays.innerHTML +=
        `<option value="${item}" class="day-option">${item}</option>`;
    });
}