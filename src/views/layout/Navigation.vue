<template>
  <v-ons-splitter>
    <v-ons-splitter-side
      swipeable width="150px" collapse="" side="left"
      :open.sync="currentOpenSide"
    >
      <v-ons-page>
        <v-ons-list>
          <v-ons-list-item
            v-for="(page, index) in pages"
            :key="index"
            tappable
            modifier="chevron"
            @click="routerSkip(page)"
          >
            <div class="center">{{ page }}</div>
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
            pages: ['home', 'device']
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
            console.log(name)
            this.updateOpenSide()
            this.$router.push({
                name
            })
        }
    }
}
</script>
