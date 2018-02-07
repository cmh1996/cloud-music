<template>
  <div class="player">
	<span class="left">
  		<img src="../../assets/album.jpg" alt="" slot="player-img"/>
	</span>
  	<div class="center">
  		<p class="music-name" slot="player-music-name">幸福了然后呢</p>
  		<p class="music-author" slot="player-music-author">A-Lin</p>
  	</div>
  	<div class="right">
  		<span slot="player-play-btn">
  			<svg class="icon" aria-hidden="true"><use xlink:href="#icon-icon-test2"></use></svg>
  		</span>
  		<span slot="player-list-btn">
  			<svg class="icon" aria-hidden="true"><use xlink:href="#icon-icon-test14"></use></svg>
  		</span>
  	</div>
  </div>
</template>
<script>
export default {
  name: 'player',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../var.less";
.player{
	width: 100%;
	height: 2.5rem;
	background-color: @playerColor;
	display: flex;
	border-top: 1px solid #c6c6c6;
	padding: 0.3rem;
	flex-flow:row nowrap;
	align-items: center;
	z-index: 999;
		.left{
			width: 1.9rem;
			height: 1.9rem;
			margin-right: 0.4rem;
			img{
				width: 100%;
				height: 100%;
				display: inline-block;
			}
		}
		.center{
			flex:1;
			display: flex;
			flex-flow:column nowrap;
			justify-content: space-around;
				.music-name{
					color: black;
					font-size: 0.6rem;
				}
				.music-author{
					color: #585858;
					font-size: 0.5rem;
				}
		}
		.right{
			height: 1.4rem;
			display: flex;
			span{
				width: 1.4rem;
				height: 100%;
				&:last-child{
					margin-left: 1rem;
				}
				svg{
				width: 100%;
				height: 100%;
				fill:@playerBtnColor;
				}
			}
	    }
}
</style>