import Vue from 'vue'

//插件
import Fly from 'flyio/dist/npm/wx'

//生成fly实例
const fly = new Fly

//将fly绑定到vue原型上
Vue.prototype.$fly = fly