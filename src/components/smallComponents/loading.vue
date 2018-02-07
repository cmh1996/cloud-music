<template>
	<div class="loading" ref="loading">
		<span class="bar1 bar"></span>
		<span class="bar2 bar"></span>
		<span class="bar3 bar"></span>
		<span class="bar4 bar"></span>
		<span class="tips">努力加载中...</span>
	</div>
</template>
<script>
export default{
	name:"loading",
	mounted(){
		let loading = this.$refs.loading;
		let windowH = document.documentElement.clientHeight || document.body.clientHeight;
		let L_height = loading.clientHeight;
		let L_offsetTop = (windowH/2)-L_height;
		loading.style.top = L_offsetTop+'px';
	}
}
</script>
<style lang="less" scoped>
@import "../../var.less";
.loading{
	width: 100%;
	height: 2rem;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	.bar{
		width: 0.1rem;
		background-color: @mainColor; 
		margin-right: 0.2rem;
	}
	.bar1{
		animation:loading1 1s infinite;
	}
	.bar2{
		animation:loading2 1s infinite;
	}
	.bar3{
		animation:loading3 1s infinite;
	}
	.bar4{
		margin-right: 0.4rem;
		animation:loading4 1s infinite;
	}
	.tips{
		font-size: 0.3rem;
	}
}
@keyframes loading1{
	0%{
		height: 0.7rem;
	}
	50%{
		height: 0.4rem;
	}
	100%{
		height: 0.7rem;
	}
}
@keyframes loading2{
	0%{
		height: 0.6rem;
	}
	50%{
		height: 1rem;
	}
	100%{
		height: 0.6rem;
	}
}
@keyframes loading3{
	0%{
		height: 1rem;
	}
	50%{
		height: 0.6rem;
	}
	100%{
		height: 1rem;
	}
}
@keyframes loading4{
	0%{
		height: 0.3rem;
	}
	50%{
		height: 1rem;
	}
	100%{
		height: 0.3rem;
	}
}
</style>