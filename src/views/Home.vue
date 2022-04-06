<template>
	<main>
		<h1 class="title">前言：</h1>
		<div class="content">
			與vue有關的練習皆會放到此網站上，<br>
			同時也會紀錄每一項所用到的功能。
		</div>
		<div class="illustrate">
			<h1>api練習</h1>
			<div class="illustrate_container">	
				<h2>輸入搜尋</h2>
				<div class="illustrate_content">
					使用axios串接api，並將輸入欄位的值，透過computed篩選並返回資料
				</div>
			</div>
			<div class="illustrate_container">	
				<h2>點擊更動資料</h2>
				<div class="illustrate_content">
					使用axios串接api，透過點擊按鈕後，對秀出的資料進行操作
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: 'Home',
	components: {
	}
}
</script>

<style lang="scss" scoped>
main{
	// text-align: center;
	.title{
		font-size: 36px;
		border: 1px solid white;
		border-bottom: none;
		padding: 10px;
	};

	.content{
		border: 1px solid white;
		padding: 10px;
	}

	.illustrate{
		display: flex;
		// height: 150px;
		align-items: center;
		border: 1px solid white;
		border-bottom: none;
		margin-top: 10px;
		flex-wrap: wrap;

		h1{
			width: 100%;
			padding: 10px;
			text-align: center;
			border-bottom: 1px solid white;
		}

		.illustrate_container{
			display: flex;
			height: 100%;
			width: 100%;
			border-bottom: 1px solid white;

			h2{
				padding: 10px;
				border-right: 1px solid white;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 200px;
			}

			.illustrate_content{
				padding: 10px;
				display: flex;
				align-items: center;
			}
		}

	}

}
</style>