<template>
  <div class="search">
    <div class="searchInp">
      <div class="searchInp_inner">
        <input type="text" v-model="searchCont">
        <button class="btnSearch" @click="goToSearch">搜索</button>
        <button class="btnClose" @click="goToClear" v-show="bookList.length">x</button>
      </div>
    </div>
    <div class="tip">
      <p v-if="sNo" class="sNo">暂无信息，请输入搜索内容</p>
      <p v-if="sLoading" class="sLoading">加载中...</p>
      <p v-if="sError" class="sError">{{sError}}</p>
    </div>
    <div v-if="bookList.length">
      <BookList :bookList="bookList"></BookList>
    </div>
    <!-- <ul class="listItem">
      <li v-for="(item,index) in searchList" :key="index" @click="goToDetail(item)">
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
    </ul> -->
  </div>
</template>

<script>
import BookList from '../list/list'
import { Request } from '../../utils/request/request'
export default {
  components: {
    BookList
  },
  data() {
    return {
      searchCont:'',
      sNo:true,
      sLoading:false,
      sError:'',
      bookList:[]
    }
  },
  methods: {
    //清空文本框，并清空数组
    goToClear(){
      this.searchCont = ''
      this.bookList = []
      
      this.sNo = true
    },
    //点击搜索
    
    async goToSearch(){
      let thisValue = this.searchCont.trim()
      if(thisValue == ""){
        wx.showToast({
          title: '请输入搜索内容'
        })
      }
      //发送请求
      this.sNo = false
      this.sLoading = true
      this.sError = ''
      let param = {
        req:thisValue
      }
      let result = await Request('/search',param)
      .then(res => {
        //请求成功
        console.log(res.bookList)
        //请求成功改变状态
        this.sLoading = false
        this.bookList = res.bookList
      }).catch(error => {
        //请求失败
        console.log(error)
        //请求失败改变状态
        this.sLoading = false
        this.sError = '请求失败'
      })

      /* this.$fly.get('http://localhost:3000/search', data)
      .then(res => {
        //请求成功
        //console.log(res)
        //请求成功改变状态
        this.sLoading = false
        this.bookList = res.data.bookList

        console.log(this.bookList)
        console.log(Array.isArray(this.bookList))
      }).catch(err => {
        //请求失败
        console.log(err)
        //请求失败改变状态
        this.sLoading = false
        this.sError = '请求失败'
      }) */
    }
  }
}
</script>

<style lang="scss">
  .search{
    width:100%;
    height:100%;
  }
  .tip{
    display:flex;
    align-items:center;
    justify-content: center;
    p{
      padding:.25rem .1rem;
      color:#999;
      font-size:.25rem;
    }
  }
  .searchInp{
    padding:25rpx;
    background:#f5f5f5;
    .searchInp_inner{
      padding-right:140rpx;
      position:relative;
      input{
        position: relative;
        z-index:1;
        width:100%;
        height:70rpx;
        line-height:70rpx;
        background:#fff;
        border-radius:8rpx;
        box-sizing: border-box;
        padding:0 15rpx;
        font-size:28rpx;
      }
      button{
        position:absolute;
        z-index:2;
        &.btnSearch{
          width:140rpx;
          height:70rpx;
          line-height:70rpx;
          right:0;
          top:50%;
          margin-top:-35rpx;
          color:#fff;
          font-size:30rpx;
          background:#000;
          border-radius:8rpx;
        }
        &.btnClose{
          width:40rpx;
          height:40rpx;
          line-height:40rpx;
          right:155rpx;
          top:50%;
          margin-top:-20rpx;
          color:#fff;
          font-size:30rpx;
          background:#07c160;
          border-radius:50%;
          color:#fff;
          text-align:center;
          padding:0;
        }
      }
    }
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
