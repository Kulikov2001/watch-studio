<template>
	<div class="btn__wrapper">
		<section class="simpleBtn" v-if="watchStore.state !== elState">
			<button
				@click="handleBtnClick($event)"
				:class="{ hidden: watchStore.state === elState }"
			>
				<span class="menu__btn-wrapper">
					<IconSeries />
					<Transition name="title">
						<span>{{ title }}</span>
					</Transition>
				</span>
			</button>
		</section>
		<section class="swipersBtn" v-else>
			<swiper
				v-if="watchStore.state === elState"
				:navigation="swiperOptions.navigation"
				:modules="modules"
				:class="`${name}Swiper`"
				@swiper="onSwiperAdditionalMenu"
				ref="swiperRefAdditional"
				:slides-per-view="1"
				:centeredSlides="true"
				:breakpoints="{ 1000: { slidesPerView: 3 } }"
			>
				<swiper-slide
					v-for="(item, index) in additional"
					:key="index"
					style="padding: 0 0.2em"
					@click="handleSwiperClick($event)"
				>
					<b :id="`${name}-item`" v-if="watchStore.currentWatch.series === item">{{
						item
					}}</b>
					<span :id="`${name}-item`" v-else>{{ item }}</span>
				</swiper-slide>
				<div
					class="swiper-button-prev bigswiper__btn"
					@click="swiperRefAdditional.slidePrev()"
					slot="button-prev"
				></div>
				<div
					class="swiper-button-next bigswiper__btn"
					@click="swiperRefAdditional.slideNext()"
					slot="button-next"
				></div>
			</swiper>
			<swiper
				v-if="watchStore.state === elState"
				:navigation="swiperOptions.navigation"
				:modules="modules"
				:class="`${name}Swiper`"
				@swiper="onSwiperMenu"
				ref="swiperRefMenu"
				:slides-per-view="1"
				:centeredSlides="true"
				:breakpoints="{ 1000: { slidesPerView: 3 } }"
			>
				<swiper-slide
					v-for="(item, index) in menuItems"
					:key="index"
					style="padding: 0 0.2em"
					@click="handleSwiperClick($event)"
				>
					<b :id="`${name}-item`" v-if="watchStore.currentWatch.series === item">{{
						item
					}}</b>
					<span :id="`${name}-item`" v-else>{{ item }}</span>
				</swiper-slide>
				<div
					class="swiper-button-prev bigswiper__btn"
					@click="swiperRefMenu.slidePrev()"
					slot="button-prev"
				></div>
				<div
					class="swiper-button-next bigswiper__btn"
					@click="swiperRefMenu.slideNext()"
					slot="button-next"
				></div>
			</swiper>
		</section>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { State, useWatchStore } from '@/stores/useWatchStore'
import { EffectFade, Navigation, Pagination, Scrollbar } from 'swiper/modules'
const modules = [Navigation, Pagination, Scrollbar, EffectFade]

const watchStore = useWatchStore()
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
const handleSwiperClick = async (event: Event) => {
	emit('swiperClick', event)
}

const name = ref<string>(props.name)
const title = ref<string>(props.title)
const swiperRefMenu: any = ref(null)
const swiperRefAdditional: any = ref(null)

const elState = computed(() => {
	switch (props.name) {
		case 'series':
			return State.SERIES_CHOICE
		case 'size':
			return State.SIZE_CHOICE
		case 'case':
			return State.CASE_CHOICE
		case 'band':
			return State.BAND_CHOICE
		default:
			console.error(
				'Invalid parse props.name in component ' + props.name + 'elState returned 0'
			)
			return 0
	}
})
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
.seriesSwiper {
	border-radius: 2em;
	padding: 1em;
	align-items: center;
	background-color: #f0f0f0;
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
.bandSwiper .swiper-wrapper,
.bandMatSwiper,
.seriesSwiper,
.swiper-wrapper {
	align-items: center;
	word-break: keep-all;
	padding: 0.3em;
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
</style>
