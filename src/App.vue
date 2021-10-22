<script setup>
import { ref } from 'vue'
import Dialog from './components/Dialog/index.vue'

const visible = ref(false)
</script>

<template>
  <div class="app-container">
    <button class="button" @click="visible = true">打开弹窗</button>
    <Dialog v-model="visible">
      <img src="./assets/img.svg" alt="">
      <p>听说这个按钮很神奇！</p>
      <div><button class="button">一键三连</button></div>
      <div><button class="button text-button" @click="visible = false">关闭弹窗</button></div>
    </Dialog>
  </div>
</template>

<style lang="less">
.app-container {
  display: grid;
  place-items: center;
}
.dialog-body {
  img {
    display: block;
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }
  img + p {
    margin: 30px 0;
    color: #6266f5;
  }
  .text-button {
    margin-top: 15px;
  }
}
</style>
