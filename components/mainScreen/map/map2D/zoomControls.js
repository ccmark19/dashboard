import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4core from "@amcharts/amcharts4/core";
export const zoomControls = (chart) =>{
    // Add zoom control
    chart.zoomControl = new am4maps.ZoomControl();
    chart.zoomControl.align = "right";
    chart.zoomControl.valign = "top";
    chart.zoomControl.marginTop = "40"
    chart.zoomControl.marginRight = "10"
    // Add button
    var button = chart.chartContainer.createChild(am4core.Button);
    button.padding(7, 7, 7, 7);
    button.align = "right";
    button.marginRight = 15;
    button.events.on("hit", function () {
      chart.goHome();
    });

    button.icon = new am4core.Sprite();
    button.icon.path =
      "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
}