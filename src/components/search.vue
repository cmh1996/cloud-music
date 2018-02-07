<template>
	<div class="search">
		<son-header>
			<input type="text" placeholder="搜索音乐、歌手、歌词、用户">
		</son-header>
		<div class="top-bar">
			<svg class="icon"><use xlink:href="#icon-service"></use></svg>
			<span>歌手分类</span>
			<svg class="icon"><use xlink:href="#icon-more"></use></svg>
		</div>
		<div class="hot-search">
			<div class="title">热门搜索</div>
			<div class="tags">
				<div v-for="item in hot" :key="item" v-text="item"></div>
			</div>
		</div>
		<div class="history">
			<div v-for="(item,index) in history" :key="item" class="item">
				<svg class="icon left"><use xlink:href="#icon-clock"></use></svg>
				<div class="right">
					<span v-text="item"></span>
					<svg class="icon" @touchstart.stop="de(index)"><use xlink:href="#icon-close"></use></svg>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import sonHeader from "./smallComponents/sonHeader"
export default{
	name:'search',
	components:{sonHeader},
	data(){
		return{
			hot:['我想和你唱','人民的名义','大力女都奉顺','Good Life','暧昧','我爱你','随便你','我的一个道姑朋友','初恋','Bigbang'],
			history:['浮夸','林忆莲','甲乙丙丁','faded'],
		}
	},
	methods:{
		de:function(index){
			this.history.splice(index,1);
		}
	}
}
</script>
<style lang="less" scoped>
@import "../var.less";
.search{
	.son-header{
		input{
			width: 96%;
			height: 1.5rem;
			border: none;
			border-bottom: 0.01rem solid rgba(255, 255, 255, 0.5);;
			outline: none;
			background-color: @mainColor;
			color: white;
		}
		input::-webkit-input-placeholder{
			color: rgba(255, 255, 255, 0.5);
		}
	}
	.top-bar{
		width: 100%;
		height: 2.4rem;
		border-bottom: 0.01rem solid @borderColor;
		display: flex;
		justify-content:center;
		align-items:center;
		svg{
			width: 1rem;
			height: 1rem;
			fill:grey;
			margin-right: 0.4rem;
			margin-left: 0.3rem;
		}
		span{
			font-size: 0.7rem;
			color: grey;
		}
	}
	.hot-search{
		width: 100%;
		padding-top: 1rem;
		padding-left: 0.3rem;
		.title{
			font-size: 0.5rem;
			color: grey;
		}
		.tags{
			width: 100%;
			display: flex;
			flex-flow: row wrap;
			div{
				display: inline-block;
				font-size: 0.6rem;
				border: 0.01rem solid @borderColor;
				border-radius: 0.6rem;
				padding: 0.4rem;
				margin-top: 0.4rem;
				margin-right: 0.4rem;
			}
		}
	}
	.history{
		padding-top: 1rem;
		width: 100%;
		display: flex;
		flex-flow:column nowrap;
		.item{
			width: 100%;
			height: 2.3rem;
			display: flex;
			align-items:center;
			padding-left: 0.2rem;
			.left{
				width: 1rem;
				height: 1rem;
				fill:grey;
			}
			.right{
				flex:1;
				border-bottom: 0.01rem solid @borderColor;
				height: 100%;
				line-height: 2.3rem;
				font-size: 0.5rem;
				position: relative;
				margin-left: 0.4rem;
				span{
					float: left;
					display: inline-block;
				}
				svg{
					width: 1rem;
					height: 1rem;
					fill:grey;
					display: inline-block;
					position: absolute;
					top: 50%;
					right: 0.2rem;
					margin-top: -0.5rem;
				}
			}
		}
	}
}
</style>