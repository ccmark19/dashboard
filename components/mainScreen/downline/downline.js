import {useEffect} from 'react';
import httpCalls from '../../commonFunction/httpCalls';
import {Register} from '../../../src/store/Register';
import ScreenItemTemplate from '../../commonFunction/template/screenItemTemplate';
import DownlineTbl from './downlineTbl';
import VolumesTbl from './volumesTbl';
import SmallChartContainer from '../../commonFunction/template/smallChartContainer';
import Loading from '../../commonFunction/loading';

const downline = () => {
  const API_Route_Organization = 'metrics/get_organization_info';
  const API_Route_Business = 'metrics/business_info';
  const layoutFields = Register.useState((s) => s.layoutFields.downline);
  const store_res_organization = Register.useState((s) => s.organization_info_res);
  const store_res_business = Register.useState((s) => s.business_info_res);
  useEffect(() => {
    const fetchData = async () => {
      const api_result = await httpCalls(API_Route_Organization);
      Register.update((s) => {
        s.organization_info_res = api_result.data;
      });
    };
    fetchData();
  }, [0]);
  useEffect(() => {
    const fetchData = async () => {
      const api_result = await httpCalls(API_Route_Business);
      Register.update((s) => {
        s.business_info_res = api_result.data;
      });
    };
    fetchData();
  }, [0]);

  return (
    <>      
      {store_res_business && store_res_organization? (
        <>
        <div>
          <ScreenItemTemplate layoutFields={layoutFields} store_res={store_res_organization} />
        </div>
        <div>
          <VolumesTbl store_res={store_res_business} />
          <div className="mb-5"></div>
          <DownlineTbl store_res={store_res_business} />
        </div>
        </>
      ) : <Loading />}
    </>
  );
};

export default downline;
