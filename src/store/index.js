import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import option from './modules/option'
import api from '../api'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    breadcrumb: [],
    userInfo: localStorage.getItem('userInfo') || {},
    systemCode: []
  },
  getters: {
    demo: state => state.breadcrumb,
    getUserInfo: state => JSON.parse(state.userInfo),
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
    },
    updateUserInfo(state, info) {
      localStorage.setItem('userInfo', JSON.stringify(info))
    },
    // updateSyscode(state, n) {
    //   state.systemCode = n
    // }
  },
  actions: {
    // getSyscode ({ commit, state }) {
    //   api.common.adminsys().then( res => {
    //     commit('updateSyscode', res)
    //     return Promise.resolve()
    //   })
    // }
  },
  modules: { auth, option },
  strict: debug,
})
