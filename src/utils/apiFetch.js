import axios from 'axios';
import { message } from 'antd';
// import store from '@/store';

const apiFetch = function(action, data = {}, opts = {}) {
  const url = '/api' + action;

  const { showError = true } = opts;
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'post',
      data
    })
      .then(response => {
        if (response.data.success) {
          resolve(response.data.data);
        } else {
          if (showError) {
            message.error(response.data.message || '系统繁忙，请稍后再试');
          }
          if (response.code === 10001) {
            // store.dispatch.user.setLoggedIn(false);
          }
          reject(response.data);
        }
      })
      .catch(e => {
        e = e.response.data;

        const obj = e.message ? e : { message: '系统繁忙，请稍后再试' };
        if (showError) {
          message.error(obj.message);
        }

        if (e.code === 10001) {
          // store.dispatch.user.setLoggedIn(false);
        }
        reject(obj);
      });
  });
};

export default apiFetch;
