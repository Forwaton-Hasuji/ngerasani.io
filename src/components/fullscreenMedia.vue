<template>
  <div>
    <!-- all props & events -->
    <vue-easy-lightbox
      move-disabled
      :visible="visible"
      :imgs="test"
      :index="index"
      @hide="onClose"
    />
  </div>
</template>

<script setup lang="ts">
import VueEasyLightbox from 'vue-easy-lightbox'

defineProps({
  images: {
    type: Array<String>,
    default: ['']
  },
  visible: {
    type: Boolean,
    default: false
  },
  index: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['hide'])

const onClose = () => {
  emit('hide')
}

// test image with real url , change to props images after integration
const test = [
  'https://images.unsplash.com/photo-1533167649158-6d508895b680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
  'https://images.unsplash.com/photo-1533167649158-6d508895b680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
  'https://images.unsplash.com/photo-1533167649158-6d508895b680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
  'https://images.unsplash.com/photo-1533167649158-6d508895b680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
  'https://images.unsplash.com/photo-1533167649158-6d508895b680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
  'https://images.unsplash.com/photo-1533167649158-6d508895b680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
  'https://images.unsplash.com/photo-1533167649158-6d508895b680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80'
]

</script>
