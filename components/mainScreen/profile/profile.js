import {useState, useEffect} from 'react';
import httpCalls from '../../commonFunction/httpCalls';
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
      <p> test content loding progress</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-5">
        <div
          className="bg-indigo-600 h-2.5 rounded-full"
          style={{width: '45%'}}></div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {profileRes != null
          ? Object.keys(profileRes).map((item, index) => {
              return item != null ? (
                <div key={index} className="shadow stats">
                  {typeof item == 'string' ? (
                    <div className="stat rounded-lg">
                      <div className="stat-title">{item}</div>
                      <div className="stat-value row-span-3">
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
