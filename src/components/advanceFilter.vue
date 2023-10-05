<template>
  <div class="w-full h-fit text-light flex flex-row gap-12 mt-8">
    <div class="w-full flex flex-col gap-8">
      <MultiSlider
        label="Age"
        :min-value="1"
        :max-value="130"
        :current-value="age"
        tooltip-suffix=" yo"
        :merge-tooltips-diff="20"
        @valueUpdated="newVal => age = newVal"
      />
      <MultiSlider
        label="Income"
        :min-value="0"
        :max-value="100000000"
        :current-value="income"
        :step-interval="100000"
        tooltip-prefix="Rp."
        tooltip-suffix=" /month"
        :merge-tooltips-diff="52000000"
        @valueUpdated="newVal => income = newVal"
      />
    </div>
    <div class="w-full flex flex-col gap-6">
      <Dropdown
        label="Gender"
        :use-clear="true"
        placeholder="All Gender"
        :options="genderOptions"
      />
      <Dropdown
        label="Location"
        :use-clear="true"
        placeholder="All Location"
        :options="locationOptions"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import MultiSlider from '@/components/multiSlider.vue'

const gender = ref('male')
const age = ref([1, 130])
const income = ref([0, 1000000000])
const postalCode = ref(18011)

const emit = defineEmits(['gender', 'age', 'income', 'postalCode'])

watch(gender, () => {
  emit('gender', gender.value)
})

watch(age, () => {
  emit('age', age.value)
})

watch(income, () => {
  emit('income', income.value)
})

watch(postalCode, () => {
  emit('postalCode', postalCode.value)
})

const genderOptions = ref([
  {
    label: 'Male',
    value: 'male'
  },
  {
    label: 'Female',
    value: 'female'
  },
  {
    label: 'Undefined',
    value: 'undefined'
  },
  {
    label: 'All Gender',
    value: ''
  }
])
const locationOptions = ref([
  {
    label: 'Sleman, Yogyakarta',
    value: '18012'
  },
  {
    label: 'All Location',
    value: ''
  }
])

</script>
