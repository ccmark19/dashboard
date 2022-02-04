import {useEffect} from 'react';
import httpCalls from '../../commonFunction/httpCalls';
import {Register} from '../../../src/store/Register';
import ScreenItemTemplate from '../../commonFunction/template/screenItemTemplate';
import DownlineTbl from './downlineTbl';
import VolumesTbl from './volumesTbl';
import SmallChartContainer from '../../commonFunction/template/smallChartContainer';
import Loading from '../../commonFunction/loading';

const downline = () => {
  const API_Route_Profile = 'metrics/get_organization_info';
  const API_Route_Profile_2 = 'metrics/business_info';
  const layoutFields = Register.useState((s) => s.layoutFields.downline);
  const store_res = Register.useState((s) => s.organization_info_res);
  const store_res_2 = Register.useState((s) => s.business_info_res);
  useEffect(() => {
    const fetchData = async () => {
      const api_result = await httpCalls(API_Route_Profile);
      Register.update((s) => {
        s.organization_info_res = api_result.data;
      });
    };
    fetchData();
  }, [0]);
  useEffect(() => {
    const fetchData = async () => {
      const api_result = await httpCalls(API_Route_Profile_2);
      Register.update((s) => {
        s.business_info_res = api_result.data;
      });
    };
    fetchData();
  }, [0]);

  return (
    <>      
      {store_res_2 && store_res? (
        <>
        <div>
          <ScreenItemTemplate layoutFields={layoutFields} store_res={store_res} />
        </div>
        <div>
          <VolumesTbl store_res={store_res_2} />
          <div className="mb-5"></div>
          <DownlineTbl store_res={store_res_2} />
        </div>
        </>
      ) : <Loading />}
    </>
  );
};

export default downline;
