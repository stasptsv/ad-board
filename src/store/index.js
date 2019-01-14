import Vue from 'vue'
import Vuex from 'vuex'
// Дерево состояний объявления (ad)
import ads from './ads'
// Дерево состояний аутентификации
import user from './user'
// 
import shared from './shared'

Vue.use(Vuex)

// Глобальное дерево состояний (данных)
export default new Vuex.Store ({
	modules: {
		ads, user, shared
	}
})