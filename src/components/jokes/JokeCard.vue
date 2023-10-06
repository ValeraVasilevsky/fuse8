<template>
  <div class="joke-card" @click="openUrl">
    <p class="joke-card__text">{{ props.value }}</p> 

    <p class="joke-card__meta">
      <p class="joke-card__id">{{ props.id }}</p>
      <p class="joke-card__date">{{ getFormattedDate(props.created_at) }}</p>
    </p>
  </div>
</template>

<script setup lang="ts">
import { IJoke } from "@/store/types/IJoke";

import { formatDate } from '@/utils/formatDate'

const props = defineProps<IJoke>();

const getFormattedDate = (date: string) => formatDate(date, 'dd.MM.yyyy')
const openUrl = () => {
  window.open(props.url, '_blank')
}
</script>

<style scoped lang="scss">
@import '@assets/styles/components/jokes/JokeCard.scss';
</style>
