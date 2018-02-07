<template>
	<div class="son-header">
		<span class="left" @touchstart="this.goback">
  			<svg class="icon" aria-hidden="true"><use xlink:href="#icon-back"></use></svg>
  		</span>
  		<span class="center">
  			<slot></slot>
  		</span>
	</div>
</template>
<script>
export default{
	name:'sonHeader',
	methods:{
		goback:function(){
			this.$router.go(-1);
		}
	}
}
</script>
<style lang="less" scoped>
@import "../../var.less";
	.son-header{
		width: 100%;
		height: 2.5rem;
		background-color: @mainColor;
		display: flex;
		align-items:center;
		.left{
			width: 1.5rem;
			height: 1.5rem;
			svg{
				width: 100%;
				height: 100%;
			}
	    }
	    .center{
	    	flex:1;
	    	margin-left: 1rem;
	    	color: white;
	    	font-size: 0.7rem;
	    	font-weight: 300;
	    }
	}
</style>