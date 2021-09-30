function updatePlot() {
    var formData = ['ratio','x0','iterations']
        .map(id => id + '=' + $('#' + id).val())
        .join('&');
    $.ajax({ url: "/chaos?" + formData, success: updatePlotCallback });
}

function updatePlotCallback(data) {
    alert(data);
}