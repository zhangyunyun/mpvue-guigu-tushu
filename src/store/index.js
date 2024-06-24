/* 
   定义store vuex的核心管理对象模块
*/
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from "./mutations"
import actions from "./actions"
import getter from './getter'

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  actions,
});

export default store