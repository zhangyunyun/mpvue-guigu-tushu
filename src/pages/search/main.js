//注册当前页面
import Vue from 'vue'
import Search from './search.vue'

//生成当前页面的实例
const search = new Vue(Search)

//挂载当前页面
search.$mount()