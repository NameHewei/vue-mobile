<template>
    <div>
        <div>
            <h2>html5 device accept</h2>
            <ul>
                <li @click="routerSkip('test')">Test</li>
                <li @click="routerSkip('htmlDevice')">File</li>
                <li @click="routerSkip('touchEvent')">touch events</li>
                <li @click="routerSkip('geolocation')">geolocation</li>
                <li @click="routerSkip('fixed')">ios 中fixed定位问题</li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },

    methods: {
        routerSkip(name, query, params) {
            this.$router.push({
                name
            })
        }
    }
}
</script>

