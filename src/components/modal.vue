<template>
  <Dialog
    :visible="visible"
    modal
    :header="header"
    :style="{ width: ($device.isMobile ? '90vw' : '30vw') }"
    :closable="false"
    @hide="onClose"
  >
    <p>{{ body }}</p>
    <template #footer>
      <div class="flex gap-8 justify-center">
        <Button :label="noWording" icon="pi pi-times" @click="onClose" />
        <Button :label="yesWording" icon="pi pi-check" @click="onSubmit" />
      </div>
    </template>
  </Dialog>
</template>
<script setup lang="ts">

defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  header: {
    type: String,
    default: 'header'
  },
  body: {
    type: String,
    default: 'body here hehe'
  },
  yesWording: {
    type: String,
    default: 'Yes'
  },
  noWording: {
    type: String,
    default: 'Cancel'
  }
})

const emits = defineEmits(['onClose', 'onSubmit'])

const onClose = () => {
  emits('onClose')
}

const onSubmit = () => {
  emits('onSubmit')
}

</script>
