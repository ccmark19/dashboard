import {useRef, useEffect, useState, useCallback} from 'react';
import countryCodeArr from '../../../src/countrycode-latlong.json';
// import hexDataset from "../../src/datasets/ne_110m_admin_0_countries.geojson";

const map3D = () => {
  let Globe = () => null;
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

  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.1;
  }, []);

  // const arcsData = Object.keys(countryCodeArr).map((item, key) => ({
  //   // startLat: (Math.random() - 0.5) * 180,
  //   // startLng: (Math.random() - 0.5) * 360,
  //   // endLat: countryCodeArr[item].lat,
  //   // endLng: countryCodeArr[item].long,
  //   // color: '#d74aab',
  //   // console.log('countryCodeArr->', item, countryCodeArr[item]);
  //   lat: (Math.random() - 0.5) * 180,
  //   lng: (Math.random() - 0.5) * 360,
  //   size: Math.random() / 3,
  //   color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)],
  // }));

  const gData = Object.keys(countryCodeArr).map((item, key) => ({
    lat: countryCodeArr[item].lat,
    lng: countryCodeArr[item].long,
    size: Math.random() / 3,
    color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)],
  }));

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      arcsData={arcsData}
      // pointsData={gData}
      arcColor={'color'}
      arcDashGap={2}
      arcDashAnimateTime={3000}
      arcsTransitionDuration={3000}
      arcStroke={0.5}
    />
  );
};

export default map3D;
