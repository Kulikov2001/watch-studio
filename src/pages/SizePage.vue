<script setup lang="ts">
import CarouselComponent from "@/components/CarouselComponent.vue";
import {onBeforeRouteUpdate, useRouter} from "vue-router";
import {onMounted} from "vue";
import {useWatchStore} from "@/stores/useWatchStore";
// onBeforeRouteUpdate(async (to, from) => {
// 	// react to route changes...
// 	//userData.value = await fetchUser(to.params.id)
// });
//const router = useRouter();
const store = useWatchStore();
onMounted(()=>{
	store.state = 2;
	store.setSlideItemsToSizes();
	store.currentWatch.size = store.slideItems[0].size??'49';
	store.currentWatch.caseSize = store.slideItems[0].size??'49';
})
</script>

<template>
	<CarouselComponent />
</template>

<style scoped></style>
