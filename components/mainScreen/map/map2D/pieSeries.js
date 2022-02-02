import * as am4core from "@amcharts/amcharts4/core";
export const pieSeriesfunc = (pieSeries) => {
  pieSeries.dataFields.value = "value";
  pieSeries.dataFields.category = "category";
  pieSeries.dataFields.id = "id";
  pieSeries.dataFields.name = "name";
  pieSeries.data = [
    { value: 0, category: "LA" },
    { value: 0, category: "LP" },
    { value: 0, category: "Retailer" },
  ];

  var dropShadowFilter = new am4core.DropShadowFilter();
  dropShadowFilter.blur = 4;
  pieSeries.filters.push(dropShadowFilter);

  var sliceTemplate = pieSeries.slices.template;
  sliceTemplate.fillOpacity = 1;
  sliceTemplate.strokeOpacity = 0;

  var activeState = sliceTemplate.states.getKey("active");
  activeState.properties.shiftRadius = 0; // no need to pull on click, as country circle under the pie won't make it good

  var sliceHoverState = sliceTemplate.states.getKey("hover");
  sliceHoverState.properties.shiftRadius = 0; // no need to pull on click, as country circle under the pie won't make it good

  // we don't need default pie chart animation, so change defaults
  var hiddenState = pieSeries.hiddenState;
  hiddenState.properties.startAngle = pieSeries.startAngle;
  hiddenState.properties.endAngle = pieSeries.endAngle;
  hiddenState.properties.opacity = 0;
  hiddenState.properties.visible = false;
  // series labels
  var labelTemplate = pieSeries.labels.template;
  labelTemplate.nonScaling = true;
  labelTemplate.text = "{category}: {value} ({value.percent.formatNumber('#.0')}%)";
  labelTemplate.fill = am4core.color("#FFFFFF");
  labelTemplate.fontSize = 20;
  labelTemplate.background = new am4core.RoundedRectangle();
  labelTemplate.background.fillOpacity = 0.9;
  labelTemplate.padding(4, 9, 4, 9);
  labelTemplate.background.fill = am4core.color("#7678a0");

  // we need pie series to hide faster to avoid strange pause after country is clicked
  pieSeries.hiddenState.transitionDuration = 1;
  return pieSeries;
};
