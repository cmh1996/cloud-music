<template>
	<transition name="set-fade" mode="out-in">
		<div class="set" id="set" v-if="setShowed">
			<div class="content">
				<div class="top">
					<div class="left">
						<img :src="getUser.head" alt="" />
						<span v-text="getUser.name" class="name"></span>
						<span v-text="'Lv.'+getUser.level" class="level"></span>
					</div>
					<span class="right" v-text="getUser.isSigned?'已签到':'签到'" @touchstart="sign"></span>
					<img :src="getUser.bg" alt="" class="bg">
				</div>
				<ul class="first">
					<li class="item">
						<svg class="icon" aria-hidden="true"><use xlink:href="#icon-signboard"></use></svg><span>我的消息</span>
					</li>
					<li class="item">
						<svg class="icon" aria-hidden="true"><use xlink:href="#icon-signboard"></use></svg><span>会员中心</span>
					</li>
					<li class="item">
						<svg class="icon" aria-hidden="true"><use xlink:href="#icon-signboard"></use></svg><span>商城</span>
					</li>
					<li class="item">
						<svg class="icon" aria-hidden="true"><use xlink:href="#icon-signboard"></use></svg><span>在线听歌免流量</span>
					</li>
				</ul>
				<ul class="second">
					<li class="item">
						<svg class="icon" aria-hidden="true"><use xlink:href="#icon-signboard"></use></svg><span>我的好友</span>
					</li>
					<li class="item">
						<svg class="icon" aria-hidden="true"><use xlink:href="#icon-signboard"></use></svg><span>附近的人</span>
					</li>
				</ul>
				<ul class="third">
					<li class="item">
						<svg class="icon" aria-hidden="true"><use xlink:href="#icon-signboard"></use></svg><span>个性换肤</span><span class="intro">官方红</span>
					</li>
					<li class="item">
						<svg class="icon" aria-hidden="true"><use xlink:href="#icon-signboard"></use></svg><span>听歌识曲</span>
					</li>
					<li class="item">
						<svg class="icon" aria-hidden="true"><use xlink:href="#icon-signboard"></use></svg><span>定时停止播放</span>
					</li>
					<li class="item">
						<svg class="icon" aria-hidden="true"><use xlink:href="#icon-signboard"></use></svg><span>音乐闹钟</span>
					</li>
					<li class="item">
						<svg class="icon" aria-hidden="true"><use xlink:href="#icon-signboard"></use></svg><span>驾驶模式</span>
					</li>
					<li class="item">
						<svg class="icon" aria-hidden="true"><use xlink:href="#icon-signboard"></use></svg><span>音乐云盘</span>
					</li>
				</ul>
				<div class="footer">
					<div class="footer-first">
						<svg class="icon" aria-hidden="true"><use xlink:href="#icon-signboard"></use></svg><span>夜间模式</span>
					</div>
					<div class="footer-second">
						<svg class="icon" aria-hidden="true"><use xlink:href="#icon-signboard"></use></svg><span>设置</span>
					</div>
					<div class="footer-third">
						<svg class="icon" aria-hidden="true"><use xlink:href="#icon-signboard"></use></svg><span>退出</span>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
	name:"set",
	computed:{
	    ...mapGetters([
	      'getUser', // 得到用户信息
	    ]),
	    setShowed(){
	    	return this.$store.getters.getSetShow;
	    }
	},
	updated(){
		let set = document.getElementById("set");
		//设置高度
		/*console.log(set);*/
		if(this.setShowed){
			set.style.height = window.innerHeight+"px";
			set.addEventListener("touchstart",(e)=>{
				if(e.target==set){
					this.$store.dispatch("setSetShow",false)
				}
			},false);
		}
	},
	methods:{
		sign:function(){
			this.$store.dispatch('setSign',true)
		},
		hideSet:function(){
		      let start_x = 0,
		          move_x = 0,
		          window_w = document.documentElement.clientWidth || document.body.clientWidth;
		      let diff_area = -(window_w/2);

		      document.addEventListener("touchstart",(e)=>{
		          start_x = e.targetTouches[0].clientX;
		      },false);

		      document.addEventListener("touchmove",(e)=>{
		          move_x = e.targetTouches[0].clientX;
		          let diff = move_x-start_x;
		          if(diff<diff_area){
		            this.$store.dispatch("setSetShow",false)
		          }
		      },false);
    	}
	},
	watch:{
    setShowed:function(newVal){
      if(newVal){
        this.hideSet();
      }
    }
  }
}
</script>
<style lang="less" scoped>
.set::-webkit-scrollbar{
	display: none;
}
.set{
	z-index: 1003;
	width: 181.5%;
	position: fixed;
	overflow-y: scroll;
	background-color: rgba(0, 0, 0, 0.5);
	.content{
		width: 13rem;
		background-color: #eff4f3;
		.top{
			background-color: black;
			height: 7rem;
			position: relative;
			overflow: hidden;
			.bg{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 1001;
				opacity: 0.7;
			}
			.left{
				position: absolute;
				left: 0.4rem;
				bottom: 0.6rem;
				width: 70%;
				z-index: 1002;
				img{
					width: 3rem;
					height: 3rem;
					border-radius: 50%;
				}
				.name{
					font-size: 0.6rem;
					color: white;
					max-width: 6.4rem;
					display: inline-block;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
					position: relative;
					top: 0.2rem;
				}
				.level{
					font-size: 0.3rem;
					color: white;
					padding: 0 0.3rem;
					border: 0.02rem solid white;
					border-radius: 1rem;
					display: inline-block;
					font-style: italic;
				}
			}
				.right{
					position: absolute;
					right: 0.4rem;
					bottom: 0.6rem;
					width: 2.4rem;
					height: 1rem;
					z-index: 1002;
					font-size: 0.5rem;
					border: 0.02rem solid white;
					border-radius: 1rem;
					text-align: center;
					line-height: 1rem;
					color: white;
				}
			}
		.first,.second,.third{
			background-color: white;
			li{
				width: 100%;
				height: 2.4rem;
				display: flex;
				align-items:center;
				padding-left: 0.4rem;
				position: relative;
				svg{
					width: 0.8rem;
					height: 0.8rem;
					fill: #949494;
					margin-right: 0.3rem;
				}
				span{
					color: black;
					font-size: 0.6rem;
				}
				.intro{
					color: #949494;
					font-size: 0.3rem;
					position: absolute;
					right: 0.4rem;
				}
			}
		}
		.second,.third{
			margin-top: 0.4rem;
		}
		.footer{
			position: fixed;
			bottom: 0;
			width: 13rem;
			height: 2.4rem;
			display: flex;
			align-items:center;
			border-top: 0.01rem solid #949494;
			background-color: white;
			div{
				font-size: 0.6rem;
				display: flex;
				align-items: center;
				justify-content:center;
				svg{
					width: 0.8rem;
					height: 0.8rem;
					fill: #949494;
					margin-right: 0.3rem;
				}
			}
			.footer-first{
				flex:3;
			}
			.footer-second,.footer-third{
				flex:2;
			}
		}
	}
}
.set-fade-enter-active,.set-fade-leave-active{
  transition: all 0.8s;
}
.set-fade-enter,.set-fade-leave-active{
  transform: translateX(-13rem);
  background-color: rgba(0, 0, 0, 0);
}
</style>