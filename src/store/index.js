import Vue from 'vue'
import Vuex from 'vuex'
// Дерево состояний объявления (ad)
import ads from './ads'

Vue.use(Vuex)

// Глобальное дерево состояний (данных)
export default new Vuex.Store ({
	modules: {
		ads
	}
})