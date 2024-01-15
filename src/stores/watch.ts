import { ref } from 'vue'
import { defineStore } from 'pinia'
import {allBands44,allBands40,sizes,allCases45} from '@/mocks/serverMock';
export interface Watch{
  id?: number;
  sku?: string;
  collections?: string[];
  currentCollection?:{
    name?: string;
    cases?: string[];
    sizes?: number[];
    bands?: string[];
  }
  size?: number;
  case?:{
    id?: number;
    sku?: string;
    type?: string;
    name?: string;
    pic?: string;
  }
  band?: {
    id?: number;
    sku?: string;
    type?: string;
    name?: string;
    pic?: string;
  }
  price?: string;
  name?: string;
}

export const useWatchStore = defineStore('watch', () => {
  const currentWatch = ref<Watch>();
  const bands = ref([]);

  return{
    currentWatch,
  };
});
