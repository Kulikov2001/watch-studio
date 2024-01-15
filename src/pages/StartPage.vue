<template>
  <div>
  <CarouselComponent/>
  </div>
  <div
  style="place-items: center; display:flex; width: 100%;justify-content: center; margin-top: 100px; gap: 20px;"
  >
  <ButtonComponent
      :link="'/'"
      :name="'Myname'"
      @click="handleClick"
  >
    <template #ButtonContent>
      <span style="display: inline-flex;
  align-items: center; gap:5px;">
      <img
          src="https://www.svgrepo.com/show/497532/size.svg"
          height="20"
      />
      <span>{{ 'Размер' }}</span>
        </span>
    </template>
  </ButtonComponent>
  <ButtonComponent
      :link="'/'"
      :name="'Myname'"
      @click="handleClick"
  >
    <template #ButtonContent>
      <span style="display: inline-flex;
  align-items: center; gap:5px;">
      <img
          src="https://www.svgrepo.com/show/423353/apple-watch.svg"
          height="20"
      />
      {{ 'Корпус' }}
      </span>
    </template>
  </ButtonComponent>
  <ButtonComponent
      :link="'/'"
      :name="'Myname'"
      @click="handleClick"
  >
    <template #ButtonContent>
      <span style="display: inline-flex;
  align-items: center; gap:5px;">
      <img
          src="https://www.svgrepo.com/show/423353/apple-watch.svg"
          height="20"
      />
      {{ 'Ремешок' }}
      </span>
    </template>
  </ButtonComponent>
  </div>
</template>

<script setup>
const handleClick = async() =>{
  console.log('clicked')
};
import ButtonComponent from "../components/ui/ButtonComponent.vue";
import CarouselComponent from "../components/CarouselComponent.vue";
</script>

<style scoped>

</style>