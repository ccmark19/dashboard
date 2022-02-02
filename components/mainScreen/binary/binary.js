import {useEffect} from 'react';
import httpCalls from '../../commonFunction/httpCalls';
import {Register} from '../../../src/store/Register';
import ScreenItemTemplate from '../../commonFunction/template/screenItemTemplate';
const binary = () => {
  const API_Route_Profile = 'metrics/business_info';
  const layoutFields = Register.useState((s) => s.layoutFields.binary);
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
    <>
      <ScreenItemTemplate layoutFields={layoutFields} store_res={store_res} />
    </>
  );
};

export default binary;
