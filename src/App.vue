<template>
  <n-config-provider :theme="theme">
    <AppProvider>
      <RouterView />
    </AppProvider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui';
import AppProvider from '@/components/Application/Application.vue';
const theme = ref(null);
</script>

<style lang="scss"></style>
