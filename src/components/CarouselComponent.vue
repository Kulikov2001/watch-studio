<template>
  <!-- Slider main container -->
  <div class="swiper mySwiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div
          class="swiper-slide"
          v-for="(item,index) in slidesBand40"
          :key="index"
      >
        <img
          :src="item.pic"
        />
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script setup>
import Swiper from 'swiper';
import { Navigation, Pagination,Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

var swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Scrollbar],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
const slidesBand40 = [
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
const slidesBand45 = [
  {
    type: 'bands',
    size: '45',
    brand: 'Альтаир',
    pic: '../assets/44/bands/Альтаир/Altair-DSJ-01-44-BK.webp',
    sku: 'Altair-DSJ-01-44-BK'
  },
  {
    type: 'bands',
    size: '45',
    brand: 'Альтаир',
    pic: '../assets/44/bands/Альтаир/Altair-DSJ-01-44-BL.webp',
    sku: 'Altair-DSJ-01-44-BL'
  },
  {
    type: 'bands',
    size: '45',
    brand: 'Альтаир',
    pic: '../assets/44/bands/Альтаир/Altair-DSJ-01-44-LBG.webp',
    sku: 'Altair-DSJ-01-44-LBG'
  },
  {
    type: 'bands',
    size: '45',
    brand: 'Альтаир',
    pic: '../assets/44/bands/Альтаир/Altair-DSJ-01-44-OR.webp',
    sku: 'Altair-DSJ-01-44-OR'
  },
  {
    type: 'bands',
    size: '45',
    brand: 'Альтаир',
    pic: '../assets/44/bands/Альтаир/Altair-DSJ-01-44-RD.webp',
    sku: 'Altair-DSJ-01-44-RD'
  },
  {
    type: 'bands',
    size: '45',
    brand: 'Альтаир',
    pic: '../assets/44/bands/Альтаир/Altair-DSJ-01-44-WH.webp',
    sku: 'Altair-DSJ-01-44-WH'
  },
  {
    type: 'bands',
    size: '45',
    brand: 'Мелеф',
    pic: '../assets/44/bands/Мелеф/Meleph-DSN-26-44-1.webp',
    sku: 'Meleph-DSN-26-44-1'
  },

  {
    type: 'bands',
    size: '45',
    brand: 'Мелеф',
    pic: '../assets/44/bands/Мелеф/Meleph-DSN-26-44-2.webp',
    sku: 'Meleph-DSN-26-44-2'
  },

  {
    type: 'bands',
    size: '45',
    brand: 'Мелеф',
    pic: '../assets/44/bands/Мелеф/Meleph-DSN-26-44-6.webp',
    sku: 'Meleph-DSN-26-44-6'
  },

  {
    type: 'bands',
    size: '45',
    brand: 'Мелеф',
    pic: '../assets/44/bands/Мелеф/Meleph-DSN-26-44-7.webp',
    sku: 'Meleph-DSN-26-44-7'
  },
  {
    type: 'bands',
    size: '45',
    brand: 'Мелеф',
    pic: '../assets/44/bands/Мелеф/Meleph-DSN-26-44-8.webp',
    sku: 'Meleph-DSN-26-44-8'
  },
  {
    type: 'bands',
    size: '45',
    brand: 'Мелеф',
    pic: '../assets/44/bands/Мелеф/Meleph-DSN-26-44-13.webp',
    sku: 'Meleph-DSN-26-44-13'
  },
  {
    type: 'bands',
    size: '45',
    brand: 'Мелеф',
    pic: '../assets/44/bands/Мелеф/Meleph-DSN-26-44-15.webp',
    sku: 'Meleph-DSN-26-44-15'
  },
  {
    type: 'bands',
    size: '45',
    brand: 'Мелеф',
    pic: '../assets/44/bands/Мелеф/Meleph-DSN-26-44-16.webp',
    sku: 'Meleph-DSN-26-44-16'
  },
];
</script>
<style scoped>

</style>