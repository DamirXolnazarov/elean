<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
<Header />
  <RouterView />
</template>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}
</style>
