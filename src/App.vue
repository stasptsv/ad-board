<template>
	<v-app>
		
		<v-navigation-drawer app temporary v-model="drawer">

			<v-list>
				<!-- Присвоение url и вывод всех ссылок -->
				<v-list-tile :to="link.url" v-for="link of links" :key="link.title">
					<v-list-tile-action>
						<!-- Вставка иконки -->
						<v-icon>{{ link.icon }}</v-icon>
					</v-list-tile-action>

					<v-list-tile-content>
						<!-- Вставка title -->
						<v-list-tile-title v-text="link.title"></v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>

		</v-navigation-drawer>
		
		<v-toolbar app dark color="primary" >
			<v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
			<v-toolbar-title>
				<router-link to="/" tag="span" class="pointer">Ad board</router-link>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items class="hidden-sm-and-down">
				<!-- Вывод всех ссылок и присвоение url -->
				<v-btn flat v-for="link of links" :key="link.title" :to="link.url">
					<!-- Вставка иконки -->
					<v-icon left>{{link.icon}}</v-icon>
					<!-- Вставка title -->
					{{ link.title }}
				</v-btn>
			</v-toolbar-items>
		</v-toolbar>
		
		<v-content>
			<router-view></router-view>
		</v-content>
	
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			// Показать меню навигации слева
			drawer: false,
			links: [
				{title: 'Login', icon: 'lock', url: '/login'},
				{title: 'Registration', icon: 'face', url: '/registration'},
				{title: 'Orders', icon: 'bookmark_border', url: '/orders'},
				{title: 'New ad', icon: 'note_add', url: '/new'},
				{title: 'My ads', icon: 'list', url: '/list'}
			]
		}
	}
}
</script>

<style scoped>
	.pointer {
		cursor: pointer;
	}
</style>
