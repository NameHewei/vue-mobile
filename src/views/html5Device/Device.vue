<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="center">html</div>
            </v-ons-toolbar>

            <v-ons-tabbar swipeable position="auto"
                :tabs="tabs"
                :visible="true"
                :index.sync="activeIndex"
            >
        </v-ons-tabbar>
    </v-ons-page>
</template>

<script>
const Camera = () => import('./Camera.vue')

export default {
    data () {
        return {
            activeIndex: 0,
            tabs: [
                {
                    icon: this.md() ? null : 'ion-home',
                    label: 'Home',
                    page: Camera,
                    props: {
                        myProp: 'This is a page prop!'
                    },
                    key: 'Camera'
                }
            ]
        }
    },

    methods: {
        md () {
            return this.$ons.platform.isAndroid()
        }
    }
}
</script>

<style scoped>

</style>
