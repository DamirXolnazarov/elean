<template>
  <header class="header">
    <div class="top">
      <div class="social">
        <div class="popup">
          <span class="popup__span">_____</span>
          <span class="popup__span">____</span>
          <span class="popup__span">___</span>
        </div>
        <img src="../assets/icon/insta.png" alt="" />
        <img src="../assets/icon/vk.png" alt="" />
        <img src="../assets/icon/facebook.png" alt="" />
      </div>

      <div class="logo">
        <h1 class="logo__h1">ELEAN</h1>
        <p class="logo__p">женский смокинг</p>
      </div>

      <div class="contacts">
        <p class="contacts__tel">+7 (495) 150 - 14 - 77</p>
        <div class="contacts__icon">
          <img src="../assets/icon/favourite.png" alt="" />
          <img src="../assets/icon/basket.png" alt="" />
        </div>
      </div>
    </div>
    <div class="bottom">
      <p class="menu__p">НОВИНКИ</p>
      <p class="menu__p">КАТЕГОРИИ</p>
      <p class="menu__p">НАШИ КОЛЛЕКЦИИ</p>
      <p class="menu__p">ПОКУПАТЕЛЯМ</p>
      <p class="menu__p">О БРЕНДЕ</p>
      <p class="menu__p">ШОУРУМ</p>
      <p class="menu__p">КОНТАКТЫ</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderHeader",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.top {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.popup {
  display: flex;
  flex-direction: column;
}
.popup__span {
  margin-top: -10px;
}
.social {
  width: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;

}
.logo__h1 {
  font-weight: 300;
}
.logo__p {
  width: 100px;
  font-size: 13px;
  color: gray;
  letter-spacing: 2px;
  text-align: center;
}
.contacts {
  display: flex;
  width: 300px;
  justify-content: space-between;
  align-items: center;
}
.contacts__tel {
  letter-spacing: 1px;
  font-size: 17px;
}
.contacts__icon {
  width: 100px;
  display: flex;
  justify-content: space-evenly;
}
.bottom {
  width: 1000px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
}
</style>