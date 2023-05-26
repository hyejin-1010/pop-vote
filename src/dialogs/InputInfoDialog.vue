<template>
  <div class="relative z-10 jalnan" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
        <div class="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
          <div class="relative px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
            <span class="absolute text-xl text-gray-700 cursor-pointer top-5 right-5"
              @click="emit('close')">X</span>
            <div class="mt-3 text-center sm:ml-4">
              <span class="text-xl font-bold ">통계 조사</span>
            </div>

            <div class="mt-8">
              <div class="flex my-2">
                <div class="w-20 m-auto">나이</div>
                <input type="number" v-model="info.age" :class="inputStyle" />
              </div>

              <div class="flex my-2">
                <div class="w-20 m-auto">성별</div>
                <select v-model="info.gender" :class="inputStyle">
                  <option :value="Gender.female">여자</option>
                  <option :value="Gender.male">남자</option>
                  <option :value="Gender.etc">기타</option>
                </select>
              </div>

              <div class="flex my-2">
                <div class="w-20 m-auto">국가</div>
                <input v-model="info.country" :class="inputStyle" />
              </div>
            </div>
          </div>
          <div class="px-4 py-3 mb-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
            <button type="button" 
              class="inline-flex justify-center w-full px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-800 sm:ml-3 sm:w-auto"
              :class="{'bg-gray-300 hover:bg-gray-300': !doneInput}"
              @click="doneInput && onClickDoneBtn()">확인</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, computed, ComputedRef } from 'vue';
import InputInfoDialog from '@/dialogs/InputInfoDialog.vue';

interface Props {
}

enum Gender {
  female,
  male,
  etc,
}

interface Info {
  age: number;
  gender: Gender.female,
  country: string;
}

const props = defineProps<Props>();
const emit = defineEmits(['done', 'close']);

const info: Ref<Info> = ref<Info>({} as Info);
const inputStyle: string = 'flex-1 px-4 py-2 border border-gray-200 rounded shadow';

const doneInput: ComputedRef<boolean> = computed(() => {
  const values = Object.values(info.value);
  if (values.length < 3) { return false; }
  return !values.some((value) => !value && value !== 0);
});

function onClickDoneBtn() {
  emit('done');
}
</script>

<style scoped>

</style>