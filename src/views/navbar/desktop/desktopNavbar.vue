<template>
  <div class="flex items-center absolute -right-12 top-[40vh] hover:right-20">
    <div class="w-32 h-fit bg-darkPrimary text-light flex flex-col-reverse items-center justify-center rotate-90">
      <img :src="useAsset('icons/arrow-down.png')" alt="" width="15" class="light-icon">
      <p class="text-xs">
        Navigation Bar
      </p>
    </div>
    <div class="w-32 h-fit flex flex-col gap-4 absolute left-20">
      <DesktopNavbarButton
        v-for="(item,i) in navbarList"
        :key="i"
        :label="item.label"
        :icon="item.iconUrl"
        :path="item.path"
        :is-selected="route.path.match(item.path)"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import navbarList from '../navbarList'
import DesktopNavbarButton from './desktopNavbarButton.vue'

const route = useRoute()

</script>
