<template>
  <div id="overlay" v-if="collectionsActive" @click="collectionToggle"></div>
  <div class="top-menu-wrapper">
    <div class="top-menu-container">
      <a href="https://lyambda.com">
        <img
          :src="'https://www.lyambda.com/wp-content/themes/lyambda/image/logo.png'"
          alt="Lyambda"
      /></a>
      <div name="collection" id="collection">
        <button class="collection-btn" @click="collectionToggle">Коллекции</button>
        <div v-if="collectionsActive" class="collection__list">
          <div
            v-for="(item, index) in collectionsMock"
            :value="item"
            :key="index"
            style="border-bottom: 1px solid grey"
          >
            <span class="collection-name">{{ item.toString() }}</span>
          </div>
        </div>
      </div>
      <button-component @click="emitSave" style="background: #007aff; color: white">
        <template #ButtonContent>
          {{ 'Сохранить' }}
        </template>
      </button-component>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import { ref } from 'vue'
const emit = defineEmits<{
  (e: 'save'): void
}>()

const collectionToggle = async () => {
  collectionsActive.value = !collectionsActive.value
}
const emitSave = async () => {
  emit('save')
}
const collectionsActive = ref(false)
const collectionsMock = ['Apple Watch Series 9', 'Apple Watch Hèrmes Series 9', 'Apple Watch SE']
</script>

<style scoped>
#collection {
  position: relative;
}
.collection-name {
  padding: 1em;
  display: block;
  color: #3a3a3a;
  font-size: 16px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
    sans-serif;
}
#overlay {
  position: absolute;
  background: black;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
}
.collection__list {
  z-index: 100;
  position: absolute;
  width: 300px;
  height: 200px;
  padding: 2em;
  background: white;
  top: 2em;
  left: -150%;
  margin: 0 auto;
  text-align: left;
  border-radius: 25px;
}
.collection-btn {
  border: none;
  background: transparent;
  cursor: pointer;
  position: relative;
  z-index: 100;
}
.top-menu-wrapper {
  max-width: 90%;
}
.top-menu-container {
  padding: 2em;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}
</style>
