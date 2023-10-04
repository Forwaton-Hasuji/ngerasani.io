<template>
  <div class="w-full h-[300px] text-light flex flex-col gap-2 items-center">
    <div class="flex rounded-lg w-full h-[240px] overflow-hidden relative">
      <img
        :src="useAsset(photoPath)"
        class="image-full w-full h-full object-cover"
      >
      <div class="absolute z-50 bottom-0">
        <h1 class="font-bold">
          {{ rating }}
          <span class="font-normal text-xs">
            /5     ({{ ratingCount }})
          </span>
        </h1>
        <div class="flex items-center space-x-1">
          <template v-for="i in 5" :key="i">
            <svg
              v-if="i <= rating"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 fill-current text-yellow-500"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 1.16667L11.0288 6.34727L16.5639 6.93875L12.4366 11.0943L13.4654 16.2749L10 13.9165L6.53458 16.2749L7.56338 11.0943L3.43613 6.93875L8.97119 6.34727L10 1.16667Z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 fill-current text-gray-300"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 1.16667L11.0288 6.34727L16.5639 6.93875L12.4366 11.0943L13.4654 16.2749L10 13.9165L6.53458 16.2749L7.56338 11.0943L3.43613 6.93875L8.97119 6.34727L10 1.16667Z"
              />
            </svg>
          </template>
        </div>
      </div>
    </div>
    <div>
      <h1 class="font-bold truncate w-full text-center text-xs h-fit">
        {{ name }}
      </h1>
      <p class="text-[9px]">
        <span>{{ job }}</span>
        -
        <span>{{ gender }}</span>
        -
        <span>{{ age }} yo</span>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  name: {
    type: String,
    default: ''
  },
  job: {
    type: String,
    default: ''
  },
  age: {
    type: Number,
    default: 0
  },
  gender: {
    type: String,
    default: ''
  },
  photoPath: {
    type: String,
    default: ''
  },
  rating: {
    type: Number,
    default: 3.6
  },
  ratingCount: {
    type: Number,
    default: 0
  }
})

</script>
