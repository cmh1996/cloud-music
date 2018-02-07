<template>
	<div class="personal">
		<m-header :selectPage="'personal'"></m-header>
		<set></set>
		<layerBottom v-if="layerBottomShow==='created'" v-on:hide="hideLayer">
			创建的歌单
			<div class="item" slot="item">
				<svg class="icon"><use xlink:href="#icon-add"></use></svg><div>创建新歌单</div>
			</div>
			<div class="item" slot="item">
				<svg class="icon"><use xlink:href="#icon-form"></use></svg><div>歌单管理</div>
			</div>
		</layerBottom>
		<layerBottom v-if="layerBottomShow==='createdSongList'" v-on:hide="hideLayer">
			<span v-text="'歌单：'+curCreatedSongList"></span>
			<div class="item" slot="item">
				<svg class="icon"><use xlink:href="#icon-icondownload"></use></svg><div>下载</div>
			</div>
			<div class="item" slot="item">
				<svg class="icon"><use xlink:href="#icon-process"></use></svg><div>分享</div>
			</div>
			<div class="item" slot="item">
				<svg class="icon"><use xlink:href="#icon-edit"></use></svg><div>编辑歌单信息</div>
			</div>
			<div class="item" slot="item">
				<svg class="icon"><use xlink:href="#icon-delete"></use></svg><div>删除</div>
			</div>
		</layerBottom>
		<layerBottom v-if="layerBottomShow==='collect'" v-on:hide="hideLayer">
			收藏的歌单
			<div class="item" slot="item">
				<svg class="icon"><use xlink:href="#icon-form"></use></svg><div>歌单管理</div>
			</div>
		</layerBottom>
		<layerBottom v-if="layerBottomShow==='collectSongList'" v-on:hide="hideLayer">
			<span v-text="'歌单：'+curCollectSongList"></span>
			<div class="item" slot="item">
				<svg class="icon"><use xlink:href="#icon-icondownload"></use></svg><div>下载</div>
			</div>
			<div class="item" slot="item">
				<svg class="icon"><use xlink:href="#icon-process"></use></svg><div>分享</div>
			</div>
			<div class="item" slot="item">
				<svg class="icon"><use xlink:href="#icon-delete"></use></svg><div>删除</div>
			</div>
		</layerBottom>
		<div class="content">
			<div class="personal-bar-box">
				<div class="personal-bar">
					<div class="bar-icon">
						<svg class="icon"><use xlink:href="#icon-icon-test13"></use></svg>	
					</div>
					<div class="bar-content">
						<span class="bar-name">本地音乐</span>
						<span class="num">(10)</span>	
					</div>
				</div>
				<div class="personal-bar">
					<div class="bar-icon">
						<svg class="icon"><use xlink:href="#icon-icon-test2"></use></svg>	
					</div>
					<div class="bar-content">
						<span class="bar-name">最近播放</span>
						<span class="num">(100)</span>	
					</div>
				</div>
				<div class="personal-bar">
					<div class="bar-icon">
						<svg class="icon"><use xlink:href="#icon-icondownload"></use></svg>	
					</div>
					<div class="bar-content">
						<span class="bar-name">下载管理</span>
						<span class="num">(0)</span>	
					</div>
				</div>
				<div class="personal-bar">
					<div class="bar-icon">
						<svg class="icon"><use xlink:href="#icon-icon-test22"></use></svg>	
					</div>
					<div class="bar-content">
						<span class="bar-name">我的电台</span>
						<span class="num">(0)</span>	
					</div>
				</div>
				<div class="personal-bar">
					<div class="bar-icon">
						<svg class="icon"><use xlink:href="#icon-favoritesfilling"></use></svg>	
					</div>
					<div class="bar-content">
						<span class="bar-name" @touchstart.stop="test">我的收藏</span>
						<span class="num">(0)</span>	
					</div>
				</div>
			</div>
			<div class="songlists">
				<div class="bar" @touchstart="unfold1=!unfold1">
					<svg class="icon" v-if="unfold1"><use xlink:href="#icon-moreunfold"></use></svg>
					<svg class="icon" v-else><use xlink:href="#icon-more"></use></svg>
					<span v-text="'创建的歌单('+createdNum+')'"></span>
					<svg class="icon" @touchstart.stop="layerBottomShow='created'"><use xlink:href="#icon-set"></use></svg>
				</div>
				<div class="songlists-box" v-show="unfold1">
					<div class="item" v-for="item in getCreatedSongList" :key="item">
						<img class="left" :src="item.imgURL" alt="" />
						<div class="center">
							<p class="name" v-text="item.name"></p>
							<p class="num" v-text="item.num+'首'"></p>
						</div>
						<div class="right">
							<svg class="icon handle" v-if="!item.isPlaying" @touchstart.stop="opCreatedSongList(item.name)"><use xlink:href="#icon-category"></use></svg>
							<svg class="icon playing" v-if="item.isPlaying"><use xlink:href="#icon-icon-test12"></use></svg>
						</div>
					</div>
				</div>
				<div class="bar" @touchstart="unfold2=!unfold2">
					<svg class="icon" v-if="unfold2"><use xlink:href="#icon-moreunfold"></use></svg>
					<svg class="icon" v-else><use xlink:href="#icon-more"></use></svg>
					<span v-text="'收藏的歌单('+collectNum+')'"></span>
					<svg class="icon" @touchstart.stop="layerBottomShow='collect'"><use xlink:href="#icon-set"></use></svg>
				</div>
				<div class="songlists-box" v-show="unfold2">
					<div class="item" v-for="item in getCollectSongList" :key="item">
						<img class="left" :src="item.imgURL" alt="" />
						<div class="center">
							<p class="name" v-text="item.name"></p>
							<p class="num" v-text="item.num+'首 by '+item.author"></p>
						</div>
						<div class="right">
							<svg class="icon handle" v-if="!item.isPlaying" @touchstart.stop="opCollectSongList(item.name)"><use xlink:href="#icon-category"></use></svg>
							<svg class="icon playing" v-if="item.isPlaying"><use xlink:href="#icon-icon-test12"></use></svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import mHeader from './smallComponents/mHeader'
import set from './smallComponents/set'
import layerBottom from './smallComponents/layerBottom'
import {mapGetters} from 'vuex'
export default{
	name:'personal',
	components:{mHeader,set,layerBottom},
	computed:{
		...mapGetters(['getCreatedSongList','getCollectSongList']),
		createdNum(){
			return this.getCreatedSongList.length;
		},
		collectNum(){
			return this.getCollectSongList.length;
		}
	},
	mounted(){
		window.scrollTo(0,0);
	},
	data(){
		return{
			unfold1:true,
			unfold2:true,
			layerBottomShow:'',
			curCreatedSongList:'',
			curCollectSongList:'',
		}
	},
	methods:{
		hideLayer:function(val){
			this.layerBottomShow=val;
		},
		opCreatedSongList:function(name){
			this.layerBottomShow='createdSongList';
			this.curCreatedSongList=name;
		},
		opCollectSongList:function(name){
			this.layerBottomShow='collectSongList';
			this.curCollectSongList=name;
		},
		test:function(){
			var test='s';
			(function test(){console.log('ssss');var ss = 'ss';}/*async ()=>{
				try{
					let res = await this.$http.get("/db");
					console.log(...res.data.collectSongList);
				}catch(err){
					console.log(err);
				}
			}*/)();
			console.log(test);
		},
	}
}
</script>
<style lang="less" scoped>
@import "../var.less";
.content{
	position: relative;
	top: 2.5rem;
	padding-bottom: 5rem;
	.personal-bar-box{
		display: flex;
		flex-flow: column nowrap;
		border-bottom: 0.01rem solid @borderColor;
		.personal-bar{
			display: flex;
			width: 100%;
			height: 2.5rem;
			.bar-icon{
				width: 2rem;
				height: 100%;
				display: flex;
				justify-content:center;
				align-items:center;
				svg{
					fill:@mainColor;
					width: 1rem;
					height: 1rem;
				}
			}
			.bar-content{
				flex: 1;
				border-bottom: 0.01rem solid @borderColor;
				height: 100%;
				line-height: 2.5rem;
				.bar-name{
					font-size: 0.7rem;
					margin-right: 0.1rem;
				}
				.num{
					font-size: 0.6rem;
					color: grey;
				}
			}
		}
	}
	.songlists{
		.bar{
			width: 100%;
			height: 1.3rem;
			background-color: #e6e6e6;
			display: flex;
			align-items:center;
			padding: 0 0.4rem;
			svg{
				width: 0.8rem;
				height: 0.8rem;
				fill: grey;
			}
			span{
				font-size: 0.4rem;
				color: grey;
				margin-left: 0.4rem;
				flex:1;
			}
		}
	.songlists-box{
		width: 100%;
		display: flex;
		flex-direction:column;
		.item{
			width: 100%;
			height: 3rem;
			display: flex;
			align-items:center;
			padding-left: 0.2rem;
			.left{
				width: 2.6rem;
				height: 2.6rem;
			}
			.center{
				height: 100%;
				flex:1;
				margin-left: 0.4rem;
				display: flex;
				flex-direction:column;
				justify-content:center;
				border-bottom: 0.01rem solid @borderColor;
				.name{
					font-size: 0.7rem;
					margin-bottom: 0.5rem;
				}
				.num{
					font-size: 0.5rem;
					color: grey;
				}
			}
			.right{
				width: 2rem;
				height: 100%;
				display: flex;
				justify-content:center;
				align-items:center;
				border-bottom: 0.01rem solid @borderColor;
				svg{
					width: 1rem;
					height: 1rem;
					fill:grey;
				}
				.playing{
					fill: @mainColor;
				}
			}
		}
	}
	}
}
.show{
	display: block;
}
.hide{
	display: none;
}
</style>