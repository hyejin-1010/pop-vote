<template>
  <div class="flex flex-col max-h-full">
    <div class="text-6xl font-bold text-center jalnan">
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
  /*
  axios.get('https://www.moon-rises-in-space.store/Ranking').then((resp) => {
    console.log('chloe resp : ', resp);
  });
  */
  drinks.value = [
    { drink_id: 'test_01', name: '소주', vote_count: 0, last_update: Date.now(), img: 'https://src.hidoc.co.kr/image/board/2021/8/26/1629982419746_0.jpg', description: '술에 대한 설명 술에 대한 설명 술에 대한 설명 술에 대한 설명 술에 대한 설명' },
    { drink_id: 'test_02', name: '맥주', vote_count: 0, last_update: Date.now(), img: 'https://image.dongascience.com/Photo/2016/08/14712498173835[1].jpg', description: '술에 대한 설명 술에 대한 설명 술에 대한 설명 술에 대한 설명 술에 대한 설명' },
    { drink_id: 'test_03', name: '막걸리', vote_count: 0, last_update: Date.now(), img: 'https://src.hidoc.co.kr/image/lib/2020/6/30/1593492805222_0.jpg', description: '술에 대한 설명 술에 대한 설명 술에 대한 설명 술에 대한 설명 술에 대한 설명' },
    { drink_id: 'test_01', name: '소주', vote_count: 0, last_update: Date.now(), img: 'https://src.hidoc.co.kr/image/board/2021/8/26/1629982419746_0.jpg', description: '술에 대한 설명 술에 대한 설명 술에 대한 설명 술에 대한 설명 술에 대한 설명' },
    { drink_id: 'test_02', name: '맥주', vote_count: 0, last_update: Date.now(), img: 'https://image.dongascience.com/Photo/2016/08/14712498173835[1].jpg', description: '술에 대한 설명 술에 대한 설명 술에 대한 설명 술에 대한 설명 술에 대한 설명' },
    { drink_id: 'test_03', name: '막걸리', vote_count: 0, last_update: Date.now(), img: 'https://src.hidoc.co.kr/image/lib/2020/6/30/1593492805222_0.jpg', description: '술에 대한 설명 술에 대한 설명 술에 대한 설명 술에 대한 설명 술에 대한 설명' },
    { drink_id: 'test_01', name: '소주', vote_count: 0, last_update: Date.now(), img: 'https://src.hidoc.co.kr/image/board/2021/8/26/1629982419746_0.jpg', description: '술에 대한 설명 술에 대한 설명 술에 대한 설명 술에 대한 설명 술에 대한 설명' },
    { drink_id: 'test_02', name: '맥주', vote_count: 0, last_update: Date.now(), img: 'https://image.dongascience.com/Photo/2016/08/14712498173835[1].jpg', description: '술에 대한 설명 술에 대한 설명 술에 대한 설명 술에 대한 설명 술에 대한 설명' },
    { drink_id: 'test_03', name: '막걸리', vote_count: 0, last_update: Date.now(), img: 'https://src.hidoc.co.kr/image/lib/2020/6/30/1593492805222_0.jpg', description: '술에 대한 설명 술에 대한 설명 술에 대한 설명 술에 대한 설명 술에 대한 설명' },
  ];
});

function back() {
  router.go(-1);
}
</script>

<style scoped>

</style>
