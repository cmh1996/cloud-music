<template>
  <div id="app">
   <keep-alive include="changeOrder,publicFM">
      <router-view></router-view>
   </keep-alive>
    <loading v-if="isLoading"></loading>
    <player></player>
  </div>
</template>

<script>
import player from './components/smallComponents/player'
import loading from './components/smallComponents/loading'

export default {
  name: 'app',
  components: {player,loading},
  computed:{
    isLoading(){
      return this.$store.getters.getIsLoading;
    }
  },
  mounted(){

  }
}
</script>


<style lang="less" scoped>
#app{
	overflow: hidden;
  background-color: #f0f4f3;
	.player{
		position: fixed;
		bottom: 0;
	}
}
</style>
