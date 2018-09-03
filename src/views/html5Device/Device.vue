<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="center"> device </div>
            <div class="left" @click="handleCallback">
                <img src="@/assets/head.png" alt="no" class="user-img">
            </div>
        </v-ons-toolbar>
        <ul>
            <li>camera</li>
            <li>geolocation</li>
            <li>TouchEvents</li>
        </ul>
        <router-view/>
    </v-ons-page>
</template>

<script>

export default {
    data () {
        return {
            activeIndex: 0,
            tabs: [
            ]
        }
    },

    methods: {
        handleCallback () {
            this.$emit('toggleMenu')
        }
    }
}
</script>

<style scoped lang="scss">
    .user-img{
        margin-left: 10px;
        height: 80%;
        border-radius: 50%;
        vertical-align: middle
    }
</style>
