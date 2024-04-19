import { ref } from 'vue'
import { defineStore } from 'pinia'
import {newSeries} from '@/assets/series'
import {newCase} from "@/assets/newCase";
import {newBands} from "@/assets/newBands";
import {colorDict, materialDict, adjectiveMaterialDict} from "@/assets/dict";
//import {bands41, bands45, cases41, cases45, series} from "@/assets/mocks";

export interface Watch {
  size: string
  material?: string
  brand?: string
  href?: string
  desc?: string
  sku_band?: string
  sku_case?: string
  series: string
  bandSize?: string
  caseSize?: string
  caseColor?: string
  caseMaterial?: string
  bandMaterial?: string
  codename?: string
  name?: string
}
export enum State {
  WELCOME = 0,
  START = 1,
  SIZE_CHOICE = 2,
  CASE_CHOICE = 3,
  BAND_CHOICE = 4,
  SERIES_CHOICE = 5
}

export const useWatchStore = defineStore('watch', () => {
  const state = ref<State>(4)
  const casesMaterials = Array.from(new Set(newCase.map(item => item.material?? 'ceramic')))
  const bandsBrand = Array.from(new Set(newBands.map(item => item.brand)))
  const sizes = Array.from(new Set(newCase.map(item => item.size)))
  const series = Array.from(new Set(newSeries.map(item => item.name)))


  const currentWatch = ref<Watch>({
    size: '44',
    material: newCase[0].material,
    brand: Object.keys(bandsBrand)[0],
    href: '/',
    desc: 'Силиконовый ремешок для Apple Watch 38/40/41 mm Lyambda Premium Altair DSJ-01-40-BK Black',
    sku_case: newCase[0].sku,
    sku_band: newBands[0].sku,
    series: newSeries[0].name,
    caseSize: newCase[0].size,
    bandSize: newBands[0].size,
    bandMaterial: newBands[0].material,
    caseColor: newCase[0].color,
    caseMaterial: newCase[0].material
  })

  const getSelfPics = function () {
    interface StringArray {
      case: {
        src: string | undefined
      }
      band: {
        src: string | undefined
      }
    }
    const result: StringArray = {
      case: {
        src: 'default'
      },
      band: {
        src: 'default'
      }
    }
    result.band.src = newBands.find((obj) => obj.sku === currentWatch.value.sku_band)!.pic.toString()
    result.case.src = newCase.find((obj) => obj.sku === currentWatch.value.sku_case)!.pic.toString()
    return result
  }
  // eslint-enable @typescript-eslint/no-explicit-any
  return {
    state,
    casesMaterials,
    bandsBrand,
    sizes,
    currentWatch,
    getSelfPics,
    newCase,
    adjectiveMaterialDict,
    newBands,
    series,
    newSeries,
    colorDict,
    materialDict
  }
})
