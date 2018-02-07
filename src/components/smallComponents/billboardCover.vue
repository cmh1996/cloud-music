<template>
	<div class="billboard-cover">
		<div class="left">
			<slot name="coverImg"></slot>
			<span><slot></slot></span>
		</div>
	<ul class="right">
		<slot name="order"></slot>
	</ul>
	</div>
</template>
<script>
export default{
	name:"billboardCover"
}
</script>
<style lang="less" scoped>
	.billboard-cover{
		width: 100%;
		height: 5rem;
		border-bottom: 0.01rem solid #e4e8e7;
		display: flex;
		align-items:center;
		.left{
			width: 5rem;
			height: 100%;
			position: relative;
			display: inline-block;
			margin-right: 0.6rem;
			img{
				width: 100%;
				height: 98%;
				position: absolute;
				top: 0.2rem;
				left: 0;
				display: inline-block;
			}
			span{
				color: white;
				position: absolute;
				bottom: 0.3rem;
				left: 0.4rem;
				font-size: 0.4rem;
			}
		}
		.right{
			display: inline-block;
			width: 65%;
			height: 70%;
			display: flex;
			flex-flow:column nowrap;
			justify-content: space-between;
			li{
				font-size: 0.5rem;
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				list-style-type: decimal;
				list-style-position: inside;
				span{
					font-size: 0.3rem;
					color: #8c809f;
					margin-left: 0.6rem;
					svg{
						width: 0.5rem;
						height: 0.5rem;
						fill: #8c809f;
					}
				}
			}
		}
	}
</style>