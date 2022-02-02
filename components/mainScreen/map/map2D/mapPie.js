import React, {useEffect, useLayoutEffect, useState} from 'react';
// import * as am4core from '@amcharts/amcharts4/core';
// import * as am4charts from '@amcharts/amcharts4/charts';
// import * as am4maps from '@amcharts/amcharts4/maps';

// import {emptyChart} from './emptyChart';
// import {feedCountryToMap} from './feedCountryToMap';
// import {pieChartFunc} from './pieChart';
// import {pieSeriesfunc} from './pieSeries';
// import {createCountryLabel} from './createCountryLabel';
// // import { setCountryLabelTemplate } from "./setCountryLabelTemplate";
// import {selectPolygon} from './pieAnimation';
// import {zoomControls} from './zoomControls';
// import {zoomOut} from './pieAnimation';
const MapPie = ({businessInfo}) => {
  useLayoutEffect(() => {
    let per_country_res = businessInfo.per_country
      ? businessInfo.per_country
      : [''];
    // let currContinent;

    //     var chart = am4core.create('chartdiv', am4maps.MapChart);
    //     chart = emptyChart(chart);
    //     zoomControls(chart);

    //     var morphedPolygon;
    //     var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    //     var polygonTemplate = polygonSeries.mapPolygons.template;
    //     // feedCountryToMap(polygonSeries, chart, polygonTemplate, per_country_res);
    //     feedCountryToMap(polygonSeries, chart, polygonTemplate, per_country_res);

    //     // Pie chart
    //     var pieChart = chart.seriesContainer.createChild(am4charts.PieChart);
    //     // Set width/heigh of a pie chart for easier positioning only
    //     pieChart = pieChartFunc(pieChart);
    //     var pieSeries = pieChart.series.push(new am4charts.PieSeries());
    //     pieSeries = pieSeriesfunc(pieSeries);
    //     // country label
    //     var countryLabel = chart.chartContainer.createChild(am4core.Label);
    //     countryLabel = createCountryLabel(countryLabel);
    //     // country name
    //     let labelSeries = chart.series.push(new am4maps.MapImageSeries());
    //     labelSeries.hiddenInLegend = true;

    //     // zoomout on background click
    //     chart.chartContainer.background.events.on('hit', function () {
    //       zoomOut(currContinent, chart, pieSeries, morphedPolygon);
    //     });
    //     // zoomout on oceans click
    //     chart.backgroundSeries.events.on('hit', function () {
    //       zoomOut(currContinent, chart, pieSeries, morphedPolygon);
    //     });

    //     // what to do when country is clicked
    //     polygonTemplate.events.on('hit', function (event) {
    //       event.target.zIndex = 10000;
    //       selectPolygon(
    //         morphedPolygon,
    //         event.target,
    //         pieSeries,
    //         polygonSeries,
    //         countryLabel,
    //         currContinent,
    //         chart,
    //         pieChart,
    //         per_country_res,
    //       );
    //     });
    //   },
    //   // }
  }, [businessInfo]);
  return (
    <div>
      <div className="row map_div">
        <div
          id="chartdiv"
          style={
            businessInfo.per_country
              ? {height: '65vh'}
              : {height: '65vh', filter: 'blur(5px)'}
          }
        />
      </div>
    </div>
  );
};

export default MapPie;
