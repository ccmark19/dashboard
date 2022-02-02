import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4core from "@amcharts/amcharts4/core";

export const feedCountryToMap = (polygonSeries, chart, polygonTemplate, per_country_res) => {

  // map polygon series (countries)  
  polygonSeries.name = "Active Countries";
  polygonSeries.useGeodata = true;
  polygonSeries.fill = am4core.color("#0075a4");

  // specify which countries to include  
  const country_name_arr = Object.keys(per_country_res);
  const country_value_arr = per_country_res;
  polygonSeries.include = country_name_arr;

  polygonSeries.exclude = ["AQ"];

  // Inactive countries
  var polygonSeriesInactive = chart.series.push(new am4maps.MapPolygonSeries());
  polygonSeriesInactive.name = "Inactive Countries";
  polygonSeriesInactive.useGeodata = true;
  polygonSeriesInactive.include = [
    "CA",
    "US",
    "AF",
    "AX",
    "AL",
    "DZ",
    "AS",
    "AD",
    "AO",
    "AI",
    "AQ",
    "AG",
    "AR",
    "AM",
    "AW",
    "AU",
    "AT",
    "AZ",
    "BS",
    "BH",
    "BD",
    "BB",
    "BY",
    "BE",
    "BZ",
    "BJ",
    "BM",
    "BT",
    "BO",
    "BA",
    "BW",
    "BV",
    "BR",
    "IO",
    "BN",
    "BG",
    "BF",
    "BI",
    "KH",
    "CM",
    "CV",
    "KY",
    "CF",
    "TD",
    "CL",
    "CN",
    "CX",
    "CC",
    "CO",
    "KM",
    "CG",
    "CD",
    "CK",
    "CR",
    "CI",
    "HR",
    "CU",
    "CY",
    "CZ",
    "DK",
    "DJ",
    "DO",
    "DM",
    "EC",
    "EG",
    "SV",
    "GQ",
    "ER",
    "EE",
    "ET",
    "FK",
    "FO",
    "FJ",
    "FI",
    "FR",
    "GF",
    "PF",
    "TF",
    "GA",
    "GM",
    "GE",
    "DE",
    "GH",
    "GI",
    "GR",
    "GL",
    "GD",
    "GP",
    "GU",
    "GT",
    "GN",
    "GW",
    "GY",
    "HT",
    "HM",
    "HN",
    "HK",
    "HU",
    "IS",
    "IN",
    "ID",
    "IR",
    "IQ",
    "IE",
    "IL",
    "IT",
    "JM",
    "JP",
    "JO",
    "KZ",
    "KE",
    "KI",
    "KP",
    "KR",
    "KW",
    "KG",
    "LA",
    "LV",
    "LB",
    "LS",
    "LR",
    "LY",
    "LI",
    "LT",
    "LU",
    "MO",
    "MK",
    "MG",
    "MW",
    "MY",
    "MV",
    "ML",
    "MT",
    "MH",
    "MQ",
    "MR",
    "MU",
    "YT",
    "MX",
    "FM",
    "MD",
    "MC",
    "MN",
    "MS",
    "MA",
    "MZ",
    "MM",
    "NA",
    "NR",
    "NP",
    "NL",
    "AN",
    "NC",
    "NZ",
    "NI",
    "NE",
    "NG",
    "NU",
    "NF",
    "MP",
    "NO",
    "OM",
    "PK",
    "PW",
    "PS",
    "PA",
    "PG",
    "PY",
    "PE",
    "PH",
    "PN",
    "PL",
    "PT",
    "PR",
    "QA",
    "RE",
    "RO",
    "RU",
    "RW",
    "SH",
    "KN",
    "LC",
    "PM",
    "VC",
    "WS",
    "SM",
    "ST",
    "SA",
    "SN",
    "RS",
    "SC",
    "SL",
    "SG",
    "SK",
    "SI",
    "SB",
    "SO",
    "ZA",
    "GS",
    "ES",
    "LK",
    "SD",
    "SR",
    "SJ",
    "SZ",
    "SE",
    "CH",
    "SY",
    "TW",
    "TJ",
    "TZ",
    "TH",
    "TL",
    "TG",
    "TK",
    "TO",
    "TT",
    "TN",
    "TR",
    "TM",
    "TC",
    "TV",
    "UG",
    "UA",
    "AE",
    "GB",
    "UM",
    "UY",
    "UZ",
    "VU",
    "VA",
    "VE",
    "VN",
    "VG",
    "VI",
    "WF",
    "EH",
    "YE",
    "ZM",
    "ZW",
    "BQ-BO",
    "BQ",
    "ME",
    "BL",
  ];
  polygonSeriesInactive.exclude = [...country_name_arr, "AQ"];
  polygonSeriesInactive.mapPolygons.template.tooltipText = "{name}";
  polygonSeriesInactive.mapPolygons.template.stroke = am4core.color("#404040");
  polygonSeriesInactive.mapPolygons.template.strokeOpacity = 0.36;
  polygonSeriesInactive.mapPolygons.template.fill = am4core.color("#E1E1E1");
  polygonSeriesInactive.fill = am4core.color("#E1E1E1");

  // country area look and behavior

  let counter=0;

  polygonTemplate.polygon.fill = am4core.color("#0075a4");
  polygonTemplate.strokeOpacity = 1;
  polygonTemplate.stroke = am4core.color("#404040");
  polygonTemplate.strokeOpacity = 0.36;
  polygonTemplate.fillOpacity = 0.4;
  polygonTemplate.zIndex = 5;    
  polygonTemplate.tooltipText = "{name}";

  counter++;

  // Create active state
  var as = polygonTemplate.states.create("active");
  as.properties.fill = am4core.color("#0075a4");

  // desaturate filter for countries
  var desaturateFilter = new am4core.DesaturateFilter();
  desaturateFilter.saturation = 1;
  polygonTemplate.filters.push(desaturateFilter);
  
  chart.legend = new am4maps.Legend();
  chart.legend.labels.template.fill = am4core.color("black");
  chart.legend.position = "middle";
  chart.legend.valign = "bottom";
  chart.legend.nonScaling = false;
  // chart.legend.responsive.enabled = true;

  var hoverState = polygonTemplate.states.create("hover");
  hoverState.properties.fillOpacity = 1;
};
