<template>
  <div>
  <CarouselComponent />
  </div>
<ButtonComponent
  :link="'/'"
  :name="'Myname'">
  <template #ButtonContent>
    {{ 'MyName' }}
  </template>
  </ButtonComponent>
</template>

<script setup>

import ButtonComponent from "../components/ui/ButtonComponent.vue";
import CarouselComponent from "../components/CarouselComponent.vue";
</script>

<style scoped>

</style>