<template>
  <div class="px-6 py-2">
    <div class="w-full flex flex-col items-center gap-2">
      <h1 class="text-white text-lg font-semibold my-2">
        Leaderboard
      </h1>
      <SearchBox />
    </div>
    <div v-for="(rank, i) in rankList" :key="i" class="pt-4">
      <RankCard
        :photo-url="rank.photoPath"
        :rank="(i + 1)"
        :name="rank.name"
        :rating="rank.rating"
        :rating-count="rank.ratingCount"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import rankList from '@/views/home/dummy-person'

</script>
