<template>
  <div class="input__wrapper">
    <div class="input">
      <input
        ref="input"
        v-debounce:500="onChange"
        class="input__field"
        type="text"
        :value="props.modelValue"
        :placeholder="props.placeholder"
      />
    </div>

    <p v-if="props.showResult" class="input__result">
      Found jokes: {{ resultCount }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface IInputProps {
  placeholder: string;
  modelValue: string;

  showResult?: boolean;
  resultCount?: number;
}

const props = withDefaults(defineProps<IInputProps>(), {
  showResult: true,
});
const emits = defineEmits(["update:modelValue"]);

const input = ref<HTMLInputElement | null>(null);

const onChange = (value: string) => {
  emits("update:modelValue", value);
};

onMounted(() => input.value && input.value.focus())
</script>

<style scoped lang="scss">
@import "@assets/styles/components/Input.scss";
</style>
