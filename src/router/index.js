import Vue from 'vue'
import Router from 'vue-router'

/*----------------------------------*/
const Index = resolve => require(['@/views/index'],resolve);

const Lunbo = resolve => require(['@/components/lunbo'], resolve);
const Dialog = resolve => require(['@/components/dialog'], resolve);
const Choujiang = resolve => require(['@/components/choujiang/choujiang'], resolve);
/*----------------------------------*/
Vue.use(Router)

export default new Router({
		routes: [{
			path: '/',
			name: 'Index',
			component: Index,
			children: [
			{
				path: '/lunbo',
				name: 'Lunbo',
				component: Lunbo
			},
			{
				path: '/dialog',
				name: 'Dialog',
				component: Dialog
			},
			{
				path: '/choujiang',
				name: 'Choujiang',
				component: Choujiang
			}
			]
		},
		
	]
})