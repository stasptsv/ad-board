// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Vuetify from 'vuetify'
import store from './store'
import App from './App'
import * as firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
	router,
	store,
  components: { App },
	template: '<App/>',
	
	created() {
		// Initialize Firebase
		let config = {
			apiKey: "AIzaSyA6UgcPEWaGDqpY0Xu1MgAQEh4BnMpoawY",
			authDomain: "itc-ad-board.firebaseapp.com",
			databaseURL: "https://itc-ad-board.firebaseio.com",
			projectId: "itc-ad-board",
			storageBucket: "itc-ad-board.appspot.com",
			messagingSenderId: "108848521519"
		};
		firebase.initializeApp(config);
	}
})
