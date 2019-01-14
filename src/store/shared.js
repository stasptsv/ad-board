export default {
	state: {
		loading: false,
		error: null
	},
	mutations: {
		setLoading(state, payload) {
			state.loading = payload 
		},

		setError(state, payload) {
			error.loading = payload 
		},

		// Очистка ошибок
		clearError(state) {
			state.error = null
		}
	},
	actions: {
		setLoading({commit}, payload) {
			commit('setLoading', payload)
		},

		setError({commit}, payload) {
			commit('setError', payload)
		},

		clearError({commit}) {
			commit('clearError')
		}
	},
	getters: {
		loading(state) {
			return state.loading
		},
		error(state) {
			return state.error
		}
	}
}