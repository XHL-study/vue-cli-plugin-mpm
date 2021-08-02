import VueRouter from 'vue-router'
import Vue from 'vue';
Vue.use(VueRouter);

const routes = [
	{
		name:'home',
		path:'/home',
		component:() => import(/* webpackChunkName: "home" */ '../components/HelloWorld.vue')
	}
]

console.log(VueRouter)

const router = new VueRouter({
	routes,
	mode: 'hash',
});
export default router;
