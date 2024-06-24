<template>
  <div class="index">
    <div class="bannerBox">
      <Swiper :indicatorDots="indicatorDots" :isShow="isShow" :btnShow="btnShow" :imgList="imgBannerList"></Swiper>
    </div>
    <div class="listTitle">
      <h2>全部商品 <a href="javascript:;" @click="goToList(bookList)">更多&gt;&gt;</a></h2>
    </div>
    <div class="listCont">
      <ul class="listShow flex">
        <li v-for="(item, index) in bookList" :key="index" @click="goToDetail(item)">
          <a href="#">
            <img :src="item.image" alt="">
            <h3>{{item.title}}</h3>
            <p>{{item.summary}}</p>
          </a>
        </li>
        <!-- <li>
          <a href="#">
            <img src="http://127.0.0.1:5501/static/images/img_book02.jpg" alt="">
            <h3>书名</h3>
            <p>简介简介</p>
          </a>
        </li>-->
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Swiper from '../../components/swiper/swiper'
export default {
  components: {
    Swiper
  },
  data() {
    return {
      indicatorDots:true,
      isShow:true,
      btnShow:false,
      imgBannerList:[
        {
          url:'http://127.0.0.1:5501/static/images/img_banner01.jpg'
        },
        {
          url:'http://127.0.0.1:5501/static/images/img_banner02.jpg'
        },
        {
          url:'http://127.0.0.1:5501/static/images/img_banner03.jpg'
        },
        {
          url:'http://127.0.0.1:5501/static/images/img_banner04.jpg'
        }
      ]
    }
  },
  mounted () {
    //分发actions
    this.$store.dispatch('getBookList')
    
  },
  computed:{
    //隐射状态到本组件中
    ...mapState(['bookList'])
  },
  methods: {
    //跳转到更多
    goToList(bookList){
      wx.navigateTo({
        url: '/pages/list/main?bookList=' + JSON.stringify(bookList)
      })
    },
    //跳转到详情
    goToDetail(bookDetail){
      wx.navigateTo({
        url: '/pages/detail/main?bookDetail=' + JSON.stringify(bookDetail)
      })
    }
  }
}
</script>

<style lang="scss">
  .index{
    width:100%;
    height:100%;
  }
  .bannerBox{
    height:350rpx;
  }
  .listTitle{
    height:80rpx;
    line-height:80rpx;
    padding:0 26rpx;
    background:#f5f5f5;
    h2{
      font-size:35rpx;
    }
    a{
      float:right;
      font-size:25rpx;
      color:#666;
    }
  }
  .listCont{
    .listShow{
      li{
        width:50%;
        a{
          display: flex;
          flex-direction: column;
          align-items:center;
          padding:20rpx;
          border-right:1px solid #ddd;
          border-bottom:1px solid #ddd;
          &:nth-child(2n){
            border-right:0;
          }
          img{
            width:200rpx;
            height:260rpx;
          }
          h3{
            margin-top:10rpx;
            color:#333;
            font-size:30rpx;
          }
          p{
            font-size:25rpx;
            color:#999;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;            /*设置p元素最大4行，父元素需填写宽度才明显*/
            text-overflow: ellipsis;
            overflow: hidden;
            /* autoprefixer: off */
            -webkit-box-orient: vertical;
            /* autoprefixer: on */
            /*因为代码环境的关系-webkit-box-orient被过滤掉了 autoprefixer 这个关键字可以免除被过滤的动作*/
        　　word-wrap:break-word;
        　　word-break:break-all;
          }
        }
      }
    }
  }
</style>
