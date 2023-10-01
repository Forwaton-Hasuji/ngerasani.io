<template>
  <div class="px-6 py-2">
    <div class="w-full flex gap-4">
      <SearchBox />
      <div class="bg-secondary min-w-[48px] h-12 rounded-lg flex items-center justify-center">
        <img :src="advanceSearchIcon" alt="" width="30" class="light-icon">
        <div class="bg-red w-2 h-2 rounded-full absolute top-10 right-7" />
      </div>
    </div>

    <div class="flex mt-4 overflow-x-auto space-x-3 w-full h-10">
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
      />
    </div>
  </div>
</template>
<script setup lang="ts">
const advanceSearchIcon = useAsset('icons/advance-search.png')
const selectedTag = ref('Hot')

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

const personList = [
  {
    name: 'Eca Aura',
    age: 20,
    rating: 4.9,
    ratingCount: 51300,
    job: 'Entertainer / Host',
    gender: 'Female',
    photoPath: 'images/dummy-photo.jpg'
  },
  {
    name: 'Eca Aura',
    age: 20,
    rating: 4.9,
    ratingCount: 51300,
    job: 'Entertainer / Host',
    gender: 'Female',
    photoPath: 'images/dummy-photo.jpg'
  },
  {
    name: 'Eca Aura',
    age: 20,
    rating: 4.9,
    ratingCount: 51300,
    job: 'Entertainer / Host',
    gender: 'Female',
    photoPath: 'images/dummy-photo.jpg'
  },
  {
    name: 'Eca Aura',
    age: 20,
    rating: 4.9,
    ratingCount: 51300,
    job: 'Entertainer / Host',
    gender: 'Female',
    photoPath: 'images/dummy-photo.jpg'
  },
  {
    name: 'Eca Aura',
    age: 20,
    rating: 4.9,
    ratingCount: 51300,
    job: 'Entertainer / Host',
    gender: 'Female',
    photoPath: 'images/dummy-photo.jpg'
  }
]
</script>
