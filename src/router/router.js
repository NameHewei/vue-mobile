import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Navigation = () => import('../views/layout/Navigation.vue')
const Home = () => import('../views/layout/Home.vue')
const Login = () => import('../views/login/Login.vue')
const Device = () => import('../views/html5Device/Device.vue')
const Camera = () => import('../views/html5Device/Camera.vue')
const GeolocationU = () => import('../views/html5Device/Geolocation.vue')

export default new Router({
    routes: [
        {
            path: '/',
            component: Navigation,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: Home
                },
                {
                    path: 'login',
                    name: 'login',
                    component: Login
                },
                {
                    path: 'device',
                    name: 'device',
                    component: Device
                },
                {
                    path: 'camera',
                    name: 'camera',
                    component: Camera
                },
                {
                    path: 'geolocation',
                    name: 'geolocation',
                    component: GeolocationU
                }
            ]
        }
        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        // }
    ]
})
