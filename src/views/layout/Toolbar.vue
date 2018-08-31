<template>
    <div>
          <v-ons-page>
            <v-ons-toolbar>
                <div class="center">{{ title }}</div>
                <div class="right">
                    <v-ons-toolbar-button icon="ion-navicon, material: md-menu"></v-ons-toolbar-button>
                </div>
            </v-ons-toolbar>

            <p style="text-align: center">
                Some content.
            </p>
        </v-ons-page>
    </div>
</template>

<script>
export default {
    data () {
        return {
            title: 'My app'
        }
    }
}
</script>

<style scoped>

</style>
