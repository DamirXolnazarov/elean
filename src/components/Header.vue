<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
  </nav>
</template>

<script>
export default {
    name:'Header',
};
</script>

<style>
nav{
  top: 0;
  left: 0px;
  width:100%;
  height: 50px;
  display: flex;
  justify-content: center;
  position: sticky;
  background: grey;
}
nav a{
  margin: 10px;
  color: white;
}
</style>