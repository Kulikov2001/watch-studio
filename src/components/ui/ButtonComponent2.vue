<template>
		<section class="simpleBtn" v-if="props.name !== elState">
			<button
				@click="handleBtnClick($event)"
				:class="{ hidden: props.name === elState }"
			>
				<span class="menu__btn-wrapper">
					<slot name="Icon"></slot>
					<Transition name="title">
						<span>{{ props.title }}</span>
					</Transition>
				</span>
			</button>
		</section>
		<section class="swipersBtn" v-else>
			<div v-if="props.name === elState && props.additional" class="swiper__wrapper">
			<swiper
				:navigation="swiperOptions.navigation"
				:modules="modules"
				:class="`${props.name}Swiper`"
				@swiper="onSwiperAdditionalMenu"
				ref="swiperRefAdditional"
				:slides-per-view="1"
				:centeredSlides="true"
				:breakpoints="{ 1000: { slidesPerView: 3 } }"
				:slideToClickedSlide="true"
			>
				<swiper-slide
					v-for="(item, index) in additional"
					@click="handleAdditionalSlideClick(item)"
					:key="index"
					style="padding: 0 0.2em"
				>
					<b :id="`${props.name}-item`" v-if="watchStore.currentWatch.brand === item">{{
						item
					}}</b>
					<span :id="`${props.name}-item`" v-else>{{ item }}</span>
				</swiper-slide>
				<div
					class="swiper-button-prev bigswiper__btn footer-btn"
					slot="button-prev"
				></div>
				<div
					class="swiper-button-next bigswiper__btn footer-btn"
					slot="button-next"
				></div>
			</swiper>
			</div>
			<div class="swiper__wrapper" v-if="props.name === elState">
			<swiper
				:navigation="swiperOptions.navigation"
				:modules="modules"
				:class="`${props.name}Swiper`"
				@swiper="onSwiperMenu"
				ref="swiperRefMenu"
				:slides-per-view="1"
				:centeredSlides="true"
				:slideToClickedSlide="true"
			>
				<swiper-slide
					v-for="(item, index) in menuItems"
					@click="handleSwiperSlideClick(item)"
					:key="index"
				>
					<!-- @click="handleSwiperClick($event)" -->
					<b :id="`${props.name}-item`" v-if="watchStore.currentWatch[elState] === item " >{{
						item
					}}</b>
					<span :id="`${props.name}-item`" v-else>{{ item }}</span>
				</swiper-slide>
				<div

					class="swiper-button-prev bigswiper__btn footer-btn"
					slot="button-prev"
				></div>
				<div

					class="swiper-button-next bigswiper__btn footer-btn"
					slot="button-next"
				></div>
			</swiper>
			</div>
		</section>
</template>

<script setup lang="ts">
import {computed, onMounted, ref} from 'vue'
import { State, useWatchStore } from '@/stores/useWatchStore'
import { EffectFade, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue';
import {useRouter} from "vue-router";
import {caseDict} from "@/assets/newCase";
import {bandDict} from "@/assets/newBands";

// Import Swiper styles
//import 'swiper/css';
//import 'swiper/css/navigation';
//import 'swiper/css/pagination';
//import 'swiper/css/scrollbar';
const modules = [Navigation, Pagination, Scrollbar, EffectFade]

const watchStore = useWatchStore();
//const activeIndex = computed(()=> watchStore.activeIndex);
//const carouselSlidesLength = computed(()=> watchStore.slideItems.length);
const props = defineProps<{
	name: string
	title: string
	menuItems: string[]
	additional?: string[]
}>()
const emit = defineEmits<{
	(e: 'btnClick', $event: Event): void
	(e: 'swiperClick', $event: Event): void
}>()
const swiperOptions = {
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next'
	}
}

const onSwiperMenu = (swiper: any) => {
	swiperRefMenu.value = swiper
}
const onSwiperAdditionalMenu = (swiper: any) => {
	swiperRefAdditional.value = swiper
}
const handleBtnClick = async (event: Event) => {
	emit('btnClick', event)
}
const handleSwiperClick = async (event: any) => {
	emit('swiperClick', event)
}

const name = ref<string>(props.name)
const title = ref<string>(props.title)
const swiperRefMenu: any = ref(null)
const swiperRefAdditional: any = ref(null)
const router = useRouter();
const elState = computed(()=> router.currentRoute.value.meta.name);
const currItem = computed(() => {
	switch (elState.value) {
		// case 'series':
		// 	return
		// case 'size':
		// 	return State.SIZE_CHOICE
		// case 'case':
		// 	return State.CASE_CHOICE
		case 'band':
			return function sayhello(hello) {
				alert(hello);
			}
		default:
			console.error(
				'Invalid parse props.name in component ' + props.name + 'elState returned 0'
			)
			return 0
	}
})
const availableSizes: any = computed(()=> watchStore.availableSizes);
const availableCases: any = computed(()=> watchStore.availableCases);
const availableBandBrand: any = computed(()=> watchStore.availableBandBrand);
const availableBandMaterial: any = computed(()=> watchStore.availableBandMaterial);
const handleSwiperSlideClick = async(item: any)=>{
	let idx;
	if (elState.value === 'case') {
		idx = watchStore.slideItems.findIndex(slide => slide.color === Object.keys(caseDict).find(key => caseDict[key] === item));
	} else if (elState.value === 'band'){
		idx = watchStore.slideItems.findIndex(slide => slide.brand === Object.keys(bandDict).find(key => bandDict[key] === item) || slide.material === Object.keys(bandDict).find(key => bandDict[key] === item));
	} else if (elState.value === 'size') {
		idx = watchStore.slideItems.findIndex(slide => slide.size === item);
	} else {
		idx = watchStore.slideItems.findIndex(slide => slide.name === item);
	}
	watchStore.gotoslide = idx >= 0 ? idx : 0;
}
const handleAdditionalSlideClick = async(item: any) => {
	let idx;
	if (elState.value === 'band'){
		idx = watchStore.slideItems.findIndex(slide => slide.brand === item);
	}
	watchStore.gotoslide = idx >= 0 ? idx : 0;
}
// const elState = computed(() => {
// 	switch (props.name) {
// 		case 'series':
// 			return State.SERIES_CHOICE
// 		case 'size':
// 			return State.SIZE_CHOICE
// 		case 'case':
// 			return State.CASE_CHOICE
// 		case 'band':
// 			return State.BAND_CHOICE
// 		default:
// 			console.error(
// 				'Invalid parse props.name in component ' + props.name + 'elState returned 0'
// 			)
// 			return 0
// 	}
// })
</script>

<style scoped>
button {
	border-radius: 2em;
	padding: 1em;
	border: none;
	cursor: pointer;
	font-size: 18px;
}
.bandSwiper,
.bandMatSwiper,
.seriesSwiper, .sizeSwiper, .caseSwiper {
	border-radius: 2em;
	padding: 1em;
	align-items: center;
	background-color: #f0f0f0;
	cursor: pointer;
	font-family: Arial, Montserat, Verdana, sans-serif;
}
.swipersBtn{
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 25px;
	/*max-width: 75%;*/
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
button {
	display: block;
	animation: fade-in 1s;
}
.hidden {
	animation: fade-out 1s;
	display: none;
}
.menu__btn-wrapper {
	display: inline-flex;
	align-items: center;
	gap: 10px;
}
.menu__btn-wrapper > nav {
	position: relative;
	flex-wrap: nowrap;
	max-height: 1em;
	overflow: hidden;
	word-break: keep-all;
	max-width: 300px;
}
span[id$='item'],
b[id$='item'] {
	display: block;
	padding: 1em 0.5em;
	text-align: center;
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
.menu__btn-wrapper > nav > span {
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
[class*="swiper"], [class*="Swiper"] {
	align-items: center;
	word-break: keep-all;
	padding: 0;
}
.swiper__wrapper{
	max-width: 400px;
	width: 100%;
	min-width: 0;
}
:root {
	--swiper-navigation-color: #989898 !important;
}
.swiper-button-disabled {
	opacity: 1 !important;
}
/*.swiper-button-disabled::before{
//  content: url(https://source.unsplash.com/100x100/);
}*/
.bigswiper__btn {
	background: #ebebeb;
	border-radius: 100%;

	color: #989898;
	/*scale: .5;*/
	padding: 30px;
	margin: -2.25em 0;
	width: 15px;
	height: 15px;
	overflow: hidden;
	scale: 0.5;
}
.bigswiper__btn.footer-btn{
	box-shadow: 0px 0px 0px 53px #ebebeb;
}
</style>
