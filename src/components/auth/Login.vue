<template>
	<v-container fluid fill-height>
		<v-layout align-center justify-center>
			<v-flex xs12 sm8 md6>
				<v-card class="elevation-12">
					<v-toolbar dark color="primary">
						<v-toolbar-title>Login form</v-toolbar-title>
					</v-toolbar>
					<v-card-text>
						<!-- Валидация формы средствами Vuetify -->
						<v-form v-model="valid" ref="form" validation>
							<v-text-field 
								v-model="email" 
								prepend-icon="person" 
								name="email" 
								label="Email" 
								type="email"
								:rules="emailRules"> <!-- Правила валидации поля email -->
							</v-text-field>
							<v-text-field 
								v-model="password" 
								prepend-icon="lock" 
								name="password" 
								label="Password" 
								type="password"
								:rules="passwordRules"> <!-- Правила валидации поля email -->
							</v-text-field>
						</v-form>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn @click="onSubmit" color="primary" :disabled="!valid">Login</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			password: '',
			valid: false,
			emailRules: [
				v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
			],
			passwordRules: [
				v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password be equal or more than 6 characters'
			]
		}
	},
	
	methods: {
		onSubmit() {
			// Обращение к методу validate из локальной референции
			if (this.$refs.form.validate()) {
				let user = {
					email: this.email,
					password: this.password
				}

				console.log(user)
			}
		}
	}
}
</script>