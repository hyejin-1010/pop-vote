<template>
  <div class="flex flex-col h-full">
    <div class="text-6xl font-bold text-center jalnan">
      술 인기 투표
    </div>

    <div class="w-[80%] h-60 bg-gray-300 m-auto my-14 text-center flex flex-col justify-center flex-1">
      temp image
    </div>

    <div class="mb-10 text-center">
      <router-link to="/vote" class="block bg-blue-600 rounded-full w-[80%] text-white font-bold py-4 m-auto hover:bg-blue-800 jalnan">
        투표하기
      </router-link>
      <router-link to="/ranking" class="block m-auto bg-blue-900 rounded-full w-[80%] text-white font-bold hover:bg-blue-700 jalnan py-4 mt-4">순위보기</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>