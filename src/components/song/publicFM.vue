<template>
	<div class="publicFM">
		<swiper :options="swiperOption">
	        <swiper-slide v-for="(item,index) in banners" :key="item">
	          <img :src="item.url" alt="">
	          <span v-text="item.label" 
	          :class="{bgBlue:item.backgroundColor=='blue',bgRed:item.backgroundColor=='#c62f2f'}">
	          </span>
	        </swiper-slide>
	        <div class="swiper-pagination" slot="pagination"></div>
    	</swiper>
		<div class="fm-nav">
			<div>
				<svg class="icon" aria-hidden="true"><use xlink:href="#icon-all"></use></svg>
				<span>电台分类</span>
			</div>
			<div>
				<svg class="icon" aria-hidden="true"><use xlink:href="#icon-viewlist"></use></svg>
				<span>电台排行</span>
			</div>
		</div>
		<div class="everyday">
			<bar>
    			每天听些好节目
    			<span slot="bar-right" class="bar-right" @touchstart="changeShow"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-refresh"></use></svg>换一换</span>
    		</bar>
    		<div class="content">
    			<div class="show" v-for="item in everydayShow" :key="item">
    				<div class="left">
    					<img :src="item.imgURL" alt="" />
    					<svg class="icon" aria-hidden="true"><use xlink:href="#icon-icon-test2"></use></svg>
    				</div>
    				<div class="right">
    					<p v-text="item.title"></p>
    					<p v-text="item.author"></p>
    				</div>
    			</div>
    		</div>
		</div>
		<div class="recommend">
			<bar>
    			电台个性推荐
    		</bar>
    		<list-cover v-for="item in recommendList" :key="item">
    			<img :src="item.imgURL" alt="" slot="cover-img"/>
    			<p slot="cover-title" v-text="item.title" class="cover-title"></p>
    		</list-cover>
		</div>
		<div class="star">
			<bar>
    			明星做主播
    			<svg class="icon bar-arrow" aria-hidden="true" slot="bar-arrow"><use xlink:href="#icon-more"></use></svg>
    		</bar>
    		<list-cover v-for="item in starList" :key="item">
    			<img :src="item.imgURL" alt="" slot="cover-img"/>
    			<p slot="cover-title" v-text="item.title" class="cover-title"></p>
    		</list-cover>
		</div>
		<div class="create">
			<bar>
    			创作|翻唱
    			<svg class="icon bar-arrow" aria-hidden="true" slot="bar-arrow"><use xlink:href="#icon-more"></use></svg>
    		</bar>
    		<list-cover v-for="item in createList" :key="item">
    			<img :src="item.imgURL" alt="" slot="cover-img"/>
    			<p slot="cover-title" v-text="item.title" class="cover-title"></p>
    		</list-cover>
		</div>
		<div class="talkShow">
			<bar>
    			脱口秀
    			<svg class="icon bar-arrow" aria-hidden="true" slot="bar-arrow"><use xlink:href="#icon-more"></use></svg>
    		</bar>
    		<list-cover v-for="item in talkshowList" :key="item">
    			<img :src="item.imgURL" alt="" slot="cover-img"/>
    			<p slot="cover-title" v-text="item.title" class="cover-title"></p>
    		</list-cover>
		</div>
		<div class="emotion">
			<bar>
    			情感调频
    			<svg class="icon bar-arrow" aria-hidden="true" slot="bar-arrow"><use xlink:href="#icon-more"></use></svg>
    		</bar>
    		<list-cover v-for="item in emotionList" :key="item">
    			<img :src="item.imgURL" alt="" slot="cover-img"/>
    			<p slot="cover-title" v-text="item.title" class="cover-title"></p>
    		</list-cover>
		</div>
		<div class="story">
			<bar>
    			音乐故事
    			<svg class="icon bar-arrow" aria-hidden="true" slot="bar-arrow"><use xlink:href="#icon-more"></use></svg>
    		</bar>
    		<list-cover v-for="item in storyList" :key="item">
    			<img :src="item.imgURL" alt="" slot="cover-img"/>
    			<p slot="cover-title" v-text="item.title" class="cover-title"></p>
    		</list-cover>
		</div>
		<div class="classify">
			<bar>热门分类</bar>
			<div class="fm-nav first-nav">
				<div>
					<svg class="icon" aria-hidden="true"><use xlink:href="#icon-account"></use></svg>
					<span>明星做主播</span>
				</div>
				<div>
					<svg class="icon" aria-hidden="true"><use xlink:href="#icon-icon-test18"></use></svg>
					<span>创作|翻唱</span>
				</div>
			</div>
			<div class="fm-nav">
				<div>
					<svg class="icon" aria-hidden="true"><use xlink:href="#icon-service"></use></svg>
					<span>脱口秀</span>
				</div>
				<div>
					<svg class="icon" aria-hidden="true"><use xlink:href="#icon-smile"></use></svg>
					<span>情感调频</span>
				</div>
			</div>
			<div class="fm-nav">
				<div>
					<svg class="icon" aria-hidden="true"><use xlink:href="#icon-icon-test13"></use></svg>
					<span>音乐故事</span>
				</div>
				<div>
					<svg class="icon" aria-hidden="true"><use xlink:href="#icon-form"></use></svg>
					<span>有声小说</span>
				</div>
			</div>
		</div>
		<div class="moreClassify">
			<bar>更多分类</bar>
			<div class="fm-nav first-nav">
				<div>
					<svg class="icon" aria-hidden="true"><use xlink:href="#icon-account"></use></svg>
					<span>人文历史</span>
				</div>
				<div>
					<svg class="icon" aria-hidden="true"><use xlink:href="#icon-icon-test18"></use></svg>
					<span>亲子宝贝</span>
				</div>
			</div>
			<div class="fm-nav">
				<div>
					<svg class="icon" aria-hidden="true"><use xlink:href="#icon-service"></use></svg>
					<span>美文读物</span>
				</div>
				<div>
					<svg class="icon" aria-hidden="true"><use xlink:href="#icon-smile"></use></svg>
					<span>外语世界</span>
				</div>
			</div>
			<div class="fm-nav">
				<div>
					<svg class="icon" aria-hidden="true"><use xlink:href="#icon-icon-test13"></use></svg>
					<span>3D|电子</span>
				</div>
				<div>
					<svg class="icon" aria-hidden="true"><use xlink:href="#icon-form"></use></svg>
					<span>二次元</span>
				</div>
			</div>
			<div class="fm-nav">
				<div>
					<svg class="icon" aria-hidden="true"><use xlink:href="#icon-icon-test13"></use></svg>
					<span>旅途|城市</span>
				</div>
				<div>
					<svg class="icon" aria-hidden="true"><use xlink:href="#icon-form"></use></svg>
					<span>校园|教育</span>
				</div>
			</div>
			<div class="fm-nav">
				<div>
					<svg class="icon" aria-hidden="true"><use xlink:href="#icon-icon-test13"></use></svg>
					<span>娱乐|影视</span>
				</div>
				<div>
					<svg class="icon" aria-hidden="true"><use xlink:href="#icon-form"></use></svg>
					<span>广播剧</span>
				</div>
			</div>
			<div class="fm-nav">
				<div>
					<svg class="icon" aria-hidden="true"><use xlink:href="#icon-icon-test13"></use></svg>
					<span>相声曲艺</span>
				</div>
				<div>
					<svg class="icon last" aria-hidden="true"><use xlink:href="#icon-form"></use></svg>
					<span>我要做主播</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import bar from "../smallComponents/bar"
import listCover from "../smallComponents/listCover"
export default{
	name:'publicFM',
	components:{swiper,swiperSlide,bar,listCover},
	mounted(){
		window.scrollTo(0,0);
	},
	data(){
		return{
			swiperOption:{
		        setWrapperSize :true,
		        pagination : '.swiper-pagination',
		        autoplay:3000,
		        paginationClickable :true,
		        mousewheelControl : true,
		        observeParents:true,
		    },
		    banners:[
		    	{
		    		url:'static/img/banner6.jpg',
		    		label:'电台节目',
		    		backgroundColor:'#c62f2f'
		    	},{
		    		url:'static/img/banner4.jpg',
		    		label:'电台节目',
		    		backgroundColor:'#c62f2f'
		    	}
		    ],
		    everydayShow:[
		    	{
		    		imgURL:"static/img/banner3.jpg",
		    		title:"《这一跪》朗诵-任志宏 作者-苗晓",
		    		author:"任志宏诵读经典"
		    	},{
		    		imgURL:"static/img/banner8.jpg",
		    		title:"\"对的人，是不用跑着去靠近的\"",
		    		author:"小北电台"
		    	},{
		    		imgURL:"static/img/banner1.jpg",
		    		title:"男人至死是巨婴",
		    		author:"围炉电台"
		    	}],
		    everydayShowWhole:[
		    	{
		    		imgURL:"static/img/banner3.jpg",
		    		title:"《这一跪》朗诵-任志宏 作者-苗晓",
		    		author:"任志宏诵读经典"
		    	},{
		    		imgURL:"static/img/banner8.jpg",
		    		title:"\"对的人，是不用跑着去靠近的\"",
		    		author:"小北电台"
		    	},{
		    		imgURL:"static/img/banner1.jpg",
		    		title:"男人至死是巨婴",
		    		author:"围炉电台"
		    	},{
		    		imgURL:"static/img/banner2.jpg",
		    		title:"拉阔星空",
		    		author:"程朗|悟空"
		    	},{
		    		imgURL:"static/img/banner6.jpg",
		    		title:"体坛先锋",
		    		author:"师傅|大只广|矿仔|熊仔饼"
		    	},{
		    		imgURL:"static/img/banner5.jpg",
		    		title:"一些事一些情",
		    		author:"Hugo|阿智"
		    	}
		    ],
		    recommendList:[
		    	{
		    		imgURL:"static/img/banner1.jpg",
		    		title:"【高能环绕】戴耳机入场哦"
		    	},{
		    		imgURL:"static/img/banner2.jpg",
		    		title:"诚意电台"
		    	},{
		    		imgURL:"static/img/banner3.jpg",
		    		title:"一个人听"
		    	},{
		    		imgURL:"static/img/banner4.jpg",
		    		title:"中国怪谈"
		    	},{
		    		imgURL:"static/img/banner5.jpg",
		    		title:"冯提模"
		    	},{
		    		imgURL:"static/img/banner6.jpg",
		    		title:"【学习BGM】在霍格沃茨读书是什么样的体验"
		    	},
		    ],
		    starList:[
		    	{
		    		imgURL:"static/img/banner1.jpg",
		    		title:"野马电台"
		    	},{
		    		imgURL:"static/img/banner2.jpg",
		    		title:"《二刘之章》"
		    	},{
		    		imgURL:"static/img/banner3.jpg",
		    		title:"黄渤的独家电台"
		    	}
		    ],
		    createList:[
		    	{
		    		imgURL:"static/img/banner4.jpg",
		    		title:"3401告白"
		    	},{
		    		imgURL:"static/img/banner5.jpg",
		    		title:"炫宝儿Baby"
		    	},{
		    		imgURL:"static/img/banner6.jpg",
		    		title:"于静"
		    	}
		    ],
		    talkshowList:[
		    	{
		    		imgURL:"static/img/banner7.jpg",
		    		title:"毛毛脱口秀"
		    	},{
		    		imgURL:"static/img/banner8.jpg",
		    		title:"谷阿莫AmoGood"
		    	},{
		    		imgURL:"static/img/banner1.jpg",
		    		title:"小川说"
		    	}
		    ],
		    emotionList:[
		    	{
		    		imgURL:"static/img/banner2.jpg",
		    		title:"杨澜说"
		    	},{
		    		imgURL:"static/img/banner3.jpg",
		    		title:"扎鬼一家缺票电台"
		    	},{
		    		imgURL:"static/img/banner4.jpg",
		    		title:"向北"
		    	}
		    ],
		    storyList:[
		    	{
		    		imgURL:"static/img/banner5.jpg",
		    		title:"董小姐的音乐电台"
		    	},{
		    		imgURL:"static/img/banner6.jpg",
		    		title:"FM520赵小磊"
		    	},{
		    		imgURL:"static/img/banner7.jpg",
		    		title:"民谣栖息地"
		    	}
		    ],
		}
	},
	methods:{
		changeShow:function(){
			this.$store.dispatch("setLoading",true);
			setTimeout(()=>{
				this.everydayShow = this.randomArray(this.everydayShowWhole,3);
				this.$store.dispatch("setLoading",false);
			},1000)
		}
	},
}
</script>
<style lang="less" scoped>
@import "../../var.less";
.publicFM{
	position: relative;
	top: 4.5rem;
	.fm-nav{
		width: 100%;
		height: 2.6rem;
		line-height: 2.6rem;
		position: relative;
		border-bottom: 0.01rem solid #e1e5e4;
		div{
			width: 49%;
			height: 2.2rem;
			line-height: 2.2rem;
			display: inline-block;
			border-right: 0.01rem solid #e1e5e4;
			text-align: center;
			&:last-child{
				border-right: none;
			}
			svg{
				fill: @mainColor;
				width: 1.1rem;
				height: 1.1rem;
				margin-right: 0.6rem;
				vertical-align: middle;
			}
			span{
				font-size: 0.6rem;
				vertical-align: middle;
			}
		}
	}
	.first-nav{
		border-top: 0.01rem solid #e1e5e4;
	}
	.everyday{
		margin-top: 1rem;
		.content{
			display: flex;
			flex-flow: column nowrap;
			.show{
				width: 100%;
				height: 3.2rem;
				border-bottom: 0.01rem solid #e1e5e4;
				display: flex;
				&:first-child{
					border-top: 0.01rem solid #e1e5e4;
				}
				.left{
					width: 3.2rem;
					height: 100%;
					position: relative;
					display: inline-block;
					img{
						width: 100%;
						height: 100%;
						display: inline-block;
					}
					svg{
						position: absolute;
						width: 1.4rem;
						height: 1.4rem;
						top: 50%;
						margin-top: -0.7rem;
						left: 50%;
						margin-left: -0.7rem;
					}
				}
				.right{
					display: inline-block;
					margin-left: 1rem;
					padding: 0.8rem 0;
					overflow: hidden;
					flex:1;
					p{	
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
						width: 95%;
						&:first-child{
							font-size: 0.6rem;
						}
						&:last-child{
							font-size: 0.4rem;
							color: #c6c6c6;
							margin-top: 0.2rem;
						}
					}
				}
			}
		}
	}
	.recommend,.star,.create,.talkShow,.emotion,.story{
		margin-top: 0;
		width: 100%;
		display: flex;
		flex-flow: row wrap;
		justify-content:space-between;
		.cover{
			width: 33%;
			margin-bottom: 0.4rem;
			img{
				height: 5rem;
			}
		}
	}
	.recommend{
		margin-top: 1rem;
	}
	.classify{
		.fm-nav{
			div{
				text-align: left;
				padding-left: 1.4rem;
			}
		}
	}
	.moreClassify{
		margin-top: 1rem;
		.fm-nav{
			div{
				text-align: left;
				padding-left: 1.4rem;
				.last{
					fill:blue;
				}
			}
		}
	}
}
.swiper-container{
	width: 100%;
  	height: 6rem;
}
.swiper-container .swiper-wrapper .swiper-slide{
	position: relative;
}
.swiper-container .swiper-wrapper .swiper-slide img{
  width: 100%;
  height: 100%;
}
.swiper-container .swiper-wrapper .swiper-slide span{
  width: 3rem;
  height: 1rem;
  line-height: 1rem;
  padding-left: 0.4rem;
  border-radius: 1rem;
  color: white;
  position: absolute;
  right: -0.6rem;
  bottom: 0.3rem;
  font-size: 0.4rem;
}
.bgBlue{
	background-color: blue;
}
.bgRed{
	background-color: #c62f2f;
}
</style>