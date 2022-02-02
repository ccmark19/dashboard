import React, {useEffect, useLayoutEffect} from 'react';
import httpCalls from '../../commonFunction/httpCalls';
import {Register} from '../../../src/store/Register';
// import hexDataset from "../../src/datasets/ne_110m_admin_0_countries.geojson";
import MapPie from './map2D/mapPie';

const mapTwoD = () => {
  const API_Route_Profile = 'metrics/business_info';
  // const layoutFields = Register.useState((s) => s.layoutFields.binary);
  const store_res = Register.useState((s) => s.business_info_res);
  useEffect(() => {
    const fetchData = async () => {
      const api_result = await httpCalls(API_Route_Profile);
      Register.update((s) => {
        s.business_info_res = api_result.data;
      });
    };
    fetchData();
  }, [0]);

  return (
    <div>
      <MapPie businessInfo={store_res} />;
    </div>
  );
};

export default mapTwoD;
