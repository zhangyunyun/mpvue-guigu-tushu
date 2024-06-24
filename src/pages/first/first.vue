<template>
  <div class="first">
    <Swiper :indicatorDots="indicatorDots" :isShow="isShow" :btnShow="btnShow" :imgList="imgBannerList"></Swiper>
  </div>
</template>

<script>
import Swiper from '../../components/swiper/swiper'

export default {
  components: {
    Swiper
  },
  data() {
    return {
      indicatorDots:true,
      isShow:true, 
      btnShow:true,
      imgBannerList:[
        {
          url:'http://127.0.0.1:5501/static/images/img_book01.jpg'
        },
        {
          url:'http://127.0.0.1:5501/static/images/img_book02.jpg'
        },
        {
          url:'http://127.0.0.1:5501/static/images/img_book03.jpg'
        },
        {
          url:'http://127.0.0.1:5501/static/images/img_book04.jpg'
        },
        {
          url:'http://127.0.0.1:5501/static/images/img_book05.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .first{
    width:100%;
    height:100%;
    position:relative
  }
</style>
