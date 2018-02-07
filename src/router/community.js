import trend from '../components/community/trend'
import community from '../components/community'

export default{
	path:'/community',
	component:community,
	children:[
		{
			path:'trend',
			component:trend
		}
	]
}