<template>
  <div class="flex flex-col h-full jalnan">
    <div class="text-6xl font-bold text-center">
      술 인기 투표
    </div>

    <div class="flex flex-col justify-center flex-1">
      <div class="border border-gray-300 rounded-lg w-[80%] m-auto my-6 text-center py-6 shadow-lg">
        <img :src="drink.img" class="w-[80%] mx-auto my-4 rounded" />
        <div class="my-4 text-3xl">{{ drink.name }}</div>
        <div class="text-blue-600">투표 완료</div>
      </div>
    </div>

    <div class="w-[80%] mx-auto my-10">
      <router-link to="/vote" class="bg-blue-600 hover:bg-blue-800"
        :class="buttonStyle">다시 투표</router-link>
      <router-link to="/" class="mt-4 bg-gray-500 hover:bg-gray-800"
        :class="buttonStyle">홈으로</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import Drink from '@/types/drink.type';

const drink: Ref<Drink> = ref({ drink_id: 'test_01', name: '소주', vote_count: 0, last_update: Date.now(), img: 'https://src.hidoc.co.kr/image/board/2021/8/26/1629982419746_0.jpg', description: '술에 대한 설명 술에 대한 설명 술에 대한 설명 술에 대한 설명 술에 대한 설명' });

const buttonStyle: string = 'block text-center w-full py-3 text-white rounded-full';

</script>

<style scoped>

</style>