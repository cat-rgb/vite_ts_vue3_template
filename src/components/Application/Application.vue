<template>
  <n-loading-bar-provider>
    <n-dialog-provider>
      <DialogContent />
      <n-notification-provider>
        <n-message-provider>
          <MessageContent />
          <slot slot="default"></slot>
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-loading-bar-provider>
</template>

<script lang="ts">
import DialogContent from '@/components/Dialog/index.vue';
import MessageContent from '@/components/Message/index.vue';

export default {
  components: {
    DialogContent,
    MessageContent,
  },
};
</script>

<style scoped></style>
