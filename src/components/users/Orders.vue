// Форма заказа
<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<h1 class="text--secondary mb-3">Orders</h1>
        
				<v-list subheader two-line>
          <v-list-tile avatar v-for="order of orders" :key="order.id">
            
						<v-list-tile-action>
              <v-checkbox @change="markDone(order)" :input-value="order.done" color="success"></v-checkbox>
            </v-list-tile-action>
            
						<!-- Данные заказа -->
						<v-list-tile-content>
              <v-list-tile-title>{{ order.name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ order.phone }}</v-list-tile-sub-title>
            </v-list-tile-content>
						
						<!-- Ссылка на страницу заказа -->
						<v-list-tile-action>
							<v-btn class="primary" :to="'/ad/' + order.adId">Open</v-btn>
						</v-list-tile-action>
          
					</v-list-tile>
        </v-list>
			
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			orders: [
				{
					id: '1',
					name: 'Denis',
					phone: '8 800 555 35 35',
					adId: '1',	// id объявления, по которому сделали заказ
					done: false // Статус заказа (выполнен/не выполнен)
				}
			]
		}
	}, 

	methodes: {
		markDone(order) {
			order.done = true
		}
	}	
}
</script>