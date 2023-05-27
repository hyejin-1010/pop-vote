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
import getRankings from '@/utills/getRanking';
import Drink from '@/types/drink.type';

const router = useRouter();

const drinks: Ref<Drink[]> = ref([]);

onBeforeMount(() => {
  getRankings().then((resp) => {
    drinks.value = resp.data;
    initDrinksRank();
  });
});

function initDrinksRank() {
  let rank: number = 0;
  drinks.value = drinks.value.map((drink, index) => {
    if (index === 0 || drinks.value[index - 1].vote_count !== drink.vote_count) {
      rank++;
    }
    drink.rank = rank;
    return drink;
  });
}

function back() {
  router.go(-1);
}
</script>

<style scoped>

</style>
