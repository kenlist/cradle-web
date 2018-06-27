import { message } from 'antd';
import { CradleClient } from 'api/cradle-client';
import { AdminError } from 'utils/constant';

const client = CradleClient.sharedInstance();

export default async function encapAPICall(api_name, callback_obj, ...api_params) {
  try {
    const {data} = await client[api_name].bind(client, ...api_params)();
    if (data && data.code === 0) {
      callback_obj[api_name].bind(callback_obj, ...api_params)().success(data);
      return;
    }

    callback_obj[api_name].bind(callback_obj, ...api_params)().fail(data.code ? data.code : -500);
  } catch (error) {
    console.log(error);
    message.error('服务不可用:' + error, 4);
  }
}
