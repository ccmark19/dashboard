import {useEffect} from 'react';
import httpCalls from '../../commonFunction/httpCalls';
import {Register} from '../../../src/store/Register';
import ScreenItemTemplate from '../../commonFunction/template/screenItemTemplate';
import ShoppingCreditChart from './shoppingCreditChart';
import SmallChartContainer from '../../commonFunction/template/smallChartContainer';
import Loading from '../../commonFunction/loading';
const financial = () => {
  const API_Route_Business = 'metrics/business_info';
  const layoutFields = Register.useState((s) => s.layoutFields.financial);
  const store_res_business = Register.useState((s) => s.business_info_res);
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
      {store_res_business ? (
        <div>
          <ScreenItemTemplate layoutFields={layoutFields} store_res={store_res_business} />
          <SmallChartContainer
            graph={<ShoppingCreditChart store_res={store_res_business} />}
          />
        </div>
      ) : <Loading />}
    </>
  );
};

export default financial;
