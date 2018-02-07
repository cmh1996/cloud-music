<template>
	<div class="songLists" ref="songLists">
		<div class="classic" ref="classic">
			<img :src="classic.imgURL" alt="" class="bg">
			<img :src="classic.imgURL" alt="" class="left">
			<div class="right">
				<div class="top">
					<svg class="icon first" aria-hidden="true"><use xlink:href="#icon-favorite"></use></svg>
					<span>精品歌单&nbsp;&nbsp;<svg class="icon" aria-hidden="true"><use xlink:href="#icon-more"></use></svg></span>
				</div>
				<div class="bottom">
					<p v-text="classic.title"></p>
					<p v-text="classic.intro"></p>
				</div>
			</div>
		</div>
		<div class="type">
			<span class="left">全部歌单&nbsp;<svg class="icon" aria-hidden="true"><use xlink:href="#icon-more"></use></svg></span>
			<div class="right">
				<span @touchstart="turnType('Chinese')">华语</span>
				<span @touchstart="turnType('Folk')">民谣</span>
				<span @touchstart="turnType('Electronic')">电子</span>
			</div>
		</div>
		<div class="listContent">
			<list-cover v-for="item in getCurrentSongList" :key="item">
    			<img :src="item.imgURL" alt="" slot="cover-img"/>
    			<span slot="cover-left-icon" class="left-icon">
    				<svg class="icon" aria-hidden="true"><use xlink:href="#icon-account"></use></svg>
    				{{item.userName}}
    				<svg class="icon" aria-hidden="true"><use xlink:href="#icon-favorite"></use></svg>
    			</span>
    			<span slot="cover-right-icon" class="right-icon">
    				<svg class="icon" aria-hidden="true"><use xlink:href="#icon-icon-test15"></use></svg>
    				{{item.num | Chinese}}
    			</span>
    			<p slot="cover-title" v-text="item.title" class="cover-title"></p>
    		</list-cover>
		</div>
	</div>
</template>
<script>
import listCover from "../smallComponents/listCover"
import { mapGetters } from 'vuex'

export default{
	name:'songLists',
	components:{listCover},
	filters:{
		Chinese:function(value){
	      if(!value){
	        return '0';
	      }
	      value = value+'';
	      if(value.length<5){
	        return value;
	      }else{
	        var c=value.split('');
	        c.splice(-4,4,'万');
	        return c.join('');
	      }
    	}
	},
	computed:{
	    ...mapGetters([
	      'getCurrentSongList', // 得到歌单
	    ]),
	},
	data(){
		return{
			songListType:'Chinese',
			classic:{
				imgURL:"static/img/banner5.jpg",
				title:"【日系RNB】第1秒就被前奏秒杀系列（低音控必推！）",
				intro:"日系浪漫，连忧伤都是甜蜜的"
			},
			isLoadingMore:false,
		}
	},
	methods:{
		turnType:function(type){
			let currentType = this.songListType;
			this.songListType = type;
			if (currentType == this.songListType) return;
			this.$store.dispatch("setCurrentSongList",type);
		},
		handler:function(){
		    this.reachBottom({
				ele: this,
				items: this.getCurrentSongList,
				max_length: 18
			})
		},
	},
	mounted(){
		window.scrollTo(0,0);
		//默认首页为华语歌单
		this.$store.dispatch("setCurrentSongList",'Chinese');
		//触发滚动到底部的函数（在main.js里）
		setTimeout(() =>{
			window.addEventListener("scroll",this.handler,false)
			},0)
	},
	destroyed(){
   	  window.removeEventListener('scroll',this.handler,false)
  }
}
</script>
<style lang="less" scoped>
.songLists{
	position: relative;
	top: 4.5rem;
	.classic{
		padding: 1rem 0.5rem;
		position: relative;
		display: flex;
		flex-flow:row nowrap;
		justify-content:space-between;
		height: 7rem;
		overflow: hidden;
		.bg{
			position: absolute;
			top: 0;
			left: -40%;
			z-index: 0;
			width: 200%;
			height: 200%;
			filter:blur(0.2rem);
			-webkit-filter:blur(0.2rem);
		}
		.left{
			width: 4.6rem;
			height: 4.6rem;
			z-index: 1;
		}
		.right{
			z-index: 1;
			flex:1;
			margin-left: 0.6rem;
			margin-top: 0.2rem;
			display: flex;
			flex-flow:column nowrap;
			.top{
				.first{
					fill:#e5b76f;
					width: 0.8rem;
					height: 0.8rem;
					padding: 0.06rem;
					border-radius: 50%;
					border: 0.01rem solid #e5b76f;
				}
				span{
					color: white;
					font-size: 0.8rem;
					svg{
						fill:white;
						width: 0.8rem;
						height: 0.8rem;
					}
				}
			}
			.bottom{
				margin-top: 0.8rem;
				width: 65%;
				p{
					&:first-child{
						width: 100%;
						color: white;
						font-size: 0.6rem;
						height: 0.6rem;
						line-height: 0.6rem;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					&:last-child{
						width: 100%;
						margin-top: 0.6rem;
						color: #c6c6c6;
						font-size: 0.4rem;
						height: 0.6rem;
						line-height: 0.6rem;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}
			}
		}
	}
	.type{
		width: 100%;
		height: 3.2rem;
		display: flex;
		line-height: 3.2rem;
		padding-left: 0.4rem;
		padding-right: 0.4rem;
		justify-content: space-between;
		align-items:baseline;
		.left{
			width: 3.5rem;
			height: 1.1rem;
			line-height: 1.1rem;
			padding-left: 0.5rem;
			border-radius: 1rem;
			border: 0.01rem solid #5a5a5a;
			color: black;
			font-size: 0.5rem;
			svg{
				width: 0.5rem;
				height: 0.5rem;
				fill: #5a5a5a;
			}
		}
		.right{
			span{	
				width: 2rem;
				padding-left: 0.2rem;
				padding-right: 0.2rem;
				font-size: 0.5rem;
				border-right: 0.01rem solid #c6c6c6;
				text-align: center;
				color: black;
				&:last-child{
					border-right: none;
				}
			}
		}
	}
	.listContent{
		width: 100%;
		display: flex;
		flex-flow: row wrap;
		justify-content:space-between;
		.cover{
			width: 49.7%;
			margin-bottom: 0.6rem;
			img{
				width: 100%;
				height: 7.4rem;
			}
			.left-icon{
				top: auto;
				bottom: 0.2rem;
				svg{
					&:last-child{
						fill: #e5b76f;
					}
				}
			}
		}
	}
}
</style>