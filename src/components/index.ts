// vite导入组件必须加上.vue后缀  通过js/ts文件导入统一导出可以省略后缀
import AppProvider from '@/components/Application/Application.vue';
import DialogContent from '@/components/Dialog/index.vue';
import MessageContent from '@/components/Message/index.vue';

export { AppProvider, DialogContent, MessageContent };
