<template>
  <div class="shadow-lg w-[80%] m-auto my-6 flex p-4 border border-grey-400 rounded-lg">
    <img v-if="isEven" :src="drink.img" class="object-cover w-40 h-40 rounded" />
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

      <div :class="isEven ? 'text-right' : 'text-left'" class="mt-2">
        <button class="px-6 py-2 text-white bg-blue-600 rounded jalnan hover:bg-blue-800"
          @click="emit('vote')">투표</button>
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
}

const props = defineProps<Props>();
const emit = defineEmits(['vote']);
</script>

<style lang="scss" scoped>

</style>
