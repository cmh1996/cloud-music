<template>
	<div class="change-order">
		<son-header>调整栏目顺序</son-header>
		<div class="tips">
			<svg class="icon" aria-hidden="true"><use xlink:href="#icon-lights"></use></svg>
			想调整首页栏目的顺序？按住右边的按钮拖动即可
		</div>
		<div ref="listWithHandle" class="list-group change-items">
			<div class="list-group-item" ref="item1" id="item1">
				<span>推荐歌单</span>
				<span class="glyphicon glyphicon-move"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-category"></use></svg></span>
			</div>
			<div class="list-group-item" ref="item2" id="item2">
				<span>独家放送</span>
				<span class="glyphicon glyphicon-move"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-category"></use></svg></span>
			</div>
			<div class="list-group-item" ref="item3" id="item3">
				<span>最新音乐</span>
				<span class="glyphicon glyphicon-move"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-category"></use></svg></span>
			</div>
			<div class="list-group-item" ref="item4" id="item4">
				<span>推荐MV</span>
				<span class="glyphicon glyphicon-move"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-category"></use></svg></span>
			</div>
			<div class="list-group-item" ref="item5" id="item5">
				<span>精选专栏</span>
				<span class="glyphicon glyphicon-move"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-category"></use></svg></span>
			</div>
			<div class="list-group-item" ref="item6" id="item6">
				<span>主播电台</span>
				<span class="glyphicon glyphicon-move"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-category"></use></svg></span>
			</div>
		</div>
		<div class="return" @touchstart="resort()">恢复默认排序</div>
	</div>
</template>
<script>
import sonHeader from '../smallComponents/sonHeader'
import Sortable from 'sortablejs'

export default{
	name:'changeOrder',
	components:{sonHeader},
	activated(){
		let list = this.$refs.listWithHandle;
		let item1 = this.$refs.item1;
		let item2 = this.$refs.item2;
		let item3 = this.$refs.item3;
		let item4 = this.$refs.item4;
		let item5 = this.$refs.item5;
		let item6 = this.$refs.item6;
		let sortable = new Sortable(list,{
			  handle: '.glyphicon-move',
			  animation: 150,
			  dataIdAttr: 'data-id',
			  onMove:function(evt,originalEvent){
			  	evt.dragged.setAttribute("style","opacity:0.3");
			  },
			  onEnd:function(evt){
			  	evt.item.setAttribute("style","opacity:1");
			  }
		});
	},
	deactivated(){
		let list = this.$refs.listWithHandle;
		let items = list.children;
		let item = [this.$refs.item1,
						this.$refs.item2,
						this.$refs.item3,
						this.$refs.item4,
						this.$refs.item5,
						this.$refs.item6];
		for(var i=0;i<items.length;i++){
			items[i].index=i;
		}
		let item1I = item[0].index;
		let item2I = item[1].index;
		let item3I = item[2].index;
		let item4I = item[3].index;
		let item5I = item[4].index;
		let item6I = item[5].index;
		this.$store.dispatch('setRecommendSongIndex',item1I);
		this.$store.dispatch('setExclusiveIndex',item2I);
		this.$store.dispatch('setLatestSongIndex',item3I);
		this.$store.dispatch('setRecommendMVIndex',item4I);
		this.$store.dispatch('setSpecialColumnIndex',item5I);
		this.$store.dispatch('setPublicFMIndex',item6I);
	},
	methods:{
		resort:function(){
			let list = this.$refs.listWithHandle;
			let item = [this.$refs.item1,
						this.$refs.item2,
						this.$refs.item3,
						this.$refs.item4,
						this.$refs.item5,
						this.$refs.item6];
			const cLength = list.children.length;
			let nitem = item.slice(0);
			list.innerHTML = "";
			for(var i=0;i<nitem.length;i++){
				list.appendChild(nitem[i]);
			}
		}
	}

}
</script>
<style lang="less" scoped>
.change-order{
	.tips{
		height: 1.6rem;
		line-height: 1.6rem;
		border-bottom: 0.01rem solid rgba(0, 0, 0, 0.1);
		font-size: 0.45rem;
		color: rgba(0, 0, 0, 0.5);
		width: 96%;
		margin: 0 auto;
		svg{
			fill: rgba(0, 0, 0, 0.5);
		}
	}
	.change-items{
		position: relative;
		height: 15rem;
		padding: 0 0.3rem;
		.list-group-item{
			height: 2.5rem;
			border-bottom: 0.01rem solid rgba(0, 0, 0, 0.1);
			line-height: 2.5rem;
			font-size: 0.7rem;
			position: relative;
			svg{
				fill:rgba(0, 0, 0, 0.5);
				position: absolute;
				right: 0;
				top: 50%;
				width: 1rem;
				height: 1rem;
				margin-top: -0.5rem;
			}
		}
	}
	.return{
		margin: 2rem auto 5rem auto;
		font-size: 0.6rem;
		color: rgba(0, 0, 0, 0.5);
		width: 4rem;
		height: 1rem;
		text-align: center;
		text-decoration: underline;
	}
}
</style>