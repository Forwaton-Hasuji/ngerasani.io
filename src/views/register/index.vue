<template>
  <div :class="`${$device.isMobile ? 'pb-20' : 'h-[100vh]'} w-full bg-secondary relative flex`">
    <div
      class="z-50 w-10 h-10 rounded-full bg-lightPurple flex items-center justify-center fixed top-10 left-10"
      @click="backToLogin"
    >
      <img :src="useAsset('icons/arrow-left.png')" alt="" width="10" class="light-icon">
    </div>
    <div v-if="!$device.isMobile" class="w-1/2 h-full bg-primary flex items-center justify-center">
      <img :src="useAsset('icons/logo.png')" alt="" width="400">
    </div>
    <div :class="`${$device.isMobile ? 'w-full' : 'w-1/2'} h-full bg-secondary text-light flex flex-col items-center justify-center`">
      <h1 :class="`${$device.isMobile ? 'mt-24' : 'text-[30px]'} font-bold mb-8`">
        Let's create your account!
      </h1>
      <div class="flex flex-col gap-8 items-center">
        <!-- fullname -->
        <span class="p-float-label">
          <InputText id="fullname" v-model="fullname" class="h-8 text-black px-4 w-full" />
          <label for="fullname">Fullname</label>
        </span>
        <div :class="`${$device.isMobile ? 'flex flex-col gap-8' : 'grid grid-cols-2 gap-4 -mt-4'}`">
          <!-- gender -->
          <span class="p-float-label">
            <Dropdown
              id="gender"
              :options="genderOptions"
              option-label="label"
              class="w-[284px] h-[32px] flex items-center text-black px-4"
            />
            <label for="gender">Gender</label>
          </span>
          <!-- dob -->
          <span class="p-float-label">
            <Calendar id="dob" v-model="dob" class="w-[284px] h-[32px] text-black" />
            <label for="dob">Date of birth</label>
          </span>
          <!-- job -->
          <span class="p-float-label">
            <InputText id="job" v-model="job" class="h-8 text-black px-4" />
            <label for="job">Job</label>
          </span>
          <!-- income -->
          <span class="p-float-label">
            <InputText id="income" v-model="income" class="h-8 text-black px-4" />
            <label for="income">Income / month</label>
          </span>
        </div>
        <!-- location -->
        <span class="p-float-label">
          <Dropdown
            id="location"
            :options="locationOptions"
            option-label="label"
            class="w-[284px] h-[32px] flex items-center text-black px-4"
          />
          <label for="gender">Location</label>
        </span>
        <!-- email -->
        <span class="p-float-label">
          <InputText id="email" v-model="email" class="h-8 text-black px-4" />
          <label for="email">Email</label>
        </span>
        <!-- password -->
        <span class="p-float-label">
          <InputText id="password" v-model="password" class="h-8 text-black px-4" />
          <label for="password">Password</label>
        </span>
        <!-- confirm password -->
        <span class="p-float-label">
          <InputText id="confPass" v-model="confirmPassword" class="h-8 text-black px-4" />
          <label for="confPass">Confirm Password</label>
        </span>
        <Button label="Register" class="px-8 py-2 bg-primary" @click="registerSubmit" />
      </div>
      <p class="text-xs mt-8">
        Already have an account? <span class="font-bold cursor-pointer" @click="backToLogin">Log in</span>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import Calendar from 'primevue/calendar'
import Dropdown from 'primevue/dropdown'

const fullname = ref('')
// const gender = ref('')
const dob = ref('')
const job = ref('')
const income = ref('')
// const location = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

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
  }
])

const locationOptions = ref([
  {
    label: 'Sleman, Yogyakarta',
    value: '18012'
  }
])

const router = useRouter()
const backToLogin = () => {
  router.push('/login')
}
const registerSubmit = () => {
  router.push('/otp')
}

</script>
