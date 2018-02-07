import recommend from '../components/song/recommend'
import songLists from '../components/song/songLists'
import publicFM from '../components/song/publicFM'
import billboard from '../components/song/billboard'
import song from '../components/song'

export default{
	path:'/song',
	component:song,
	redirect:'/song/recommend',
	children:[
		{
			path:'recommend',
			component:recommend
		},{
			path:'songLists',
			component:songLists,
		},{
			path:'publicFM',
			component:publicFM
		},{
			path:'billboard',
			component:billboard
		}
	]
}