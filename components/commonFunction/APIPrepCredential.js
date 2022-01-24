import Cookies from 'js-cookie';

const APIPrepCredential = () => {
  const ip_adress = 'https://cloud.myopulence.com/live/api/';
  let cookie_id, cookie_user, cookie_is_admin;
  let url_distId, url_username, url_seed, cookie_seed;
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  url_distId = params.id;
  url_username = params.username;

  if (Cookies) {
    if (!Cookies.get('is_admin')) {
      url_seed = params.seed;
    } else if (Cookies.get('is_admin') == 1) {
      cookie_id = Cookies.get('id');
      cookie_user = Cookies.get('user');
      cookie_is_admin = Cookies.get('is_admin');
      cookie_seed = Cookies.get('seed');
    } else {
      console.log('ID is not found');
    }
  }

  let login_credential = {
    ipadress: ip_adress,
    distId: url_distId,
    username: url_username,
    seed: url_seed ? url_seed : cookie_seed,
    is_admin: cookie_is_admin,
    admin_user: cookie_user,
    admin_id: cookie_id,
  };
  return login_credential;
};

export default APIPrepCredential;
