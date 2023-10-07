<template>
  <div class="text-light px-6 py-4 relative flex flex-col">
    <div
      class="z-50 w-10 h-10 rounded-full bg-lightPurple flex items-center justify-center fixed"
      @click="backToHome"
    >
      <img :src="useAsset('icons/arrow-left.png')" alt="" width="10" class="light-icon">
    </div>

    <div class="flex">
      <div class="px-20 w-1/2">
        <div v-if="isYou" class="flex items-center ml-16 gap-2 mb-4">
          <h1>This is you !</h1>
          <div class="w-40 h-8 bg-lightPurple flex items-center justify-center text-sm rounded">
            <h1>Update Your Profile</h1>
          </div>
        </div>

        <h1 class="font-bold mt-4">
          {{ profile.name }}
        </h1>

        <div class="flex gap-6 my-4">
          <div class="flex w-full gap-4">
            <div class="flex gap-1">
              <img :src="useAsset('icons/star-yellow.png')" alt="" width="12">
              <p class="text-yellowStar text-xs">
                {{ ratingAverage(rating) }}
              </p>
            </div>
            <div class="flex gap-1">
              <img :src="useAsset('icons/location.png')" alt="" width="15">
              <p class="text-xs">
                {{ profile.location }}
              </p>
            </div>
          </div>
        </div>

        <div class="w-full overflow-scroll mt-2 flex gap-x-2 no-scrollbar">
          <div
            v-for="(tag,i) in profile.tags"
            :key="i"
            class="rounded-lg bg-medPurple min-w-fit text-xs p-2"
          >
            <h1>{{ tag }}</h1>
          </div>
        </div>

        <div class="mt-12 flex flex-col gap-4">
          <div class="flex ml-8 gap-8">
            <img :src="useAsset('icons/gender.png')" alt="" width="30">
            <p class="text-base">
              {{ profile.gender }}
            </p>
          </div>
          <div class="flex ml-8 gap-8">
            <img :src="useAsset('icons/birthday.png')" alt="" width="30">
            <p class="text-base">
              {{ profile.dob }} ( {{ ageCounter(profile.dob) }} yo )
            </p>
          </div>
          <div class="flex ml-8 gap-8">
            <img :src="useAsset('icons/job.png')" alt="" width="30">
            <p class="text-base">
              {{ profile.job }}
            </p>
          </div>
          <div class="flex ml-8 gap-8">
            <img :src="useAsset('icons/income.png')" alt="" width="30">
            <p class="text-base">
              Rp. {{ thousandSeparator(profile.income) }} /month
            </p>
          </div>
        </div>

        <p class="text-base mt-12">
          {{ profile.bio }}
        </p>
      </div>

      <div class="w-1/2">
        <div
          class="rounded-xl w-[280px] h-[280px] ml-8 overflow-hidden mt-8"
          @click="showImageViewer"
        >
          <img
            :src="useAsset(profile.imagePaths[selectedPhotoIndex])"
            class="image-full w-full h-full object-cover"
          >
        </div>

        <div class="grid grid-cols-5 w-fit mt-4">
          <div
            v-for="(photo,i) in profile.imagePaths"
            :key="i"
            :class="`w-fit p-1 rounded-xl ${selectedPhotoIndex === i ? 'border-light border-4' : ''}`"
            @click="() => selectedPhotoIndex = i"
          >
            <img
              :src="useAsset(photo)"
              class="image-full w-[70px] h-[70px] object-cover rounded-xl"
            >
          </div>
        </div>
      </div>
    </div>

    <div class="px-20">
      <div class="flex flex-col w-full mt-8">
        <h1 class="font-semibold mb-4">
          Reviews
        </h1>
        <!-- stars -->
        <div class="flex items-center">
          <div class="flex flex-col gap-2">
            <div v-for="i in 5" :key="i" class="flex gap-4">
              <div v-for="x in (6-i)" :key="x">
                <img :src="useAsset('icons/star-yellow.png')" alt="" width="12">
              </div>
              <p class="text-yellowStar text-xs">
                ( {{ rating[`star${6-i}`] }} )
              </p>
            </div>
          </div>

          <p class="text-yellowStar text-[50px] ml-28">
            {{ ratingAverage(rating) }}
            <span class="text-[30px]">/ 5</span>
            <span class="text-[30px] ml-12">( {{ thousandSeparator(rating.total) }} )</span>
          </p>
        </div>
      </div>

      <!-- reviews per 3 -->
      <div class="flex flex-col gap-4 mt-8">
        <ReviewCard
          v-for="(review,i) in reviews"
          :key="i"
          :photo-url="review.photoUrl"
          :name="review.name"
          :created-at="review.createdAt"
          :rating="review.rating"
          :comment="review.comment"
          :is-mobile="false"
        />
      </div>
      <div class="flex justify-center w-full text-xs mt-12">
        ...( Load More )...
      </div>

      <!-- submit review -->
      <div class="mt-16 mb-72">
        <div v-if="isLoggedIn" class="flex flex-col items-center">
          <div class="rounded-full w-20 h-20 overflow-hidden">
            <img
              :src="useAsset('images/dummy-photo-5.jpg')"
              class="image-full w-full h-full object-cover"
            >
          </div>
          <div class="flex gap-4 mt-4">
            <img
              v-for="i in 5"
              :key="i"
              :src="useAsset('icons/star-black.png')"
              :class="selectedRating >= i ? 'yellow-icon' : 'light-icon'"
              width="35"
              @click="() => selectedRating = i"
            >
          </div>
          <Textarea class="h-24 w-[400px] mt-4 bg-darkPrimary p-2 text-xs" placeholder="Enter your review ..." />
          <div class="w-28 h-12 bg-lightPurple font-bold flex items-center justify-center mt-8 rounded">
            SUBMIT
          </div>
        </div>
        <div v-else class="flex flex-col items-center">
          <h1>Please login to submit your review</h1>
          <div class="w-28 h-12 bg-lightPurple font-bold flex items-center justify-center mt-8 rounded">
            LOGIN
          </div>
        </div>
      </div>
    </div>
    <FullscreenMedia
      :images="profile.imagePaths"
      :index="selectedPhotoIndex"
      :visible="isShowImageViewer"
      @hide="isShowImageViewer = false"
    />
  </div>
</template>
<script setup lang="ts">
import { profile, reviews, rating } from './dummy-data'
import FullscreenMedia from '~/components/fullscreenMedia.vue'

const isYou = ref(false)
const isLoggedIn = ref(true)
const selectedPhotoIndex = ref(0)

const selectedRating = ref(0)

const isShowImageViewer = ref(false)

const router = useRouter()
const backToHome = () => {
  router.push('/home')
}

const showImageViewer = () => {
  console.log('woi')
  isShowImageViewer.value = true
}

</script>
