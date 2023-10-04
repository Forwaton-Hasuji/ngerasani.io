<template>
  <header>
    <div v-if="$device.isMobile" class="w-full h-[12vh] bg-primary p-2">
      <MobileHeader />
    </div>
    <div v-else class="w-full h-[10vh] bg-primary">
      <DesktopHeader />
    </div>
  </header>
  <main>
    <div :class="`w-full bg-primary relative overflow-x-hidden no-scrollbar ${$device.isMobile ? 'overflow-scroll h-[78vh]' : 'h-[90vh]'}`">
      <slot />
      <DesktopNavbar v-if="!$device.isMobile" />
    </div>
  </main>
  <footer>
    <div v-if="$device.isMobile" class="w-full h-[10vh] max-h-[10vh] bg-darkPrimary">
      <MobileNavbar />
    </div>
  </footer>
</template>
<script setup lang="ts">
import MobileNavbar from '@/views/navbar/mobile/mobileNavbar.vue'
import DesktopNavbar from '@/views/navbar/desktop/desktopNavbar.vue'
import MobileHeader from '@/views/header/mobile/mobileHeader.vue'
import DesktopHeader from '@/views/header/desktop/desktopHeader.vue'

</script>
