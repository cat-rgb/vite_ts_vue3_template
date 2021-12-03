<script setup lang="ts">
// import { ref } from 'vue'
import { NButton } from 'naive-ui'
import { useMainStore } from '@/store/store'
defineProps<{ msg: string }>()

const count = ref(0)

const mainStore = useMainStore()
console.log(mainStore.arr)
const update = () => {
  mainStore.$patch({
    name: '123456789',
  })
}
const update1 = () => {
  console.log(mainStore)
  mainStore.insertPost('555555555555555')
}
console.log(import.meta.env.VITE_APP_WEB_URL)







</script>

<template>
  <n-button>naive-ui</n-button>
  <button @click="update">click</button>
  <button @click="update1">click1</button>
  <div>
    {{ mainStore.name }}
  </div>
  <p>
    {{ mainStore.nameLength }}
  </p>

  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
