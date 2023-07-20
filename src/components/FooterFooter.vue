<template>
  <footer class="footer">
    <div class="footer__block">
      <h1 class="logo">ELEAN</h1>
      <div class="tel">
        <p class="tel__p">ТЕЛ.: 8 (495) 150-14-77</p>
        <p class="tel__p">WHATSAPP: +7 (977) 728-27-38</p>
      </div>
      <p class="email">EMAIL: info@eleanboutique.ru</p>
    </div>

    <div class="footer__block_2">
      <div class="block__menu">
        <RouterLink to="">Доставка</RouterLink>
        <RouterLink to="">Оплата</RouterLink>
        <RouterLink to="">Возврат</RouterLink>
        <RouterLink to="">Размерная таблица</RouterLink>
        <RouterLink to="">Примерка </RouterLink>
        <RouterLink to="">Контакты</RouterLink>
      </div>
      <div class="block__contacts">
        <div class="adress">
          <h3 class="adress__h3">АДРЕС:</h3>
          <p class="adress__p">г. Москва, Новая площадь 8, стр.2, 5 этаж</p>
        </div>
        <div class="time">
          <h3 class="time__h3">РЕЖИМ РАБОТЫ</h3>
          <p class="time__p">с 9.00 до 21.00 шоурум: с 12.00 до 21.00</p>
        </div>
      </div>
      <div class="block__icon">
        <img src="../assets/icon/insta.png" alt="" />
        <img src="../assets/icon/vk.png" alt="" />
        <img src="../assets/icon/facebook.png" alt="" />
      </div>
    </div>

    <div class="footer__block">
      <input class="input" type="text" placeholder="ИМЯ" />
      <br />
      <input class="input" type="e-mail" placeholder="E-MAIL" />
      <div class="agree">
        <input class="box" type="checkbox" />
        <span class="agree__span">Я согласен</span>
        <span class="agree__p">с политикой конфиденциальности</span>
      </div>
      <div class="button">
        <button class="btn">
          ПОДПИСАТЬСЯ <img src="../assets/icon/Group 1496.png" alt="" />
        </button>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterFooter",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.footer {
  margin: auto;
  margin-top: 50px;
  width: 70%;
  display: flex;
  justify-content: space-between;
}
.logo {
  font-weight: 200;
  font-size: 25px;
  font-family: Lato;
  margin-bottom: 20px;
}
.footer__block {
  width: 25%;
}
.footer__block_2 {
  width: 40%;
}
.tel__p {
  font-family: FuturaMediumC;
  font-size: 15px;
}
.email {
  font-family: FuturaMediumC;
  font-size: 15px;
  padding-top: 40px;
}
.block__menu {
  color: black;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.block__menu a {
  font-size: 14px;
  font-family: FuturaMediumC;
  color: black;
  text-decoration: none;
}
.block__contacts {
  margin-top: 40px;
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.adress,
.time {
  width: 40%;
}
.adress__h3 {
  font-family: FuturaMediumC;
  font-size: 15px;
}
.adress__p {
  padding-top: 5px;
  font-family: FuturaMediumC;
  font-size: 15px;
}
.time__p {
  padding-top: 5px;
  font-family: FuturaMediumC;
  font-size: 15px;
}
.time__h3 {
  font-family: FuturaMediumC;
  font-size: 15px;
}
.block__icon {
  padding-top: 40px;
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
input {
  padding: 10px 60px;
  margin-bottom: 20px;
  color: black;
  border: 1px solid #d7b494;
}
.input{
  width: 100%;
}

.agree__span {
  margin-right: 4px;

  color: #d7b494;
  font-family: FuturaMediumC;
  font-size: 13px;
}
.agree__p {
  font-family: FuturaMediumC;
  font-size: 13px;
}
.box {
  margin-right: 10px;
}
.btn {
  width: 100%;
  height: 35px;
  border: 1px solid #d7b494;
  background: transparent;
}
</style>