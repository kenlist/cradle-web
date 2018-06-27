'use strict';

export const storageTokenKey = 'cradle-admin';

// export const ACCOUNT_ERROR
export class AdminError {
  static errorAdminNameOrPasswordIncorrect = 1003;
  static errorIllegalParameters = 1004;
  static errorAdminUpdateFailed = 1005;
  static errorDeviceDeleteNotExist = 1011;
  static errorGroupUpdateFailed = 1020;
  static errorGroupDeleteNotExist = 1021;
  static errorRoleUpdateFailed = 1030;
  static errorRoleDeleteNotExist = 1031;
  static errorUserUpdateFailed = 1040;
  static errorUserDeleteNotExist = 1041;
};
