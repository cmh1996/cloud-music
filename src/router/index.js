import Vue from 'vue'
import Router from 'vue-router'
import personal from './personal'
import song from './song'
import community from './community'
import search from './search'

import changeOrder from '../components/song/changeOrder'

Vue.use(Router)

export default new Router({
  routes: [
    personal,
    song,
    community,
    search,
    {
        path:"/",
        redirect:"/song/recommend"
    },{
        path:"/changeOrder",
        component:changeOrder
    }
  ]
})
