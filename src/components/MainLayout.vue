<script setup lang="ts">
import { useRoute } from 'vue-router'
import {onMounted, ref, watch} from 'vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import {onBeforeRouteUpdate, useRouter} from "vue-router";
import {useWatchStore} from "@/stores/useWatchStore";

const router = useRouter()
const loading = ref(true)

onMounted(async () => {
	//await router.isReady()
	loading.value = false
})
const store = useWatchStore();
const sku = ref(store.currentWatch.sku_band);
const emit = defineEmits<{
	(e: 'save'): void
}>()
const emitSave = async () => {
	window.location.href = `https://lyambda.ez-studio.ru/?s=${store.currentWatch.sku_band}`
	emit('save')
}
</script>

<template>
	<HeaderComponent />
	<button @click="emitSave" class="more-btn top">
		Посмотреть товар
	</button>
	<router-view v-slot="{ Component }">
		<transition name="fade" :duration="150">
			<component :is="Component" />
		</transition>
	</router-view>

	<FooterComponent />
	<button @click="emitSave" class="more-btn bottom">
		Посмотреть товар
	</button>
</template>

<style scoped>
.preloader {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #fff;
	z-index: 1000;
	display: flex;
	justify-content: center;
	align-items: center;
}

.preloader.fade-out {
	opacity: 0;
	transition: opacity 0.5s;
}

.spinner {
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: 4px solid #ccc;
	border-top-color: #333;
	animation: spin 1s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
.more-btn{
	background: rgba(70,46,15,0);
	outline:none;
	margin: 0 auto;
	display:block;
	box-shadow: none;
	border: 1px solid #C1A656;
	color: #C1A656;
	font-size: 24px; padding: .7em 1.3em; border-radius: 1.5em; cursor: pointer;
	transition: all .224s ease;
	&:hover{
		background: linear-gradient(74deg, rgba(70,46,15,1) 0%, rgba(208,180,93,1) 48%, rgba(70,46,15,1) 90%);
		color: white;
		border: 1px solid transparent;
	}
}
@media screen and (min-width: 1025px) {
	.more-btn.top{
		display: none;
	}
	.more-btn.bottom{
		display:block;
	}
}
@media screen and (max-width: 1024px) {
	.more-btn.top{
		display: block
	}
	.more-btn.bottom{
		display:none;
	}
}
@media screen and (max-width: 768px) {
	.more-btn.top{
		display: none;
	}
	.more-btn.bottom{
		display:block;
	}
}
@media screen and (max-width: 640px) {
	.more-btn.top{
		display: none;
	}
	.more-btn.bottom{
		display:block;
	}
}
@media screen and (max-width: 360px) {
	.more-btn.top{
		display: block
	}
	.more-btn.bottom{
		display:none;
	}
}
@media screen and (max-width: 240px) {
	.more-btn.top{
		display: none
	}
	.more-btn.bottom{
		display:none;
	}
}
</style>
