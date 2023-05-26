<template>
  <div class="shadow-lg w-[80%] m-auto my-6 flex p-4 border border-grey-400 rounded-lg relative">
    <div class="absolute top-[-10px] left-[-10px] flex flex-col justify-center font-bold text-center text-white bg-blue-600 rounded-full w-9 h-9 shadow-lg">
      <span>{{ drink.rank }}</span>
    </div>

    <img v-if="isEven" :src="drink.img" class="object-cover w-40 h-40 rounded" />
    <div class="flex flex-col flex-1 px-6 py-2">
      <div class="jalnan">
        <span class="mr-3 text-lg">
          {{ drink.name }}
        </span>
        <span class="text-xs text-gray-500">도수 {{ drink.alcohol_level }}%</span>
      </div>
      <div class="flex-1 mt-2 text-[0.9rem] nanum-square-round">
        {{ drink.description }}
      </div>

      <div v-if="isVote" :class="isEven ? 'text-right' : 'text-left'" class="mt-2">
        <button class="px-6 py-2 text-white bg-blue-600 rounded jalnan hover:bg-blue-800"
          @click="emit('vote')">투표</button>
      </div>
      <div v-else class="text-sm text-blue-500 jalnan"
        :class="{'text-right': isEven}">
        <span>투표 수</span>
        {{ drink.vote_count }}
      </div>
      
    </div>
    <img v-if="!isEven" :src="drink.img" class="object-cover w-40 h-40 rounded" />
  </div>
</template>

<script setup lang="ts">
import Drink from '@/types/drink.type';

interface Props {
  drink: Drink;
  isEven: boolean;
  isVote: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(['vote']);
</script>

<style lang="scss" scoped>

</style>
