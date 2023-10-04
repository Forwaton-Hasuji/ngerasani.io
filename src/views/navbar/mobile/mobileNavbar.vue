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
import navbarList from '../navbarList'
import NavbarButton from './mobileNavbarButton.vue'

const route = useRoute()

</script>
