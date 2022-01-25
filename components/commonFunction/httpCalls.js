import axios from 'axios';
import APIPrepCredential from './APIPrepCredential';
const httpCalls = async (query_type) => {
  let API_params = APIPrepCredential();
  let api_suffix;
  let percentage = 0;
  switch (query_type) {
    case 'login':
    case 'orders':
    case 'launch':
      api_suffix = 'metrics';
      break;
    case 'metrics/business_info':
      api_suffix = 'metrics/business_info';
      break;
    case 'metrics/map_info':
      api_suffix = 'metrics/map_info';
      break;
    case 'metrics/get_pending_commissions':
      api_suffix = 'metrics/get_pending_commissions';
      break;
    case 'metrics/get_organization_info':
      api_suffix = 'metrics/get_organization_info';
      break;
    case 'UserCommissionQualified':
      api_suffix = 'UserCommissionQualified';
      break;
    default:
      api_suffix = null;
      break;
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
    const config = {
      onUploadProgress: (progressEvent) => {
        const {loaded, total} = progressEvent;
        percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`); // just to see whats happening in the console
      },
    };
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
