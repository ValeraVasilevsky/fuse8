<template>
  <div class="jokes-wrapper">
    <Input
      class="jokes-wrapper__search-input"
      placeholder="Some value"
      v-model="inputValue"
      :result-count="totalResult"
      :show-result="showResult"
      @update:model-value="handleFindJoke"
    />

    <Loader v-if="isLoading" class="jokes-wrapper__loader" />
    <JokesList
      v-if="!isLoading && jokes.length"
      class="jokes-wrapper__list"
      :jokes="jokes"
    />
  </div>
</template>

<script setup lang="ts">
import Input from "@components/Input.vue";
import JokesList from "@components/jokes/JokesList.vue";
import Loader from "@components/Loader.vue";

import { ref, computed } from "vue";

import { useJokesStore } from "@/store/jokes";

import { MIN_QUERY_LENGTH } from "@/constants/query";

const jokesStore = useJokesStore();
const { findJoke } = jokesStore;

const isLoading = ref<boolean>(false);
const showResult = ref<boolean>(false);
const inputValue = ref<string>("");

const jokes = computed(() => jokesStore.jokes);
const totalResult = computed(() => jokesStore.total);

const handleFindJoke = async () => {
  try {
    if (inputValue.value.length >= MIN_QUERY_LENGTH) {
      showResult.value = false;
      isLoading.value = true;

      await findJoke(inputValue.value);

      showResult.value = true;
    }
  } catch (e) {
    if (e instanceof Error) console.error(e.message);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped lang="scss">
@import "@assets/styles/components/jokes/JokesWrapper.scss";
</style>
