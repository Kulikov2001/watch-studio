<script setup lang="ts">
import CarouselComponent from "@/components/CarouselComponent.vue";
import {onBeforeRouteUpdate, useRouter} from "vue-router";
onBeforeRouteUpdate(async (to, from) => {
	// react to route changes...
	//userData.value = await fetchUser(to.params.id)
});
const router = useRouter();

</script>

<template>
	<CarouselComponent :gotoslide="triggeredSlideIndex" :slideItems="slideItem" />
</template>

<style scoped></style>
