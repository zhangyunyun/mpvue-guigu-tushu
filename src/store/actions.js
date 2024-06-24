/* 
   异步
   通过mutation间接更新state的多个方法的对象
*/
import dataBook from '../mork/data-list.json'  //请求的api的数据,这里模拟数据
import { 
  RECEIVE_BOOK
} from './mutation-type'

export default {
  //异步获取图书列表模拟数据
  getBookList({commit}) {
    //触发对应的mutation

    console.log(dataBook)
    
    commit(RECEIVE_BOOK, dataBook)
  }
}