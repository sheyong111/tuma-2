import { message } from "antd";
import axios from "axios";

/**
 * axios二次封装，方便进行错误处理等操作
 * @namespace
 */
let REST = {
  /**
   * 通用封装post方法
   * @param {String} url
   * @param {Obj} params
   * @returns Promise
   */
  post: function (url, params) {
    url = "/api" + url; // 路径前统一加上url
    return new Promise((resolve, reject) => {
      console.log(process.env);

      let config = {
        method: "post",
        url: url,
        data: params,
        // baseURL: process.env.REACT_APP_BASE_URL,
      };

      axios
        .request(config)
        .then((res) => {
          if (res.status != "200" || res.data.code != "200") {
            message.error(res.msg || res.data.msg);
            reject(res.statusText);
          } else {
            resolve(res.data);
          }
        })
        .catch((err) => {
          message.error(err.response.statusText);
          console.log(err.response);
          reject(err);
        });
    });
  },
};

export default REST;
