// Модуль с данными объявлений
export default {
	// Хранилище состояний (данных) объявления
	state: {
		ads: [
			{
				title: 'First ad', 
				description: 'I am descr', 
				promo: false, 
				imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', 
				id: '1'
			},
			{
				title: 'Second ad', 
				description: 'I am descr', 
				promo: true, 
				imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', 
				id: '2'
			},
			{
				title: 'First ad', 
				description: 'I am descr', 
				promo: true, 
				imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', 
				id: '3'
			}
		]
	},

	// Способы изменения состояния хранилища объявления
	mutations: {
		createAd(state, payload) {
			// Добавление нового объявления
			state.ads.push(payload)
		}
	},
	actions: {
		// Добавление нового объявления
		createAd({commit}, payload) {
			payload.id = '1234423'
			commit('createAd', payload)
		}
	},
	// 
	getters: {
		// Для всех объявлений
		ads(state) {
			return state.ads
		},

		// Возвращает элементы с флагом (promo.true), которые добавлены для показа в слайдере   
		promoAds(state) {
			return state.ads.filter(ad => {
				return ad.promo
			})
		},

		// Возвращает мои объявления
		myAds(state) {
			return state.ads
		},

		// Функция для передачи id в getters (возвращает id объявления) 
		adById(state) {
			return adId => {
				return state.ads.find(ad => ad.id === adId)
			}
		}	
	}
}