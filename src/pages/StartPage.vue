<template>
  <TopMenuComponent />
  <div>
    <CarouselComponent
      :slideItems="slideItem"
      :itemCase="selectedCase"
      :itemBand="selectedBand"
      :itemSize="selectedSize"
    />
  </div>
  <div
    style="
      place-items: center;
      display: flex;
      width: 100%;
      justify-content: center;
      margin-top: 100px;
      gap: 20px;
    "
  >
    <MenuComponent
      @size="changeToSize"
      @case="changeToCase"
      @band="changeToBand"
      :variations="variations"
    />
  </div>
</template>

<script setup>
import MenuComponent from '@/components/MenuComponent.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'
import TopMenuComponent from '@/components/TopMenuComponent.vue'
import { onMounted, ref, watch } from 'vue'
import { useWatchStore, State } from '@/stores/watch.ts'

const selectedCase = ref('src/assets/41/41.webp')
const selectedBand = ref('src/assets/41/bands/Altair/Altair_DSJ-01-40-BK.webp')
const selectedSize = ref(41)
const variations = ref({})
const watchStore = useWatchStore()
let slideItem = ref([
  {
    type: 'bands',
    size: selectedSize.value,
    brand: 'loading',
    pic: 'https://i.postimg.cc/3R9PpWdx/Spinner-1s-200px.png',
    sku: 'loading'
  }
])
//console.log(slideItem.value);
onMounted(() => {
  slideItem.value = watchStore.bands41
  variations.value = {
    materials: {
      ...watchStore.casesMaterials
    },
    sizes: {
      ...watchStore.sizes
    },
    collections: {
      ...watchStore.collections
    },
    bands: {
      ...watchStore.bandsBrand
    }
  }
  console.log(variations.value)
})
const changeToSize = async () => {
  watchStore.state = State.SIZE_CHOICE;
}
const changeToCase = async () => {
  watchStore.state = State.CASE_CHOICE;
  document.querySelector('.animated-fade').classList.add('fade-out')
  //carousel.addEventListener('animationend', ()=>{
  setTimeout(() => {
    watchStore.state = 3
    slideItem.value = watchStore.cases41
    document.querySelector('.animated-fade').classList.remove('fade-out')
  }, 1000)
  //});

  console.log(slideItem.value)
}
const changeToBand = async () => {
  watchStore.state = State.BAND_CHOICE;
  document.querySelector('.animated-fade').classList.add('fade-out')
  //carousel.addEventListener('animationend', ()=>{
  setTimeout(() => {
    watchStore.state = State.BAND_CHOICE
    slideItem.value = watchStore.bands41
    document.querySelector('.animated-fade').classList.remove('fade-out')
  }, 1000)
  //});

  console.log(slideItem.value)
}

function runArrayPicToLocal(arr) {
  arr.forEach(function (elem) {
    elem.pic =
      'src/assets/' +
      elem.size +
      '/' +
      (elem.type === 'bands' ? 'bands' : 'case') +
      '/' +
      (elem.brand ?? elem.material) +
      '/' +
      elem.sku +
      '.webp'
  })
}
</script>

<style scoped></style>
