import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Ad from '@/components/ads/Ad.vue'
import AdList from '@/components/ads/AdList.vue'
import NewAd from '@/components/ads/NewAd.vue'
import Login from '@/components/auth/Login.vue'
import Registration from '@/components/auth/Registration.vue'
import Orders from '@/components/users/Orders.vue'

Vue.use(Router)

export default new Router({
  routes: [
		{
			path: '',
			name: 'home',
			component: Home
		},
		{
			path: '/ad/:id',
			props: true, //Для передачи параметров
			name: 'ad',
			component: Ad
		},
		{
			path: '/list',
			name: 'list',
			component: AdList
		},
		{
			path: '/new',
			name: 'newAd',
			component: NewAd
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/registration',
			name: 'reg',
			component: Registration
		},
		{
			path: '/orders',
			name: 'orders',
			component: Orders
		}
	],
	mode: 'history'
})
