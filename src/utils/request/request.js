/* 导入路径模块 */
import { config } from './config'

//携带token的方式  1.cookie(不推荐使用)，  2. 作为参数放在url中， 3.放在请求头
let token = wx.getStorageSync('token')
function Request(url,data={},method="GET"){
   return new Promise((resolve, reject) => {
      wx.request({
         url: config.BASE_URL + url,
         data,
         method,
         header: {
            authorization:token
         },
         success: (res) => {
            resolve(res.data)
         },
         fail: (error) => {
            reject(error)
         }  
      })
   })
}
export{
   Request
}