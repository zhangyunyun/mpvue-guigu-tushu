<script>
import { Request } from './utils/request/request'
export default {
  async mounted () {
    //微信登录
    wx.login({
      success:async (res) => {
        //1.获取用户登录的临时凭证信息
        let code = res.code

        //2.发送code给自己的服务器端
        let token = await Request('/getOpenId',{code:code})
        console.log(token)

        //3.将自定义状态缓存到storage中,
        //以后每次发请求时，携带这个登录状态(token)，后台去验证身份
        wx.setStorageSync('token', token)
        
      },
      fail: error => {                                                      
        console.log(error)
      }
    })

    //测试token接口
    let result = await Request('/test')
    console.log("测试结果：" + result)
  }
}
</script>

<style lang="scss">
page{
  width:100%; 
  height:100%;
}
.flex{
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;  
}
.hide{
  display:none;
}
</style>
