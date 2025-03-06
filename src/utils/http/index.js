import axios from "axios";

// 设置基本URL地址
const baseUrl =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:8090/platform"; //根据开发环境配置不同的API URL

function request(method, url, data) {
  return new Promise((resolve, reject) => {
    const config = {
      method: method,
      url: `${baseUrl}${url}`,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: JSON.stringify(data),
    };

    axios(config)
      .then(
        (response) => {
          resolve(response.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      )
      .catch((error) => {
        reject(error);
      });
  });
}

const http = {
  get(url, params) {
    return request("get", url, params);
  },

  post(url, data) {
    return request("post", url, data);
  },

  put(url, data) {
    return request("put", url, data);
  },

  delete(url, params) {
    return request("delete", url, params);
  },
};

export default http;
