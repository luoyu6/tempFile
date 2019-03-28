import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import navBar from '@/components/navBar'
import goodsdetail from '@/components/goodsdetail'


Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'home',
      component: home,
    },
    
  {
			path: '/goodsdetail/:goodid',
			name: 'goodsdetail',
			component: goodsdetail
    },
    // {
		// 	path: '/goodsdetail',
		// 	name: 'goodsdetail',
		// 	component: goodsdetail
		// }
 
    
  ]
})
