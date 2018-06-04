import api from '../../api'

const state = {
  dictionary: {
    systemCode: [],
    SYS_RESOURCE_TYPE: []
  }
}

const getters = {

}

const mutations = {
  setSyscode(state, n) {
    state.dictionary.systemCode = n
  },
  set_dictionary(state, param) {
    state.dictionary[param['name']] = param['res']
  }
}

const actions = {
  getSyscode ({ commit, state }) {
    if (state.dictionary['systemCode'].length !== 0) {
      return Promise.resolve(state.dictionary['systemCode'])
    } else {
      return Promise.resolve(
        api.common.adminsys().then( res => {
          commit('setSyscode', res)
          return Promise.resolve(res)
        })
      )
    }
  },

  get_dictionary ({ commit, state }, name) {
    if (state.dictionary[name].length !== 0) {
      return Promise.resolve(state.dictionary[name])
    } else {
      return Promise.resolve(
        api.common.dictionary(name).then( res => {
          commit('set_dictionary', {name, res})
          return Promise.resolve(res)
        })
      )
    }
  }

}


export default {
  state,
  getters,
  actions,
  mutations
}
