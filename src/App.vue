<template>
	<div id="app">
		<Nav />
		<router-view />
	</div>
</template>

<script>
import Nav from "./components/Nav"
export default {
	name: 'App',
	components: {
		Nav,
	},
	data(){
		return{

		}
	}
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300&display=swap');

#app{
	color: black;
	font-size: 16px;
	font-family: 'Noto Sans TC', sans-serif;
	background-color: #5B5B5B;
	height: 100vh;
	color: white;

	main{
		max-width: 1000px;
		margin: 30px auto;
	}
}
</style>