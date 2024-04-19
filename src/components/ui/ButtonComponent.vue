<template>
  <button>
    <slot name="ButtonContent" />

    <slot name="ButtonContentMore" />
  </button>
</template>

<script setup lang="ts">
import { ref, defineProps, watch } from 'vue'
const props = defineProps<{
  name?: string
  link?: string
  isMore?: boolean
}>()
const isMore = ref(props.isMore)
watch(
  () => props.isMore,
  (newVal) => {
    isMore.value = newVal
  }
)
</script>

<style scoped>
button {
  border-radius: 2em;
  padding: 1em;
  border: none;
  cursor: pointer;
  font-size: 18px;
}
</style>
