import request from '../utils/request';
import { sha256 } from 'js-sha256';
import {storageTokenKey} from '../utils/constant';

let instance = null;

export class CradleClient {
  static sharedInstance() {
    if (!instance) {
      instance = new CradleClient();
    }
    return instance;
  }

  constructor() {
    this.token = window.localStorage.getItem(storageTokenKey);
  }

  requestWithToken = (api, options) => {
    if (options.headers == null) {
      options.headers = {};
    }

    if (options.method == null) {
      options.method = 'post';
    }

    options.headers["Authorization"] = "Cradle " + this.token;
    return request(api, options);
  }

  // Admin API
  adminLogin = (username, password) => {
    let sha256_password = sha256(password);

    return request('/api/v1/admin/login', {
      method: 'post',
      body: { username: username, password: sha256_password }
    });
  }

  adminLogout = () => {
    return this.requestWithToken('/api/v1/admin/logout', {});
  }

  adminInfo = () => {
    return this.requestWithToken('/api/v1/admin/info', {});
  }

  updateAdminPassword = (oldPassword, newPassword) => {
    let sha256OldPassword = sha256(oldPassword);
    let sha256NewPassword = sha256(newPassword);

    return this.requestWithToken('/api/v1/admin/update_password', {
      body: { old_password: sha256OldPassword, new_password: sha256NewPassword }
    });
  }

  saveToken = (token) => {
    // save the token to the local storage.
    console.log("saveToken:" + token);
    window.localStorage.setItem(storageTokenKey, token);
    this.token = token;
  }

  clearToken = () => {
    window.localStorage.removeItem(storageTokenKey);
  }

  hasToken = () => {
    return !!this.token;
  }
}

