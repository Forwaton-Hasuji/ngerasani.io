<template>
  <div class="w-full h-full flex justify-between items-center pr-4 pl-4">
    <img :src="logo" alt="" width="200">
    <div class="bg-secondary w-12 h-12 rounded-lg flex items-center justify-center">
      <img :src="notifIcon" alt="" width="30" class="light-icon">
      <div class="bg-red w-2 h-2 rounded-full absolute top-10 right-7" />
    </div>
  </div>
</template>
<script setup lang="ts">

const logo = useAsset('icons/logo.png')
const notifIcon = useAsset('icons/notification.png')

</script>
