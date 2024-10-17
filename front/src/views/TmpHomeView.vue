<template>
  <ul>
    <li v-for="pro in proStore.pros" :key="pro.id">
      <RouterLink :to="`/profile/${pro.id}`">{{ pro.name }}</RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useProStore } from '@/stores/proStore'

const proStore = useProStore()
proStore.fetchPros()
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin-top: 2rem;
  width: 100%;
  flex: 1;
  align-items: center;
  border: 1px solid #ccc;

  li {
    padding: 1rem;
    border-top: 1px solid #ccc;
    width: 100%;
    text-align: center;
  }

  li:last-child {
    border-bottom: 1px solid #ccc;
  }
}
</style>
