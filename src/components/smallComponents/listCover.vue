<template>
	<div class="cover">
		<div class="cover-top">
			<slot name="cover-img"></slot>
			<slot name="cover-left-icon"></slot>
			<slot name="cover-right-icon"></slot>
		</div>
		<div class="cover-bottom">
			<slot name="cover-title"></slot>
			<slot name="cover-p"></slot>
		</div>
	</div>
</template>
<script>
export default{
	name:'listCover'
}
</script>
<style lang="less" scoped>
.cover{
	width: 33%;
	.cover-top{
		position: relative;
		width: 100%;
		img{
			width: 100%;
			height: 100%;
		}
		.left-icon{
			position: absolute;
			top: 0.2rem;
			left: 0.2rem;
			color: white;
			font-size: 0.6rem;
			svg{
				width: 0.6rem;
				height: 0.6rem;
				fill:white;
			}
		}
		.right-icon{
			position: absolute;
			top: 0.2rem;
			right: 0.2rem;
			color: white;
			font-size: 0.6rem;
			svg{
				width: 0.6rem;
				height: 0.6rem;
				fill:white;
			}
		}
	}
	.cover-bottom{
		margin-left: 0.2rem;
		margin-top: 0.2rem;
		width: 92%;
		.cover-title{
			font-size: 0.5rem;
			height: 1.6rem;
			line-height: 0.8rem;
			overflow: hidden;
		}
		.cover-p{
			color: #909493;
			font-size: 0.5rem;
			overflow: hidden;
			height: 0.8rem;
			line-height: 0.8rem;
		}
	}
}
</style>