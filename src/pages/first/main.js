//注册当前页面
import Vue from 'vue'
import First from './first.vue'

//生成当前页面的实例
const first = new Vue(First);

//挂载当前页面
first.$mount();