<template>
  <div class="w-full h-full flex flex-col" @click="onClick">
    <div
      class="w-full h-full flex flex-col items-center justify-center
            text-light font-bold"
    >
      <img
        :src="icon"
        :alt="label"
        width="25"
        class="light-icon"
      >
      <p>{{ label }}</p>
    </div>
    <div v-if="isSelected" class="h-[5px] w-full bg-light self-end" />
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

<style>
.light-icon {
    filter: invert(95%) sepia(6%) saturate(59%) hue-rotate(182deg) brightness(94%) contrast(86%);
}

</style>
