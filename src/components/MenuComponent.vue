<template>
  <ButtonComponent
      :link="'/'"
      :name="'Myname'"
      @click="emitSize"
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
      @click="emitCase"
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
      @click="emitBands"
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
</template>

<script setup lang="ts">
const emit = defineEmits(['size', 'case', 'bands']);

const emitSize = () =>{
  emit('size');
}
const emitCase = () =>{
  emit('case');
}
const emitBands = () =>{
  emit('bands');
}
</script>

<style scoped>

</style>