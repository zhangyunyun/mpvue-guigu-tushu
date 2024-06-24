<template>
  <div class="list">
    <ul class="listItem">
      <li v-for="(item,index) in bookList" :key="index" @click="goToDetail(item)">
        <div class="itemInner">
          <div class="itemInner_img">
            <img :src="item.image" alt="" mode="aspectFill">     
          </div>
          <div class="itemInner_cont">
            <h2>{{item.title}}</h2>
            <p class="author">{{item.author}}</p>
            <p class="publisher">{{item.publisher}}</p>
            <span class="prices">{{item.prices}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props:['bookList'],
  data() {
    return {
      bookList:[]
    }
  },
  mounted(){
    //路由跳转传过来的值
    if(this.$mp){
      this.bookList = JSON.parse(this.$mp.query.bookList)
    }
  },
  methods: {
    goToDetail(bookDetail){
      wx.navigateTo({
        url: '/pages/detail/main?bookDetail=' + JSON.stringify(bookDetail)
      })
    }
  }
}
</script>

<style lang="scss">
  .list{
    font-size:30rpx;
  }
  .listItem{
    li{
      position: relative;
      padding:25rpx 15rpx;
      border-bottom:1px solid #ddd;
    }
    .itemInner{
      display:table;
      table-layout:fixed;
      width:100%;
      &_img,&_cont{
        display:table-cell;
        position: relative;
        padding:0 10rpx;
        vertical-align:middle;
      }
      &_img{
        width:140rpx;
        height:140rpx;
        overflow: hidden;
        img{
          display: block;
          width:100%;
          height:100%;
        }
      }
      &_cont{
        h2{
          font-size:30rpx;
          height:60rpx;
          line-height:60rpx;
        }
        p{
          margin-top:15rpx;
          font-size:25rpx;
          &.author{
            color:#666;
          }
          &.publisher{
            color:#999;
            font-size:25rpx;
            color:#999;
          }
        }
        .prices{
          top:20rpx;
          right:20rpx;
          position:absolute;
          color:#f00;
          font-weight:bold;
        }
      }
    }
  }
</style>
