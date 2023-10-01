<template>
  <header>
    <div v-if="$device.isMobile" class="w-full h-[12vh] bg-primary p-2">
      <MobileHeader />
    </div>
    <div v-else class="w-full h-[10vh] bg-primary" />
  </header>
  <main>
    <div :class="`w-full bg-primary ${$device.isMobile ? 'overflow-scroll h-[78vh]' : 'h-[90vh]'}`">
      <slot />
    </div>
  </main>
  <footer>
    <div v-if="$device.isMobile" class="w-full h-[10vh] max-h-[10vh] bg-darkPrimary">
      <MobileNavbar />
    </div>
  </footer>
</template>
<script setup lang="ts">
import MobileNavbar from '@/views/footer/mobile/mobileNavbar.vue'
import MobileHeader from '@/views/header/mobile/mobileHeader.vue'

</script>
