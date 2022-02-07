import {useRef, useEffect, useState, useCallback} from 'react';
import countryCodeArr from '../../../src/countrycode-latlong.json';
import {Register} from '../../../src/store/Register';
import httpCalls from '../../commonFunction/httpCalls';
import hexDataset from "../../../src/ne_110m_admin_0_countries.json";
import * as THREE from 'three';

const map3D = () => {

  let Globe = () => null;
  if (typeof window !== 'undefined') Globe = require('react-globe.gl').default;
  let gData;
  let country_name_arr = [];
  const globeEl = useRef();
  const API_Route_Profile = 'helper/address_shipping/profile';
  const API_Route_Profile2 = 'metrics/business_info';
  const store_res = Register.useState((s) => s.geo_info_res);
  const store_res2 = Register.useState((s) => s.business_info_res);
  const user_country = Register.useState((s) => s.geo_info_user_country);
  const [countries, setCountries] = useState({ features: []});
  useEffect(() => {
    const fetchData = async () => {
      const api_result = await httpCalls(API_Route_Profile);
      const api_result2 = await httpCalls(API_Route_Profile2);
      Register.update((s) => {
        s.geo_info_res = api_result.data;
      });
      Register.update((s) => {
        s.geo_info_user_country = api_result.data.address_details.country.toLowerCase();
      });
      Register.update((s) => {
        s.business_info_res = api_result2.data;        
        
      });
    };
    setCountries(hexDataset);
    fetchData();
  }, [0]);


  
  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.1;

    
    // Directional light
    const scene = globeEl.current.scene();
    // right down light effect
    // const directionalLight = new THREE.DirectionalLight('rgba(218, 43, 150, 1))', 3)
    // directionalLight.position.set(360, -1000, -560);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2)    
    scene.add(directionalLight)
  }, []);

  // get all country name
  if (store_res2 != null) {
    Object.keys(store_res2.per_country).map((item)=>{      
      const country_name = item.toLowerCase();
      country_name_arr = [...country_name_arr,country_name];
    }) 
  }

  let gData_target = country_name_arr;
  gData = gData_target.map((item) => ({
    lat: countryCodeArr[item].lat,
    lng: countryCodeArr[item].long
  }));


  // let gData_target = Object.keys(countryCodeArr).filter(code => code == user_country);
  // gData = gData_target.map((item) => ({
  //   lat: countryCodeArr[item].lat,
  //   lng: countryCodeArr[item].long
  // }));
  
  
  return (
    <div>
      <Globe
        ref={globeEl}
        hexPolygonsData={countries.features}
        // hexPolygonColor={() => `#${Math.round(Math.random() * Math.pow(2, 24)).toString(16).padStart(6, '0')}`}
        // hexPolygonColor={()=>"#3d276b"}
        hexPolygonColor={() =>"rgba(43, 197, 218, 1)"}      
        hexPolygonLabel={({ properties: d }) => `
          <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
          Population: <i>${d.POP_EST}</i>
        `}
        hexPolygonMargin={0.7}
        showAtmosphere={true}      
        atmosphereColor={"#3E62AB"}      
        atmosphereAltitude={0.20}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        // arcsData={arcsData}
        pointsData={gData}
        ringsData={gData}
        arcColor={'color'}
        arcDashGap={2}
        arcStroke={0.5}
        arcDashAnimateTime={() => Math.random() * 8000 + 500}
        onPointHover={(point)=> globeEl.current.controls().autoRotate = !point}
      />      
    </div>
  );
};

export default map3D;






  // const [countries, setCountries] = useState({ features: [] });
  // const N = 20;
  // const arcsData = Object.keys(countryCodeArr).map((item, key) => ({
  //   startLat: countryCodeArr[item].lat,
  //   startLng: countryCodeArr[item].long,
  //   endLat: (Math.random() - 0.5) * 180,
  //   endLng: (Math.random() - 0.5) * 360,
  //   color: '#d74aab',
  // }));

  // const gData = Object.keys(countryCodeArr).map((item, key) => ({
  //   lat: countryCodeArr[item].lat,
  //   lng: countryCodeArr[item].long,
  // }));