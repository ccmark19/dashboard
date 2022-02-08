import {useEffect} from 'react';
import httpCalls from '../../commonFunction/httpCalls';
import {Register} from '../../../src/store/Register';
import ScreenItemTemplate from '../../commonFunction/template/screenItemTemplate';
import BinaryTablesTemplate from '../../commonFunction/template/binaryTablesTemplate';
import Loading from '../../commonFunction/loading';

const binary = () => {
  const API_Route_Organization = 'metrics/get_organization_info';
  const API_Route_CommissionQualified = 'metrics/get_pending_commissions';
  const layoutFields = Register.useState((s) => s.layoutFields.binary);
  const store_res_organization = Register.useState(
    (s) => s.organization_info_res,
  );
  const store_res_commission_qualified = Register.useState(
    (s) => s.commission_qualified,
  );
  const store_res = {
    ...store_res_commission_qualified,
    ...store_res_organization,
  };
  
  useEffect(() => {
    const fetchData = async () => {
      const api_organizationInfo = await httpCalls(API_Route_Organization);
      const api_result_commissionQualified = await httpCalls(
        API_Route_CommissionQualified,
      );
      Register.update((s) => {
        s.commission_qualified = api_result_commissionQualified.data;
      });
      Register.update((s) => {
        s.organization_info_res = api_organizationInfo.data;
      });
    };
    fetchData();
  }, [0]);

  return (
    <div>
     {store_res && store_res_organization ? <>
      <ScreenItemTemplate layoutFields={layoutFields} store_res={store_res} />      
      <div className='flex flex-wrap'>
        <BinaryTablesTemplate layoutFields={layoutFields} store_res={store_res.top_product_purchases_last_30_days} table_name={'top_product_purchases_last_30_days'}/>
        <BinaryTablesTemplate layoutFields={layoutFields} store_res={store_res.top_SB_purchases_last_30_days} table_name={'top_SB_purchases_last_30_days'}/>
        <BinaryTablesTemplate layoutFields={layoutFields} store_res={store_res.top_launchers_last_30_days} table_name={'top_launchers_last_30_days'}/>
      </div>
      </> : <Loading />}
    </div>
  );
};

export default binary;
