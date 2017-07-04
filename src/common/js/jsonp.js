// 引入JSONP插件
import originJSONP from 'jsonp'

/**
 * jsonp 函数的二次封装
 * @param url
 * @param data
 * @param option
 * @returns {Promise}
 */
export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

/**
 * 处理参数，返回url
 * @param data
 * @returns {string}
 */
function param (data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}
