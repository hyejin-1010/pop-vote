<template>
  <div class="flex flex-col h-full jalnan">
    <div class="text-6xl font-bold text-center">
      칵테일🍸인기 투표
    </div>

    <div class="flex flex-col justify-center flex-1">
      <div v-if="drink" class="border border-gray-300 rounded-lg w-[80%] m-auto my-6 text-center py-6 shadow-lg">
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
import { ref, Ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import Drink from '@/types/drink.type';
import getDrink from '@/utills/getDrink';

const route = useRoute();

const drink: Ref<Drink | undefined> = ref();
const buttonStyle: string = 'block text-center w-full py-3 text-white rounded-full';

onBeforeMount(() => { 
  if (!route.params.voteId) { return; }
  getDrink(route.params.voteId.toString()).then(({ data }) => {
    drink.value = data;
  });
});

</script>

<style scoped>

</style>