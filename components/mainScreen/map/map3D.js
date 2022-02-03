import {useRef, useEffect, useState, useCallback} from 'react';
import countryCodeArr from '../../../src/countrycode-latlong.json';
// import hexDataset from "../../src/datasets/ne_110m_admin_0_countries.geojson";

const map3D = () => {


  // const API_Route_Profile = 'helper/address_shipping/profile';
  // // const layoutFields = Register.useState((s) => s.layoutFields.financial);
  // const store_res = Register.useState((s) => s.geo_info_res);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const api_result = await httpCalls(API_Route_Profile);
  //     Register.update((s) => {
  //       s.geo_info_res = api_result.data;
  //     });
  //   };
  //   fetchData();
  // }, [0]);
  // http://192.168.75.204:8001/api/helper/address_shipping/profile
  let Globe = () => null;
  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.1;
  }, []);

  if (typeof window !== 'undefined') Globe = require('react-globe.gl').default;

  // const [countries, setCountries] = useState({ features: [] });
  const globeEl = useRef();
  // const N = 20;
  const arcsData = Object.keys(countryCodeArr).map((item, key) => ({
    startLat: countryCodeArr[item].lat,
    startLng: countryCodeArr[item].long,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: '#d74aab',
  }));
  console.log(countryCodeArr);

  const gData = Object.keys(countryCodeArr).map((item, key) => ({
    lat: countryCodeArr[item].lat,
    lng: countryCodeArr[item].long,
  }));

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      arcsData={arcsData}
      pointsData={gData}
      arcColor={'color'}
      arcDashGap={2}
      arcStroke={0.5}
      arcDashAnimateTime={() => Math.random() * 8000 + 500}
    />
  );
};

export default map3D;
