<template>
	<div class="recommend">
		<swiper :options="swiperOption">
	        <swiper-slide v-for="(item,index) in banners" :key="item">
	          <img :src="item.url" alt="">
	          <span v-text="item.label" 
	          :class="{bgBlue:item.backgroundColor=='blue',bgRed:item.backgroundColor=='#c62f2f'}">
	          </span>
	        </swiper-slide>
	        <div class="swiper-pagination" slot="pagination"></div>
    	</swiper>
    	<div class="entry">
  			<router-link to="#">
	    		<span class="entry-icon">
	  				<svg class="icon" aria-hidden="true"><use xlink:href="#icon-icon-test22"></use></svg>
	    		</span>
	    		<span class="entry-title">私人FM</span>
  			</router-link>
  			<router-link to="#">
	    		<span class="entry-icon">
	  				<svg class="icon" aria-hidden="true"><use xlink:href="#icon-signboard"></use></svg>
	  				<span v-text="today"></span>
	    		</span>
	    		<span class="entry-title">每日歌曲推荐</span>
  			</router-link>
  			<router-link to="#">
	    		<span class="entry-icon">
	  				<svg class="icon" aria-hidden="true"><use xlink:href="#icon-hot"></use></svg>
	    		</span>
	    		<span class="entry-title">云音乐热歌榜</span>
  			</router-link>
    	</div> 
    <div class="changeOrderList">
    	<div class="recommend-list" ref="recommendList">
    		<bar>
    			推荐歌单
    			<svg class="icon bar-arrow" aria-hidden="true" slot="bar-arrow"><use xlink:href="#icon-more"></use></svg>
    		</bar>
    		<list-cover v-for="item in recommendList" :key="item">
    			<img :src="item.imgURL" alt="" slot="cover-img"/>
    			<span slot="cover-right-icon" class="right-icon">
    				<svg class="icon" aria-hidden="true" slot="bar-arrow"><use xlink:href="#icon-icon-test15"></use></svg>
    				{{item.num | Chinese}}
    			</span>
    			<p slot="cover-title" v-text="item.title" class="cover-title"></p>
    		</list-cover>
    	</div>
    	<div class="exclusive" ref="exclusive">
    		<bar>
    			独家放送
    			<svg class="icon bar-arrow" aria-hidden="true" slot="bar-arrow"><use xlink:href="#icon-more"></use></svg>
    		</bar>
    		<list-cover v-for="item in exclusiveList" :key="item">
    			<img :src="item.imgURL" alt="" slot="cover-img"/>
    			<span slot="cover-left-icon" class="left-icon">
    				<svg class="icon" aria-hidden="true"><use xlink:href="#icon-viewlist"></use></svg>
    			</span>
    			<p slot="cover-title" v-text="item.title" class="cover-title"></p>
    		</list-cover>
    	</div>
    	<div class="latest-music" ref="latestMusic">
    		<bar>
    			最新音乐
    			<svg class="icon bar-arrow" aria-hidden="true" slot="bar-arrow"><use xlink:href="#icon-more"></use></svg>
    		</bar>
    		<list-cover v-for="item in latestList" :key="item">
    			<img :src="item.imgURL" alt="" slot="cover-img"/>
    			<p slot="cover-title" v-text="item.title" class="cover-title"></p>
    			<p slot="cover-p" v-text="item.intro" class="cover-p"></p>
    		</list-cover>
    	</div>
    	<div class="mv" ref="mv">
    		<bar>
    			推荐MV
    			<svg class="icon bar-arrow" aria-hidden="true" slot="bar-arrow"><use xlink:href="#icon-more"></use></svg>
    		</bar>
    		<list-cover v-for="item in mvList" :key="item">
    			<img :src="item.imgURL" alt="" slot="cover-img"/>
    			<span slot="cover-right-icon" class="right-icon">
    				<svg class="icon" aria-hidden="true"><use xlink:href="#icon-icon-test20"></use></svg>
    				{{item.num | Chinese}}
    			</span>
    			<p slot="cover-title" v-text="item.title" class="cover-title"></p>
    			<p slot="cover-p" v-text="item.intro" class="cover-p"></p>
    		</list-cover>
    	</div>
    	<div class="special-column" ref="specialColumn">
    		<bar>
    			精选专栏
    			<svg class="icon bar-arrow" aria-hidden="true" slot="bar-arrow"><use xlink:href="#icon-more"></use></svg>
    		</bar>
    		<div class="column" v-for="item in columnList" :key="item">
    			<div class="column-left">
    				<span>专栏</span>
    				<p>{{item.title}}</p>
    				<span>阅读 {{item.num}}</span>
    			</div>
    			<div class="column-right">
    				<img :src="item.imgURL" alt="">
    			</div>
    		</div>
    	</div>
    	<div class="fm" ref="fm">
    		<bar>
    			主播电台
    			<svg class="icon bar-arrow" aria-hidden="true" slot="bar-arrow"><use xlink:href="#icon-more"></use></svg>
    		</bar>
    		<list-cover v-for="item in fmList" :key="item">
    			<img :src="item.imgURL" alt="" slot="cover-img"/>
    			<span slot="cover-left-icon" class="left-icon">
    				{{item.name}}
    			</span>
    			<span slot="cover-right-icon" class="right-icon">
    				<svg class="icon" aria-hidden="true"><use xlink:href="#icon-icon-test2"></use></svg>
    			</span>
    			<p slot="cover-title" v-text="item.title" class="cover-title"></p>
    		</list-cover>
    	</div>
    </div>		
    	<div class="bottom">
    		<p>现在可以根据个人喜好，自由调整首页栏目顺序啦~</p>
    		<router-link to="/changeOrder">调整栏目顺序</router-link>
    	</div>
	</div>
</template>
<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import bar from "../smallComponents/bar"
import listCover from "../smallComponents/listCover"

export default{
	name:'recommend',
	components:{swiper,swiperSlide,bar,listCover},
	methods:{
	},
	computed:{
		today(){
			let time = new Date();
			return time.getDate();
		},
	},
	mounted(){
		window.scrollTo(0,0);
		let recommendList = this.$refs.recommendList;
		let exclusive = this.$refs.exclusive;
		let latestMusic = this.$refs.latestMusic;
		let mv = this.$refs.mv;
		let specialColumn = this.$refs.specialColumn;
		let fm = this.$refs.fm;
		let cRI = this.$store.getters.getRecommendSongIndex;
		let cEI = this.$store.getters.getExclusiveIndex;
		let cLI = this.$store.getters.getLatestSongIndex;
		let cMI = this.$store.getters.getRecommendMVIndex;
		let cSI = this.$store.getters.getSpecialColumnIndex;
		let cFI = this.$store.getters.getPublicFMIndex;
		recommendList.setAttribute("style","order:"+cRI);
		exclusive.setAttribute("style","order:"+cEI);
		latestMusic.setAttribute("style","order:"+cLI);
		mv.setAttribute("style","order:"+cMI);
		specialColumn.setAttribute("style","order:"+cSI);
		fm.setAttribute("style","order:"+cFI);
	},
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
	data () {
    	return {
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
		    		url:'static/img/banner1.jpg',
		    		label:'专辑',
		    		backgroundColor:'#c62f2f'
		    	},{
		    		url:'static/img/banner2.jpg',
		    		label:'歌曲',
		    		backgroundColor:'#c62f2f'
		    	},{
		    		url:'static/img/banner3.jpg',
		    		label:'活动',
		    		backgroundColor:'blue'
		    	},{
		    		url:'static/img/banner4.jpg',
		    		label:'专辑',
		    		backgroundColor:'#c62f2f'
		    	},{
		    		url:'static/img/banner5.jpg',
		    		label:'专辑',
		    		backgroundColor:'#c62f2f'
		    	},{
		    		url:'static/img/banner6.jpg',
		    		label:'推广',
		    		backgroundColor:'blue'
		    	},{
		    		url:'static/img/banner7.jpg',
		    		label:'专辑',
		    		backgroundColor:'#c62f2f'
		    	},{
		    		url:'static/img/banner8.jpg',
		    		label:'活动',
		    		backgroundColor:'blue'
		    	},
		    ],
		    recommendList:[{
		    	imgURL:'static/img/banner1.jpg',
		    	num:12342,
		    	title:'华语｜多想牵你手，走到尽头'
		    },{
		    	imgURL:'static/img/banner3.jpg',
		    	num:1234,
		    	title:'颜控党进>>高颜值美人✛仙气女声盘点'
		    },{
		    	imgURL:'static/img/banner4.jpg',
		    	num:123242,
		    	title:'为我的思念歌一曲：欧美摇滚选集'
		    },{
		    	imgURL:'static/img/banner5.jpg',
		    	num:122,
		    	title:'封面设计大师Storm Thorgerson'
		    },{
		    	imgURL:'static/img/banner6.jpg',
		    	num:1214344,
		    	title:'聆听华语里百听不厌R&B'
		    },{
		    	imgURL:'static/img/banner7.jpg',
		    	num:3546342,
		    	title:'《90后最啱听》Vol.7 必听的粤语歌【No.1】'
		    },],
		    exclusiveList:[{
		    	imgURL:'static/img/banner5.jpg',
		    	title:'一生只做两件事：爱你，读诗,爱你，读诗'
		    },{
		    	imgURL:'static/img/banner4.jpg',
		    	title:'了解国外设计，更fashion'
		    },{
		    	imgURL:'static/img/banner5.jpg',
		    	title:'国民老岳父公的暖心故事国民老岳父公的暖心故事国民老岳父公的暖心故'
		    }],
		    latestList:[{
		    	imgURL:'static/img/banner1.jpg',
		    	title:'新歌推荐',
		    	intro:'推荐和口味的新歌'
		    },{
		    	imgURL:'static/img/banner2.jpg',
		    	title:'不意外的意外',
		    	intro:'连诗雅'
		    },{
		    	imgURL:'static/img/banner3.jpg',
		    	title:'一定要幸福',
		    	intro:'张靓颖'
		    },{
		    	imgURL:'static/img/banner4.jpg',
		    	title:'油尖旺金毛玲',
		    	intro:'Semini沙妮妮'
		    },{
		    	imgURL:'static/img/banner5.jpg',
		    	title:'晚九朝五',
		    	intro:'铁竹堂铁竹堂铁竹堂铁竹堂铁竹堂铁竹堂铁竹堂铁竹堂'
		    },{
		    	imgURL:'static/img/banner6.jpg',
		    	title:'以前以后',
		    	intro:'A-Lin'
		    }],
		    mvList:[{
		    	imgURL:'static/img/banner5.jpg',
		    	num:7564789,
		    	title:'别送我',
		    	intro:'陈宏宇'
		    },{
		    	imgURL:'static/img/banner6.jpg',
		    	num:7564789,
		    	title:'弹起我心爱的土琵琶',
		    	intro:'成龙'
		    },{
		    	imgURL:'static/img/banner7.jpg',
		    	num:7564789,
		    	title:'圣诞结',
		    	intro:'陈奕迅'
		    },{
		    	imgURL:'static/img/banner8.jpg',
		    	num:7564789,
		    	title:'Living Out Loud',
		    	intro:'Sia'
		    }],
		    columnList:[{
		    	imgURL:'static/img/banner2.jpg',
		    	num:1234342,
		    	title:'王杰：哪有人甘愿做浪子，不过是寻不到归处'
		    },{
		    	imgURL:'static/img/banner7.jpg',
		    	num:23234,
		    	title:'遇见孙燕姿，应该是属于我最美丽的意外'
		    },{
		    	imgURL:'static/img/banner6.jpg',
		    	num:123242,
		    	title:'玛丽莲曼森：新专辑会是令人意外的，终极版本的我'
		    }],
		    fmList:[{
		    	imgURL:'static/img/banner6.jpg',
		    	title:'生活如此艰辛',
		    	name:'王东电台'
		    },{
		    	imgURL:'static/img/banner5.jpg',
		    	title:'爱情，有时候需要彼此退一步',
		    	name:'睡不着电台'
		    },{
		    	imgURL:'static/img/banner4.jpg',
		    	title:'第270期：施主，轻纺开那条黄鳝',
		    	name:'皮皮虾电台'
		    },{
		    	imgURL:'static/img/banner3.jpg',
		    	title:'想谈一场舒服的恋爱',
		    	name:'听见你的电台'
		    },{
		    	imgURL:'static/img/banner1.jpg',
		    	title:'喜欢你，是我独家的记忆',
		    	name:'芥末的晚安事件'
		    },{
		    	imgURL:'static/img/banner8.jpg',
		    	title:'删了心痛，留着没用',
		    	name:'事件电台'
		    }],
    	}
  	},
}
</script>
<style lang="less" scoped>
@import "../../var.less";
.recommend{
	position: relative;
	top: 4.5rem;
	.entry{
		width: 100%;
		height: 5rem;
		padding: 0.4rem 0;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		border-bottom: 0.1rem solid #e4e8e7;
		a{
			display: flex;
			width: 33.3%;
			height: 100%;
			flex-flow: column nowrap;
			justify-content: space-around;
			align-items:center;
			.entry-icon{
				width: 2.4rem;
				height: 2.4rem;
				border-radius: 50%;
				border:0.05rem solid @mainColor;
				padding: 0.1rem;
				position: relative;
				svg{
					width: 1.3rem;
					height: 1.3rem;
					position: absolute;
					top: 50%;
					margin-top: -0.65rem;
					left: 50%;
					margin-left: -0.65rem;
					fill:@mainColor;
				}
				span{
					width: 1rem;
					height: 1rem;
					font-size: 0.3rem;
					color: @mainColor;
					position: absolute;
					top: 50%;
					margin-top: -0.5rem;
					left: 50%;
					margin-left: -0.5rem;
					text-align: center;
					line-height: 1.4rem;
				}
			}
			.entry-title{
				color: black;
				font-size: 0.5rem;
			}
		}
	}
	.changeOrderList{
		display: flex;
		flex-flow:column nowrap;

		.recommend-list{
		padding-top: 0.8rem;
		width: 100%;
		display: flex;
		flex-flow: row wrap;
		justify-content:space-between;
		.cover{
			width: 33%;
			margin-bottom: 1rem;
			img{
				height: 5rem;
			}
		}
	}
	.exclusive{
		display: flex;
		flex-flow:row wrap;
		justify-content:space-between;
		.cover{
			width: 49.4%;
			img{
				height: 5rem;
			}
			p{
				font-size: 0.5rem;
			}
			&:last-child{
				width: 100%;
				height: 9rem;
				margin-top: 0.3rem;
				img{
					height: 6rem;
				}
			}
		}
	}
	.latest-music{
		display: flex;
		flex-flow: row wrap;
		justify-content:space-between;
		.cover{
			width: 33%;
			margin-bottom: 1rem;
			img{
				height: 5rem;
			}
			.cover-title{
				height: 0.9rem;
			}
		}
	}
	.mv{
		margin-top: 1rem;
		display: flex;
		flex-flow: row wrap;
		justify-content:space-between;
		.cover{
			width: 49.5%;
			margin-bottom: 1rem;
			img{
				height: 5rem;
			}
			.cover-title{
				height: 0.9rem;
			}
		}
	}
	.special-column{
		.column{
			width: 100%;
			height: 4rem;
			display: flex;
			justify-content:space-between;
			border-top: 1px solid #e1e5e4;
			.column-left{
				flex:1;
				padding: 0.5rem 0.3rem;
				position: relative;
				span:first-child{
					width: 1.4rem;
					height: 0.6rem;
					line-height: 0.6rem;
					color: @mainColor;
					border:1px solid @mainColor;
					font-size: 0.05rem;
					float: left;
					text-align: center;
					margin-right: 0.3rem;
				}
				p{
					font-size: 0.5rem;
					height: 2.4rem;
					line-height: 0.6srem;
				}
				span:last-child{
					color: #848887;
					position: absolute;
					bottom: 0.4rem;
					font-size: 0.4rem;
				}
			}
			.column-right{
				margin-left: 1rem;
				width: 5.5rem;
				height: 100%;
				img{
					display: inline-block;
					width: 100%;
					height: 100%;
				}
			}
			&:last-child{
				border-bottom: 1px solid #e1e5e4;
			}
		}
	}
	.fm{
		margin-top: 1rem;
		display: flex;
		flex-flow: row wrap;
		justify-content:space-between;
		.cover{
			width: 33%;
			margin-bottom: 1rem;
			img{
				height: 5rem;
			}
			.left-icon{
				width: 70%;
				position: absolute;
				top: auto;
				bottom: 0.4rem;
				text-overflow:ellipsis;
				overflow:hidden;
				white-space:nowrap;
			}
			.right-icon{
				width: 30%;
				height: 1.5rem;
				top: auto;
				bottom: 0.2rem;
				right: 0;
				svg{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	}
	.bottom{
		width: 100%;
		display: flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		height: 6rem;
		border-top: 1px solid #e1e5e4;
		p{
			font-size: 0.5rem;
			color: #848887;
		}
		a{
			display: inline-block;
			width: 4rem;
			height: 1.6rem;
			border:1px solid @mainColor;
			color: @mainColor;
			font-size: 0.4rem;
			border-radius: 1rem;
			text-align: center;
			line-height: 1.6rem;
			margin-top: 1rem;
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
  width: 2.6rem;
  height: 1rem;
  line-height: 1rem;
  padding-left: 0.6rem;
  border-radius: 1rem;
  color: white;
  position: absolute;
  right: -0.6rem;
  bottom: 0.3rem;
  font-size: 0.5rem;
}
.bgBlue{
	background-color: blue;
}
.bgRed{
	background-color: #c62f2f;
}
</style>