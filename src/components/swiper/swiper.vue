<template>
  <div class="swiper">
     <swiper class="swiperSlide" :indicator-dots="btnShow === false ? indicatorDots : (indicatorDots && currentIndex !== imgList.length - 1)" @change="handleChange">
         <block v-for="(item, index) in imgList" :key="index">
            <swiper-item>
               <image :src="item.url" class="swiperImg" mode="aspectFill"></image>
            </swiper-item>
         </block>
      </swiper>
      <button class="btnGo" v-show="btnShow == true && currentIndex == imgList.length - 1" @click="gotoIndex">立即体验</button>
  </div>
</template>

<script>
export default {
   props: {
      indicatorDots:Boolean, //是否显示分页器
      isShow:Boolean, //是否显示立即体验按钮
      btnShow:Boolean, //按钮是否显示
      imgList:Array  //图片列表,是一个数组
   },
   data(){
      return{
        currentIndex:0,  //当前图片的index
      }
   },
   methods: {
      handleChange(event){
         this.currentIndex = event.mp.detail.current
      },
      gotoIndex(){
         wx.switchTab({
            url: '/pages/index/main'
         }) 
      }
   }
}
</script>

<style lang="scss">
.swiper{
   width:100%;
   height:100%;
  .swiperSlide{
      width:100%;
      height:100%;
      .swiperImg{
         width:100%;
         height:100%;
      }
   } 
}
.btnGo{
   position: absolute;
   width:260rpx;
   height:180rox;
   left:calc(50% - 120rpx);
   bottom:30rpx;
   font-size:32rpx;
   background:rgba(255,255,255,.8);
}
</style>
