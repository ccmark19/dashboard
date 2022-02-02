import * as am4core from "@amcharts/amcharts4/core";
export const createCountryLabel = (countryLabel) =>{
    countryLabel.text = "";
    // working on
    countryLabel.fill = am4core.color("#2e2e2e");
    countryLabel.fontSize = 40;

    countryLabel.hiddenState.properties.dy = 1000;
    countryLabel.defaultState.properties.dy = 0;
    countryLabel.valign = "middle";
    countryLabel.align = "left";
    countryLabel.paddingTop = 500;
    countryLabel.paddingRight = 50;
    countryLabel.hide(0);
    countryLabel.show();
    
    return countryLabel;
}