<script setup lang="ts">
import CarouselComponent from "@/components/CarouselComponent.vue";
import {onBeforeRouteUpdate, useRouter} from "vue-router";
import {onMounted} from "vue";
import {useWatchStore} from "@/stores/watch";
// onBeforeRouteUpdate(async (to, from) => {
// 	// react to route changes...
// 	//userData.value = await fetchUser(to.params.id)
// });
//const router = useRouter();
const store = useWatchStore();
onMounted(()=>{
	store.setSlideItemsToBands();
	store.state = 4
})
</script>

<template>
	<CarouselComponent />
</template>

<style scoped></style>
