import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import VueOnsen from 'vue-onsenui' // This already imports 'onsenui'

/**
 * @des 引入cube-ui
 */
import './cube-ui'

/**
 * @des 引入on-sen
 */
Vue.use(VueOnsen)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
