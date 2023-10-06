<template>
  <div class="px-6 py-2">
    <div class="w-full flex gap-4">
      <SearchBox />
      <div
        class="bg-secondary min-w-[48px] h-12 rounded-lg flex items-center justify-center"
        @click="toogleAdvanceFilter"
      >
        <img v-if="isShowAdvFilter" :src="useAsset('icons/close.png')" alt="" width="30" class="light-icon">
        <img v-else :src="useAsset('icons/advance-search.png')" alt="" width="30" class="light-icon">
      </div>
    </div>

    <div v-if="isShowAdvFilter">
      <AdvanceFilter :is-mobile="true" />
    </div>
    <div v-else class="flex mt-4 overflow-x-auto space-x-3 w-full h-10">
      <div
        v-for="(tag,i) in tagList"
        :key="i"
        :class="`${selectedTag === tag.value ? 'bg-red' : 'bg-secondary'}
        rounded-lg min-w-fit h-fit px-2 font-bold text-light`"
        @click="() => selectedTag = tag.value"
      >
        {{ tag.value }}
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <PersonCard
        v-for="(person, i) in personList"
        :key="i"
        :name="person.name"
        :job="person.job"
        :gender="person.gender"
        :age="person.age"
        :rating="person.rating"
        :rating-count="person.ratingCount"
        :photo-path="person.photoPath"
        :profile-id="person.profileId"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import personList from './dummy-person'
import AdvanceFilter from '@/components/advanceFilter.vue'
const selectedTag = ref('Hot')
const isShowAdvFilter = ref(false)

const toogleAdvanceFilter = () => {
  isShowAdvFilter.value = !isShowAdvFilter.value
}

const tagList = [
  {
    value: 'Hot',
    id: 1
  },
  {
    value: 'Alpha',
    id: 2
  },
  {
    value: 'Gen-Z',
    id: 3
  },
  {
    value: 'Boomer',
    id: 4
  },
  {
    value: 'Mapan',
    id: 5
  },
  {
    value: 'Idaman',
    id: 6
  },
  {
    value: 'Crazy Rich',
    id: 7
  }
]

</script>
