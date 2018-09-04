export default {
    namespaced: true,
    state: {
        openSide: false
    },
    mutations: {
        updateOpenSide (state) {
            state.openSide = !state.openSide
        }
    },
    actions: {
        updateOpenSide ({ commit }) {
            commit('updateOpenSide')
        }
    }
}
