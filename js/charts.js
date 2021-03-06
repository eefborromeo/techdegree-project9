// CHART VARIABLES
// Buttons
const hourlyButton = document.getElementById('hour');
const dailyButton = document.getElementById('day');
const weeklyButton = document.getElementById('week');
const monthlyButton = document.getElementById('month');

// Canvas
const overallTraffic = document
  .getElementById('overall-traffic')
  .getContext('2d');
const dailyTraffic = document.getElementById('daily').getContext('2d');
const mobileUsers = document.getElementById('users').getContext('2d');

// GENERAL CHART STYLING
Chart.defaults.global.responsive = 'true';

// LINE CHART STYLING
Chart.defaults.global.elements.line.backgroundColor = 'rgba(119,110,191, 0.25)';
Chart.defaults.global.elements.line.borderColor = 'rgba(131,122,198,1)';
Chart.defaults.global.elements.line.borderWidth = 1;
Chart.defaults.global.elements.line.tension = 0;
Chart.defaults.global.elements.point.backgroundColor = 'rgba(251,251,251, 1)';
Chart.defaults.global.elements.point.borderColor = 'rgba(133,126,199, 1)';
Chart.defaults.global.elements.point.borderWidth = 2;
Chart.defaults.global.elements.point.radius = 6;

// BAR CHART STYLING
Chart.defaults.global.elements.rectangle.backgroundColor =
  'rgba(131,121,199, 1)';
Chart.defaults.global.elements.rectangle.backgroundColor =
  'rgba(131,121,199,1)';

// DOUGHNUT CHART STYLING
Chart.defaults.global.elements.arc.borderWidth = 0;

// OVERALL TRAFFIC CHART
// Traffic Chart Y Axis Labels
const TrafficYAxisLabels = [
  '0',
  '16-22',
  '23-29',
  '30-5',
  '6-12',
  '13-19',
  '20-26',
  '27-3',
  '4-10',
  '11-17',
  '18-24',
  '25-31',
];

// Traffic Chart Dataset Labels
const hourlyLabel = 'Hourly';
const dailyLabel = 'Daily';
const weeklyLabel = 'Weekly';
const monthlyLabel = 'Monthly';

// Traffic Chart Datasets
const hourlyDataset = [
  750,
  400,
  500,
  2000,
  2500,
  500,
  350,
  600,
  2100,
  700,
  800,
  1000,
  1500,
];
const dailyDataset = [
  250,
  1050,
  2250,
  1000,
  700,
  300,
  1200,
  550,
  2050,
  1050,
  2000,
  750,
  550,
];
const weeklyDataset = [
  300,
  750,
  1250,
  1000,
  1500,
  2000,
  1500,
  1750,
  1250,
  1750,
  2250,
  1750,
  2250,
];
const monthlyDataset = [
  600,
  750,
  1250,
  1500,
  1500,
  500,
  1500,
  2000,
  1250,
  800,
  900,
  1000,
  1500,
];

// Traffic Chart Configuration
const trafficConfig = {
  type: 'line',
  data: {
    labels: TrafficYAxisLabels,
    datasets: [
      {
        label: weeklyLabel,
        data: weeklyDataset,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          ticks: {
            padding: 20,
          },
          gridLines: {
            offsetGridLines: true,
            drawTicks: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 2500,
            stepSize: 500,
            padding: 20,
          },
          gridLines: {
            offsetGridLines: true,
            drawTicks: false,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  },
};

// DAILY TRAFFIC
// Daily Traffic Y Axis Labels
const dailyTrafficYAxisLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

// Daily Traffic Dataset
const dailyTrafficDataset = [75, 100, 175, 135, 230, 200, 100];

// Daily Traffic Configuration
const dailyTrafficConfig = {
  type: 'bar',
  data: {
    labels: dailyTrafficYAxisLabels,
    datasets: [
      {
        data: dailyTrafficDataset,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: false,
            min: 50,
            max: 250,
            stepSize: 50,
            padding: 10,
          },
          gridLines: {
            offsetGridLines: true,
            drawTicks: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
            min: 50,
            max: 250,
            stepSize: 50,
            padding: 20,
          },
          gridLines: {
            offsetGridLines: true,
            drawTicks: false,
          },
        },
      ],
    },
    legend: {
      display: false,
      labels: {
        boxWidth: 0,
      },
    },
  },
};

// MOBILE USERS
// Mobile User Labels
const mobileUsersLabels = ['Phones', 'Tablets', 'Desktop'];

// Mobile User Dataset
const mobileUserDataset = [15, 15, 70];

// Mobile User Configuration
const mobileUsersConfig = {
  type: 'doughnut',
  data: {
    datasets: [
      {
        data: mobileUserDataset,
        backgroundColor: [
          'rgba(119,201,166, 1)',
          'rgba(96,153,175, 1)',
          'rgba(101,96,158, 1)',
        ],
      },
    ],
    labels: mobileUsersLabels,
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      position: 'right',
      labels: {
        boxWidth: 18,
        fontSize: 16,
        padding: 20,
      },
    },
    title: {
      display: false,
    },
    rotation: -0.65 * Math.PI,
  },
};

// Create charts
const traffic = new Chart(overallTraffic, trafficConfig);
const daily = new Chart(dailyTraffic, dailyTrafficConfig);
const users = new Chart(mobileUsers, mobileUsersConfig);

// OVERALL TRAFFIC NAVIGATION
const btnDiv = document.getElementById('chart-title');
const btn = btnDiv.getElementsByClassName('button');
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function() {
    const currentChart = document.getElementsByClassName('active');
    currentChart[0].className = currentChart[0].className.replace(
      ' active',
      ''
    );
    this.className += ' active';
  });
}

function updateData(a, b) {
  traffic.config.data.datasets[0].data = a;
  traffic.config.data.datasets[0].label = b;
  traffic.update();
}

hourlyButton.addEventListener('click', e => {
  updateData(hourlyDataset, hourlyLabel);
});

dailyButton.addEventListener('click', e => {
  updateData(dailyDataset, dailyLabel);
});

weeklyButton.addEventListener('click', e => {
  updateData(weeklyDataset, weeklyLabel);
});

monthlyButton.addEventListener('click', e => {
  updateData(monthlyDataset, monthlyLabel);
});
