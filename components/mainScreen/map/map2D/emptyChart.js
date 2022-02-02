import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import * as am4maps from "@amcharts/amcharts4/maps";
export const emptyChart = (chart) => {
  chart.chartContainer.wheelable = false;

  try {
    chart.geodata = am4geodata_worldLow;
  } catch (e) {
    chart.raiseCriticalError(new Error("Map geodata could not be loaded"));
  }

  chart.projection = new am4maps.projections.Miller();

  return chart;
};
