<template>
  <section class="flex flex-col gap-4 w-full h-screen justify-center items-center">
    <h1>HomePage</h1>
    <Button label="Increment" icon="pi pi-check" @click="increment" />
    <span>{{ count }}</span>
  </section>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '~/stores'

const store = useCounterStore()

const { count } = storeToRefs(store)
const { increment } = store
</script>
