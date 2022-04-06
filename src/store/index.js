import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		api: [],
	},
	mutations: {
		double(state){
			state.api.map(item => {
				item.money = item.money * 2
				console.log(item)
				return item
			})
		},
		more(state){
			// let million = []
			// state.api.filter(item => {
			// 	if(item.money >= 1000000){
			// 		million.push(item)
			// 	}
			// })
			// state.api = million
			// console.log(state.api)
			state.api = state.api.filter(item => {
				return item.money >= 1000000
			})
		},
		plussortEvent(state){
			// console.log(state.api)
			state.api = state.api.sort((a, b) => {
				return b.money - a.money
			})
			console.log(state.api)
		},
		reducesortEvent(state){
			state.api = state.api.sort((a, b) => {
				return a.money - b.money
			})
		}
	},
	actions: {
	},
	modules: {
	}
})
