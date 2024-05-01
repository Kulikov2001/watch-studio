<template>
  <!--div id="overlay" v-if="collectionsActive" @click="collectionToggle"></div-->
  <div class="top-menu-wrapper">
    <div class="top-menu-container">
      <a href="https://lyambda.com">
        <img
          :src="'https://www.lyambda.com/wp-content/themes/lyambda/image/logo.png'"
          alt="Lyambda"
      /></a>
      <!--div name="collection" id="collection">
        <button class="collection-btn" @click="collectionToggle">Коллекции</button>
        <div v-if="collectionsActive" class="collection__list">
          <TransitionGroup>
            <div
              v-for="(item, index) in collectionsMock"
              :value="item"
              :key="index"
              style="border-bottom: 1px solid grey"
            >
              <span class="collection-name">{{ item.toString() }}</span>
            </div>
          </TransitionGroup>
        </div>
      </div-->
      <button-component @click="emitSave" style="background: #007aff; color: white">
        <template #ButtonContent>
          {{ 'Подробнее' }}
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
const emitSave = async () => {
  emit('save')
}
</script>

<style scoped>
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
.top-menu-wrapper {
  max-width: 90%;
}
.top-menu-container {
  padding: 2em;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
}
@media screen and (max-width: 600px) {
  .top-menu-container {
    flex-wrap: wrap;
  }
}
</style>
