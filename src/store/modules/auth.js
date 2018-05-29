import shop from '../../api/shop'
import http from '../../api/http'

const state = {
  status: null,
  token: localStorage.getItem('token') || '',
  breadcrumb: []
}

const getters = {
  // isAuthenticated: state => !!state.token,
  isAuthenticated: state => true,
  authStatus: state => state.status,
}

const mutations = {
  AUTH_REQUEST (state) {
    state.status = 'loading'
  },
  AUTH_SUCCESS (state) {
    state.status = 'success'
  },
  AUTH_ERROR (state) {
    state.status = 'error'
  },
  logOut (state) {
    state.status = false
    localStorage.removeItem('token')
  },
}

const actions = {
  logOut ({commit}) {
    commit('logOut')
  }
}

export default { state, getters, mutations, actions }
