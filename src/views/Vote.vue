<template>
  <div class="flex flex-col max-h-full">
    <div class="text-6xl font-bold text-center jalnan">
      술 인기 투표
    </div>

    <div class="flex-1 h-full overflow-y-auto">
      <DrinkItem v-for="(drink, index) in drinks"
        :drink="drink" :isEven="index % 2 == 0" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, onBeforeMount } from 'vue';
import DrinkItem from '@/components/DrinkItem.vue';
import Drink from '@/types/drink.type';

const drinks: Ref<Drink> = ref([]);

onBeforeMount(() => {
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

</script>

<style scoped>

</style>
