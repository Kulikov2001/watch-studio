<template>
  <TopMenuComponent @save="handleSave" />
  <div>
    <CarouselComponent :gotoslide="triggeredSlideIndex" :slideItems="slideItem" />

  </div>
  <div
    class="menu__wrapper"
  >
    <MenuComponent
      @size="changeToSize"
      @case="changeToCase"
      @band="changeToBand"
      @series="changeToSeries"
      @subItem="handleSubItem($event)"
      :variations="variations"
    />
  </div>
</template>

<script setup lang="ts">
import MenuComponent from '@/components/MenuComponent.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'
import TopMenuComponent from '@/components/TopMenuComponent.vue'
import { onMounted, ref } from 'vue'
import { useWatchStore, State } from '@/stores/watch'

const watchStore = useWatchStore()
const variations = ref({})
let slideItem = ref<
  Array<{
    type?: string | undefined
    href?: string| undefined
    price?: string | null
    desc?: string| undefined
    size?: string| undefined
    brand?: string| undefined
    material?: string| undefined
    pic?: string| undefined
    sku?: string| undefined
    series?: string
    codename?: string
    name?: string
  }>
>([])
const triggeredSlideIndex = ref(2);
const handleSubItem = (event: Event)=>{
  if (event.target) {
  triggeredSlideIndex.value = slideItem.value.findIndex((slideitem)=>{
    return slideitem.size === parseInt((event.target as HTMLElement).innerText).toString() ||
      slideitem.brand === (event.target as HTMLElement).innerText ||
      slideitem.size === (parseInt((event.target as HTMLElement).innerText).toString() + 'мм') ||
      (slideitem.hasOwnProperty('name') ? (slideitem.name === watchStore.newSeries.filter(item => item.name === (event.target as HTMLElement).innerText)[0].name) : false) ||
      slideitem.material === Object.keys(watchStore.materialDict).find(key => watchStore.materialDict[key] === (event.target as HTMLElement).innerText)
      console.log(slideitem.material)
  });
  } else {
    console.error('no console event')
  }
}
onMounted(() => {
  slideItem.value = watchStore.newBands
  variations.value = {
    materials: {
      ...watchStore.casesMaterials
    },
    sizes: {
      ...watchStore.sizes
    },
    bands: {
      ...watchStore.bandsBrand
    },
    series: {
      ...watchStore.series
    }
  }
})
const changeToSeries = async () => {
  //watchStore.state = State.SERIES_CHOICE
  document.querySelector('.animated-fade')!.classList.add('fade-out')
  setTimeout(() => {
    watchStore.state = State.SERIES_CHOICE
    slideItem.value = watchStore.newSeries
    document.querySelector('.animated-fade')!.classList.remove('fade-out')
  },1000);
}
const changeToSize = async () => {
  //watchStore.state = State.SIZE_CHOICE
  document.querySelector('.animated-fade')!.classList.add('fade-out')
  setTimeout(() => {
    watchStore.state = State.SIZE_CHOICE
    slideItem.value = watchStore.newCase
    document.querySelector('.animated-fade')!.classList.remove('fade-out')
  },1000);
}
const changeToCase = async () => {
  //watchStore.state = State.CASE_CHOICE
  document.querySelector('.animated-fade')!.classList.add('fade-out')
  setTimeout(() => {
    watchStore.state = State.CASE_CHOICE
    slideItem.value = watchStore.newCase.filter((item) => item.series === watchStore.currentWatch.series);
    document.querySelector('.animated-fade')!.classList.remove('fade-out')
  }, 1000)
}

const changeToBand = async () => {
  //watchStore.state = State.BAND_CHOICE
  document.querySelector('.animated-fade')!.classList.add('fade-out')
  //carousel.addEventListener('animationend', ()=>{
  setTimeout(() => {
    watchStore.state = State.BAND_CHOICE
    slideItem.value = watchStore.newBands.filter((item) => {
      return parseInt(watchStore.currentWatch.caseSize!) <= 41 ? [38, 40, 41].includes(parseInt(item.size)) : [42, 44, 45, 49].includes(parseInt(item.size));
    });

      //watchStore.currentWatch.caseSize in ['38','40','41'] ? (['38','40','41'].includes(item.size) && !['42','44','45','49'].includes(item.size)) : (!['38','40','41'].includes(item.size) && ['42','44','45','49'].includes(item.size)));//(watchStore.currentWatch.caseSize! in ['38','40','41']) ? item.size in ['38','40','41'] : item.size in ['42','44','45','49']);
    document.querySelector('.animated-fade')!.classList.remove('fade-out')
  }, 1000)
  //});
}
onMounted(()=>{
  changeToBand();
})
const handleSave = async () => {
  window.location.href = watchStore.currentWatch.href ?? window.location.href
}
// function runArrayPicToLocal(arr) {
//   arr.forEach(function (elem) {
//     elem.pic =
//       'src/assets/' +
//       elem.size +
//       '/' +
//       (elem.type === 'bands' ? 'bands' : 'case') +
//       '/' +
//       (elem.brand ?? elem.material) +
//       '/' +
//       elem.sku +
//       '.webp'
//   })
// }
</script>

<style scoped>
.menu__wrapper{
  place-items: center;
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 3em auto 1em;
  gap: 20px;
}
@media screen and (min-width:1000px) {
  .menu__wrapper{
    width: 70%;
  }
}

</style>
