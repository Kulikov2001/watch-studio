<template>
<button @click="handleClick">
<slot name="ButtonContent"/>
</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import {defineProps} from "vue";
const router = useRouter();
const props = defineProps({
  name: String,
  link: String
})
const handleClick = async() =>{
  router.push({ path: props.link ?? '/'});
}
</script>

<style scoped>
button{
  border-radius: 2em;
  padding: 1em;
  border: none;
  cursor: pointer;
  font-size: 18px;
}
</style>