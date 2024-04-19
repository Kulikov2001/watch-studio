<template>
  <ButtonComponent
    :link="'/'"
    :name="'Myname'"
    @click="emitSeries"
    :class="{'hidden' : watchStore.state === State.SERIES_CHOICE}"
  >
    <template #ButtonContent>
      <span class="menu__btn-wrapper">
        <IconSeries />
        <Transition name="title">
          <span v-if="watchStore.state !== State.SERIES_CHOICE">{{ 'Серия' }}</span>
        </Transition>
        <TransitionGroup name="list" tag="nav">
          <span
            v-if="watchStore.state === State.SERIES_CHOICE"
            v-for="(item, index) in watchStore.series"
            :key="index"
            style="padding: 0 0.2em"
            @click="handleMenuItemClick($event)"
          >
            <b class="case-series" v-if="watchStore.currentWatch.series === item">{{ item }}</b>
            <span class="case-series" v-else>{{ item }}</span>
          </span>
        </TransitionGroup>
      </span>
    </template>
  </ButtonComponent>

  <swiper
    v-if="watchStore.state === State.SERIES_CHOICE"
    :navigation="swiperOptions.navigation"
    :modules="modules"
    class="seriesSwiper"
    @swiper="onSwiperMenu"
    ref="swiperRefMenu"
    :slides-per-view="1"
    :centeredSlides="true"
    :breakpoints="{1000: { slidesPerView: 3 } }"
  >

    <swiper-slide
      v-if="watchStore.state === State.SERIES_CHOICE"
      v-for="(item, index) in watchStore.series"
      :key="index"
      style="padding: 0 0.2em"
      @click="handleMenuItemClick($event)"
    >
      <b class="band-material" v-if="watchStore.currentWatch.brand === item">{{ item }}</b>
      <span class="band-material" v-else>{{ item }}</span>
    </swiper-slide>
    <div class="swiper-button-prev bigswiper__btn" @click="swiperRefMenu.slidePrev()" slot="button-prev"></div>
    <div class="swiper-button-next bigswiper__btn" @click="swiperRefMenu.slideNext()" slot="button-next"></div>
  </swiper>

  <ButtonComponent
    :link="'/'"
    :name="'Myname'"
    :isMore="watchStore.state === State.SIZE_CHOICE"
    @click="emitSize"
    :class="{'hidden' : watchStore.state === State.BAND_CHOICE}"
  >
    <template #ButtonContent>
      <span class="menu__btn-wrapper">
        <IconSize />
        <Transition name="title">
          <span  v-if="watchStore.state !== State.SIZE_CHOICE">{{ 'Размер' }}</span>
        </Transition>
        <TransitionGroup name="list" tag="nav">
          <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
          <span
            v-if="watchStore.state === State.SIZE_CHOICE"
            v-for="(item, index) in watchStore.sizes"
            :key="index"
            style="padding: 0 0.2em"
            @click="handleMenuItemClick($event)"
          >
            <b class="case-size" v-if="watchStore.currentWatch.caseSize === item">{{ item.toString() }}мм</b>
            <span class="case-size" v-else>{{ item.toString() }}мм</span>
          </span>
        </TransitionGroup>
      </span>
    </template>
  </ButtonComponent>

  <ButtonComponent
    :link="'/'"
    :name="'Myname'"
    :isMore="watchStore.state === State.CASE_CHOICE"
    :class="{'hidden' : watchStore.state === State.BAND_CHOICE}"
    @click="emitCase"
  >
    <template #ButtonContent>
      <span class="menu__btn-wrapper">
        <IconCase />
        <Transition name="title">
          <span v-if="watchStore.state !== State.CASE_CHOICE">{{ 'Корпус' }}</span>
        </Transition>
        <TransitionGroup name="list" tag="nav">
          <span
            v-if="watchStore.state === State.CASE_CHOICE"
            v-for="(item, index) in watchStore.casesMaterials"
            :key="index"
            style="padding: 0 0.2em"
            @click="handleMenuItemClick($event)"
          >
            <b class="case-material" v-if="watchStore.currentWatch.material === item">{{ item }}</b>
            <span class="case-material" v-else>{{ item }}</span>
          </span>
        </TransitionGroup>
      </span>
    </template>
  </ButtonComponent>

  <!-- Материалы -->
  <swiper
    v-if="watchStore.state === State.BAND_CHOICE"
    :navigation="swiperOptions.navigation"
    :modules="modules"
    class="bandSwiper"
    @swiper="onSwiperAdditionalMenu"
    ref="swiperRefAdditional"
    :slides-per-view="1"
    :centeredSlides="true"
    :breakpoints="{1000: { slidesPerView: 3 } }"
  >

    <swiper-slide
      v-if="watchStore.state === State.BAND_CHOICE"
      v-for="(item, index) in ['Нейлон', 'Кожа', 'Cталь', 'Титан', 'Нейлон']"
      :key="index"
      style="padding: 0 0.2em"

      @click="handleMenuItemClick($event)"
    >
      <b class="band-material" v-if="watchStore.currentWatch.brand === item">{{ item }}</b>
      <span class="band-material" v-else>{{ item }}</span>
    </swiper-slide>
    <div class="swiper-button-prev bigswiper__btn" @click="swiperRefMenu.slidePrev()" slot="button-prev"></div>
    <div class="swiper-button-next bigswiper__btn" @click="swiperRefMenu.slideNext()" slot="button-next"></div>

  </swiper>

  <!-- Бренды/серии ремешков -->
  <swiper
    v-if="watchStore.state === State.BAND_CHOICE"
  :navigation="swiperOptions.navigation"
  :modules="modules"
  class="bandSwiper"
  @swiper="onSwiperMenu"
    ref="swiperRefMenu"
  :slides-per-view="1"
  :centeredSlides="true"
  :breakpoints="{1000: { slidesPerView: 3 } }"
  >
    <swiper-slide
      v-if="watchStore.state === State.BAND_CHOICE"
      v-for="(item, index) in watchStore.bandsBrand"
      :key="index"
      style="padding: 0 0.2em"
      @click="handleMenuItemClick($event)"
    >
      <b v-if="watchStore.currentWatch.brand === item">{{ item }}</b>
      <span v-else>{{ item }}</span>
    </swiper-slide>
    <div class="swiper-button-prev bigswiper__btn" @click="swiperRefMenu.slidePrev()" slot="button-prev"></div>
    <div class="swiper-button-next bigswiper__btn" @click="swiperRefMenu.slideNext()" slot="button-next"></div>

  </swiper>
  <ButtonComponent
    :link="'/'"
    :name="'Myname'"
    @click="emitBand"
    v-if="watchStore.state !== State.BAND_CHOICE"
  >
    <template #ButtonContent>
      <span class="menu__btn-wrapper">
        <IconBand />
        <Transition name="title">
          <span>{{ 'Ремешок' }}</span>
        </Transition>
      </span>
    </template>
  </ButtonComponent>
  <!--ButtonComponent
    :link="'/'"
    :name="'Myname'"
    @click="emitBand"
    :isMore="watchStore.state === State.BAND_CHOICE"
    :class="{'hidden' : watchStore.state !== State.BAND_CHOICE}"
  >
    <template #ButtonContent>
      <span class="menu__btn-wrapper">
        <IconBand />
        <Transition name="title">
          <span v-if="watchStore.state !== State.BAND_CHOICE">{{ 'Ремешок' }}</span>
        </Transition>
        <TransitionGroup name="list" tag="nav">
          <span
            v-if="watchStore.state === State.BAND_CHOICE"
            v-for="(item, index) in watchStore.bandsBrand"
            :key="index"
            style="padding: 0 0.2em"
            @click="handleMenuItemClick(item)"
          >
            <b v-if="watchStore.currentWatch.brand === index">{{ item }}</b>
            <span v-else>{{ item }}</span>
          </span>
        </TransitionGroup>
      </span>
    </template>
  </ButtonComponent-->
</template>

<script setup lang="ts">
import IconSize from '@/components/icons/IconSize.vue'
import IconBand from '@/components/icons/IconBand.vue'
import IconCase from '@/components/icons/IconCase.vue'
import IconSeries from '@/components/icons/IconSeries.vue'
import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import {State, useWatchStore} from '@/stores/watch'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {EffectFade, Navigation, Pagination, Scrollbar} from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/vue'
import {ref} from "vue";
const modules = [Navigation, Pagination, Scrollbar, EffectFade]

const bandSwiper = () => {}
const bandMatSwiper = () => {}
const seriesSwiper = () => {}
const watchStore = useWatchStore()
const emit = defineEmits<{
  (e: 'size'): void
  (e: 'case'): void
  (e: 'band'): void
  (e: 'series'): void
  (e: 'subItem', $event: Event): void
}>()
const emitSize = () => {
  emit('size')
}
const emitCase = () => {
  emit('case')
}
const emitBand = () => {
  emit('band')
}
const emitSeries = () => {
    emit('series')
}
const handleMenuItemClick = async (event: Event) => {
  emit('subItem', event)
}
//const handleCaseItemClick = async(case: string) =>{};
const props = defineProps<{
  variations: object
}>();
const swiperOptions = {
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
};
const swiperRefMenu: any = ref(null);
const swiperRefAdditional: any = ref(null)
const onSwiperMenu = (swiper:any) => {
  swiperRefMenu.value = swiper
}
const onSwiperAdditionalMenu = (swiper: any)=>{
  swiperRefAdditional.value = swiper;
}

</script>

<style scoped>
.bandSwiper, .bandMatSwiper, .seriesSwiper {
  border-radius: 2em;
  padding: 1em;
  align-items: center;
  background-color: #F0F0F0;
  cursor: pointer;
  font-family: Arial, Montserat, Verdana, sans-serif;
}


.list-enter-active {
  /*,
.list-leave-active { */
  transition: all 0.5s ease;
}
.list-enter-from {
  /* .list-leave-to { */
  opacity: 0;
  transform: translateX(30px);
}
.title-enter-active {
  transition: all 0.5s ease;
}
.title-enter-from {
  opacity: 1;
}
button{
  display:block;
  animation: fade-in 1s;
}
.hidden{
  animation: fade-out 1s;
  display:none;
}
.menu__btn-wrapper{
  display: inline-flex; align-items: center; gap: 10px;
}
.menu__btn-wrapper > nav{
  position: relative;
  flex-wrap: nowrap;
  max-height: 1em ;
  overflow: hidden;
  word-break: keep-all;
  max-width: 300px;
}
/*.menu__btn-wrapper > nav:after{
//  position: absolute;
//  content: url(./src/assets/right_arrow.png);
//  min-height: 60px !important;
//  width: 60px;
//  right:-10px;
//  top:-15px;
//  z-index: 5;
//}
//.menu__btn-wrapper > nav:before{
//  position: absolute;
//  content: url(./src/assets/right_arrow.png);
//  min-height: 60px !important;
//  width: 60px;
//  left:-0.5em;
//  top:-25px;
//  transform: rotate(-180deg);
//  z-index: 5;
//} */
.menu__btn-wrapper > nav > span{
    flex: 1 1 auto;
    padding: 15px;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
<style>
.bandSwiper .swiper-wrapper, .bandMatSwiper, .seriesSwiper, .swiper-wrapper{
  align-items: center;
  word-break: keep-all;
  padding: .3em
}
:root{
  --swiper-navigation-color: #989898 !important;
}
.swiper-button-disabled{
  opacity: 1 !important;
}
/*.swiper-button-disabled::before{
//  content: url(https://source.unsplash.com/100x100/);
}*/
.bigswiper__btn{
  background: #EBEBEB;
  border-radius: 100%;
  color: #989898;
  /*scale: .5;*/
  padding: 30px;
  margin: -2.25em 0;
  width: 15px;
  height: 15px;
  overflow: hidden;
  scale: .5;
}
</style>
