<template>
  <div class="w-full h-12 rounded-lg bg-secondary py-2 px-4 flex">
    <div class="h-full min-h-fit flex items-center mr-4">
      <img :src="searchIcon" alt="" width="15" class="light-icon">
    </div>
    <input
      placeholder="search for person"
      :v-model="vModel"
      class="w-full"
      type="text"
      @input="updateValue"
    >
  </div>
</template>
<script setup lang="ts">
defineProps({
  vModel: {
    type: String,
    default: ''
  }
})
const searchIcon = useAsset('icons/search.png')

const emit = defineEmits([
  'update:modelValue',
  'input'
])

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
  emit('input', e)
}
</script>
<style scoped>
input[type="text"]
{
    background: rgba(0, 0, 0, 0);
    border: none;
    outline: none;
    color:white;
}
</style>
