<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="center">{{ title }}</div>
            <div class="left" @click="handleOpenSide">
                <div class="header-box">
                    <div class="header-img"></div>
                </div>
            </div>
        </v-ons-toolbar>
        <v-ons-card>
            <img src="https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=06695f54a40ad128f6984b5f65e46e50&auto=format&fit=crop&w=500&q=60" alt="Onsen UI" style="width: 100%">
            <div class="title">
                DEVICE
            </div>
        </v-ons-card>
    </v-ons-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'home',
    data () {
        return {
            title: 'onsen'
        }
    },

    methods: {
        ...mapActions('common', ['updateOpenSide']),

        handleOpenSide () {
            this.updateOpenSide()
        }
    }
}
</script>

<style scoped lang="scss">
    .header-box{
        position: relative;
        margin-left: 10px;
        height: 100%;
    }
    .header-img{
        position: absolute;
        top: 50%;
        margin-top: -20px;
        height: 40px;
        width: 40px;
        overflow: hidden;
        border-radius: 50%;
        background: no-repeat url("https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f9b027f1ae70f3c65ec0337c710438c7&auto=format&fit=crop&w=500&q=60") center/cover
    }
</style>
