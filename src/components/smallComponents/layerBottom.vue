<template>
	<div class="layer" ref="layerBottom" @touchstart="hide">
		<div class="content">
			<span class="title"><slot></slot></span>
			<slot name="item"></slot>
		</div>
	</div>
</template>
<script>
export default{
	name:"layerBottom",
	mounted(){
		this.$refs.layerBottom.style.width = window.innerWidth+'px';
		this.$refs.layerBottom.style.height = window.innerHeight+'px';
	},
	methods:{
		hide:function(e){
			let layer = this.$refs.layerBottom;
			if(e.target==layer){
				this.$emit('hide','');
			}
		}
	}
}
</script>
<style lang="less" scoped>
@import "../../var.less";
.layer{
	    background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1003;
		display: flex;
		align-items: flex-end;
		.content{
			width: 100%;
			background-color: white;
			display: flex;
			flex-direction: column;
			padding-top: 1rem;
			padding-left: 0.3rem;
			padding-bottom: 0.2rem;
			.title{
				font-size: 0.4rem;
				color: grey;
			} 
			.item{
				display: flex;
				align-items:center;
				width: 100%;
				height: 2.6rem;
				svg{
					width: 0.9rem;
					height: 0.9rem;
					fill:@mainColor;
					margin-right: 0.6rem;
				}
				div{
					flex: 1;
					border-bottom: 0.01rem solid @borderColor;
					font-size: 0.6rem;
					height: 100%;
					line-height: 2.6rem;
				}
			}
		}
}
</style>