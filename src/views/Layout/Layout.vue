<template>
  <n-layout class="flex" has-sider>
    <n-layout-sider class="h-screen" :inverted="inverted">
      <h2 class="text-center leading-loose">naive admin </h2>
      <Menu></Menu>
    </n-layout-sider>
    <n-layout class="bg-gray-100">
      <n-layout-header
        class="h-14 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
      ></n-layout-header>

      <div class="p-1">
        <RouterView />
      </div>

      <!--      <n-layout-content>-->
      <!--      </n-layout-content>-->
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import Menu from '@/views/Layout/Menu/Menu.vue';
const inverted = ref(true);
// export default {
//   name: 'Layout',
//   components: {
//     Menu,
//   },
//   setup() {
//     return {
//       inverted: ref(true),
//     };
//   },
// };
</script>

<style scoped></style>
