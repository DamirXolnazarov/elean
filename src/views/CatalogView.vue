<template>
  <div class="wrapper">
    <div v-for="item of this.data" :key="item.id">
      {{ item.title }}

      <button @click="addFav(item)">добавить в избранное</button>
    </div>
  </div>
</template>

<script>
import store from "../store/index";

export default {
  data() {
    return {
      data: store.state.products,
    };
  },
  methods:{
    addFav(item){
        store.dispatch("ADD_FAVOURITE", item)
    }
  }
};
</script>

<style>
.wrapper {
  min-height: 100vh;
  background: red;
}
</style>