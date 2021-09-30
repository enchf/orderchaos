var CHART_DOM = $('#chaosChart');
var CHART_CONFIG = {
     type: 'line',
     data: { labels: [], datasets: [] },
     options: {
       responsive: true,
       maintainAspectRatio: false,
       plugins: {
         legend: {
           position: 'top',
         },
         title: {
           display: true,
           text: 'Logistic Equation'
         }
       }
     },
};
var CHART = new Chart(CHART_DOM, CHART_CONFIG);

function updatePlot() {
    var formData = ['ratio','x0','iterations']
        .map(id => id + '=' + $('#' + id).val())
        .join('&');
    $.ajax({ url: "/chaos?" + formData, success: updatePlotCallback });
}

function updatePlotCallback(data) {
    var labels = [...data.keys()];
    var chartData = {
        labels: labels,
        datasets: [{ label: 'Population ratio over time', data: data,
                     borderColor: 'rgb(255, 99, 132)',
                     backgroundColor: 'rgb(255, 99, 132, 0.5)' }]
    };

    CHART.data = chartData;
    CHART.update();
}
