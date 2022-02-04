import axios from 'axios';
import APIPrepCredential from './APIPrepCredential';
const httpCalls = async (query_type) => {
  let API_params = APIPrepCredential();
  let api_suffix;
  const metricsArr = ['login','orders','launch'];
  if(metricsArr.includes(query_type)){
    api_suffix = 'metrics';
  } else{
    api_suffix = query_type;
  }
  const API = API_params.ipadress + api_suffix;
  const formdata = new FormData();
  formdata.append('dist_id', API_params.distId);
  formdata.append('seed', API_params.seed);
  formdata.append('username', API_params.username);
  if (parseInt(API_params.is_admin) == 1) {
    formdata.append('admin_id', API_params.admin_id);
    formdata.append('admin_user', API_params.admin_user);
    formdata.append('is_admin', API_params.is_admin);
  }
  formdata.append('query_type', query_type);
  try {
    const response = await axios({
      method: 'post',
      url: API,
      data: formdata,
      config,
      headers: {
        'Content-Type': `multipart/form-data`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default httpCalls;
