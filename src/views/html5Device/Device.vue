<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="center"> device </div>
            <div class="left custom-left">
                <v-ons-icon
                    icon="md-chevron-left"
                    size="lg"
                    @click="routerSkip('goback')"
                ></v-ons-icon>
            </div>
        </v-ons-toolbar>

        <v-ons-list>
            <v-ons-list-item @click="routerSkip('camera')" modifier="chevron" tappable>camera</v-ons-list-item>
            <v-ons-list-item @click="routerSkip('geolocation')" modifier="chevron" tappable>geolocation</v-ons-list-item>
            <v-ons-list-item @click="routerSkip('camera')" modifier="chevron" tappable>TouchEvents</v-ons-list-item>
        </v-ons-list>

    </v-ons-page>
</template>

<script>

export default {
    data () {
        return {}
    },

    methods: {
        routerSkip (name) {
            if (name === 'goback') {
                this.$router.go(-1)
                return
            }

            this.$router.push({
                name
            })
        }
    }
}
</script>

<style scoped lang="scss">
    .custom-left{
        padding-left: 10px;
    }
</style>
