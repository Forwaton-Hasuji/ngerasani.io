<template>
  <template v-if="$device.isMobile">
    <Mobile />
  </template>
  <template v-else>
    <Desktop />
  </template>
</template>
<script setup lang="ts">
import Desktop from '@/views/detail/desktop.vue'
import Mobile from '@/views/detail/mobile.vue'

definePageMeta({
  layout: 'main'
})
</script>
