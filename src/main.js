import Vue from 'vue'
//vuex
import store from './store/index'  //引入vuex状态store
//组件
import App from './App.vue'

//插件
import './utils/fly/fly' //引入flyio请求数据插件

//启动项目的时候关闭提示(关闭vue开发中的提示)
Vue.config.productionTip = true

//声明当前的组件为整个应用
App.mpType = 'app'

//将vuex store对象放置vue的原型上，为的是每个实例都可以使用
Vue.prototype.$store = store

//生成当前应用的实例
const app = new Vue(App)
//挂载组件
app.$mount()
