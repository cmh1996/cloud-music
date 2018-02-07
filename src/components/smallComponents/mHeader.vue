<template>
  <div class="m-header">
  	<span class="left" @touchstart="showSetFn">
  		<svg class="icon" aria-hidden="true"><use xlink:href="#icon-category"></use></svg>
  	</span>
  	<div class="center">
  		<router-link to="/personal">
  		<svg class="icon" aria-hidden="true" :class="{selected:this.selectPage=='personal'}"><use xlink:href="#icon-icon-test16"></use></svg>
  		</router-link>
  		<router-link to="/song">
  			<svg class="icon" aria-hidden="true" :class="{selected:this.selectPage=='song'}"><use xlink:href="#icon-icon-test19"></use></svg>
  		</router-link>
  		<router-link to="/community">
  			<svg class="icon" aria-hidden="true" :class="{selected:this.selectPage=='community'}"><use xlink:href="#icon-process"></use></svg>
  		</router-link>
  	</div>
  	<div class="right">
  		<router-link to="/search">
  			<svg class="icon" aria-hidden="true" :class="{selected:this.selectPage=='search'}"><use xlink:href="#icon-search"></use></svg>
  		</router-link>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'mHeader',
  props:{
  	selectPage:{
  		type:String,
  		default:''
  	}
  },
  methods:{
  	showSetFn:function(){
  		this.$store.dispatch("setSetShow",true);
  	}
  }
}
</script>

<style lang="less" scoped>
@import '../../var.less';
.m-header{
	width: 100%;
	height: 2.5rem;
	background-color: @mainColor;
	display: flex;
	padding: 0.6rem;
	flex-flow:row nowrap;
	align-items:center;
	position: fixed;
	top: 0;
	z-index: 999;
	    .left{
			width: 1.2rem;
			height: 1.2rem;
			svg{
				width: 100%;
				height: 100%;
			}
			.selected{
				fill:@activeColor;
			}
	    }
	    .center{
			flex:1;
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			height: 1.2rem;
			a{
				width: 1.2rem;
				height: 100%;
				margin-right:1rem;
				display: block;
				&:last-child{
					margin-right: 0;
				}
				svg{
					width: 100%;
					height: 100%;
				}
				.selected{
					fill:@activeColor;
				}
			}
	    }
	    .right{
			height: 1.2rem;
			display: flex;
			flex-direction:row-reverse;
			a{
				width: 1.2rem;
				height: 100%;
				display: block;
				svg{
				width: 100%;
				height: 100%;
				}
				.selected{
					fill:@activeColor;
				}
			}
	    }
}
</style>
