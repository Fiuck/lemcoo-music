const BASE_URL = "http://123.207.32.32:9001"

class Request {
  // 封装请求
  request (url, method, param) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: BASE_URL + url,
        method: method,
        data: param,
        success: function(res) {
          resolve(res.data)
        },
        // 出了问题直接reject出去
        fail: reject
      })
    })
  }
  // get
  get(url, param) {
    return this.request(url, 'GET', param)
  }
  // post
  post(url, param) {
    return this.request(url, 'POST', param)
  }
}
// 创建request对象
const request = new Request()

export default request