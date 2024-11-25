<template>
	<!--div id="overlay" v-if="collectionsActive" @click="collectionToggle"></div-->
	<div class="top-menu-wrapper">
		<div class="top-menu-container">
			<a href="https://lyambda.com">
				<img
					:src="'https://lyambda.ez-studio.ru/wp-content/themes/lyambda/image/logo.png'"
					alt="Lyambda"
					height="25"
					class="logo-big"
			/>
				<img
					:src="'https://lyambda.ez-studio.ru/wp-content/themes/lyambda/image/logo-mobile.svg'"
					alt="Lyambda"
					height="25"
					class="logo-small"
				/>
			</a>
			<!--div name="collection" id="collection">
        <button class="collection-btn" @click="collectionToggle">Коллекции</button>
        <div v-if="collectionsActive" class="collection__list">
          <TransitionGroup>
            <div
              v-for="(item, index) in collectionsMock"
              :value="item"
              :key="index"
              style="border-bottom: 1px solid grey"
            >
              <span class="collection-name">{{ item.toString() }}</span>
            </div>
          </TransitionGroup>
        </div>
      </div-->
			<button @click="emitSave" class="more-btn in-header">
				Посмотреть товар
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import ButtonComponent from '@/components/ui/ButtonComponent2.vue'
import { ref } from 'vue'
import {useWatchStore} from "@/stores/useWatchStore";
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

<style lang="scss" scoped>
#overlay {
	position: absolute;
	background: black;
	z-index: 99;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0.5;
}
.top-menu-wrapper {
	max-width: 90%;
}
.top-menu-container {
	padding: 2em;
	width: 100%;
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: nowrap;
}
@media screen and (max-width: 600px) {
	.top-menu-container {
		flex-wrap: wrap;
	}
}
.more-btn{
	background: rgba(205, 182, 99, 0);
	outline:none;
	box-shadow: none;
	border: 1px solid #CDB663;
	color: #CDB663;
	font-size: 24px; padding: .7em 1.3em; border-radius: 1.5em; cursor: pointer;
	transition: all .224s ease;
	&:hover{
		background: linear-gradient(74deg, rgba(70,46,15,1) 0%, rgb(205, 182, 99) 48%, rgba(70,46,15,1) 90%);
		color: white;
		border: 1px solid transparent;
	}
	//&[disabled="true"]{
	//	background: #cccccc;
	//}
}
.more-btn.in-header{
	display:none;
}
.logo-small{
	display:none;
}
@media screen and (max-width: 240px) {
	.more-btn.in-header{
		display:block;
	}
	.logo-big{
		display: none;
	}
	.logo-small{
		display: block;
	}
}
</style>
