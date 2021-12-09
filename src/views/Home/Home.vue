<template>
  <div class="console">
    <n-grid x-gap="12" :cols="4">
      <n-gi>
        <n-card title="卡片"> 卡片内容 </n-card>
      </n-gi>
      <n-gi>
        <n-card title="卡片"> 卡片内容 </n-card>
      </n-gi>
      <n-gi>
        <n-card title="卡片"> 卡片内容 </n-card>
      </n-gi>
      <n-gi>
        <n-card title="卡片"> 卡片内容 </n-card>
      </n-gi>
    </n-grid>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
.n-card {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
