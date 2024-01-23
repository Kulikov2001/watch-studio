<template>


  <ButtonComponent
      :link="'/'"
      :name="'Myname'"
      :isMore="watchStore.state === State.SIZE_CHOICE"
      @click="emitSize"
  >
    <template
      #ButtonContent
      v-if="watchStore.state !== State.SIZE_CHOICE"
    >
      <span style="display: inline-flex;
  align-items: center; gap:5px;">
      <IconSize />
      <span>{{ 'Размер' }}</span>
        </span>
    </template>
    <template
      #ButtonContentMore
      v-if="watchStore.state === State.SIZE_CHOICE"
      >
      <span style="display: inline-flex;
  align-items: center; gap:5px;">
      <IconSize
        style="margin-right: .5em;"
      />
      <span 
        v-for="(item, index) in watchStore.sizes"
        :key="index"
        style="padding: 0 .2em;"
        @click="handleSizeClick(item)"
      >
        {{ item.toString() }}мм
      </span>
      
        </span>
    </template>
  </ButtonComponent>


  <ButtonComponent
      :link="'/'"
      :name="'Myname'"
      :isMore="watchStore.state === State.CASE_CHOICE"
      @click="emitCase"
  >
    <template #ButtonContent
    v-if="watchStore.state !== State.CASE_CHOICE"
    >
      <span style="display: inline-flex;
  align-items: center; gap:5px;">
      <img
          :src="IconBand"
          height="20"
      />
      {{ 'Корпус' }}
      </span>
    </template>
    <template
      #ButtonContentMore
      v-if="watchStore.state === State.CASE_CHOICE"
      >
      <span style="display: inline-flex;
  align-items: center; gap:5px;">
      <img
          :src="IconBand"
          height="20"
          style="margin-right: .5em;"
      />
      <span 
        v-for="(item, index) in props.variations.materials"
        :key="index"
        style="padding: 0 .2em;"
      >
        {{ item.toString() }}
      </span>
      
        </span>
    </template>
  </ButtonComponent>

  <ButtonComponent
      :link="'/'"
      :name="'Myname'"
      @click="emitBand"
      :isMore="watchStore.state === State.BAND_CHOICE"
  >
    <template #ButtonContent 
    v-if="watchStore.state !== State.BAND_CHOICE">
      <span style="display: inline-flex;
  align-items: center; gap:5px;">
      <img
          :src="IconBand"
          height="20"
      />
      {{ 'Ремешок' }}
      </span>
    </template>
    <template
      #ButtonContentMore
      v-if="watchStore.state === State.BAND_CHOICE"
      >
      <span style="display: inline-flex;
  align-items: center; gap:5px;">
      <img
          :src="IconBand"
          height="20"
          style="margin-right: .5em;"
      />
      <span 
        v-for="(item, index) in props.variations.bands"
        :key="index"
        style="padding: 0 .2em;"
      >
        {{ item.toString() }}
      </span>
      
        </span>
    </template>
  </ButtonComponent>
</template>

<script setup lang="ts">
import IconSize from '@/components/icons/IconSize.vue';
import IconBand from '@/assets/svg/band.svg';
import ButtonComponent from '@/components/ui/ButtonComponent.vue';
import { useWatchStore, State } from '@/stores/watch';
const watchStore = useWatchStore();
const emit = defineEmits<{
  (e: 'size'): void;
  (e: 'case'): void;
  (e: 'band'): void;
}>();
const emitSize = () =>{
  emit('size');
}
const emitCase = () =>{
  emit('case');
}
const emitBand = () =>{
  emit('band');
}
const handleSizeClick = async(size: number) =>{
  watchStore.currentWatch.size = size;
};
//const handleCaseItemClick = async(case: string) =>{};
const props = defineProps<{
  variations: object
}>();
</script>

<style scoped>

</style>