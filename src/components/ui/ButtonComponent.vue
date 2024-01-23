<template>
  
    <button>
      <Transition>
        <slot name="ButtonContent" v-if="!isMore" />
      </Transition>
      <Transition>
        <slot name="ButtonContentMore" v-if="isMore" />
      </Transition>
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
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: width .5s ease-out;
}

.v-enter-from,
.v-leave-to {
  width: auto;
}
</style>
