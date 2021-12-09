<template> </template>

<script lang="ts">
import { useDialog } from 'naive-ui';

export default {
  name: 'DialogContent',
  setup: function () {
    window.$dialog = useDialog();
  },
};
</script>

<style scoped></style>
