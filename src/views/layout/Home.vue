<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="center">{{ title }}</div>
            <div class="left" @click="handleCallback">
                <img src="@/assets/head.png" alt="no" class="user-img">
            </div>
        </v-ons-toolbar>
        <p style="text-align: center">
            Welcome home.
        </p>
    </v-ons-page>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            title: 'onsen'
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
