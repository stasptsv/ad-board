<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<h2 class="text--secondary mb-3">Create new ad</h2>
				<v-form v-model="valid" ref="form" validation class="mb-3">
					<v-text-field 
						v-model="title" 
						name="title" 
						label="Ad title" 
						type="text"
						required
						:rules="[v => !!v || 'Title is required']"> <!-- Правила валидации поля text -->
					</v-text-field>
					<v-text-field 
						v-model="description" 
						name="description" 
						label="Ad description" 
						type="text"
						multi-line
						:rules="[v => !!v || 'Description is required']"> <!-- Правила валидации поля text -->
					</v-text-field>
				</v-form>

				<!-- Кнопка загрузки -->
				<v-layout row class="mb-3">
					<v-flex xs12>
						<v-btn class="warning">
							Upload
							<v-icon right dark>cloud_upload</v-icon>
						</v-btn>
					</v-flex>
				</v-layout>

				<!-- Изображение -->
				<v-layout row>
					<v-flex xs12>
						<img src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg" height="150">
					</v-flex>
				</v-layout>

				<v-layout row>
					<v-flex xs12>
						<v-switch label="Add to promo?" v-model="promo" color="primary"></v-switch>
					</v-flex>
				</v-layout>

				<v-layout row>
					<v-flex xs12>
						<v-btn :disabled="!valid" class="success" @click="createAd">Create ad</v-btn>
					</v-flex>
				</v-layout>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			title: '',
			description: '',
			promo: false,
			valid: false
		}
	},
	
	methods: {
		createAd() {
			if(this.$refs.form.validate()) {
				let ad = {
					title: this.title,
					description: this.description,
					promo: this.promo,
					imageSrc: 'https://proglib.io/wp-content/uploads/2018/07/1_qnI8K0Udjw4lciWDED4HGw.png'
				}
				// Добавление нового объявления
				this.$store.dispatch('createAd', ad)
			}
		}
	}
}
</script>