<template>
  <v-ons-splitter>
    <v-ons-splitter-side
      swipeable width="150px" collapse="" side="left"
      :open.sync="openSide"
    >
      <v-ons-page>
        <v-ons-list>
          <v-ons-list-item
            v-for="(page, index) in pages"
            :key="index"
            tappable modifier="chevron"
            @click="currentPage = page; openSide = false"
          >
            <div class="center">{{ page }}</div>
          </v-ons-list-item>
        </v-ons-list>
      </v-ons-page>
    </v-ons-splitter-side>

    <v-ons-splitter-content>
      <component :is="currentPage" @toggleMenu="() => openSide = !openSide"></component>
    </v-ons-splitter-content>
  </v-ons-splitter>
</template>

<script>
import Home from './Home.vue'
import Device from '@/views/html5Device/Device'

export default {
    name: 'navigation',
    components: {
        Home,
        Device
    },
    data () {
        return {
            currentPage: 'Home',
            pages: ['Home', 'Device'],
            openSide: false
        }
    }
}
</script>
