<template>
  <header class="header">
    <div class="top">
      <div class="social">
        <div class="popup">
          <span class="popup__span">_____</span>
          <span class="popup__span">____</span>
          <span class="popup__span">___</span>
        </div>
        <div class="social__icons">
          <img src="../assets/icon/insta.png" alt="" />
          <img src="../assets/icon/vk.png" alt="" />
          <img src="../assets/icon/facebook.png" alt="" />
        </div>
      </div>
      <div class="logo">
        <RouterLink to="/"><h1 class="logo__h1">ELEAN</h1></RouterLink>
        <RouterLink to="/"> <p class="logo__p">женский смокинг</p></RouterLink>
      </div>
      <div class="contacts">
        <p class="contacts__tel">+7 (495) 150 - 14 - 77</p>
        <div class="contacts__icon">
          <RouterLink to="/favourite">
            <img src="../assets/icon/favourite.png" alt="" /> </RouterLink
          ><RouterLink to="/cart">
            <img src="../assets/icon/basket.png" alt="" />
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="bottom">
      <p class="menu__p">НОВИНКИ</p>
      <p class="menu__p">КАТЕГОРИИ</p>
      <p class="menu__p">НАШИ КОЛЛЕКЦИИ</p>
      <p class="menu__p">ПОКУПАТЕЛЯМ</p>
      <RouterLink to="/about"><p class="menu__p">О БРЕНДЕ</p></RouterLink>
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

<style scoped>
.header {
  width: 70%;
  margin: auto;
  margin-top: 12px;
}
.top {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
a {
  text-decoration: none;
}
a p {
  color: black;
}
.popup {
  display: flex;
  flex-direction: column;
}
.popup__span {
  margin-top: -10px;
}
.social {
  width: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.social__icons {
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: flex;
  width: 25%;
  align-items: center;
}
.logo__h1 {
  font-family: Lato;
  font-weight: 500;
}
.logo__p {
  width: 100px;
  font-size: 13px;
  color: gray;
  font-family: Lato;
  letter-spacing: 2px;
  text-align: center;
}
.contacts {
  display: flex;
  width: 25%;
  justify-content: space-between;
  align-items: center;
}
.contacts__tel {
  font-size: 14px;
  font-family: Lato;
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
.menu__p {
  font-family: Futura Md BT;
  font-size: 14px;
}
</style>