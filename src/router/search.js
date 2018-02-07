import singerClassify from '../components/search/singerClassify'
import search from '../components/search'

export default{
	path:'/search',
	component:search,
	children:[
		{
			path:'singerClassify',
			component:singerClassify
		}
	]
}