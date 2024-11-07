<script setup lang="ts">
import CarouselComponent from "@/components/CarouselComponent.vue";
import {onBeforeRouteUpdate, useRouter} from "vue-router";
import {onMounted} from "vue";
import {useWatchStore} from "@/stores/useWatchStore";
import {newCase} from "@/assets/newCase";
import {newBands} from "@/assets/newBands";
import {newSeries} from "@/assets/series";
// onBeforeRouteUpdate(async (to, from) => {
// 	// react to route changes...
// 	//userData.value = await fetchUser(to.params.id)
// });
//const router = useRouter();
const store = useWatchStore();
store.currMenuItems = ['aa','bb'];
onMounted(()=>{
	store.setSlideItemsToSeries();
	store.state = 5
})
</script>

<template>
	<CarouselComponent />
</template>

<style scoped></style>
