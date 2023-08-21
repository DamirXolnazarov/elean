<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderHeader from "./components/HeaderHeader.vue";
import FooterFooter from "./components/FooterFooter.vue";
import FixedMsg from "./components/FixedMsg.vue";
import axios from 'axios'
</script>


<template>
  <HeaderHeader />
  <RouterView />
  <FixedMsg></FixedMsg>
  <FooterFooter />

</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}
#app{
  font-family: Arial, Helvetica, sans-serif;
}


@font-face {
  font-family: FuturaMediumC;
  src: url('./assets/fonts/futuramediumc.ttf');
}
@font-face {
  font-family: Font1;
  src: url('./assets/Playfair-Display-SemiBold.ttf.eot');
}
@font-face {
  font-family: Futura Md BT;
  src: url('./assets/fonts/futuramdbtrusbyme_medium.otf');
}
@font-face {
  font-family: HelveticaNeueCyr;
  src: url('./assets/fonts/helveticaneuecyr-roman.ttf');
}
@font-face {
  font-family: FuturaBookC;
  src: url('./assets/fonts/futurabookc.ttf');
}
@font-face {
  font-family: Lato;
  src: url('./assets/Lato-Regular.ttf');
}
</style>
