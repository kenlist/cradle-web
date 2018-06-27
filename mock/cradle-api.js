import Wreck from 'wreck';
import { sha256 } from 'js-sha256';

class CradleAPI {
  constructor() {
    this.config = require('config');
  }

  adminLogin(req, res) {
    if (req.body.username == 'cradle_test' && req.body.password == sha256('123456')) {
      res.end(JSON.stringify({code: 0, data: 'abcdefg'}).toString());
    } else {
      res.end(JSON.stringify({code: -1}).toString());
    }
  }

  adminLogout(req, res) {
    res.end(JSON.stringify({code: 0}));
  }

  adminInfo(req, res) {
    res.end(JSON.stringify({ 
      code: 0, 
      data: {
        name: 'cradle_test'
      }
    }));
  }

  updateAdminPassword(req, res) {
    res.end(JSON.stringify({code: 0}));
    // console.log("updateAdminPassword");
    // this.execute(
    //   this.config.get('api.admin.update_password'),
    //   { old_password: req.body.old_password, new_password: req.body.new_password },
    //   req.headers,
    //   res);
  }
}

export default CradleAPI;
