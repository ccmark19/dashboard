import {useState, useEffect} from 'react';
import httpCalls from '../../commonFunction/httpCalls';
import Loading from '../../commonFunction/loading';
import {Register} from '../../../src/store/Register';
const profile = () => {
  const API_Route_Profile = 'metrics/business_info';
  const business_info_res = Register.useState((s) => s.business_info_res);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const api_result = await httpCalls(API_Route_Profile);
        Register.update((s) => {
          s.business_info_res = api_result.data;
        });
      } catch (error) {
        alert('Login information is incorrect, please re-login and try again');
        console.log(error);
      }
    };
    fetchData();
  }, [0]);

  return (
    <>
      {business_info_res ? null : <Loading />}
      <div className="grid grid-cols-4 gap-4 m-5">
        {business_info_res != null
          ? Object.keys(business_info_res).map((item, index) => {
              return item != null ? (
                <div key={index} className="shadow stats">
                  {typeof item == 'string' ? (
                    <div key={index} className="stat rounded-lg bg-grey1-1300">
                      <div className="stat-title text-white">{item}</div>
                      <div className="stat-value row-span-3 text-white">
                        {typeof business_info_res[item] == 'string'
                          ? business_info_res[item]
                          : 'not string'}
                      </div>
                    </div>
                  ) : (
                    'not string or number'
                  )}
                </div>
              ) : null;
            })
          : null}
      </div>
    </>
  );
};

export default profile;
