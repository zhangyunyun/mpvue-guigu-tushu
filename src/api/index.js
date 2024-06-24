/* 
   包含n多个函数请求模块
   返回值是 promise对象
*/
//import ajax from './ajax';

//const BASE_URL = 'http://localhost:4000'  //后台接口地址
const BASE_URL = '/api'

//获取测试列表
export const reqTestList = ({}) => ajax(BASE_URL + "/index_category", {});

//获取图书列表
export const reqBookList = () => ajax('/bookList');