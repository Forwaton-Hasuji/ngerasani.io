<template>
  <template v-if="$device.isMobile">
    <Mobile />
  </template>
  <template v-else>
    <Desktop />
  </template>
</template>

<script setup lang="ts">
import Desktop from '@/views/profile/desktop.vue'
import Mobile from '@/views/profile/mobile.vue'

definePageMeta({
  layout: 'main'
})

</script>
