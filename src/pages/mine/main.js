//注册当前页面
import Vue from 'vue'
import Mine from "./mine.vue";

//生成当前页面的实例
const mine = new Vue(Mine);

//挂载当前页面
mine.$mount();