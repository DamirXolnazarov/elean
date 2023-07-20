<script>
export default {
  methods: {
    lessItems() {
      let itemsNumber = document.querySelector("#itemsNumber");
      let a = parseInt(itemsNumber.innerHTML) - 1;
      if (a > 0) itemsNumber.innerHTML = `${a}`;
    },
    moreItems() {
      let itemsNumber = document.querySelector("#itemsNumber");
      itemsNumber.innerHTML = `${parseInt(itemsNumber.innerHTML) + 1}`;
    },
  },
};
</script>
<template>
  <main>
    <div class="home">
      <ColorSelection />
      <p class="title">ОФОРМЛЕНИЕ ЗАКАЗА</p>
      <hr class="line" />
      <div class="cart">
        <div class="cart__item">
          <div class="cart__item__main">
            <img
              class="cart__item__main__pic"
              src="../assets/pics/cart_mainpic.png"
              alt=""
            />
            <p class="cart__item__main__name">
              Классический комплект с смокингом и жилетом
            </p>
          </div>
          <select class="cart__item__color" name="" id="">
            <option hidden selected value="">
              Цвет
              <p>&#9675;</p>
            </option>
          </select>
          <select class="cart__item__size" name="" id="">
            <option value="">
              Размер
              <p>46</p>
            </option>
          </select>
          <div class="cart__item__quantity">
            <div class="cart__item__quantity__button" @click="lessItems">-</div>
            <div class="cart__item__quantity__button" id="itemsNumber">1</div>
            <div class="cart__item__quantity__button" @click="moreItems">+</div>
          </div>
          <p class="cart__item__cost">63 500 ₽</p>
          <p class="cart__item__cross">&#10005;</p>
        </div>
      </div>
      <hr class="line" />
      <div class="costwrapper">
        <div class="costwrapper__promocode">
          <input
            class="costwrapper__promocode__inp"
            placeholder="ВВЕДИТЕ ПРОМО КОД (ЕСЛИ ИМЕЕТСЯ)"
            type="text"
          />
          <button>Применить</button>
        </div>
        <p class="costwrapper__sale">Скидка 0%</p>
        <p class="costwrapper__overallprice">ИТОГОВАЯ СТОИМОСТЬ: 145 000 ₽</p>
      </div>
      <hr class="line" />
      <div class="details">
        <p class="details__text">ВЫБЕРИТЕ СПОСОБ ДОСТАВКИ</p>
        <div class="details__wrapper">
          <div class="details__wrapper__left">
            <div
              id="delivery"
              class="details__wrapper__left__deliveryselection"
            >
              <div>
                <input
                  type="radio"
                  id="selectShowroom"
                  value="Шоурум"
                  name="delivery"
                />
                <label for="selectShowroom">Шоурум</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="selectMoscow"
                  value="Курьером по Москве"
                  name="delivery"
                />
                <label for="selectMoscow">Курьером по Москве</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="selectRussia"
                  value="Курьером по России"
                  name="delivery"
                />
                <label for="selectRussia">Курьером по России</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="selectAbroad"
                  value="Курьером за границу"
                  name="delivery"
                />
                <label for="selectAbroad">Курьером за границу</label>
              </div>
              <div
                class="hidden details__wrapper__left__deliveryselection__showroom"
              >
                <select name="" id="">
                  <option selected hidden value="">ВЫБЕРИТЕ ДАТУ</option>
                  <option value="">Сегодня, 30 марта</option>
                  <option value="">Завтра, 31 марта</option>
                  <option value="">Четверг, 1 апреля</option>
                  <option value="">Пятнцица, 2 апреля</option>
                  <option value="">Суббота, 3 апреля</option>
                  <option value="">Воскресенье, 4 апреля</option>
                </select>
                <select name="" id="">
                  <option selected hidden value="">ВЫБЕРИТЕ ВРЕМЯ</option>
                  <option value="">С 12 до 15 часов</option>
                  <option value="">С 15 до 18 часов</option>
                  <option value="">С 18 до 21 часов</option>
                </select>
              </div>
            </div>
            <hr class="line" />
            <div class="details__wrapper__left__maininfo">
              <p class="details__wrapper__left__maininfo__text">
                ОСНОВНАЯ ИНФОРМАЦИЯ
              </p>
              <input type="text" placeholder="ВВЕДИТЕ ФИО" name="" id="" />
              <input type="text" placeholder="ВВЕДИТЕ ТЕЛЕФОН" name="" id="" />
              <input type="text" placeholder="ВВЕДИТЕ E-MAIL" name="" id="" />
              <textarea
                type="text"
                placeholder="ДОБАВИТЬ КОММЕНТАРИЙ"
                name=""
                id=""
              ></textarea>
              <div class="details__wrapper__left__maininfo__checkbox__wrapper">
                <input
                  id="detailsCheckbox"
                  type="checkbox"
                  value="Я принимаю договор публичной оферты"
                  class="details__wrapper__left__maininfo__checkbox"
                />
                <label
                  for="detailsCheckbox"
                  class="details__wrapper__left__maininfo__checkbox__text"
                  >Я принимаю договор публичной оферты</label
                >
              </div>
            </div>
            <p class="details__wrapper__left__text">ВЫБЕРИТЕ СПОСОБ ОПЛАТЫ</p>
            <div id="payment" class="details__wrapper__left__payment">
              <div>
                <input
                  type="radio"
                  id="paymentCard"
                  value="Оплата картой"
                  name="payment"
                />
                <label for="paymentCard">Оплата картой</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="paymentDeliverier"
                  value="Наличными курьеру"
                  name="payment"
                />
                <label for="paymentDeliverier">Наличными курьеру</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="paymentSpecial"
                  value="Наложенный платеж"
                  name="payment"
                />
                <label for="paymentSpecial">Наложенный платеж</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="paymentOvertime"
                  value="Купить в рассрочку"
                  name="payment"
                />
                <label for="paymentOvertime">Купить в рассрочку</label>
              </div>
            </div>
            <hr class="line" />
            <div class="details__wrapper__left__overallprice">
              <p class="details__wrapper__left__overallprice__text">ИТОГО:</p>
              <p class="details__wrapper__left__overallprice__text">
                145 200 ₽
              </p>
            </div>
            <button class="details__wrapper__left__confirm">
              ОФОРМИТЬ ЗАКАЗ
            </button>
          </div>

          <div class="detail__wrapper__right">
            <img src="../assets/pics/cart_mainpic.png" alt="" />
            <p>
              Все заказы, размещенные на сайте ELEAN бережно и с любовью
              упакованы в картонную коробку и перевязанны лентой с логотипом
              бренда.
            </p>
            <br />
            <p>
              Костюмы доставляются в тканевом чехле для комфортного хранения и
              перевозки. В каждый заказ вкладывается карточка с рекомендациями
              по уходу за изделиями.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.home {
  margin: auto;
  width: 70%;
}
.hidden {
  display: none !important;
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
/* .cart {
} */
.cart__item {
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.cart__item__main {
  display: flex;
  justify-content: space-between;
  width: 30%;
}
.cart__item__main__pic {
  width: 80px;
  height: 100px;
  object-fit: contain;
}
.cart__item__main__name {
  color: #242424;
  font-family: HelveticaNeueCyr;
  font-size: 15px;
  margin-left: 13px;
}
.cart__item__color,
.cart__item__size {
  width: 10%;
  height: 40px;
  border: 1px solid #dadada;
}
.cart__item__color,
.cart__item__size option {
  color: #b8b8b8;
  font-family: FuturaBookC;
  font-size: 17px;
}
.cart__item__color p {
  font-size: 22px;
}
.cart__item__quantity {
  display: flex;
  justify-content: center;
}
.cart__item__quantity__button {
  padding: 12px;
  width: 40px;
  height: 40px;
  border: 1px solid #dadada;
  color: #c6c6c6;
  text-align: center;
  font-family: FuturaBookC;
}
.cart__item__cost,
.costwrapper__sale,
.costwrapper__overallprice {
  color: #242424;
  font-family: FuturaMediumC;
  font-size: 18px;
}
.cart__item__cross {
  font-size: 16px;
  color: #cac7c7;
}
.costwrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.costwrapper__promocode {
  width: 36%;
  display: flex;
  justify-content: space-between;
}
.costwrapper__promocode__inp {
  width: 65%;
  height: 50px;
  border: 1px dashed #bbb9b9;
  padding: 12px;
  background: #fff;
}
.costwrapper__promocode button {
  width: 30%;
  height: 50px;
  border-radius: 3px;
  background: #efefef;
  border: 0px;
  color: #c7c3c3;
}

.details {
  width: 100%;
}
.details__text,
.details__wrapper__left__maininfo__text,
.details__wrapper__left__text {
  color: #000;
  font-family: FuturaMediumC;
  font-size: 18px;
}
.details__wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.details__wrapper__left {
  width: 48%;
}
.details__wrapper__left__deliveryselection {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}
.details__wrapper__left__deliveryselection div,
.details__wrapper__left__payment div {
  width: 30%;
}
.details__wrapper__left__deliveryselection label,
.details__wrapper__left__payment label {
  color: #242424;
  font-family: HelveticaNeueCyr;
  font-size: 17px;
  margin-left: 10px;
}
.details__wrapper__left__deliveryselection__showroom {
  width: 100% !important;
  display: flex;
  justify-content: space-between;
}

.details__wrapper__left__deliveryselection__showroom select {
  width: 45%;
  height: 50px;
  border: 1px solid #dadada;
  background: #fff;
  padding-left: 15px;
}
.details__wrapper__left__deliveryselection__showroom option {
  color: #a6a6a9;
  font-family: FuturaMediumC;
  font-size: 12px;
}
.details__wrapper__left__maininfo {
  width: 100%;
}
/* .details__wrapper__left__maininfo__text { */
/* } */
.details__wrapper__left__maininfo input {
  height: 50px;
  width: 100%;
  border: 1px solid #dadada;
  background: #fff;
  padding: 12px;
  margin-bottom: 20px;
}
.details__wrapper__left__maininfo textarea {
  margin-bottom: 20px;
  height: 130px;
  width: 100%;
  border: 1px solid #dadada;
  background: #fff;
  padding: 12px;
  resize: none;
}
.details__wrapper__left__maininfo__checkbox__wrapper {
  height: 26px !important;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center !important;
}
.details__wrapper__left__maininfo__checkbox {
  width: 26px !important;
  height: 26px !important;
  margin-bottom: 0px !important;
}
.details__wrapper__left__maininfo__checkbox__text {
  color: #b3b3b3;
  font-family: HelveticaNeueCyr;
  margin-left: 15px;
  font-size: 13px;
}
/* .details__wrapper__left__text { */
/* } */
.details__wrapper__left__payment {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}
/* .details__wrapper__left__payment input { */
/* } */
.details__wrapper__left__overallprice {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
.details__wrapper__left__overallprice__text {
  color: #242424;
  font-family: FuturaMediumC;
  font-size: 17px;
}
.details__wrapper__left__confirm {
  width: 100%;
  height: 50px;
  background: #242424;
  color: #fff;
  text-align: center;
  font-family: FuturaMediumC;
  font-size: 15px;
  border: 0px;
  margin-top: 35px;
}
.detail__wrapper__right {
  width: 48%;
}
.detail__wrapper__right img {
  width: 100%;
  height: 452px;
  object-fit: contain;
}
.detail__wrapper__right p {
  color: #242424;
  font-family: HelveticaNeueCyr;
  font-size: 15px;
}
</style>