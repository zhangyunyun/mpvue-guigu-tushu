<template>
  <div class="mine">
    <div class="mineInfo" >
      <div class="imgBox">
        <img :src="userInfo.avatarUrl?userInfo.avatarUrl:'http://127.0.0.1:5501/static/img_user.png'" alt="">
      </div>
      <div class="info">
        <h2 v-if="isShow">{{userInfo.nickName}}</h2>
        <!-- <p>13893212101</p> -->
        <button open-type="getUserInfo" @getuserinfo="handleGetUserInfo" v-else>登录</button>
      </div>
    </div>
    <ul class="mineList">
      <li>
        <a href="javascript:;" @click="handleScan">
          <h3>扫码看书</h3>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <h3>我的图书</h3>
        </a>
      </li>
    </ul>
    <ul class="mineList">
      <li>
        <a href="javascript:;">
          <h3>设置</h3>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <h3>退出</h3>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <h3>其他</h3>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      isShow:false,
      userInfo:{}
    }
  },
  beforeMount() {
     this.getUserInfos()
  },
  methods: {
    //分装获取用户信息
    getUserInfos(){
      wx.getUserInfo({
        success: (res) => {
          console.log(res)
          //const {userInfo,isShow} = this
          this.userInfo = res.userInfo
          this.isShow = true
        },
        fail: (error) => { 
          console.log(error)
        }
      })
    },
    //点击获取用户登录信息
    handleGetUserInfo(e){
      //判断用户是否授权
      //console.log(e)
      if(e.mp.detail.rawData){
        //用户按了允许授权按钮
        //console.log("用户按了允许授权按钮")
        this.getUserInfos()
      }else{
        //用户按了拒绝按钮
        //console.log("用户按了拒绝按钮")
      }
    },
    //打开摄像扫码
    handleScan(){
      wx.scanCode({
        success: (res) => {
          console.log(res)
        },
        fail: (error) => {
          console.log(error)
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .mine{
    width:100%;
    height:100%;
    background:#ededed;
  }
  .mineInfo{
    display:table;
    table-layout: fixed;
    width:100%;
    background:#07c160;
    padding:10rpx 25rpx 30rpx;
    box-sizing:border-box;
    .imgBox,.info{
      display: table-cell;
      position: relative;
      vertical-align: middle;
    }
    .imgBox{
      width:90rpx;
      height:90rpx;
      border-radius:100%;
      overflow: hidden;
      img{
        display:block;
        width:100%;
        height:100%;
      }
    }
    .info{
      text-align:left;
      color:#fff;
      padding-left:20rpx;
      button{
        position:relative;
        top:5rpx;
        width:160rpx;
        height:70rpx;
        line-height:70rpx;
        color:#fff;
        font-size:30rpx;
        background:rgba(0,0,0,.5);
        border-radius:8rpx;
        padding:0;
        margin:0;
      }
      h2{
        font-size:35rpx;
      }
      p{
        font-size:30rpx;
        margin-top:10rpx;
      }
    }
  }
  .mineLine{
    height:15rpx;
    background:#ededed;
  }
  .mineList{
    margin-bottom:15rpx;
    background:#fff;
    li{
      position:relative;
      height:70rpx;
      line-height:70rpx;
      padding:15rpx 25rpx 15rpx 15rpx;
      position: relative;
      border-bottom:1px solid #ededed;
      &:last-child{
        border-bottom:0;
      }
      &:after{
        position:absolute;
        content:"";
        width:20rpx;
        height:20rpx;
        right:15rpx;
        top:50%;
        margin-top:-10rpx;
        background:url('http://127.0.0.1:5501/static/ico_arrowRight.png') no-repeat;
        background-size:100% 100%;
      }
      h3{
        font-size:30rpx;
      }
    }
  }
</style>
