<template>
  <swiper
      :navigation="true"
      :modules="modules"
      class="mySwiper"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :scrollbar="{draggable: true}"
      :slides-per-view="5"

      :centeredSlides="true"
  >
    <swiper-slide
        v-for="(item,index) in allBands44"
        v-slot="{isActive}"
        :key="index"
    >
      <img
          height="400"
          :src="item.pic"
          style="position:relative; z-index:0"
      />
      <img
          height="400"
          v-if="isActive"
          :src="mockCasePic"
          style="position: absolute; z-index:1; top:0; left:0;"
        />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import { Navigation, Pagination,Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Navigation, Pagination, Scrollbar];

const onSwiper = (swiper) =>{
  console.info(swiper);
}
const onSlideChange = () =>{
  console.log('slide change');
}

const mockCasePic = 'https://i.postimg.cc/0NsWGB1V/41.webp';

const allBands40 = [
  {
    type: 'bands',
    size: '40',
    brand: 'Альтаир',
    pic: 'https://i.postimg.cc/zvc51D8n/Altair-DSJ-01-40-BK.webp',
    sku: 'Altair-DSJ-01-40-BK'
  },
  {
    type: 'bands',
    size: '40',
    brand: 'Альтаир',
    pic: 'https://i.postimg.cc/Nj8741mQ/Altair-DSJ-01-40-BL.webp',
    sku: 'Altair-DSJ-01-40-BL'
  },
  {
    type: 'bands',
    size: '40',
    brand: 'Альтаир',
    pic: 'https://i.postimg.cc/5NCmHctY/Altair-DSJ-01-40-LBG.webp',
    sku: 'Altair-DSJ-01-40-LBG'
  },
  {
    type: 'bands',
    size: '40',
    brand: 'Альтаир',
    pic: '../assets/41/bands/Альтаир/Altair-DSJ-01-40-OR.webp',
    sku: 'Altair-DSJ-01-40-OR'
  },
  {
    type: 'bands',
    size: '40',
    brand: 'Альтаир',
    pic: '../assets/41/bands/Альтаир/Altair-DSJ-01-40-RD.webp',
    sku: 'Altair-DSJ-01-40-RD'
  },
  {
    type: 'bands',
    size: '40',
    brand: 'Альтаир',
    pic: '../assets/41/bands/Альтаир/Altair-DSJ-01-40-WH.webp',
    sku: 'Altair-DSJ-01-40-WH'
  },
  {
    type: 'bands',
    size: '40',
    brand: 'Мелеф',
    pic: '../assets/41/bands/Мелеф/Meleph-DSN-26-40-1.webp',
    sku: 'Meleph-DSN-26-40-1'
  },

  {
    type: 'bands',
    size: '40',
    brand: 'Мелеф',
    pic: '../assets/41/bands/Мелеф/Meleph-DSN-26-40-2.webp',
    sku: 'Meleph-DSN-26-40-2'
  },

  {
    type: 'bands',
    size: '40',
    brand: 'Мелеф',
    pic: '../assets/41/bands/Мелеф/Meleph-DSN-26-40-6.webp',
    sku: 'Meleph-DSN-26-40-6'
  },

  {
    type: 'bands',
    size: '40',
    brand: 'Мелеф',
    pic: '../assets/41/bands/Мелеф/Meleph-DSN-26-40-7.webp',
    sku: 'Meleph-DSN-26-40-7'
  },
  {
    type: 'bands',
    size: '40',
    brand: 'Мелеф',
    pic: '../assets/41/bands/Мелеф/Meleph-DSN-26-40-8.webp',
    sku: 'Meleph-DSN-26-40-8'
  },
  {
    type: 'bands',
    size: '40',
    brand: 'Мелеф',
    pic: '../assets/41/bands/Мелеф/Meleph-DSN-26-40-13.webp',
    sku: 'Meleph-DSN-26-40-13'
  },
  {
    type: 'bands',
    size: '40',
    brand: 'Мелеф',
    pic: '../assets/41/bands/Мелеф/Meleph-DSN-26-40-15.webp',
    sku: 'Meleph-DSN-26-40-15'
  },
  {
    type: 'bands',
    size: '40',
    brand: 'Мелеф',
    pic: '../assets/41/bands/Мелеф/Meleph-DSN-26-40-16.webp',
    sku: 'Meleph-DSN-26-40-16'
  },
];
const casesMaterials = ['Aluminum', 'Stainless Steel'];
const allBands44 = [
  {
    type: 'bands',
    size: '44',
    brand: 'Альтаир',
    pic: 'https://i.postimg.cc/3wzBmzKc/Altair-DSJ-01-44-BK.webp',
    sku: 'Altair-DSJ-01-44-BK'
  },
  {
    type: 'bands',
    size: '44',
    brand: 'Альтаир',
    pic: 'https://i.postimg.cc/J7Nf75xL/Canopus-DSG-42-44-BL.webp',
    sku: 'Altair-DSJ-01-44-BL'
  },
  {
    type: 'bands',
    size: '44',
    brand: 'Альтаир',
    pic: 'https://i.postimg.cc/6qffs3Ck/Altair-DSJ-01-44-LBG.webp',
    sku: 'Altair-DSJ-01-44-LBG'
  },
  {
    type: 'bands',
    size: '44',
    brand: 'Альтаир',
    pic: 'https://i.postimg.cc/zDCjHd4x/Altair-DSJ-01-44-OR.webp',
    sku: 'Altair-DSJ-01-44-OR'
  },
  {
    type: 'bands',
    size: '44',
    brand: 'Альтаир',
    pic: 'https://i.postimg.cc/Hs39BrY5/Altair-DSJ-01-44-RD.webp',
    sku: 'Altair-DSJ-01-44-RD'
  },
  {
    type: 'bands',
    size: '44',
    brand: 'Альтаир',
    pic: 'https://i.postimg.cc/c4dcRRS0/Altair-DSJ-01-44-WH.webp',
    sku: 'Altair-DSJ-01-44-WH'
  },
  {
    type: 'bands',
    size: '44',
    brand: 'Мелеф',
    pic: 'https://i.postimg.cc/G3v4cV6m/Meleph-DSN-26-44-1.webp',
    sku: 'Meleph-DSN-26-44-1'
  },

  {
    type: 'bands',
    size: '44',
    brand: 'Мелеф',
    pic: 'https://i.postimg.cc/D0hyJfRy/Meleph-DSN-26-44-2.webp',
    sku: 'Meleph-DSN-26-44-2'
  },

  {
    type: 'bands',
    size: '44',
    brand: 'Мелеф',
    pic: 'https://i.postimg.cc/G3v4cV6m/Meleph-DSN-26-44-1.webp',
    sku: 'Meleph-DSN-26-44-6'
  },

  {
    type: 'bands',
    size: '44',
    brand: 'Мелеф',
    pic: 'https://i.postimg.cc/Sx1sThYD/Meleph-DSN-26-44-7.webp',
    sku: 'Meleph-DSN-26-44-7'
  },
  {
    type: 'bands',
    size: '44',
    brand: 'Мелеф',
    pic: 'https://i.postimg.cc/brx2GBJk/Meleph-DSN-26-40-8.webp',
    sku: 'Meleph-DSN-26-44-8'
  },
  {
    type: 'bands',
    size: '44',
    brand: 'Мелеф',
    pic: 'https://i.postimg.cc/yYKRqsQP/Meleph-DSN-26-40-13.webp',
    sku: 'Meleph-DSN-26-44-13'
  },
  {
    type: 'bands',
    size: '44',
    brand: 'Мелеф',
    pic: 'https://i.postimg.cc/K8vgzQy3/Meleph-DSN-26-40-15.webp',
    sku: 'Meleph-DSN-26-44-15'
  },
  {
    type: 'bands',
    size: '44',
    brand: 'Мелеф',
    pic: 'https://i.postimg.cc/TYcDfFBX/Meleph-DSN-26-40-16.webp',
    sku: 'Meleph-DSN-26-44-16'
  },
];
const collections = [];
const sizes = [45,40];
const allCases45 = [
  {
    type: 'cases',
    size: '45',
    material: 'Aluminum',
    pic: 'https://i.postimg.cc/qBQxJNPR/45-aluminum-pink-nc-s9.webp',
    sku: '45-aluminum-pink-nc-s9'
  },
  {
    type: 'cases',
    size: '45',
    material: 'Aluminum',
    pic: 'https://i.postimg.cc/MHs7dL7R/45-aluminum-midnight-nc-s9.webp',
    sku: '45-aluminum-midnight-nc-s9'
  },
  {
    type: 'cases',
    size: '45',
    material: 'Stainless steel',
    pic: 'https://i.postimg.cc/Lsn7m3pF/45-stainless-gold-s9.webp',
    sku: '45-stainless-gold-s9'
  },
  {
    type: 'cases',
    size: '45',
    material: 'Stainless steel',
    pic: 'https://i.postimg.cc/yNtGx31g/45-stainless-silver-s9.webp',
    sku: '45-stainless-silver-s9'
  },

];
</script>
<style scoped>

</style>