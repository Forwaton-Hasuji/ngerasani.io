<template>
  <div class="flex flex-row w-full">
    <h1 class="w-1/5">
      {{ label }}
    </h1>
    <Dropdown
      :options="options"
      :show-clear="useClear"
      class="w-full h-8 ml-4 flex items-center justify-center bg-darkSecondary pl-2"
      :placeholder="placeholder"
      editable
      option-label="label"
    />
  </div>
</template>
<script setup lang="ts">
import Dropdown from 'primevue/dropdown'

interface IOption { label: string, value: string }

defineProps({
  label: {
    type: String,
    default: ''
  },
  options: {
    type: Array<IOption>,
    default: [{ label: 'Label 1', value: 'label1' }, { label: 'Label 2', value: 'label2' }]
  },
  modelValue: {
    type: String,
    default: ''
  },
  useClear: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: 'placeholder here ...'
  }
})

</script>
