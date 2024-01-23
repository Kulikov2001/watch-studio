<template>
  <swiper
    :navigation="true"
    :modules="modules"
    class="mySwiper animated-fade"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :scrollbar="{ draggable: true }"
    :slides-per-view="5"
    :centeredSlides="true"
    :lazyPreloadPrevNext="4"
  >
    <img
      height="400"
      v-if="watchStore.state === State.CASE_CHOICE"
      :src="props.itemBand"
      style="position: absolute; z-index: -1; top: 0; left: 40%"
    />
    <img
      height="400"
      v-if="watchStore.state === State.BAND_CHOICE"
      :src="props.itemCase"
      style="position: absolute; z-index: 1; top: 0; left: 40%"
    />
    <swiper-slide v-for="(item, index) in computedItems" :key="index">
      <a :href="item.sku">
        <img height="400" :src="item.pic" loading="lazy" style="position: relative; z-index: 0" />
        <div class="swiper-lazy-preloader"></div>
        <div class="about">
          <div class="desc">{{ item.desc }}</div>
          <div class="prie">{{ item.price }}</div>
        </div>
        <!--img
          height="400"
          v-if="isActive && isBandSlider"
          :src="itemCase"
          style="position: absolute; z-index:1; top:0; left:0;"
        />
      <img
          height="400"
          v-if="isActive && !isBandSlider"
          :src="itemBand"
          style="position: absolute; z-index:-1; top:0; left:0;"
      /-->
      </a>
    </swiper-slide>
  </swiper>
  {{ props.variations }}
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useWatchStore, State } from '@/stores/watch'
import { computed, defineProps, toRefs } from 'vue'
import { EffectFade } from 'swiper/modules'
const modules = [Navigation, Pagination, Scrollbar, EffectFade]
const watchStore = useWatchStore()
const onSwiper = () => {
  //console.info(swiper);
}
const onSlideChange = (swiper: any) => {
  watchStore.currentWatch = computedItems.value[swiper.activeIndex]
  console.log(watchStore.currentWatch)
}
const props = defineProps<{
  slideItems: Array<any>,
  watchCenter?: string,
  bandCenter?: string,
  itemCase?: string,
  itemBand?: string,
  itemSize?: number,
  variations?: string
}>()
//const isBandSwitch = ref(props.isBandSlider);
//const loading = ref(false);
const { slideItems } = toRefs(props)
const computedItems = computed(() => slideItems.value)
// watch( () => props.isBandSlider, (newValue) => {
//   isBandSwitch.value = newValue;
//   console.log('watcher fired');
// });
// watch(()=> props.slideItems, (newValue) =>{

// });
</script>
<style scoped>
.fade-out {
  opacity: 0;
}
.animated-fade {
  transition: opacity 1s ease-in;
}
</style>
