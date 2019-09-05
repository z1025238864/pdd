import Vue from 'vue'
import Vuex from 'vuex'
import shopTools from '../untils/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  getters:{
    getGoodsData(){
      //获取商品信息
      return shopTools.getShops()
    }
  },
  mutations: {
    addToCart(state,payload){
      //保存购物信息
      shopTools.addUpdate(payload)
    }
  },
  actions: {

  }
})
