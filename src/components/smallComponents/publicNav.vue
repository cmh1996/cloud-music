<template>
	<div class="publicNav">
		<slot name="navChild"></slot>
	</div>
</template>
<script>
export default{
	name:'publicNav',
}
</script>
<style lang="less" scoped>
@import '../../var.less';	
.publicNav{
	width: 100%;
	height: 2rem;
	background-color: white;
	display: flex;
	flex-flow:row nowrap;
	justify-content:center;
	z-index: 999;
	span{
		width: 6rem;
		height: 100%;
		display: flex;
		justify-content:center;
		align-items:center;
		font-size: 0.7rem;
	}
	.selected{
		color: @mainColor;
		border-bottom: 0.15rem solid @mainColor;
	}
}
</style>