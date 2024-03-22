import Cookies from 'js-cookie'

const state = {
    full: false
}

const mutations = {
    TOGGLE_FULL: state => {
        state.full = !state.full

    },

}

const actions = {
    toggleFull({ commit }) {
        commit('TOGGLE_FULL')
    },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
