<template>
  <div class="flex flex-col max-h-full">
    <div class="text-6xl font-bold text-center jalnan">
      <span class="text-blue-600 cursor-pointer hover:text-blue-800" 
        @click="back">⬅</span>
      술 인기 투표
    </div>

    <div class="flex-1 h-full overflow-y-auto">
      <DrinkItem v-for="(drink, index) in drinks" :isVote="true"
        :drink="drink" :isEven="index % 2 == 0"
        @vote="onClickVoteBtn(drink)" />
    </div>
  </div>

  <InputInfoDialog v-if="isShowInputInfoDialog" 
    @done="onDoneVote" @close="closeInputInfoDialog" />
</template>

<script setup lang="ts">
import { ref, Ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import DrinkItem from '@/components/DrinkItem.vue';
import Drink from '@/types/drink.type';
import Info from '@/types/info.type';
import InputInfoDialog from '@/dialogs/InputInfoDialog.vue';
import getRanking from '@/utills/getRanking';
import checkVoted from '@/utills/checkVoted';

const router = useRouter();

const drinks: Ref<Drink> = ref([]);

const isShowInputInfoDialog: Ref<boolean> = ref(false);
const voteDrink: Ref<Drink | undefined> = ref();

onBeforeMount(() => {
  getRanking().then((resp) => {
    drinks.value = resp.data;
  });
});

function onClickVoteBtn(drink: Drink) {
  checkVoted().then(({ data }) => {
    const checkVoted: boolean = data == 1;
    if (checkVoted) {
      router.to('/alreadyVoted');
    } else {
      showInputInfoDialog(drink); 
    }
  });
}

function onDoneVote(info: Info) {
  router.push(`/complete/${voteDrink.value.drink_id}`);
}

function showInputInfoDialog(drink: Drink) {
  voteDrink.value = drink;
  isShowInputInfoDialog.value = true;
}

function closeInputInfoDialog() {
  isShowInputInfoDialog.value = false;
}

function back() {
  router.go(-1);
}
</script>

<style scoped>

</style>
