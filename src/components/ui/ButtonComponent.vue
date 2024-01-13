<template>
<button @click="handleClick">
{{ props.name }}
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
  router.push(props.link);
}
</script>

<style scoped>
button{
  border-radius: 2em;
  padding: 1em;
}
</style>