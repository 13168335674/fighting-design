<script lang="ts" setup>
  import { ref } from 'vue'
  import type { NumberAnimateInstance } from 'fighting-design'

  const animate = ref(null as unknown as NumberAnimateInstance)

  const change = (): void => {
    animate.value.run()
  }
</script>

<template>
  <f-button type="default" :on-click="change">重新播放</f-button>
  <f-number-animate ref="animate" :automatic="false" :from="0" :to="15000" />
</template>

<style scoped>
  .item {
    width: 100%;
    height: 40px;
    background: #96acf8;
    color: #fff;
    margin: 5px 0;
    text-align: center;
    line-height: 40px;
  }
</style>
