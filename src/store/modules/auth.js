const state = () => ({
  email: null,
  password: null
});

const getters = {}

const mutations = {
  updateEmail: (state, payload) => {
    state.email = payload.email;
  },
  updatePassword: (state, payload) => {
    state.password = payload.password;
  }
}

const actions = {
  updateEmail: ({ commit }, payload) => {
    commit({
      type: 'updateEmail',
      email: payload.email
    });
  },
  updatePassword: ({ commit }, payload) => {
    commit({
      type: 'updatePassword',
      password: payload.password
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}