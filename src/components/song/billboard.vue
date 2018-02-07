<template>
	<div class="billboard">
		<div class="official">
			<bar>官方榜</bar>
			<billboard-cover>
				<img src="static/img/banner1.jpg" alt="" slot="coverImg">
				每天更新
				<li slot="order">拿不走的记忆-Dimash</li>
				<li slot="order">Ignite(Instrumental)-Alan Walker/K-391</li>
				<li slot="order">有约-Twins</li>
			</billboard-cover>
			<billboard-cover>
				<img src="static/img/banner8.jpg" alt="" slot="coverImg">
				每天更新
				<li slot="order">动物世界-薛之谦</li>
				<li slot="order">高尚-薛之谦</li>
				<li slot="order">The One-The Chainsmokers</li>
			</billboard-cover>
			<billboard-cover>
				<img src="static/img/banner5.jpg" alt="" slot="coverImg">
				每周四更新
				<li slot="order">玩笑-刘瑞琪</li>
				<li slot="order">从夜晚，到清晨-贰佰</li>
				<li slot="order">去你妹的撩妹即正义-阿肆</li>
			</billboard-cover>
			<billboard-cover>
				<img src="static/img/banner3.jpg" alt="" slot="coverImg">
				每周四更新
				<li slot="order">动物世界-薛之谦</li>
				<li slot="order">刚好遇见你-李玉刚</li>
				<li slot="order">成都-赵雷</li>
			</billboard-cover>
			<billboard-cover>
				<img src="static/img/banner2.jpg" alt="" slot="coverImg">
				每天更新
				<li slot="order">薛之谦<span><svg class="icon" aria-hidden="true"><use xlink:href="#icon-hot"></use></svg>1705518</span></li>
				<li slot="order">周杰伦<span><svg class="icon" aria-hidden="true"><use xlink:href="#icon-hot"></use></svg>1523318</span></li>
				<li slot="order">陈奕迅<span><svg class="icon" aria-hidden="true"><use xlink:href="#icon-hot"></use></svg>1213318</span></li>
			</billboard-cover>
		</div>
		<div class="world">
			<bar>全球榜</bar>
			<list-cover v-for="item in billboardList" :key="item">
    			<img :src="item.imgURL" alt="" slot="cover-img"/>
    			<span slot="cover-left-icon" class="left-icon" v-text="item.updateTime"></span>
    			<p slot="cover-title" v-text="item.title" class="cover-title"></p>
    		</list-cover>
		</div>
		<div class="user">
			<bar>用户榜</bar>
			<list-cover v-for="item in userList" :key="item">
    			<img :src="item.imgURL" alt="" slot="cover-img"/>
    			<span slot="cover-left-icon" class="left-icon" v-text="item.updateTime"></span>
    			<p slot="cover-title" v-text="item.title" class="cover-title"></p>
    		</list-cover>
		</div>
	</div>
</template>
<script>
import bar from "../smallComponents/bar"
import billboardCover from "../smallComponents/billboardCover"
import listCover from "../smallComponents/listCover"

export default{
	name:'billboard',
	components:{billboardCover,bar,listCover},
	mounted(){
		window.scrollTo(0,0);
	},
	data(){
		return{
			billboardList:[
				{
					imgURL:"static/img/banner3.jpg",
					updateTime:"每周四更新",
					title:"Beatport全球电子舞曲榜"
				},{
					imgURL:"static/img/banner1.jpg",
					updateTime:"每周四更新",
					title:"云音乐ACG音乐榜"
				},{
					imgURL:"static/img/banner3.jpg",
					updateTime:"每周五更新",
					title:"云音乐电音榜"
				},{
					imgURL:"static/img/banner3.jpg",
					updateTime:"每周四更新",
					title:"日本Oricon周榜"
				},{
					imgURL:"static/img/banner3.jpg",
					updateTime:"每周四更新",
					title:"云音乐古典音乐榜"
				},{
					imgURL:"static/img/banner3.jpg",
					updateTime:"每周四更新",
					title:"UK排行榜周榜"
				},{
					imgURL:"static/img/banner3.jpg",
					updateTime:"每周四更新",
					title:"美国Billboard周榜"
				},{
					imgURL:"static/img/banner3.jpg",
					updateTime:"每周四更新",
					title:"法国 NRJ Vos Hits 周榜"
				},{
					imgURL:"static/img/banner3.jpg",
					updateTime:"每周四更新",
					title:"iTunes榜"
				},{
					imgURL:"static/img/banner3.jpg",
					updateTime:"每周四更新",
					title:"Hit FM Top榜"
				},{
					imgURL:"static/img/banner3.jpg",
					updateTime:"每周四更新",
					title:"KTV唛榜"
				},{
					imgURL:"static/img/banner3.jpg",
					updateTime:"每周四更新",
					title:"台湾Hito排行榜"
				},{
					imgURL:"static/img/banner3.jpg",
					updateTime:"每周四更新",
					title:"中国TOP排行榜（港台榜）"
				},{
					imgURL:"static/img/banner3.jpg",
					updateTime:"每周四更新",
					title:"中国TOP排行榜（内地榜）"
				},{
					imgURL:"static/img/banner3.jpg",
					updateTime:"每周四更新",
					title:"香港电台中文歌曲龙虎榜"
				},{
					imgURL:"static/img/banner3.jpg",
					updateTime:"每周四更新",
					title:"华语金曲榜"
				},{
					imgURL:"static/img/banner3.jpg",
					updateTime:"每周四更新",
					title:"中国嘻哈榜"
				}
			],
			userList:[
				{
					imgURL:"static/img/banner2.jpg",
					updateTime:"每周一更新",
					title:"音乐达人榜"
				},{
					imgURL:"static/img/banner7.jpg",
					updateTime:"每周一更新",
					title:"音乐新人榜"
				}
			]
		}
	}
}
</script>
<style lang="less" scoped>
.billboard{
	position: relative;
	top: 4.5rem;
	.world,.user{
		padding-top: 0.8rem;
		width: 100%;
		display: flex;
		flex-flow: row wrap;
		justify-content:flex-start;
		.cover{
			width: 33%;
			margin-bottom: 0.8rem;
			margin-right: 0.05rem;
			&:nth-child(3n+1){
				margin-right: 0;
			}
			img{
				height: 5rem;
			}
			.left-icon{
				top: auto;
				bottom: 0.2rem;
			}
		}
	}
}
</style>