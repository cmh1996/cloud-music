<template>
  <div class="community">
     <m-header :selectPage="'community'"></m-header>
     <set></set>    
     <layer>
       <div slot="item">下一首播放</div>
       <div slot="item">不感兴趣，减少这类推荐</div>
       <div slot="item">不再显示推荐动态</div>
       <div slot="item">举报</div>
     </layer>
     <div class="content">
       <div class="topic">
         <div class="t-bar">热门话题<svg class="icon"><use xlink:href="#icon-more"></use></svg></div>
         <div class="t-content">
           <div class="t-content-container" ref="container">
             <div class="t-content-item" v-for="item in topices">
               <img :src="item.bg" alt="" />
               <p v-text="'#'+item.title+'#'"></p>
             </div>
           </div>
         </div>
       </div>
       <trend v-for="(item,index) in getTrendList" :key="item" :type="item.trendType" :followed="item.followed" :i="index"> 
           <img :src="item.headImg" alt="" slot="headImg" />
           <span slot='name' v-text="item.name" class="name"></span>
           <span slot='time' v-text="item.time" class="time"></span>
           <p slot="content-p" v-text="item.contentP" class="content-p"></p>
           <img :src="photo.imgURL" alt="" v-for="photo in item.photoList" slot="photo"/>
           <img :src="item.videoCover" slot="videoCover" alt="" />
           <span slot="videoTime" v-text="item.videoTime"></span>
           <p slot="content-tips" class="content-tips" v-text="'——'+item.tips"></p>
           <span slot="likeNum" v-text="item.likeNum"></span>
           <span slot="commentNum" v-text="item.commentNum"></span>
           <span slot="shareNum" v-text="item.shareNum"></span>
       </trend>
     </div>
     <div class="post_point" ref="point">+</div>
     <div class="post-model" ref="model">
       <div class="post-btn" ref="btn">
           <div class="btn">
             <div class="btn-img">
               <svg class="icon"><use xlink:href="#icon-more"></use></svg>
             </div>
             <span>发动态</span>
           </div>
           <div class="btn">
             <div class="btn-img">
               <svg class="icon"><use xlink:href="#icon-more"></use></svg>
             </div>
             <span>发短视频</span>
           </div>
          </div> 
       </div>
  </div>
</template>

<script>
import layer from './smallComponents/layer'
import mHeader from './smallComponents/mHeader'
import set from './smallComponents/set'
import trend from './community/trend'
import { mapGetters } from 'vuex'
export default {
  name: 'community',
  components:{mHeader,set,trend,layer},
  computed:{
      ...mapGetters([
        'getTrendList', // 得到动态
      ]),
  },
  data () {
    return {
      topices:[
        {
          bg:"static/img/banner1.jpg",
          title:"把你最喜欢的歌词改成段子"
        },{
          bg:"static/img/banner4.jpg",
          title:"人生中第一位男神"
        },{
          bg:"static/img/banner2.jpg",
          title:"最无法形容的心路历程"
        },{
          bg:"static/img/banner5.jpg",
          title:"青春校园励志歌曲"
        },{
          bg:"static/img/banner8.jpg",
          title:"全部话题 >"
        },
      ]
    }
  },
  mounted(){
    window.scrollTo(0,0);
    //动态设置话题container宽度
    let container = this.$refs.container;
    let cWidth = this.topices.length*7.2;
    container.style.width = cWidth+'rem';

    //设置发布按钮显示与否
    let point = this.$refs.point;
    let start_Y = 0,
        move_Y = 0,
        diff = 0;
    let start_Fn = (e)=>{
      start_Y = e.targetTouches[0].clientY;
    }
    let move_Fn = (e)=>{
      move_Y = e.targetTouches[0].clientY;
      diff = move_Y-start_Y;
      if(diff<=0){
        point.style.transform = "translateY(4rem)";
      }else{
        point.style.transform = "translateY(0rem)";
      }
    }
    document.addEventListener("touchstart",start_Fn,false);
    document.addEventListener("touchmove",move_Fn,false);

    //设置发布模态框全屏宽高
    let model = this.$refs.model;
    let w = document.documentElement.clientWidth || document.body.clientWidth;
    let h = document.documentElement.clientHeight || document.body.clientHeight;
    model.style.width = w+'px';
    model.style.height = h+'px';

    //弹出弹框
    let btn = this.$refs.btn;
    point.addEventListener("touchstart",()=>{
      model.style.display = "block";
      btn.style.transform = "translateY(-7rem)";
    },false);

    //隐藏弹框
    model.addEventListener("touchstart",(e)=>{
       if(e.target===model){
        model.style.display = "none";
        btn.style.transform = "translateY(0rem)";
       }
    })
  },
 /* beforeDestroy(){
    document.removeEventListener("touchstart",start_Fn,false);
    document.removeEventListener("touchmove",move_Fn,false);
  }*/
}
</script>

<style lang="less" scoped>
@import "../var.less";
.community{
  padding-bottom: 7rem;
	.content{
    position: relative;
    top: 2.5rem;
    .topic{
      width: 100%;
      border-bottom: 0.01rem solid rgba(0, 0, 0, 0.1);
      padding-top: 0.6rem;
      padding-bottom: 1rem;
      padding-left: 0.4rem;
      .t-bar{
        width: 100%;
        height: 1.4rem;
        font-size: 0.6rem;
        display: flex;
        align-items:center;
        svg{
          margin-left: 0.4rem;
          width: 0.8rem;
          height: 0.8rem;
          fill:black;
        }
      }
      .t-content::-webkit-scrollbar{
         display: none;
      }
      .t-content{
        width: 100%;
        height: 4rem;
        overflow-x: scroll;
        position: relative;
        .t-content-container{
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          .t-content-item{
            width: 7rem;
            height: 100%;
            position: relative;
            display: inline-flex;
            align-items:center;
            justify-content:center;
            margin-right: 0.2rem;
            background-color: black;
            overflow: hidden;
            float: left;
            img{
              position: absolute;
              width: 100%;
              height: 100%;
              opacity: 0.7;
            }
            p{
              width: 5rem;
              font-size: 0.6rem;
              color: white;
              position: absolute;
              text-align: center;
            }
          }
        } 
      }
    }
  }
  .post_point{
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: @mainColor;
    position: fixed;
    left: 0.4rem;
    bottom: 3.2rem;
    text-align: center;
    line-height: 1.8rem;
    color: white;
    font-size: 2rem;
    font-weight: lighter;
    transition: all 0.4s;
  }
  .post-model{
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1003;
    display: none;
    transition: all 1.4s;
    .post-btn{
      position: absolute;
      bottom: -7rem;
      width: 100%;
      height: 7rem;
      background-color: white;
      display: flex;
      transition: all 1.4s;
      .btn{
        width: 50%;
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        .btn-img{
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background-color: @mainColor;
          display: flex;
          justify-content: center;
          align-items: center;
          svg{
            fill:white;
            width: 2rem;
            height: 2rem;
          }
        }
        span{
          font-size: 0.6rem;
          margin-top: 0.6rem;
          color: grey;
        }
      }
    }
  }
}
</style>