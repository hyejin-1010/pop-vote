<template>
  <div class="flex flex-col h-full">
    <div class="text-6xl font-bold text-center jalnan">
      술 인기 투표
    </div>

    <div class="w-[80%] h-60 bg-gray-300 m-auto my-14 text-center flex flex-col justify-center flex-1">
      temp image
    </div>

    <div class="text-center">
      <router-link to="/vote" class="block bg-blue-600 rounded-full w-[80%] text-white font-bold py-4 m-auto jalnan">
        투표하기
      </router-link>
      <button class="bg-blue-900 rounded-full w-[80%] text-white font-bold jalnan py-4 mt-4">순위보기</button>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>