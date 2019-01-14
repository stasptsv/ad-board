import * as firebase from 'firebase'

class User {
	constructor(id) {
		this.id = id
	}
}

// Модуль с данными пользователей (аутентификация)
export default {
	state: {
		user: null
	},
	mutations: {
		setUser(state, payload) {
			state.user = payload
		}
	},
	// Регистрация пользователя
	actions: {
		// Асинхронная функция
		async registerUser({commit}, {email, password}) {
			commit('clearError')
			commit('setLoading', true)

			try {
				let user = await firebase.auth().createUserWithEmailAndPassword(email, password) // Создание нового пользователя
				
				commit('setUser', new User(user.uid)) // Вызов мутации (uid - id c firebase)
				commit('setLoading', false) // Отмена загрузки после ответа сервера	
			} catch(error) {
				commit('setLoading', false)
				commit('setError', error.message)
				throw error
			}
		}
	},
	
	getters: {
		user(state) {
			return state.user
		}
	}
}