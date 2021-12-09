<template>
  <n-menu
    :inverted="inverted"
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :options="routeList"
    key-field="name"
    label-field="meta.label"
    @update:value="clickMenuItem"
  />
</template>

<script lang="ts">
import { routes } from '@/router/router';
import { NIcon } from 'naive-ui';

export default {
  setup() {
    const routeList: Array<Route> = reactive(routes);
    const renderIcon = (icon: any) => () => h(NIcon, null, { default: () => h(icon) });

    const inverted = ref(true);

    const label = (item) => {
      console.log(item);
    };

    const clickMenuItem = (key: string, item: MenuOption) => {
      console.log(key, item);
    };

    return {
      inverted,
      routeList,
      clickMenuItem,
      label,
    };
  },
};
</script>

<style scoped></style>
