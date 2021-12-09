<template> </template>

<script lang="ts">
import { useMessage } from 'naive-ui';

export default {
  name: 'DialogContent',
  setup() {
    window['$message'] = useMessage();
  },
};
</script>

<style scoped></style>
