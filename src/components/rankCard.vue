<template>
  <div class="w-full flex flex-col">
    <div class="flex items-center gap-4">
      <Avatar :label="rank" class="bg-secondary w-10 h-10 text-white font-semibold" />
      <div class="rounded-full w-12 h-12 overflow-hidden">
        <img
          :src="useAsset(photoUrl)"
          class="image-full w-full h-full object-cover"
        >
      </div>
      <div class="flex flex-col">
        <p class="text-lg text-white font-semibold">
          {{ name }}
        </p>
        <p class="text-goldenYellow flex items-end gap-x-4">
          <span class="font-bold text-base">
            {{ rating }} /
            <span class="font-bold text-sm">5</span>
          </span>
          <span class="font-bold text-sm">({{ ratingCount }})</span>
        </p>
        <!-- <div class="flex gap-2">
            <img v-for="i in rating" :key="i" :src="useAsset('icons/star-yellow.png')" alt="" width="10">
          </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar'
defineProps({
  photoUrl: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  rank: {
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    default: 5
  },
  ratingCount: {
    type: Number,
    default: 0
  }
})
</script>
