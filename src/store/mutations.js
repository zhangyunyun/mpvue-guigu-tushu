/* 
   同步，直接更新state的多个方法的对象
*/
import Vue from 'vue'
import {
   RECEIVE_BOOK
} from './mutation-type.js'
export default {
  //图书列表
  [RECEIVE_BOOK](state, { bookList }) {
    //更新state 中的数据
    state.bookList = bookList;
  },
};