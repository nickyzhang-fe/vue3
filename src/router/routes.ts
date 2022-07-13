const login = () => import('@/views/login/index.vue');
const home = () => import('@/views/home/index.vue');
const demo = () => import('@/views/demo/index.vue');
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/login' },
    {
        path: '/login',
        name: 'login',
        component: login,
    }, {
        path: '/home',
        name: 'home',
        component: home,
    }, {
        path: '/demo',
        name: 'demo',
        component: demo,
    }
];
export default routes;