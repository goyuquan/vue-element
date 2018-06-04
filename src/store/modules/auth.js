import shop from '../../api/shop'
import http from '../../api/http'

const state = {
  token: localStorage.getItem('token') || null,
  breadcrumb: [],

}

const getters = {
  authStatus: state => !!state.token,
}

const mutations = {
  login (state, token) {
    localStorage.removeItem('token')
    localStorage.setItem('token', token)
    state.token = localStorage.getItem('token')
  },
  logOut (state) {
    state.token = null
    localStorage.removeItem('token')
  },
}

const actions = {
  logOut ({commit}) {
    commit('logOut')
  }
}

export default { state, getters, mutations, actions }
