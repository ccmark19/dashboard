import {useState, useEffect} from 'react';
import httpCalls from '../../commonFunction/httpCalls';
import Loading from '../../commonFunction/loading';
const profile = () => {
  const [profileRes, setProfileRes] = useState();
  const API_Route_Profile = 'metrics/business_info';
  useEffect(() => {
    const fetchData = async () => {
      try {
        const api_result = await httpCalls(API_Route_Profile);
        setProfileRes(api_result.data);
      } catch (error) {
        alert('Login information is incorrect, please re-login and try again');
        console.log(error);
      }
    };
    fetchData();
  }, [0]);

  return (
    <>
      {profileRes ? null : <Loading />}
      <div className="grid grid-cols-4 gap-4 m-5">
        {profileRes != null
          ? Object.keys(profileRes).map((item, index) => {
              return item != null ? (
                <div key={index} className="shadow stats">
                  {typeof item == 'string' ? (
                    <div className="stat rounded-lg bg-grey1-1300">
                      <div className="stat-title text-white">{item}</div>
                      <div className="stat-value row-span-3 text-white">
                        {typeof profileRes[item] == 'string'
                          ? profileRes[item]
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
