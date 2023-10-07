<template>
  <div class="w-full flex flex-col">
    <div class="flex items-center gap-4">
      <div :class="`rounded-full ${isMobile ? 'w-10 h-10' : 'w-12 h-12'} overflow-hidden`">
        <img
          :src="useAsset(photoUrl)"
          class="image-full w-full h-full object-cover"
        >
      </div>
      <div class="flex flex-col -gap-2">
        <p :class="isMobile ? 'text-sm' : ''">
          {{ name }}
        </p>
        <p :class="isMobile ? 'text-[10px] font-extralight' : 'text-sm'">
          {{ toLongDate(createdAt) }}
        </p>
        <div class="flex gap-2">
          <img v-for="i in rating" :key="i" :src="useAsset('icons/star-yellow.png')" alt="" width="10">
        </div>
      </div>
    </div>

    <div :class="isMobile ? 'text-xs ml-4 mt-2' : 'ml-4 mt-2'">
      "{{ comment }}"
    </div>
  </div>
</template>
<script setup lang="ts">
import { toLongDate } from '@/utils/date-converter'

defineProps({
  photoUrl: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  createdAt: {
    type: String,
    default: ''
  },
  rating: {
    type: Number,
    default: 0
  },
  comment: {
    type: String,
    default: ''
  },
  isMobile: {
    type: Boolean,
    default: true
  }
})
</script>
