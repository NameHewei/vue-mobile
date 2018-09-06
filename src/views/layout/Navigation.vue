<template>
  <v-ons-splitter>
    <v-ons-splitter-side
      swipeable width="200px" collapse="" side="left"
      :open.sync="currentOpenSide"
    >
      <v-ons-page>
        <div class="side-user">
            <div
                @click="routerSkip('login')"
            ></div>
        </div>
        <v-ons-list>
          <v-ons-list-item
            v-for="(item, index) in pages"
            :key="index"
            tappable
            modifier="chevron"

            @click="routerSkip(item.name)"
          >
            <div class="left">
                <v-ons-icon
                    :icon="item.icon"
                    class="list-item__icon"
                ></v-ons-icon>
            </div>
            <div class="center">{{ item.name }}</div>
          </v-ons-list-item>
        </v-ons-list>
      </v-ons-page>
    </v-ons-splitter-side>

    <v-ons-splitter-content>
        <router-view></router-view>
    </v-ons-splitter-content>
  </v-ons-splitter>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'navigation',
    data () {
        return {
            pages: [{
                name: 'home', icon: 'fa-home'
            }, {
                name: 'device', icon: 'fa-anchor'
            }]
        }
    },

    computed: {
        ...mapState('common', ['openSide']),

        currentOpenSide: {
            get () {
                return this.openSide
            },

            set (newVlaue) {
                this.updateOpenSide()
            }
        }
    },

    methods: {
        ...mapActions('common', ['updateOpenSide']),

        routerSkip (name) {
            this.updateOpenSide()
            this.$router.push({
                name
            })
        },

        randomColor () {
            const rendomN = () => (Math.floor(Math.random() * 255))
            return `rgb(${rendomN()},${rendomN()},${rendomN()})`
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "@/style/layout/navigation.scss";
</style>
