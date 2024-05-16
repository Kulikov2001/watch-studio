<script setup lang="ts">
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import {onBeforeRouteUpdate, useRouter} from "vue-router";

const route = useRoute()
console.log(route.fullPath)

onBeforeRouteUpdate(async (to, from) => {

});
watch(
	() => route.fullPath,
	(newPath) => {
		switch (newPath) {
			case '/':
				break
			case '/new':
				break
			case '/games':
				break
		}
	}
)
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

<style scoped></style>
