<script setup lang="ts">
import { useRoute } from 'vue-router'
import {onMounted, ref, watch} from 'vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import {onBeforeRouteUpdate, useRouter} from "vue-router";

const router = useRouter()
const loading = ref(true)

onMounted(async () => {
	//await router.isReady()
	loading.value = false
})

</script>

<template>
	<HeaderComponent />
	<router-view v-slot="{ Component }">
		<transition name="fade" :duration="150">
			<component :is="Component" />
		</transition>
	</router-view>

	<FooterComponent />
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
</style>
