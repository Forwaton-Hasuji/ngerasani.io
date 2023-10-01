<template>
  <template v-if="$device.isMobile">
    <Mobile />
  </template>
  <template v-else>
    <Desktop />
  </template>
</template>

<script setup lang="ts">
import Desktop from '@/views/home/desktop.vue'
import Mobile from '@/views/home/mobile.vue'

definePageMeta({
  layout: 'main'
})

</script>
