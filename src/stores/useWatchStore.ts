import {computed, ref} from 'vue'
import { defineStore } from 'pinia'
import { newSeries } from '@/assets/series'
import {caseDict, newCase} from '@/assets/newCase'
import {bandDict, newBands} from '@/assets/newBands'
import { colorDict, materialDict, adjectiveMaterialDict } from '@/assets/dict'
//import {bands41, bands45, cases41, cases45, series} from "@/assets/mocks";

export interface UseWatchStore {
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
export interface ISlideItem {
	type?: string | undefined
	href?: string | undefined
	price?: string | null
	desc?: string | undefined
	size?: string | undefined
	brand?: string | undefined
	material?: string | undefined
	pic?: string | undefined
	sku?: string | undefined
	series?: string
	codename?: string
	name?: string
	color?: string
}
export const useWatchStore = defineStore('watch', () => {
	const state = ref<State>(4)
	const casesMaterials = Array.from(new Set(newCase.map((item) => item.material ?? 'ceramic')))
	const bandsBrand = Array.from(new Set(newBands.map((item) => item.brand)))
	const sizes = Array.from(new Set(newCase.map((item) => item.size)))
	const series = Array.from(new Set(newSeries.map((item) => item.name)))
	const bandsMaterial = Array.from(new Set(newBands.map((item) => item.material?? 'ceramic')))
	const slideItems = ref<ISlideItem[]>([]);
	let activeIndex = ref<any>(0);
	const currentWatch = ref<UseWatchStore>( {
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
	});
	const gotoslide = ref(0);
	const currMenuItems: any[] = [];
	const availableSizes = computed(()=> Array.from(new Set(newCase.filter(i=>i.series === currentWatch.value.series).map(i=>i.size))));
	const availableCases = computed(()=> Array.from(new Set(newCase.filter(i=>i.series === currentWatch.value.series && i.size === (currentWatch.value.size ?? currentWatch.value.caseSize)).map(i => caseDict[i.color]))));
	const availableBandBrand = computed(()=> Array.from(new Set(newBands.filter(i=> i.size === parseInt(currentWatch.value.size) < 42 ? 'small' : 'large').map(i => i.brand))));
	const availableBandMaterial = computed(()=> Array.from(new Set(newBands.filter(i=> i.size === parseInt(currentWatch.value.size) < 42 ? 'small' : 'large').map(i => bandDict[i.material]))));
	const currAdditionalItems: any[] = [];
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
		try{
		result.band.src = newBands.filter((obj) => obj.sku === currentWatch.value.sku_band)[0].pic
		}catch(e){
			console.info('band pic go to default');
			console.info(e);
			result.band.src = newBands[0].pic.toString()
		}
		try{
			result.case.src = newCase.filter((obj) => obj.sku === currentWatch.value.sku_case)[0].pic
		} catch(e){
			console.info('case go to default');
			console.info(e);
			result.case.src = newCase[0].pic.toString()
		}
			return result
	}
	// eslint-enable @typescript-eslint/no-explicit-any
	function filterBySize(arr: any[], size: string) {
		const result = [];
		if ([38, 39, 40, 41].includes(parseInt(currentWatch.value.caseSize!))) {
			result.push(arr.filter(item => [38, 39, 40, 41].includes(parseInt(item.size))));
		} else if ([42, 43, 44, 45,49].includes(parseInt(currentWatch.value.caseSize!))) {
			result.push(arr.filter(item => [42, 43, 44, 45,49].includes(parseInt(item.size))));
		} else {
			result.push(arr.filter(item => item.size === currentWatch.value.caseSize));
		}
	}
	const setSlideItemsToSeries = async () => {
		slideItems.value = newSeries;
	}
	const setSlideItemsToCase = async () => {
		slideItems.value = newCase.filter(
			(item) =>
				item.series === currentWatch.value.series &&
				(item.size == currentWatch.value.caseSize ?? currentWatch.value.size)
		);
	}
	const setSlideItemsToBands = async () => {
		slideItems.value = newBands.filter(band => +currentWatch.value.caseSize! >= 42 ? band.size === 'large': band.size === 'small');
	}

	const setSlideItemsToSizes = async () => {
		// alert(JSON.stringify(newCase.filter((item) => item.series === currentWatch.value.series)))
		slideItems.value = newCase
			.filter((item) => item.series === currentWatch.value.series)
			.reduce((acc: any, item: any) => {
				if (!acc.some((i: any) => i.size === item.size)) {
					acc.push(item)
				}
				return acc
			}, []);

	}
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
		materialDict,
		gotoslide,
		bandsMaterial,
		currMenuItems,
		currAdditionalItems,
		slideItems,
		setSlideItemsToSeries,
		setSlideItemsToCase,
		setSlideItemsToBands,
		setSlideItemsToSizes,
		availableBandBrand,
		availableBandMaterial,
		availableCases,
		availableSizes,
		activeIndex
	}
})
