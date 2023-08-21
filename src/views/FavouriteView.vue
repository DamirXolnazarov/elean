<template>
  <div class="favourite" >
    <p class="title">ИЗБРАННОЕ</p>
    <hr class="line" />
    <div class="goods">

      <div
      v-for="item of this.favourites" :key="item.id"
        class="goods__item"
      >
        <div class="goods__item__main">
          <img
            class="goods__item__main__pic"
            src="../assets//pics/cart_mainpic.png"
            alt=""
          />
          <div class="goods__item__main__textblock">
            <p class="goods__item__main__name">
              {{ item.title }}
            </p>
            <p class="goods__item__main__name">{{ item.price }} ₽</p>
          </div>
        </div>
        <textarea placeholder="ДОБАВИТЬ КОММЕНТАРИЙ" name="" id=""></textarea>
        <div class="goods__last">
          <button class="goods__last__buy">Купить</button>
          <button class="goods__last__delete">
            <p>Удалить</p>
            <p>&#10005;</p>
          </button>
        </div>
      </div>

    </div>
    <hr class="line" />
    <div class="email">
      <p class="email__name">ДЕЙСТВИЯ НАД ЛИСТОМ ПОЖЕЛАНИЙ</p>
      <button class="email__button">ОТПРАВИТЬ НА ПОЧТУ</button>
      <p class="email__text">
        Список товаров находящихся в “избранном”, будет отправлен на ваш
        электронный адрес, и вы в любой момент сможете получить к нему доступ.
      </p>
    </div>
  </div>
</template>
<script>
import store from '../store';
import axios from 'axios'
export default {
  data() {
    return {
      favourites: '',
      fav: JSON.parse(window.localStorage.favorite),
    };
  },
  methods:{

  },
  mounted() {
  },
  
 
};

</script>
<style>
.favourite {
  width: 70%;
  margin: auto;
}
.title {
  color: #272727;
  text-align: center;
  font-family: FuturaBookC;
  font-size: 21px;
  letter-spacing: 1.05px;
}
.line {
  width: 100%;
  height: 1px;
  margin: 35px 0px;
  background: #eaeaea;
}
.goods__item {
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.goods__item__main {
  display: flex;
  justify-content: space-between;
  width: 30%;
}
.goods__item__main__pic {
  width: 80px;
  height: 100px;
  object-fit: contain;
}
.goods__item__main__textblock {
  margin-left: 13px;
}
.goods__item__main__name {
  color: #242424;
  font-family: HelveticaNeueCyr;
  font-size: 15px;
  margin-bottom: 10px;
}
.goods__item__main {
  widows: 27%;
  height: 130px;
}
.goods__item textarea {
  width: 50%;
  height: 130px;
  resize: none;
  border: 1px solid #e0e0e0;
  background: #fff;
  padding: 10px;
}
.goods__last {
  width: 14%;
}
.goods__last__buy,
.goods__last__delete {
  width: 100%;
  height: 40px;
}
.goods__last__buy {
  background: #e1c4a9;
  color: white;
  text-align: center;
  font-family: FuturaMediumC;
  border: 0px;
  font-size: 15px;
  letter-spacing: 1.5px;
}
.goods__last__delete {
  display: flex;
  justify-content: space-around;
  border: 1px solid #dadada;
  align-items: center;
  margin-top: 10px;
}
.goods__last__delete p {
  color: #c7c3c3;
  font-family: FuturaBookC;
  font-size: 17px;
}
.email {
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.email__name {
  width: 100%;
  min-height: 20px;
  color: #000;
  font-family: FuturaMediumC;
  font-size: 18px;
  margin-bottom: 30px;
}
.email__button {
  width: 30%;
  background: #242424;
  height: 50px;
  color: #fff;
  text-align: center;
  font-family: FuturaMediumC;
  font-size: 15px;
  border: 0px;
}
.email__text {
  min-height: 50px;
  width: 65%;
  color: #242424;
  font-family: HelveticaNeueCyr;
  font-size: 15px;
  line-height: 23px;
}
</style>
