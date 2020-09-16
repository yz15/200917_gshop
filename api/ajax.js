/*
ajax请求模块
返回promise对象(异步返回数据是response.data)
 */
import axios from 'axios'
export default function ajax(url, data={}, type="GET") {
  return new Promise(function(resolve, reject) {
    // 执行异步ajax请求
    let promise
    if(type === 'GET') {
      // 准备url query参数
      let dataStr = '' // 数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
        console.log('data:', data)
      })
      if(dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' +dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    }
    else {
      // 发送post请求
      promise = axios.post(url)
    }
    promise.then(function(response) {
      // 成功就调用resolve()
      resolve(response.data)
    }).cache(function(error) {
      // 失败就调用reject()
      reject(error)
    })
  })

}
