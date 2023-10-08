<template>
  <div class="w-full h-full flex justify-between items-center pr-4 pl-4">
    <img :src="logo" alt="" width="200">
    <div class="flex gap-4">
      <div class="bg-secondary w-12 h-12 rounded-lg flex items-center justify-center relative">
        <img :src="notifIcon" alt="" width="30" class="light-icon">
        <div class="bg-red w-2 h-2 rounded-full absolute top-4 right-2" />
      </div>
      <div class="bg-secondary w-12 h-12 rounded-lg flex items-center justify-center" @click="logoutClicked">
        <img :src="logoutIcon" alt="" width="30" class="light-icon">
      </div>
    </div>
  </div>
  <Modal
    :visible="isShowLogoutModal"
    header="Logout"
    body="Are you sure want to logout ?"
    @on-close="() => isShowLogoutModal = false"
    @on-submit="logoutSubmit"
  />
</template>
<script setup lang="ts">

const logo = useAsset('icons/logo.png')
const notifIcon = useAsset('icons/notification.png')
const logoutIcon = useAsset('icons/logout.png')

const isShowLogoutModal = ref(false)

const logoutClicked = () => {
  isShowLogoutModal.value = !isShowLogoutModal.value
}

const router = useRouter()
const logoutSubmit = () => {
  router.push('/login')
}

</script>
