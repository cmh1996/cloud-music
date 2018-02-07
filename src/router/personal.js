import localSong from '../components/personal/localSong'
import recentlyPlay from '../components/personal/recentlyPlay'
import collection from '../components/personal/collection'
import myFM from '../components/personal/myFM'
import download from '../components/personal/download'
import personal from '../components/personal'

export default{
	path:'/personal',
	component:personal,
	children:[
		{
			path:'localSong',
			component:localSong
		},{
			path:'recentlyPlay',
			component:recentlyPlay
		},{
			path:'collection',
			component:collection
		},{
			path:'myFM',
			component:myFM
		},{
			path:'download',
			component:download
		}
	]
}