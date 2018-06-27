import CradleAPI from './mock/cradle-api'
var cradleAPI = new CradleAPI();

export default {

  // Admin API
  'POST /api/v1/admin/login': (req, res) => { cradleAPI.adminLogin(req, res); },
  'POST /api/v1/admin/logout': (req, res) => { cradleAPI.adminLogout(req, res); },
  'POST /api/v1/admin/info': (req, res) => { cradleAPI.adminInfo(req, res); },
  'POST /api/v1/admin/update_password': (req, res) => { cradleAPI.updateAdminPassword(req, res); },
};