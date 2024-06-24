<template>
  <div class="detail">
    <div class="dImg">
      <img :src="bookDetail.image" alt="">
    </div>
    <dl class="dInfo">
      <dt>名称:{{bookDetail.title}}</dt>
      <dd>作者:{{bookDetail.author}}</dd>
      <dd>出版社:{{bookDetail.publisher}}</dd>
      <dd class="date">出版日期:{{bookDetail.pubdate}}</dd>
      <dd class="prices">价格:<span>{{bookDetail.prices}}</span></dd>
    </dl>
    <div class="dBtn">
      <button open-type="share">分享给好友</button>
    </div>
    <div class="dCont">
      <h2>作者简介</h2>
      <p>{{bookDetail.author_intro}}</p>
      <h2>内容简介</h2>
      <p>{{bookDetail.summary}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookDetail:{}
    }
  },
  mounted () {
    console.log(this)
    this.bookDetail = JSON.parse(this.$mp.query.bookDetail)
    //console.log(this.itemBookList)

    //这里一般发送ajax请求(这里使用flyio)
    /* this.$fly.get('url' + this.index)
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    }) */
  },
  onShareAppMessage(e){
    //声明周期函数转发
    console.log(e) //分享点击的是按钮，还是右上角的三角
  },
  methods: {
    //点击分享
    handleShare(){
      wx.showActionSheet({
        itemList: ['分享到朋友圈','分享到微博','分享给微信好友']
      })
    },
  },
}
</script>

<style lang="scss">
  .detail{
    padding:20rpx;
    font-size:30rpx;
  }
  .dImg{
    width:450rpx;
    height:650rpx;
    margin:auto;
    img{
      display:block;
      width:100%;
      height:100%;
    }
  }
  .dInfo{
    padding:0 100rpx;
    margin-top:25rpx;
    dt{
      font-size:30rpx;
      font-weight:bold;
    }
    dd{
      color:#666;
      margin-top:15rpx;
      &.date{
        color:#999;
      }
      &.prices{
        color:#999;
        span{
          color:#f00;
          font-size:30rpx;
        }
      }
    }
  }
  .dBtn{
    margin-top:25rpx;
    button{
      width:220rpx;
      height:70rpx;
      line-height:66rpx;
      border:1px solid #ddd;
      text-align:center;
      background:#f1f1f1;
      font-size:28rpx;
    }
  }
  .dCont{
    margin-top:25rpx;
    h2{
      font-weight:bold;
      color:#333;
      font-size:30rpx;
      height:60rpx;
      line-height:60rpx;
      color:#333;
      position: relative;
      padding-left:10rpx;
      height:70rpx;
      line-height:70rpx;
      &::before{
        position:absolute;
        left:0;
        top:calc(50% - 15rpx);
        content:"";
        width:6rpx;
        height:30rpx;
        background:#000;
        border-radius:50rpx;
      }
    }
    p{
      margin-top:15rpx;
      text-align:justify;
      color:#999;
      line-height:1.6;
      font-size:30rpx;
    }
  }
</style>
