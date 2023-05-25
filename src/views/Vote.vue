<template>
  <div class="flex flex-col max-h-full">
    <div class="text-6xl font-bold text-center jalnan">
      술 인기 투표
    </div>

    <div class="flex-1 h-full overflow-y-auto">
      <div v-for="(drink, index) in drinks" :key="`drink-vote-${index}`"
        class="shadow-lg w-[80%] m-auto my-6 flex p-4 border border-grey-400 rounded-lg">
        <img v-if="index % 2 == 0" :src="drink.img" class="object-cover w-40 h-40 rounded" />
        <div class="flex flex-col flex-1 px-6 py-2">
          <div class="jalnan">
            <span class="mr-3 text-xl">
              {{ drink.name }}
            </span>
            <span class="text-sm text-gray-500">도수 0.0%</span>
          </div>
          <div class="flex-1 mt-2 nanum-square-round">
            {{ drink.description }}
          </div>

          <div :class="index % 2 == 0 ? 'text-right' : 'text-left'" class="mt-2">
            <button class="px-6 py-2 text-white bg-blue-600 rounded jalnan hover:bg-blue-800">투표</button>
          </div>
          
        </div>
        <img v-if="index % 2 == 1" :src="drink.img" class="object-cover w-40 h-40 rounded" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, onBeforeMount } from 'vue';
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
