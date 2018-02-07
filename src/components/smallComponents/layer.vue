<template>
	<div class="layer" ref="layer" @touchstart="hide" v-show="layerShow">
		<div class="box">
			<slot name="item"></slot>
		</div>
	</div>
</template>
<script>
export default{
	name:"layer",
	data(){
		return{
			layerShow:false,
		}
	},
	mounted(){
		this.$parent.$on("showLayer",(test)=>{
			this.layerShow = test;
		});

	},
	updated(){		
		//关键是下面这一行，要渲染出来才能设置宽高，不然会报错
		if(this.layerShow){
			this.$refs.layer.style.width = window.innerWidth+'px';
			this.$refs.layer.style.height = window.innerHeight+'px';
		}
	},
	methods:{
		hide:function(e){
			let layer = this.$refs.layer;
			if(e.target==layer){
				this.layerShow = false;
			}
		}
	}
}
</script>
<style lang="less" scoped> 
	.layer{
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1003;
		display: flex;
		justify-content: center;
		align-items: center;
		.box{
			width: 80%;
			background-color: white;
			div{
				width: 100%;
				height: 2.4rem;
				color: black;
				font-size: 0.55rem;
				line-height: 2.4rem;
				padding-left: 1rem;
			}
		}
	}
</style>