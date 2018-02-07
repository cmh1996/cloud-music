// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import axios from '../config/http'
import './reset.less'
import iconfont from './iconfont'
import "./rem.js"
import data from './util/mock'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

//公共函数
Vue.prototype.$http = axios;
//滑动到底部
Vue.prototype.reachBottom = function(obj){
    let scrollT = document.body.scrollTop;
    let wholeH = document.body.scrollHeight;
    let clientH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if(scrollT + clientH>=wholeH){
      obj.ele.loadMore(obj);
      console.log('触发加载');
    }
}

//加载更多
Vue.prototype.loadMore = function(obj){
    if(obj.items.length >= obj.max_length) return;
    if(obj.ele.isLoadingMore!=true){
      obj.ele.isLoadingMore=true;
      obj.ele.$store.dispatch('setLoading',true);
      setTimeout(()=>{
        if(obj.items.length < obj.max_length){
        obj.ele.$store.dispatch('setMore',[...obj.items,...obj.items.slice(0,6)]);
        }
        obj.ele.isLoadingMore = false;
        obj.ele.$store.dispatch('setLoading',false);
      },1000) 
   }
}

//给定原数组，返回一个从原数组中取值的随机数组
Vue.prototype.randomArray = function(arr,len){
  if(!Array.isArray(arr)){
    console.log("请输入一个格式正确的数组");
    return;
  }else{
    if(arr.length<=len){
      console.log(arr.length+'新数组的长度应该小于原数组');
      return;
    }else{
      let newArr = new Array();
      for(let i=0;i<len;i++){
        let ran = Math.floor(Math.random()*arr.length);
        if(newArr.indexOf(arr[ran])==-1){
          newArr.push(arr[ran]);
        }else{
          i-=1;
        }
      }
      return newArr;
    }
  }
}