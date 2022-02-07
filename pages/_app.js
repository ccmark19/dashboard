import '../styles/globals.css';

function MyApp({Component, pageProps}) {
  return (
    <div>
      {/* <script src="https://cdn.amcharts.com/lib/4/core.js"></script>
      <script src="https://cdn.amcharts.com/lib/4/charts.js"></script>
      <script src="https://cdn.amcharts.com/lib/4/themes/material.js"></script>
      <script src="https://cdn.amcharts.com/lib/4/lang/de_DE.js"></script>
      <script src="https://cdn.amcharts.com/lib/4/geodata/germanyLow.js"></script>
      <script src="https://cdn.amcharts.com/lib/4/fonts/notosans-sc.js"></script>

      <script src="https://cdn.amcharts.com/lib/4/core.js"></script>
      <script src="https://cdn.amcharts.com/lib/4/charts.js"></script>
      <script src="https://cdn.amcharts.com/lib/4/maps.js"></script>
      <script src="https://cdn.amcharts.com/lib/4/geodata/worldHigh.js"></script>
      <script src="https://cdn.amcharts.com/lib/4/themes/dark.js"></script>
      <script src="https://cdn.amcharts.com/lib/4/themes/animated.js"></script> */}            
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
