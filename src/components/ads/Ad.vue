<template>
	<v-container>
		<v-layout row>
			<v-flex xs12>
				<v-card>
					<!-- Динамичные ссылки -->
					<v-card-media :src="ad.imageSrc" height="300px"></v-card-media>
					<v-card-text>
						<h1 class="text--primary">{{ ad.title }}</h1>
						<p>{{ ad.description }}</p>
					</v-card-text>
					<v-card-actions>
						<v-btn class="warning" flat>Edit</v-btn>
						<v-btn class="success">Buy</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	props: ['id'],
	computed: {
		ad() {
			let id = this.id
			return this.$store.getters.adById(id)
		}
	}
}
</script>