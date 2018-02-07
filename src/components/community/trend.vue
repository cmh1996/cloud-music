<template>
	<div class="trend" :type="type">
		<div class="personal">
			<div class="left"><slot name="headImg"></slot></div>
			<div class="center">
				<div class="center-top">
					<slot name="name"></slot>
					<span class="trendType" v-if="type=='song'">分享单曲</span>
					<span class="trendType" v-if="type=='video'">发布短视频</span>
				</div>
				<div class="center-bottom">
					<slot name="time"></slot>
				</div>
			</div>
			<span class="follow right" v-show="!followed" @touchstart="follow(i)"><svg class="icon"><use xlink:href="#icon-add"></use></svg>关注</span>
			<span class="followed right" v-show="followed"><svg class="icon"><use xlink:href="#icon-selected"></use></svg>已关注</span>
		</div>
		<div class="content">
			<slot name="content-p"></slot>
			<div class="photo-box" v-if="type=='song'">
				<slot name="photo"></slot>
			</div>
			<div class="video-box" v-if="type=='video'">
				<slot name="videoCover"></slot>
				<slot name="videoTime"></slot>
			</div>
			<slot name="content-tips"></slot>
		</div>
		<div class="bar">
			<span>
				<svg class="icon"><use xlink:href="#icon-good"></use></svg>
				<slot name="likeNum"></slot>
			</span>
			<span>
				<svg class="icon"><use xlink:href="#icon-comments"></use></svg>
				<slot name="commentNum"></slot>
			</span>
			<span>
				<svg class="icon"><use xlink:href="#icon-link"></use></svg>
				<slot name="shareNum"></slot>
			</span>
			<svg class="icon list" @touchstart="showLayer"><use xlink:href="#icon-category"></use></svg>
		</div>
	</div>
</template>
<script>
export default{
	name:'trend',
	methods:{
		follow:function(i){
			this.$store.dispatch("setFollow",i);
		},
		showLayer:function(){
			this.$parent.$emit("showLayer",true);
		}
	},
	props:{
		type:{
			default:'song',
			type:String
		},
		followed:{
			type:Boolean,
			default:false
		},
		i:{
			type:Number
		}
	}
}
</script>
<style lang="less" scoped>
@import "../../var.less";
.trend{
	width: 100%;
	display: flex;
	flex-flow:column nowrap;
	padding:0.8rem 0.4rem;
	border-bottom: 0.01rem solid @borderColor;
	.personal{
		height: 2rem;
		display: flex;
		.left{
			width: 2rem;
			height: 2rem;
			border-radius: 50%;
			overflow: hidden;
			margin-right: 0.4rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.center{
			flex:1;
			height: 2rem;
			display: flex;
			flex-direction:column;
			justify-content:space-around;
			.center-top{
				font-size: 0.6rem;
				.name{
					color: #799cc4;
				}
				.trendType{
					color: grey;
				}
			}
			.center-bottom{
				.time{
					font-size: 0.5rem;
					color: #c6c6c6;
				}
			}
		}
		.right{
			width: 3rem;
			text-align: right;
			svg{
				width: 0.7rem;
				height: 0.7rem;
			}
		}
		.follow{
				color: @mainColor;
				font-size: 0.6rem;
				svg{
					fill: @mainColor;
				}
			}
		.followed{
				color: grey;
				font-size: 0.6rem;
				svg{
					fill: grey;
				}
		}
	}
	.content{
		padding-left: 2rem;
		padding-top: 0.4rem;
		.content-p{
			font-size: 0.6rem;
			line-height: 0.9rem;
			letter-spacing: 0.05rem;
			margin-bottom: 0.2rem;
		}
		.photo-box{
			display: flex;
			flex-flow:row wrap;
			img{
				width: 4.3rem;
				height: 4.3rem;
				margin-left: 0.1rem;
				margin-bottom: 0.1rem;
				&:nth-child(3n+1){
					margin-left: 0;
				}
			}
		}
		.video-box{
			position: relative;
			width: 100%;
			height: 7rem;
			img{
				width: 100%;
				height: 100%;
				position: absolute;
			}
			span{
				font-size: 0.4rem;
				color: white;
				position: absolute;
				bottom: 0.2rem;
				right: 0.2rem;
			}
		}
		.content-tips{
			margin-top: 0.3rem;
			font-size: 0.4rem;
			color: grey;
			overflow: hidden;
			text-overflow:ellipsis;
			white-space: nowrap;
			width: 100%;
		}
	}
	.bar{
		padding-left: 2rem;
		padding-top: 0.8rem;
		span{
			float: left;
			font-size: 0.4rem;
			color: grey;
			margin-right: 0.9rem;
			display: inline-block;
			svg{
				float: left;
				width: 0.6rem;
				height: 0.6rem;
				fill: grey;
				margin-right: 0.3rem;
			}
		}
		.list{
			float: right;
			width: 0.6rem;
			height: 0.6rem;
			fill: grey;
		}
	}
}
</style>