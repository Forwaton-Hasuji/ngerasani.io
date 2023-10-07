<template>
  <div class="flex flex-row items-center justify-between gap-4 w-full">
    <h1 class="w-1/5">
      {{ label }}
    </h1>
    <Slider
      v-model="currentRangeValue"
      class="w-full"
      :lazy="true"
      :min="minValue"
      :max="maxValue"
      :merge="mergeTooltipsDiff"
      :step="stepInterval"
      :format="{prefix: tooltipPrefix,suffix: tooltipSuffix, decimals: 0, thousand: '.'}"
    />
  </div>
</template>
<script setup lang="ts">
// eslint-disable-next-line import/default
import Slider from '@vueform/slider'

const props = defineProps({
  minValue: {
    type: Number,
    default: 0
  },
  maxValue: {
    type: Number,
    default: 100
  },
  currentValue: {
    type: Array<Number>,
    default: [0, 100]
  },
  stepInterval: {
    type: Number,
    default: 1
  },
  tooltipPrefix: {
    type: String,
    default: ''
  },
  tooltipSuffix: {
    type: String,
    default: ''
  },
  mergeTooltipsDiff: {
    type: Number,
    default: 1
  },
  label: {
    type: String,
    default: ''
  }
})

const currentRangeValue = ref(props.currentValue)
const emit = defineEmits(['valueUpdated'])
watch(currentRangeValue, () => {
  emit('valueUpdated', currentRangeValue.value)
})

</script>
<style src="@vueform/slider/themes/default.css">

</style>
