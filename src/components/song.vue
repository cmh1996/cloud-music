<template>
  <div class="song">
  <m-header :selectPage="'song'"></m-header>
  <set></set>
  <public-nav>
	<span slot="navChild" @touchstart="turn('recommend')" :class="{selected:songPage=='recommend'}">个性推荐</span>
	<span slot="navChild" @touchstart="turn('songLists')" :class="{selected:songPage=='songLists'}">歌单</span>
	<span slot="navChild" @touchstart="turn('publicFM')" :class="{selected:songPage=='publicFM'}">主播电台</span>
	<span slot="navChild" @touchstart="turn('billboard')" :class="{selected:songPage=='billboard'}">排行榜</span>
  </public-nav>
  <router-view></router-view>
  </div>
</template>

<script>
import mHeader from './smallComponents/mHeader'
import publicNav from './smallComponents/publicNav'
import set from './smallComponents/set'
export default {
  name: 'song',
  components:{mHeader,publicNav,set},
  computed:{
  	songPage(){
  		let path = this.$route.path;
  		path = path.substr(path.lastIndexOf('/') + 1);
  		return path;
  	}
  },
  methods:{
  	turn:function(page){
  		this.$router.push('/song/'+page);
  	}
  },
}
</script>
<style lang="less" scoped>
.song{
  padding-bottom: 7rem;
	.publicNav{
		position: fixed;
    top: 2.5rem;
	}
}
</style>
