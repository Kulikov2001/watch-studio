<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <transition name="fade">
   <RouterView />
  </transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
