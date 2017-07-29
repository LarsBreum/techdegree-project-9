var ctx = document.getElementById('chartTraffic').getContext('2d');
var chartTraffic = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "17-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: "Traffic",
            lineTension: 0,
            backgroundColor: 'rgba(116,119,191, .35)',
            borderColor: 'rgb(116,119,191)',
            borderWidth: 2,
            pointBackgroundColor: '#fff',
            pointRadius: 6,
            data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 2000, 1500, 2000],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
         display: false,
      },



      scales: {
         xAxes: [{
            gridLines: {
               offsetGridLines: true,
            },

            ticks: {
               fontColor: '#676666',
            }
         }],

         yAxes: [{
            ticks: {
                suggestedMin: 0,
                suggestedMax: 2500,
                fontColor: '#676666',
            }
         }],
      }
   }
});

// DAILY TRAFFIC =============================================================
var ctx2 = document.getElementById('chartTrafficDaily').getContext('2d');
var chartTrafficDaily = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "17-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: "Traffic",
            lineTension: 0,
            backgroundColor: 'rgba(116,119,191, .35)',
            borderColor: 'rgb(116,119,191)',
            borderWidth: 2,
            pointBackgroundColor: '#fff',
            pointRadius: 6,
            data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 2000, 1500, 2000],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
         display: false,
      },



      scales: {
         xAxes: [{
            gridLines: {
               offsetGridLines: true,
            },

            ticks: {
               fontColor: '#676666',
            }
         }],

         yAxes: [{
            ticks: {
                suggestedMin: 0,
                suggestedMax: 2500,
                fontColor: '#676666',
            }
         }],
      }
   }
});

// DAILY TRAFFIC =============================================================
var ctx3 = document.getElementById('chartUsers').getContext('2d');
var chartTrafficDaily = new Chart(ctx3, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "17-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: "Traffic",
            lineTension: 0,
            backgroundColor: 'rgba(116,119,191, .35)',
            borderColor: 'rgb(116,119,191)',
            borderWidth: 2,
            pointBackgroundColor: '#fff',
            pointRadius: 6,
            data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 2000, 1500, 2000],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
         display: false,
      },



      scales: {
         xAxes: [{
            gridLines: {
               offsetGridLines: true,
            },

            ticks: {
               fontColor: '#676666',
            }
         }],

         yAxes: [{
            ticks: {
                suggestedMin: 0,
                suggestedMax: 2500,
                fontColor: '#676666',
            }
         }],
      }
   }
});
