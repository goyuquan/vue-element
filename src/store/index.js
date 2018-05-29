import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    breadcrumb: []
  },
  getters: {
    demo: state => state.breadcrumb,
  },
  mutations: {
    updateBreadcrumb (state, matched) {
      let stack = []
      matched.forEach(v => {
        if (v.name){
          v.path != '' ? stack.push(v) : stack.push({name: v.name, path: '/'})
        }
      })
      stack[stack.length - 1].path = ''
      state.breadcrumb = stack
    }
  },
  actions: {
    demo ({commit}) {
      commit('updateBreadcrumb')
    }
  },
  modules: {
    auth,
    cart,
    products
  },
  strict: debug,
})
