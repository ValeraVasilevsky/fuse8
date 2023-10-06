<template>
  <div class="jokes-list">
    <JokeCard
      v-for="joke of props.jokes"
      :key="joke.id"
      class="jokes-list__item"
      :id="joke.id"
      :icon_url="joke.icon_url"
      :value="joke.value"
      :created_at="joke.created_at"
      :url="joke.url"
    />
  </div>
</template>

<script setup lang="ts">
import JokeCard from "@components/jokes/JokeCard.vue";

import { IJoke } from "@/store/types/IJoke";

interface IJokesListProps {
  jokes: IJoke[];
}

const props = defineProps<IJokesListProps>();
</script>

<style scoped lang="scss">
@import "@assets/styles/components/jokes/JokesList.scss";
</style>
