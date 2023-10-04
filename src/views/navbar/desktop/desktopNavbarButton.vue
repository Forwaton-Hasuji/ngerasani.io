<template>
  <div class="w-full h-full flex" @click="onClick">
    <div class="w-full h-full flex justify-center text-light font-bold">
      <div class="flex flex-col justify-center items-center">
        <img
          :src="icon"
          :alt="label"
          width="25"
          class="light-icon"
        >
        <p>{{ label }}</p>
      </div>
    </div>
    <div v-if="isSelected" class="min-h-full w-[5px] bg-light" />
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: 'label'
  },
  icon: {
    type: String,
    default: ''
  },
  path: {
    type: String,
    default: ''
  },
  isSelected: {
    type: Boolean,
    default: false
  }
})

const router = useRouter()

const onClick = () => {
  router.push(props.path)
}

</script>
