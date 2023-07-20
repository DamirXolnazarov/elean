<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderHeader from "./components/HeaderHeader.vue";
import FooterFooter from "./components/FooterFooter.vue";
</script>

<template>
  <HeaderHeader />
  <RouterView />
  <FooterFooter />
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}
</style>
