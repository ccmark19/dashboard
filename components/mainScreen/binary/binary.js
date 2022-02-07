import {useEffect} from 'react';
import httpCalls from '../../commonFunction/httpCalls';
import {Register} from '../../../src/store/Register';
import ScreenItemTemplate from '../../commonFunction/template/screenItemTemplate';
const binary = () => {
  const API_Route_OrganizationInfo = 'metrics/get_organization_info';
  const API_Route_CommissionQualified = 'metrics/get_pending_commissions';
  const layoutFields = Register.useState((s) => s.layoutFields.binary);
  const store_res_organization_info = Register.useState(
    (s) => s.organization_info_res,
  );
  const store_res_commission_qualified = Register.useState(
    (s) => s.commission_qualified,
  );

  useEffect(() => {
    const fetchData = async () => {
      const api_organizationInfo = await httpCalls(API_Route_OrganizationInfo);
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

  const store_res = {
    ...store_res_commission_qualified,
    ...store_res_organization_info,
  };

  let name_arr = [];
  let user_name_arr = [];
  let name_arr_sb = [];
  let user_name_arr_sb = [];
  let name_arr_launch = [];
  let user_name_arr_launch = [];

  let name_subStr = 'Name: [';
  let user_name_subStr = ' Username:[';
  let end_subStr = ']';

  if (store_res_organization_info !== null) {
    if (
      store_res_organization_info.top_product_purchases_last_30_days != null
    ) {
      store_res_organization_info.top_product_purchases_last_30_days.forEach(
        (element) => {
          const name = element.substring(
            name_subStr.length,
            element.indexOf(end_subStr),
          );
          const user_name = element.substring(
            element.indexOf(user_name_subStr) + user_name_subStr.length,
            element.length - 1,
          );
          name_arr = [...name_arr, name];
          user_name_arr = [...user_name_arr, user_name];
        },
      );
    }
    if (store_res_organization_info.top_SB_purchases_last_30_days != null) {
      store_res_organization_info.top_SB_purchases_last_30_days.forEach(
        (element) => {
          const name = element.substring(
            name_subStr.length,
            element.indexOf(end_subStr),
          );
          const user_name = element.substring(
            element.indexOf(user_name_subStr) + user_name_subStr.length,
            element.length - 1,
          );
          name_arr_sb = [...name_arr_sb, name];
          user_name_arr_sb = [...user_name_arr_sb, user_name];
        },
      );
    }
    if (store_res_organization_info.top_launchers_last_30_days != null) {
      store_res_organization_info.top_launchers_last_30_days.forEach(
        (element) => {
          const name = element.substring(
            name_subStr.length,
            element.indexOf(end_subStr),
          );
          const user_name = element.substring(
            element.indexOf(user_name_subStr) + user_name_subStr.length,
            element.length - 1,
          );
          name_arr_launch = [...name_arr_launch, name];
          user_name_arr_launch = [...user_name_arr_launch, user_name];
        },
      );
    }
  }

  return (
    <>
      <ScreenItemTemplate layoutFields={layoutFields} store_res={store_res} />
      {store_res_organization_info ? (
        <>
          <div id="row6_col1" className="col-md-6">
            <div
              id="top_product_purchases_last_30_days"
              className="p-3 top_product_purchases_last_30_days business_info_children businessInfo_plain  "
              style={{height: '37vh'}}>
              <div
                className="col-1 order-md-1 pb-3 align-items-center"
                style={{height: '13%'}}>
                <span style={{fontSize: '24px', color: '#008f11'}}>
                  <i className="fas fa-level-up-alt"></i>
                </span>
              </div>
              <div
                className="col order-md-3 text-secondary"
                style={{height: '10%'}}>
                <span>Top Product Purchases Last 30 Days</span>
              </div>
              <div
                className="col-10 order-md-2 text-left"
                style={{
                  textOverflow: 'clip',
                  width: '90%',
                  height: '80%',
                  overflow: 'auto',
                }}>
                <table
                  id="pad_tblVolumes"
                  className="table table-striped table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th>#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    {store_res_organization_info.top_product_purchases_last_30_days !=
                      null &&
                    store_res_organization_info
                      .top_product_purchases_last_30_days.length != 0
                      ? store_res_organization_info.top_product_purchases_last_30_days.map(
                          (item) => (
                            <tr
                              key={store_res_organization_info.top_product_purchases_last_30_days.indexOf(
                                item,
                              )}>
                              <td scope="row">
                                {store_res_organization_info.top_product_purchases_last_30_days.indexOf(
                                  item,
                                ) + 1}
                              </td>
                              <td>
                                {
                                  name_arr[
                                    store_res_organization_info.top_product_purchases_last_30_days.indexOf(
                                      item,
                                    )
                                  ]
                                }
                              </td>
                              <td>
                                {
                                  user_name_arr[
                                    store_res_organization_info.top_product_purchases_last_30_days.indexOf(
                                      item,
                                    )
                                  ]
                                }
                              </td>
                            </tr>
                          ),
                        )
                      : null}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div id="row6_col2" className="col-md-6">
            <div
              id="top_product_purchases_last_30_days"
              className="p-3 top_product_purchases_last_30_days business_info_children businessInfo_plain  "
              style={{height: '37vh'}}>
              <div
                className="col-1 order-md-1 pb-3 align-items-center"
                style={{height: '13%'}}>
                <span style={{fontSize: '24px', color: '#0073ff'}}>
                  <i className="fas fa-level-up-alt"></i>
                </span>
              </div>
              <div
                className="col order-md-3 text-secondary"
                style={{height: '10%'}}>
                <span>Top SB Purchases Last 30 Days</span>
              </div>
              <div
                className="col-10 order-md-2 text-left"
                style={{
                  textOverflow: 'clip',
                  width: '90%',
                  height: '80%',
                  overflow: 'auto',
                }}>
                <table
                  id="pad_tblVolumes"
                  className="table table-striped table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th>#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    {store_res_organization_info.top_SB_purchases_last_30_days !=
                      null &&
                    store_res_organization_info.top_SB_purchases_last_30_days
                      .length != 0
                      ? store_res_organization_info.top_SB_purchases_last_30_days.map(
                          (item) => (
                            <tr
                              key={store_res_organization_info.top_SB_purchases_last_30_days.indexOf(
                                item,
                              )}>
                              <td scope="row">
                                {store_res_organization_info.top_SB_purchases_last_30_days.indexOf(
                                  item,
                                ) + 1}
                              </td>
                              <td>
                                {
                                  name_arr_sb[
                                    store_res_organization_info.top_SB_purchases_last_30_days.indexOf(
                                      item,
                                    )
                                  ]
                                }
                              </td>
                              <td>
                                {
                                  user_name_arr_sb[
                                    store_res_organization_info.top_SB_purchases_last_30_days.indexOf(
                                      item,
                                    )
                                  ]
                                }
                              </td>
                            </tr>
                          ),
                        )
                      : null}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div id="row6_col3" className="col-md-6">
            <div
              id="top_launchers_last_30_days"
              className="p-3 top_launchers_last_30_days business_info_children businessInfo_plain  "
              style={{height: '37vh'}}>
              <div
                className="col-1 order-md-1 pb-3 align-items-center"
                style={{height: '13%'}}>
                <span style={{fontSize: '24px', color: '#fd7e13'}}>
                  <i className="fas fa-level-up-alt"></i>
                </span>
              </div>
              <div
                className="col order-md-3 text-secondary"
                style={{height: '10%'}}>
                <span>Top Launchers Last 30 Days</span>
              </div>
              <div
                className="col-10 order-md-2 text-left"
                style={{
                  textOverflow: 'clip',
                  width: '90%',
                  height: '80%',
                  overflow: 'auto',
                }}>
                <table
                  id="pad_tblVolumes"
                  className="table table-striped table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th>#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    {store_res_organization_info.top_launchers_last_30_days !=
                      null &&
                    store_res_organization_info.top_launchers_last_30_days
                      .length != 0
                      ? store_res_organization_info.top_launchers_last_30_days.map(
                          (item) => (
                            <tr
                              key={store_res_organization_info.top_launchers_last_30_days.indexOf(
                                item,
                              )}>
                              <td scope="row">
                                {store_res_organization_info.top_launchers_last_30_days.indexOf(
                                  item,
                                ) + 1}
                              </td>
                              <td>
                                {
                                  name_arr_launch[
                                    store_res_organization_info.top_launchers_last_30_days.indexOf(
                                      item,
                                    )
                                  ]
                                }
                              </td>
                              <td>
                                {
                                  user_name_arr_launch[
                                    store_res_organization_info.top_launchers_last_30_days.indexOf(
                                      item,
                                    )
                                  ]
                                }
                              </td>
                            </tr>
                          ),
                        )
                      : null}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default binary;
