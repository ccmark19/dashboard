import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps";
// 1 select polygon
export function selectPolygon(
  morphedPolygon,
  polygon,
  pieSeries,
  polygonSeries,
  countryLabel,
  currContinent,
  chart,
  pieChart,
  per_country_res,
) {
  if (morphedPolygon != polygon) {
    var animation = pieSeries.hide();
    if (animation) {
      animation.events.on("animationended", function () {
        morphToCircle(
          polygon,
          morphedPolygon,
          polygonSeries,
          countryLabel,
          currContinent,
          chart,
          pieSeries,
          pieChart,
          per_country_res
        );
      });
    } else {
      morphToCircle(
        polygon,
        morphedPolygon,
        polygonSeries,
        countryLabel,
        currContinent,
        chart,
        pieSeries,
        pieChart,
        per_country_res
      );
    }
  }
}

// 2 process change the country shape to circle
export function morphToCircle(
  polygon,
  morphedPolygon,
  polygonSeries,
  countryLabel,
  currContinent,
  chart,
  pieSeries,
  pieChart,
  per_country_res
) {
  var animationDuration = polygon.polygon.morpher.morphDuration;

  polygon.toFront();

  polygon.polygon.morpher.morphToSingle = true;
  var morphAnimation = polygon.polygon.morpher.morphToCircle();

  polygon.strokeOpacity = 0; // hide stroke for lines not to cross countries

  polygon.defaultState.properties.fillOpacity = 1;
  polygon.animate({ property: "fillOpacity", to: 1 }, animationDuration);

  // animate desaturate filter
  var filter = polygon.filters.getIndex(0);
  filter.animate({ property: "saturation", to: 1 }, animationDuration);
  // save currently morphed polygon
  morphedPolygon = polygon;

  // fade out all other
  fadeOut(polygon, polygonSeries);

  // hide country label
  countryLabel.hide();

  if (morphAnimation) {
    morphAnimation.events.on("animationended", function () {
      zoomToCountry(
        polygon,
        currContinent,
        chart,
        pieSeries,
        morphedPolygon,
        polygonSeries,
        pieChart,
        countryLabel,
        per_country_res
      );
    });
  } else {
    zoomToCountry(
      polygon,
      currContinent,
      chart,
      pieSeries,
      morphedPolygon,
      polygonSeries,
      pieChart,
      countryLabel,
      per_country_res
    );
  }
}

// 3 zoom into country view area
export function zoomToCountry(
  polygon,
  currContinent,
  chart,
  pieSeries,
  morphedPolygon,
  polygonSeries,
  pieChart,
  countryLabel,
  per_country_res
) {
  // Pre-zoom to a list of countries
  var zoomTo = ["IN", "CN", "KZ"];
  var antarctica = ["AQ", "BV", "GS", "HM", "TF"];
  var africa = [
    "AO",
    "BF",
    "BI",
    "BJ",
    "BW",
    "CD",
    "CF",
    "CG",
    "CI",
    "CM",
    "CV",
    "DJ",
    "DZ",
    "EG",
    "EH",
    "ER",
    "ET",
    "GA",
    "GH",
    "GM",
    "GN",
    "GQ",
    "GW",
    "KE",
    "KM",
    "LR",
    "LS",
    "LY",
    "MA",
    "MG",
    "ML",
    "MR",
    "MU",
    "MW",
    "MZ",
    "NA",
    "NE",
    "NG",
    "RE",
    "RW",
    "SC",
    "SD",
    "SH",
    "SL",
    "SN",
    "SO",
    "ST",
    "SZ",
    "TD",
    "TG",
    "TN",
    "TZ",
    "UG",
    "YT",
    "ZA",
    "ZM",
    "ZW",
  ];
  var asia = [
    "AE",
    "AF",
    "AM",
    "AP",
    "AZ",
    "BD",
    "BH",
    "BN",
    "BT",
    "CC",
    "CN",
    "CX",
    "CY",
    "GE",
    "HK",
    "ID",
    "IL",
    "IN",
    "IO",
    "IQ",
    "IR",
    "JO",
    "JP",
    "KG",
    "KH",
    "KP",
    "KR",
    "KW",
    "KZ",
    "LA",
    "LB",
    "LK",
    "MM",
    "MN",
    "MO",
    "MV",
    "MY",
    "NP",
    "OM",
    "PH",
    "PK",
    "PS",
    "QA",
    "SA",
    "SG",
    "SY",
    "TH",
    "TJ",
    "TL",
    "TM",
    "TW",
    "UZ",
    "VN",
    "YE",
  ];
  var europe = [
    "AD",
    "AL",
    "AT",
    "AX",
    "BA",
    "BE",
    "BG",
    "BY",
    "CH",
    "CZ",
    "DE",
    "DK",
    "EE",
    "ES",
    "EU",
    "FI",
    "FO",
    "FR",
    "FX",
    "GB",
    "GG",
    "GI",
    "GR",
    "HR",
    "HU",
    "IE",
    "IM",
    "IS",
    "IT",
    "JE",
    "LI",
    "LT",
    "LU",
    "LV",
    "MC",
    "MD",
    "ME",
    "MK",
    "MT",
    "NL",
    "NO",
    "PL",
    "PT",
    "RO",
    "RS",
    // "RU",
    "SE",
    "SI",
    "SJ",
    "SK",
    "SM",
    "TR",
    "UA",
    "VA",
  ];
  var north_america = [
    "AG",
    "AI",
    "AN",
    "AW",
    "BB",
    "BL",
    "BM",
    "BS",
    "BZ",
    "CA",
    "CR",
    "CU",
    "DM",
    "DO",
    "GD",
    "GL",
    "GP",
    "GT",
    "HN",
    "HT",
    "JM",
    "KN",
    "KY",
    "LC",
    "MF",
    "MQ",
    "MS",
    "MX",
    "NI",
    "PA",
    "PM",
    "PR",
    "SV",
    "TC",
    "TT",
    "US",
    "VC",
    "VG",
    "VI",
  ];
  var oceania = [
    "AS",
    "AU",
    "CK",
    "FJ",
    "FM",
    "GU",
    "KI",
    "MH",
    "MP",
    "NC",
    "NF",
    "NR",
    "NU",
    "NZ",
    "PF",
    "PG",
    "PN",
    "PW",
    "SB",
    "TK",
    "TO",
    "TV",
    "UM",
    "VU",
    "WF",
    "WS",
  ];
  var south_america = [
    "AR",
    "BO",
    "BR",
    "CL",
    "CO",
    "EC",
    "FK",
    "GF",
    "GY",
    "PE",
    "PY",
    "SR",
    "UY",
    "VE",
  ];
  var russia = ["RU"];
  var continents = [
    antarctica,
    africa,
    asia,
    europe,
    north_america,
    oceania,
    south_america,
    russia,
  ];

  var focusedContinent;

  for (let i = 0; i < continents.length; i++) {
    for (let j = 0; j < continents[i].length; j++) {
      if (continents[i][j] == polygon.dataItem.dataContext.id) {
        focusedContinent = continents[i];
        if (focusedContinent != currContinent) {
          zoomOut(currContinent, chart, pieSeries, morphedPolygon);
        }
        currContinent = focusedContinent;
      }
    }
  }

  zoomTo = focusedContinent;

  // Init extrems
  var north, south, west, east;

  // Find extreme coordinates for all pre-zoom countries
  for (var i = 0; i < zoomTo.length; i++) {
    var country = polygonSeries.getPolygonById(zoomTo[i]);
    if (country) {
      if (north == undefined || country.north > north) {
        north = country.north;
      }

      if (south == undefined || country.south < south) {
        south = country.south;
      }
      if (west == undefined || country.west < west) {
        west = country.west;
      }
      if (east == undefined || country.east > east) {
        east = country.east;
      }
      country.isActive = true;
    }
  }

  // Pre-zoom
  var zoomAnimation = chart.zoomToRectangle(north, east, south, west, 1, true);

  if (zoomAnimation) {
    zoomAnimation.events.on("animationended", function () {
      showPieChart(polygon, chart, pieChart, pieSeries, countryLabel, per_country_res);
    });
  } else {
    showPieChart(polygon, chart, pieChart, pieSeries, countryLabel, per_country_res);
  }
}

// 4 fade out all countries except selected
export function fadeOut(exceptPolygon, polygonSeries) {
  if (polygonSeries != undefined) {
    for (var i = 0; i < polygonSeries.mapPolygons.length; i++) {
      var polygon = polygonSeries.mapPolygons.getIndex(i);
      if (polygon != exceptPolygon) {
        polygon.defaultState.properties.fill = am4core.color("#404040");
        polygon.defaultState.properties.fillOpacity = 0.4;
        polygon.animate(
          [
            { property: "fillOpacity", to: 0.4 },
            { property: "strokeOpacity", to: 0.8 },
          ],
          polygon.polygon.morpher.morphDuration
        );
      }
    }
  }
}

// 5 display country pie chart info
export function showPieChart(
  polygon,
  chart,
  pieChart,
  pieSeries,
  countryLabel,
  per_country_res
) {
  polygon.polygon.measure();
  var radius;
  if (polygon.dataItem.dataContext.id != "RU") {
    radius =
      ((polygon.polygon.measuredWidth / 3) * polygon.globalScale) /
      chart.seriesContainer.scale;
    pieChart.width = radius * 2;
    pieChart.height = radius * 2;
    pieChart.radius = radius;
    if (polygon.polygon.measuredWidth < 25) {
      pieChart.width = radius * 5;
      pieChart.height = radius * 5;
      pieChart.radius = radius * 5;
    }
  } else if (polygon.dataItem.dataContext.id == "RU") {
    radius =
      ((polygon.polygon.measuredWidth / 8) * polygon.globalScale) /
      chart.seriesContainer.scale;
    pieChart.width = radius * 0.5;
    pieChart.height = radius * 0.5;
    pieChart.radius = radius;
  }

  var centerPoint = am4core.utils.spritePointToSvg(
    polygon.polygon.centerPoint,
    polygon.polygon
  );
  centerPoint = am4core.utils.svgPointToSprite(
    centerPoint,
    chart.seriesContainer
  );

  pieChart.x = centerPoint.x - radius;
  pieChart.y = centerPoint.y - radius;

  var fill = polygon.fill;
  var desaturated = fill.saturate(0.2);
  let sum = [];
  for (var i = 0; i < pieSeries.dataItems.length; i++) {
    var dataItem = pieSeries.dataItems.getIndex(i);
    // map pie item values  
    let obj = Object.values(per_country_res[[polygon.dataItem.dataContext.id][0]]);
    dataItem.value = obj[i];
    
    sum = [...sum, dataItem.value];
    dataItem.slice.fill = am4core.color(
      am4core.colors.interpolate(fill.rgb, am4core.color("black").rgb, 0.35 * i)
    );
    dataItem.label.background.fill = desaturated;
    dataItem.tick.stroke = fill;
  }

  sum = sum.reduce((a, b) => a + b);

  pieSeries.show();
  pieChart.show();

  // country name on the side to display
  countryLabel.text = "{name}:" + sum;
  countryLabel.dataItem = polygon.dataItem;
  countryLabel.show();
}

// 6 zoomout country view
export function zoomOut(currContinent, chart, pieSeries, morphedPolygon) {
  if (currContinent != undefined) {
    for (let i = 0; i < currContinent.length; i++) {
      const country = polygonSeries.getPolygonById(currContinent[i]);
      if (country) {
        country.isActive = false;
      }
    }
  }
  chart.zoomOut(currContinent);
  pieSeries.hide();
  morphBack(morphedPolygon);
  fadeOut();
  //   countryLabel.hide();
  morphedPolygon = undefined;
}

// 7 process change circle back to country shape
export function morphBack(morphedPolygon) {
  if (morphedPolygon) {
    morphedPolygon.polygon.morpher.morphBack();
    var dsf = morphedPolygon.filters.getIndex(0);
    dsf.animate(
      { property: "saturation", to: 0.25 },
      morphedPolygon.polygon.morpher.morphDuration
    );
  }
}