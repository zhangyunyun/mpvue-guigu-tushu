//注册当前页面
import Vue from 'vue'
import List from './list.vue'

//生成当前页面的实例
const list = new Vue(List);

//挂载当前页面
list.$mount();