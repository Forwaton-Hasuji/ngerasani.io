<template>
  <div class="min-w-full min-h-[100vh] flex">
    <div v-if="!$device.isMobile" class="w-2/3 bg-primary flex items-center justify-center">
      <img :src="useAsset('icons/logo.png')" alt="" width="400">
    </div>
    <div :class="`${$device.isMobile ? 'w-full' : 'w-1/3'} bg-secondary flex flex-col items-center justify-center text-light`">
      <img v-if="$device.isMobile" :src="useAsset('icons/logo.png')" alt="" width="300" class="mb-12">
      <h1 class="text-[30px] font-bold">
        Welcome back !
      </h1>
      <h1 class="text-xs font-extralight mb-8 ">
        Please enter your details
      </h1>
      <div class="flex flex-col gap-8 items-center">
        <span class="p-float-label">
          <InputText id="email" v-model="email" class="h-8 text-black px-4" />
          <label for="email">Email</label>
        </span>
        <span class="p-float-label">
          <InputText id="password" v-model="password" class="h-8 text-black px-4" />
          <label for="password">Password</label>
        </span>
        <Button label="Login" class="px-8 py-2 bg-primary" @click="loginSubmit" />
        <Button class="px-4 py-1 bg-light text-black">
          <img :src="useAsset('icons/google.png')" width="40">
          <p>Log in with Google</p>
        </Button>
      </div>
      <p class="text-xs mt-8">
        Don't have an account? <span class="font-bold cursor-pointer" @click="goToRegister">Sign Up</span>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from 'primevue/button'

const email = ref('')
const password = ref('')

const router = useRouter()
const goToRegister = () => {
  router.push('/register')
}
const loginSubmit = () => {
  router.push('/home')
}

</script>
