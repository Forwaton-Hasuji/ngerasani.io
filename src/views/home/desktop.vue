<template>
  <div class="px-6 py-2 flex flex-col items-center gap-4">
    <div class="w-80 flex gap-4">
      <SearchBox />
      <div class="bg-secondary min-w-[48px] h-12 rounded-lg flex items-center justify-center">
        <img :src="advanceSearchIcon" alt="" width="30" class="light-icon">
      </div>
    </div>
    <div class="grid grid-cols-6 gap-4">
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
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import personList from './dummy-person'
const advanceSearchIcon = useAsset('icons/advance-search.png')

</script>
