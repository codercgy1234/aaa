import Vue from 'vue'
import Vuex from 'vuex'

// import mutations from './mutations'
// import actions from './actions'
// import getters from './getters'

Vue.use(Vuex)

const state = {
  cartList: []
}
const mutations = {
  addCart(state, payload) {
    // state.cartList.push(payload)
    // payload新添加的商品
    let oldProduct = null;
    for (let item of state.cartList) {
      if (item.iid === payload.iid) {
        oldProduct = item;
      }
    }
    // 判断oldproduct
    if (oldProduct) {
      oldProduct.count += 1
    } else {
      payload.count = 1
      state.cartList.push(payload)
    }
  }
}

const getters = {
  cartList(state) {
    return state.cartList
  },
  cartCount(state, getters) {
    return getters.cartList.length
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  // actions,
  getters
})

export default store
