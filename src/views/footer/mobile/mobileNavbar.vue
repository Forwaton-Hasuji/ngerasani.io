<template>
  <div class="w-full h-full flex">
    <NavbarButton
      v-for="(item,i) in navbarList"
      :key="i"
      :label="item.label"
      :icon="item.iconUrl"
      :path="item.path"
      :is-selected="route.path.match(item.path)"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useAsset } from '../../../composables/useAsset'
import NavbarButton from './mobileNavbarButton.vue'

const route = useRoute()

const navbarList = ref([
  {
    label: 'Home',
    path: '/home',
    iconUrl: useAsset('icons/home.png')
  },
  {
    label: 'Leaderboard',
    path: '/leaderboard',
    iconUrl: useAsset('icons/leaderboard.png')
  },
  {
    label: 'Profile',
    path: '/profile',
    iconUrl: useAsset('icons/profile.png')
  }
])

</script>
