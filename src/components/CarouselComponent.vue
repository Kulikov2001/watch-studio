<template>
  <div class="my-swiper-wrapper">
    <swiper
      v-if="watchStore.state !== State.SERIES_CHOICE"
      :ref="swiperRef"
      :navigation="swiperOptions.navigation"
      :modules="modules"
      class="mySwiper animated-fade"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :scrollbar="{ draggable: true }"
      :slides-per-view="1"
      style="margin: 0 auto; width: 100%; user-select:none;"
      :centeredSlides="true"
      :lazyPreloadPrevNext="4"
      :initialSlide="2"
      :slideToClickedSlide="true"
      :speed="500"
      :breakpoints="{ 1200: { slidesPerView: 5 }, 800: { slidesPerView: 3 } }"
    >
      <img
        height="400"
        v-if="watchStore.state === State.CASE_CHOICE"
        :src="storeBand"
        class="pinned-img"

        style="z-index: -1;user-select: none;"
      />
      <!--
      {
          '38to40': watchStore.currentWatch.size === '38' && computedItems[swiperRef.activeIndex].size === '40',
          '38to41': watchStore.currentWatch.size === '38' && computedItems[swiperRef.activeIndex].size === '41',
          '40to41': watchStore.currentWatch.size === '40' && computedItems[swiperRef.activeIndex].size === '41',
          '41to38': watchStore.currentWatch.size === '41' && computedItems[swiperRef.activeIndex].size === '38',
          '42to44': watchStore.currentWatch.size === '42' && computedItems[swiperRef.activeIndex].size === '44',
          '42to45': watchStore.currentWatch.size === '42' && computedItems[swiperRef.activeIndex].size === '45',
          '42to49': watchStore.currentWatch.size === '42' && computedItems[swiperRef.activeIndex].size === '49',
          '44to42': watchStore.currentWatch.size === '44' && computedItems[swiperRef.activeIndex].size === '42',
          '44to45': watchStore.currentWatch.size === '44' && computedItems[swiperRef.activeIndex].size === '45',
          '44to49': watchStore.currentWatch.size === '44' && computedItems[swiperRef.activeIndex].size === '49',
          '49to42': watchStore.currentWatch.size === '49' && computedItems[swiperRef.activeIndex].size === '42',
          '49to45': watchStore.currentWatch.size === '49' && computedItems[swiperRef.activeIndex].size === '45',
          '49to44': watchStore.currentWatch.size === '49' && computedItems[swiperRef.activeIndex].size === '44'
        }
      -->
      <img
        height="400"
        v-if="watchStore.state === State.BAND_CHOICE"
        :src="storeCase"
        class="pinned-img"
        :class="adaptiveSize"
        style="z-index: 1;user-select: none;"
      />
      <!-- 42/44/45/49 mm -->
      <swiper-slide v-for="(item, index) in computedItems" :key="index">
        <img height="400" :src="item.pic" loading="lazy" style="position: relative; z-index: 0;user-select: none;" />
        <div class="swiper-lazy-preloader"></div>
      </swiper-slide>
      <div class="swiper-button-prev bigswiper__btn" @click="swiperRef.slidePrev()" slot="button-prev"></div>
      <div class="swiper-button-next bigswiper__btn" @click="swiperRef.slideNext()" slot="button-next"></div>
    </swiper>


    <swiper
      v-if="watchStore.state === State.SERIES_CHOICE"
      :ref="swiperRef"
      :navigation="true"
      :modules="modules"
      class="mySwiper animated-fade"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :scrollbar="{ draggable: true }"
      :slides-per-view="2"
      style="margin: 0 auto; width: 100%;user-select: none;"
      :centeredSlides="true"
      :lazyPreloadPrevNext="4"
      :initialSlide="2"
      :slideToClickedSlide="true"
      :speed="500"
      :breakpoints="{ 1200: { slidesPerView: 3 }, 800: { slidesPerView:1 } }"
    >
      <swiper-slide v-for="(item, index) in computedItems" :key="index">
        <img height="400" :src="item.pic" loading="lazy" style="position: relative; z-index: 0;user-select: none;" />
        <div class="swiper-lazy-preloader"></div>
      </swiper-slide>

    </swiper>
    <div class="about">
      <div class="selected-series">
        {{ watchStore.currentWatch.series + ','}}
        {{watchStore.currentWatch.size}}мм
        <!-- watchStore.colorDict.hasOwnProperty(watchStore.currentWatch.caseColor) ? watchStore.colorDict[watchStore.currentWatch.caseColor]  : '' }},-->

      </div>
      <div class="desc" v-show="watchStore.state === State.BAND_CHOICE"> {{ watchStore.adjectiveMaterialDict[watchStore.currentWatch.bandMaterial!] ?? 'Премиум' }} ремешок для Apple Watch {{parseInt(watchStore.currentWatch.caseSize!) < 42 ? '38/40/41mm' : '42/44/45/49mm'}} {{watchStore.currentWatch.sku_band!.toString().replace(/_p_k$/, "").replace(/_/g, " ")}}</div>
    </div>
  </div>
  {{ props.variations }}
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useWatchStore, State } from '@/stores/watch'
import {computed, ref, toRefs, watch} from 'vue'
import { EffectFade } from 'swiper/modules'
const modules = [Navigation, Pagination, Scrollbar, EffectFade]
const watchStore = useWatchStore()
const swiperRef: any = ref(null);
const onSwiper = (swiper: any) => {
  swiperRef.value = swiper
}
const swiperOptions = {
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
};
const props = defineProps<{
  slideItems: Array<{
    type?: string
    href?: string
    desc?: string
    size?: string
    brand?: string
    material?: string
    pic?: string
    sku?: string
    series?: string
    codename?: string
    name?: string
  }>
  variations?: string
  gotoslide: number;
}>()

const { slideItems } = toRefs(props)

const moveToSlide = (index: number) =>{
  if (index !== -1) {
    try {
      swiperRef.value.slideTo(index);
    } catch (e) {
      console.error(e);
    }
  }
}
watch(()=> props.gotoslide, (selectedSlide) => {
  moveToSlide(selectedSlide);
})

const computedItems = computed(() => slideItems.value)
const onSlideChange = (swiper: any) => {
  if (watchStore.currentWatch && computedItems.value.length > 2) {
    console.log(computedItems.value)
    watchStore.currentWatch.size = computedItems.value[swiper.activeIndex].size ?? '41'
    if (watchStore.state === State.BAND_CHOICE) {
      watchStore.currentWatch.desc = computedItems.value[swiper.activeIndex].desc ?? 'desc'
      watchStore.currentWatch.brand = computedItems.value[swiper.activeIndex].brand ?? ''
      watchStore.currentWatch.href =
        computedItems.value[swiper.activeIndex].href ?? 'https://lyambda.com/'
      watchStore.currentWatch.sku_band = computedItems.value[swiper.activeIndex].sku
      watchStore.currentWatch.bandSize = computedItems.value[swiper.activeIndex].size
      watchStore.currentWatch.bandMaterial = computedItems.value[swiper.activeIndex].material

    } else if (watchStore.state === State.CASE_CHOICE) {
      watchStore.currentWatch.material = computedItems.value[swiper.activeIndex].material
      watchStore.currentWatch.sku_case = computedItems.value[swiper.activeIndex].sku
      watchStore.currentWatch.caseSize = computedItems.value[swiper.activeIndex].size
    } else if (watchStore.state === State.SERIES_CHOICE){
      watchStore.currentWatch.series! = computedItems.value[swiper.activeIndex].codename!
    }
  } else {
    //console.error(watchStore.currentWatch)
  }
}
const adaptiveSize = computed(()=> '_' + watchStore.currentWatch.caseSize + 'to' + watchStore.currentWatch.bandSize);
// watch(()=> watchStore.state, (newState) =>{
//   switch (newState){
//     case State.WELCOME:

//     break;
//     case State.START:

//     break;
//     case State.SIZE_CHOICE:

//     break;
//     case State.CASE_CHOICE:
//       Swiper.slideTo(computedItems.value.map((obj) => obj.sku).indexOf(watchStore.currentWatch.sku_case),500);
//     break;
//     case State.BAND_CHOICE:
//       Swiper.slideTo(computedItems.value.map((obj) => obj.sku).indexOf(watchStore.currentWatch.sku_band),500);
//     break;
//   }
// });

const storeCase = computed(() => watchStore.getSelfPics().case.src)
const storeBand = computed(() => watchStore.getSelfPics().band.src)

</script>
<style scoped>
.fade-out {
  opacity: 0;
}
.desc {
  text-align: center;
  color: grey;
  text-decoration: none;
  border-bottom: none;
  outline: none;
  font-weight: 500;
  font-family: Montserat, Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 3em;
}
a {
  text-decoration: none;
}
.animated-fade {
  transition: opacity 1s ease-in;
}
.my-swiper-wrapper {
  width: 100%;
  margin: 0 auto;
}
.pinned-img {
  position: absolute;
  top: 0;
  left: 40vw;
}

_38to40{
  scale: 1.05;
}


@media screen and (max-width: 1200px) {
  .pinned-img {
    left: 33.334%;
  }
}
@media screen and (max-width: 800px) {
  .pinned-img {
    left: 0;
  }
}
.selected-series{
  width: 100%;
  margin: 2em auto;
  text-align: center;
  font-family: Montserat, Verdana, Arial, sans-serif;
  font-weight: 500;
  color: #808080;
}
.bigswiper__btn{
  background: #EBEBEB;
  padding: 2em;
  border-radius: 100%;
  width: 30px;
  height:30px;
  color: #989898;
  scale: .6;
}
</style>
