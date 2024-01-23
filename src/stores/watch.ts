import { ref } from 'vue'
import { defineStore } from 'pinia'
export interface Watch {
  size: number,
  material?: string,
  brand?: string,
  pic: string,
  sku: string,
  href?: string,
  price?: string,
  desc?: string,
}
export enum State {
  WELCOME = 0,
  START = 1,
  SIZE_CHOICE = 2,
  CASE_CHOICE = 3,
  BAND_CHOICE = 4
}

export const useWatchStore = defineStore('watch', () => {
  const state = ref<State>(0)
  const bands41 = [
    {
      type: 'bands',
      size: 41,
      brand: 'Altair',
      pic: 'src/assets/41/bands/Altair/Altair_DSJ-01-40-BK.webp',
      sku: 'Altair_DSJ-01-40-BK'
    },
    {
      type: 'bands',
      size: 41,
      brand: 'Altair',
      pic: 'src/assets/41/bands/Altair/Altair_DSJ-01-40-BL.webp',
      sku: 'Altair_DSJ-01-40-BL'
    },
    {
      type: 'bands',
      size: 41,
      brand: 'Altair',
      pic: 'src/assets/41/bands/Altair/Altair_DSJ-01-40-LBG.webp',
      sku: 'Altair_DSJ-01-40-LBG'
    },
    {
      type: 'bands',
      size: 41,
      brand: 'Altair',
      pic: 'src/assets/41/bands/Altair/Altair_DSJ-01-40-OR.webp',
      sku: 'Altair_DSJ-01-40-OR'
    },
    {
      type: 'bands',
      size: 41,
      brand: 'Altair',
      pic: 'src/assets/41/bands/Altair/Altair_DSJ-01-40-RD.webp',
      sku: 'Altair_DSJ-01-40-RD'
    },
    {
      type: 'bands',
      size: 41,
      brand: 'Altair',
      pic: 'src/assets/41/bands/Altair/Altair_DSJ-01-40-WH.webp',
      sku: 'Altair_DSJ-01-40-WH'
    },
    {
      type: 'bands',
      size: 41,
      brand: 'Meleph',
      pic: 'src/assets/41/bands/Meleph/Meleph_DSN-26-40-1.webp',
      sku: 'Meleph_DSN-26-40-1'
    },

    {
      type: 'bands',
      size: 41,
      brand: 'Meleph',
      pic: 'src/assets/41/bands/Meleph/Meleph_DSN-26-40-2.webp',
      sku: 'Meleph_DSN-26-40-2'
    },

    {
      type: 'bands',
      size: 41,
      brand: 'Meleph',
      pic: 'src/assets/41/bands/Meleph/Meleph_DSN-26-40-6.webp',
      sku: 'Meleph_DSN-26-40-6'
    },

    {
      type: 'bands',
      size: 41,
      brand: 'Meleph',
      pic: 'src/assets/41/bands/Meleph/Meleph_DSN-26-40-7.webp',
      sku: 'Meleph_DSN-26-40-7'
    },
    {
      type: 'bands',
      size: 41,
      brand: 'Meleph',
      pic: 'src/assets/41/bands/Meleph/Meleph_DSN-26-40-8.webp',
      sku: 'Meleph_DSN-26-40-8'
    },
    {
      type: 'bands',
      size: 41,
      brand: 'Meleph',
      pic: 'src/assets/41/bands/Meleph/Meleph_DSN-26-40-13.webp',
      sku: 'Meleph_DSN-26-40-13'
    },
    {
      type: 'bands',
      size: 41,
      brand: 'Meleph',
      pic: 'src/assets/41/bands/Meleph/Meleph_DSN-26-40-15.webp',
      sku: 'Meleph_DSN-26-40-15'
    },
    {
      type: 'bands',
      size: 41,
      brand: 'Meleph',
      pic: 'src/assets/41/bands/Meleph/Meleph_DSN-26-40-16.webp',
      sku: 'Meleph_DSN-26-40-16'
    }
  ]
  const bands45 = [
    {
      type: 'bands',
      href: 'https://www.lyambda.com/product/bands/for-apple-watch/altair_applewatch_black_38_40_41/',
      price: '',
      desc: '',
      size: 45,
      brand: 'Altair',
      pic: 'src/assets/45/bands/Altair/Altair_DSJ-01-44-BK.webp',
      sku: 'Altair_DSJ-01-44-BK'
    },
    {
      type: 'bands',
      size: 45,
      brand: 'Altair',
      pic: 'src/assets/45/bands/Altair/Altair_DSJ-01-44-BL.webp',
      sku: 'Altair_DSJ-01-44-BL'
    },
    {
      type: 'bands',
      size: 45,
      brand: 'Altair',
      pic: 'src/assets/45/bands/Altair/Altair_DSJ-01-44-LBG.webp',
      sku: 'Altair_DSJ-01-44-LBG'
    },
    {
      type: 'bands',
      size: 45,
      brand: 'Altair',
      pic: 'src/assets/45/bands/Altair/Altair_DSJ-01-44-OL.webp',
      sku: 'Altair_DSJ-01-44-OL'
    },
    {
      type: 'bands',
      size: 45,
      brand: 'Altair',
      pic: 'src/assets/45/bands/Altair/Altair_DSJ-01-44-OR.webp',
      sku: 'Altair_DSJ-01-44-OR'
    },
    {
      type: 'bands',
      size: 45,
      brand: 'Altair',
      pic: 'src/assets/45/bands/Altair/Altair_DSJ-01-44-RD.webp',
      sku: 'Altair_DSJ-01-44-RD'
    },
    {
      type: 'bands',
      size: 45,
      brand: 'Altair',
      pic: 'src/assets/45/bands/Altair/Altair_DSJ-01-44-WH.webp',
      sku: 'Altair_DSJ-01-44-WH'
    },
    {
      type: 'bands',
      size: 45,
      brand: 'Canopus',
      pic: 'src/assets/45/bands/Canopus/Canopus_DSG-42-44-BK.webp',
      sku: 'Canopus_DSG-42-44-BK'
    },
    {
      type: 'bands',
      size: 45,
      brand: 'Canopus',
      pic: 'src/assets/45/bands/Canopus/Canopus_DSG-42-44-BL.webp',
      sku: 'Canopus_DSG-42-44-BL'
    },
    {
      type: 'bands',
      size: 45,
      brand: 'Canopus',
      pic: 'src/assets/45/bands/Canopus/Canopus_DSG-42-44-SL.webp',
      sku: 'Canopus_DSG-42-44-SL'
    },
    {
      type: 'bands',
      size: 45,
      brand: 'Meleph',
      pic: 'src/assets/45/bands/Meleph/Meleph_DSN-26-44-1.webp',
      sku: 'Meleph_DSN-26-44-1'
    },

    {
      type: 'bands',
      size: 45,
      brand: 'Meleph',
      pic: 'src/assets/45/bands/Meleph/Meleph_DSN-26-44-2.webp',
      sku: 'Meleph_DSN-26-44-2'
    },

    {
      type: 'bands',
      size: 45,
      brand: 'Meleph',
      pic: 'src/assets/45/bands/Meleph/Meleph_DSN-26-44-6.webp',
      sku: 'Meleph_DSN-26-44-6'
    },

    {
      type: 'bands',
      size: 45,
      brand: 'Meleph',
      pic: 'src/assets/45/bands/Meleph/Meleph_DSN-26-44-7.webp',
      sku: 'Meleph_DSN-26-44-7'
    },
    {
      type: 'bands',
      size: 45,
      brand: 'Meleph',
      pic: 'src/assets/45/bands/Meleph/Meleph_DSN-26-44-8.webp',
      sku: 'Meleph_DSN-26-44-8'
    },
    {
      type: 'bands',
      size: 45,
      brand: 'Meleph',
      pic: 'src/assets/45/bands/Meleph/Meleph_DSN-26-44-13.webp',
      sku: 'Meleph_DSN-26-44-13'
    },
    {
      type: 'bands',
      size: 45,
      brand: 'Meleph',
      pic: 'src/assets/45/bands/Meleph/Meleph_DSN-26-44-15.webp',
      sku: 'Meleph_DSN-26-44-15'
    },
    {
      type: 'bands',
      size: 45,
      brand: 'Meleph',
      pic: 'src/assets/45/bands/Meleph/Meleph_DSN-26-44-16.webp',
      sku: 'Meleph_DSN-26-44-16'
    }
  ]
  const cases41 = [
    {
      type: 'cases',
      size: 41,
      material: 'Aluminum',
      pic: 'src/assets/41/case/Aluminum/41-aluminum-pink_9.webp',
      sku: '41-aluminum-pink_9'
    },
    {
      type: 'cases',
      size: 41,
      material: 'Aluminum',
      pic: 'src/assets/41/case/Aluminum/41-aluminum-midnight_9.webp',
      sku: '41-aluminum-midnight_9'
    },
    {
      type: 'cases',
      size: 41,
      material: 'Stainless steel',
      pic: 'src/assets/41/case/Stainless_Steel/41-stainless-gold-s9_.webp',
      sku: '41-stainless-gold-s9_'
    },
    {
      type: 'cases',
      size: 41,
      material: 'Stainless steel',
      pic: 'src/assets/41/case/Stainless_Steel/41-stainless-silver-s9_.webp',
      sku: '41-stainless-silver-s9_'
    }
  ]
  const cases45 = [
    {
      type: 'cases',
      size: 45,
      material: 'Aluminum',
      pic: 'src/assets/45/case/Aluminum/45-aluminum-pink-nc-s9.webp',
      sku: '45-aluminum-pink-nc-s9'
    },
    {
      type: 'cases',
      size: 45,
      material: 'Aluminum',
      pic: 'src/assets/45/case/Aluminum/45-aluminum-midnight-nc-s9.webp',
      sku: '45-aluminum-midnight-nc-s9'
    },
    {
      type: 'cases',
      size: 45,
      material: 'Stainless steel',
      pic: 'src/assets/45/case/Stainless_Steel/45-stainless-gold-s9.webp',
      sku: '45-stainless-gold-s9'
    },
    {
      type: 'cases',
      size: 45,
      material: 'Stainless steel',
      pic: 'src/assets/45/case/Stainless_Steel/45-stainless-silver-s9.webp',
      sku: '45-stainless-silver-s9'
    }
  ]

  const casesMaterials = {
    /* Формат ключ = перевод */
    'Stainless steel': 'Хирургическая сталь',
    Aluminum: 'Алюминий'
  }
  const bandsBrand: object = {
    /* Формат ключ = перевод */
    Meleph: 'Мелеф',
    Altair: 'Альтаир',
    Canopus: 'Канопус'
  }
  const collections = ['']
  const sizes = [40, 45]
  const currentWatch = ref<Watch>({
    size: 40,
    material: Object.keys(casesMaterials)[0],
    brand: Object.keys(bandsBrand)[0],
    pic: 'https://source.unsplash.com/400x400/',
    sku: 'default',
    href: '/',
    price: '$400',
    desc: 'Description as SKU'
  })
  return {
    state,
    cases41,
    bands41,
    cases45,
    bands45,
    casesMaterials,
    bandsBrand,
    collections,
    sizes,
    currentWatch
  }
})
