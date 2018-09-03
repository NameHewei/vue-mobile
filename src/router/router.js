import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Navigation = () => import('../views/layout/Navigation.vue')
const Camera = () => import('../views/html5Device/Camera.vue')
const GeolocationU = () => import('../views/html5Device/Geolocation.vue')

export default new Router({
    routes: [
        {
            path: '/',
            name: 'navigation',
            component: Navigation,
            children: [
                {
                    path: 'camera',
                    component: Camera
                },
                {
                    path: 'geolocation',
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
