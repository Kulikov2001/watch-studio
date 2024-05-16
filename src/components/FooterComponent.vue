<template>
	<div class="menu__wrapper">
	<button-component2 @click="emitSeries" :title="'Серия'" :name="'series'" :menu-items="watchStore.series">
		<template #Icon>
			<IconSeries/>
		</template>
	</button-component2>
	<button-component2 @click="emitSize" :title="'Размер'" :name="'size'" :menu-items="watchStore.sizes">
		<template #Icon>
			<IconSize/>
		</template>
	</button-component2>
		<button-component2 @click="emitCase" :title="'Корпус'" :name="'case'" :menu-items="watchStore.casesMaterials">
			<template #Icon>
				<IconCase/>
			</template>
		</button-component2>
		<button-component2 @click="emitBand" :title="'Ремешок'" :name="'band'" :menu-items="watchStore.bandsMaterial" :additional="watchStore.bandsBrand">
			<template #Icon>
				<IconBand/>
			</template>
		</button-component2>
	</div>

</template>

<script setup lang="ts">
import IconSize from '@/components/icons/IconSize.vue'
import IconBand from '@/components/icons/IconBand.vue'
import IconCase from '@/components/icons/IconCase.vue'
import IconSeries from '@/components/icons/IconSeries.vue'
import ButtonComponent2 from '@/components/ui/ButtonComponent2.vue'
import { State, useWatchStore } from '@/stores/watch'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { EffectFade, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import {useRouter} from "vue-router";
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
const router = useRouter();
const emitSize = () => {
	router.push('/size')
	emit('size')
}
const emitCase = () => {
	router.push('/case')
	emit('case')
}
const emitBand = () => {
	router.push('/bands')
	emit('band')
}
const emitSeries = () => {
	router.push('/series')
	emit('series')
}
const handleMenuItemClick = async (event: Event) => {
	emit('subItem', event)
}
//const handleCaseItemClick = async(case: string) =>{};
const props = defineProps<{
	variations?: object
}>()
const swiperOptions = {
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next'
	}
}
const swiperRefMenu: any = ref(null)
const swiperRefAdditional: any = ref(null)
const onSwiperMenu = (swiper: any) => {
	swiperRefMenu.value = swiper
}
const onSwiperAdditionalMenu = (swiper: any) => {
	swiperRefAdditional.value = swiper
}
</script>

<style scoped>
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
</style>
<style>
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
.menu__wrapper{
	place-items: center;
	display: flex;
	width: 100%;
	justify-content: center;
	margin: 3em auto 1em;
	gap: 20px;
}
@media screen and (min-width:1000px) {
	.menu__wrapper{
		width: 70%;
	}
}
</style>
