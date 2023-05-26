<template>
  <div class="flex flex-col max-h-full">
    <div class="mb-2 text-6xl font-bold text-center jalnan">
      <span class="text-blue-600 cursor-pointer hover:text-blue-800" 
        @click="back">⬅</span>
      술 인기 투표
    </div>

    <div class="flex-1 h-full overflow-y-auto">
      <DrinkItem v-for="(drink, index) in drinks" :isVote="false"
        :drink="drink" :isEven="index % 2 == 0" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, Ref } from 'vue';
import { useRouter } from 'vue-router';
import DrinkItem from '@/components/DrinkItem.vue';
import axios from 'axios';

const router = useRouter();

const drinks: Ref<Drink> = ref([]);

onBeforeMount(() => {
  axios.get('https://www.moon-rises-in-space.store/Ranking').then((resp) => {
    drinks.value = resp.data;
    let rank: number = 0;
    for (let index = 0; index < drinks.value.length; index++) {
      if (index === 0 || drinks.value[index - 1].vote_count !== drinks.value[index].vote_count) {
        rank++;
      }
      drinks.value[index].rank = rank;
    }
  });
});

function back() {
  router.go(-1);
}
</script>

<style scoped>

</style>
