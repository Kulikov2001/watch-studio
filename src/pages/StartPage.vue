<template>
  <div>
  <CarouselComponent/>
  </div>
  <div
  style="place-items: center; display:flex; width: 100%;justify-content: center; margin-top: 100px; gap: 20px;"
  >
 <MenuComponent></MenuComponent>
  </div>
</template>

<script setup>
import MenuComponent from "../components/MenuComponent.vue";
import CarouselComponent from "../components/CarouselComponent.vue";

</script>

<style scoped>

</style>