<template>
  <div class="catalog">
    <div class="left">
      <h2 class="left__h2">КАТЕГОРИИ</h2>
      <p class="left__p">Новинки</p>
      <p class="left__p">Юбки</p>
      <p class="left__p">Смокинг</p>
      <p class="left__p">Костюты</p>
      <p class="left__p">Аксессуары</p>
      <p class="left__p">Брюки</p>
      <p class="left__p">Блузы</p>
      <p class="left__p">Платья</p>
      <p class="left__p">Топы и жилеты</p>
<br>
      <h2 class="left__h2">КОЛЛЕКЦИИ</h2>
      <p class="left__p">Осень-зима 20-21</p>
      <p class="left__p">Вечерние комплекты</p>
      <p class="left__p">Предзаказ</p>
      <p class="left__p">Cвадьба и выпускной</p>
    </div>
    <div class="right">
      <div v-for="i of this.data" :key="i.id" class="block">
        <div class="image">
          <img class="block__img" :src="i.mainImg" alt="" />
        </div>
        
        <div class="favourite">
          <p class="block__name">{{ i.title }}</p>
          <div @click="addFav(i)" class="div">
            <img src="../assets/icon/favourite.png" alt="" />
          </div>
        </div>
        <div class="describe">
          <p class="block__price">{{ i.price }}</p>
          <span class="block__span">{{ i.addInfo }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- <button @click="addFav(item)">добавить в избранное</button> -->
</template>

<script>
import store from "../store/index";

export default {
  data() {
    return {
      data: store.state.products,
    };
  },
  methods: {
    addFav(item) {
      store.dispatch("ADD_FAVOURITE", item);
    },
  },
};
</script>

<style>
.catalog {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: auto;
}
.left {
  width: 20%;
}
.left__h2 {
  font-weight: 100;
  font-family: FuturaMediumC;
}

.left__p {
  font-family: FuturaMediumC;
  padding-top: 15px;
  transition-duration: .2s;
}
.left__p:hover{
color: #AE9177;
text-decoration: underline;
}
.right {
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.block {
  margin-top: 30px;
  width: 300px;
}
.favourite {
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  display: flex;
}
.block__name {
  font-family: FuturaMediumC;
  font-size: 17px;
  width: 200px;
}
.describe {
  margin-top: 10px;
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.block__price {
  font-size: 20px;
  width: 400;
  font-family: FuturaMediumC;
}
.block__span {
  width: 150px;
  font-size: 15px;
  color: gray;
  font-family: Lato;
}
.image{
  width: 100%;
  height: 400px;
}
.block__img{
  width: 100%;
  height: 400px;
  object-fit: cover;
}
</style>