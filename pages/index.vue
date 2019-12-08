<template>
  <div class="container">
    <button class="btn_block" @click="substract()">-</button>
    {{ totalCount }}
    <button class="btn_block" @click="add()">+</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { counterStore } from '~/store'
@Component
export default class Index extends Vue {
  public substract() {
    counterStore.subtractNumber()
  }

  public add() {
    counterStore.addNumber()
  }

  get totalCount() {
    return counterStore.totalCount
  }
}
</script>
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5em;
}

.btn_block {
  margin: 10px;
}
</style>
