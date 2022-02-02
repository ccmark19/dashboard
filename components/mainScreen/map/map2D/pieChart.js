export const pieChartFunc = (pieChart) => {
    pieChart.width = 100;
    pieChart.height = 100;
    pieChart.hidden = true; // can't use visible = false!

    // because defauls are 50, and it's not good with small countries
    pieChart.chartContainer.minHeight = 1;
    pieChart.chartContainer.minWidth = 1;
    return pieChart
}