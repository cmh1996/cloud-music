<template>
	<div class="bar">
		<span class="bar-title"><slot></slot></span>
		<slot name="bar-arrow"></slot>
		<slot name="bar-right"></slot>
	</div>
</template>
<script>
export default{
	name:'bar'
}
</script>
<style lang="less" scoped>
@import "../../var.less";
.bar{
	width: 100%;
	height:2rem;
	padding: 0.5rem 0;
	display: flex;
	align-items:center;
	justify-content:flex-start;
	.bar-title{
		border-left: 0.18rem solid @mainColor;
		padding-left: 0.6rem;
		font-size: 0.6rem;
	}
	.bar-arrow{
		width: 0.9rem;
		height: 0.9rem;
		fill: @mainColor;
		margin-left: 0.3rem;
	}
	.bar-right{
		flex-grow:1;
		text-align: right;
		font-size: 0.6rem;
		padding-right: 0.4rem;
		svg{
			fill:black;
			margin-right: 0.2rem;
			width: 0.55rem;
			height: 0.55rem;
		}
	}
}	
</style>