<script setup>
</script>
<template>
  <main>
    <section class="slider"></section>
    <section class="second">
      <div class="wrapper">
        <div class="block"> 
          <p>Новинки</p>
        <img src="../assets/11 внизу 1 (2).png" alt="">
        </div>
        <div class="block">
          <p>Смокинги</p>
        <img src="../assets/Elean25sajt5 1 (2).png" alt="">
        </div>
        <div class="block">
          <p>Брюки</p>
        <img src="../assets/10сбоку2 1 (2).png" alt="">
        </div>
      </div>
      <div class="wrapper2">
        <div class="block">
          <p>Акции</p>
        <img src="../assets/Elean20 2 (2).png" alt="">
        </div>
        <div class="block">
          <p>Костюмы</p>
        <img src="../assets/Elean20 1 (2).png" alt="">
        </div>
        <div class="block">
          <p>Платья</p>
        <img src="../assets/10 сбоку 1 (1).png" alt="">
        </div>
      </div>
    </section>
    <section class="third">
      <div class="bottom">
        <div class="block">
          <p>Блузы</p>
          <img src="../assets/9 внизу 2 (1).png" alt="">
        </div>
        <div class="block">
          <p>Юбки</p>
          <img src="../assets/elean47277-1 1 (1).png" alt="">
        </div>
        <div class="block">
          <p>Топы и жилеты</p>
          <img src="../assets/15 сбоку или снизу 2 (1).png" alt="">
        </div>
        <div class="block">
          <p>Аксессуары</p>
          <img src="../assets/Elean25-top 3 (1).png" alt="">
        </div>
      </div>
    </section>
    <section class="four">
      <h2>О БРЕНДЕ</h2>
      <div class="about">
        <img src="../assets/image_2023-07-14_12-21-57.png" alt="">
        <p>Сегодня ELEAN - это первый в России магазин готового женского смокинга. У нас каждая женщина может подобрать для себя образ со смокингом, такой же как у голливудских див и звезд светской хроники.

Костюм со смокингом ELEAN - выбор звёзд эстрады и кино, телеведущих, fashion-стилистов, успешных женщин-руководителей, представительниц научной и деловой элиты.

История бренда началась задолго до первого показа, который состоялся 12 марта 2016 года, с мечты автора коллекции, Елены Писаревой о собственном бренде элегантной одежды и продолжалась долгие 30 лет накопления профессионального опыта. Вся первая коллекция была выполнена из 100% натурального шелка, в нее вошли жентсвенные платья и костюмы.</p>
      </div>
    </section>
    <section class="five">
      <h2>НАШ ШОУРУМ</h2>
      <img src="../assets/image_2023-07-14_12-36-45.png" alt="">
    </section>
    <section class="send">
      <div class="block">
        <img class="png" src="../assets/Group 2156.png" alt="">
      <h2>ЗАПИСАТЬСЯ НА ПРИМЕРКУ В ШОУРУМЕ</h2>
      </div>
      <form>
        <input type="text" name="" id="" placeholder="ВВЕДИТЕ ИМЯ">
        <input type="text" name="" id="" placeholder="ВВЕДИТЕ ТЕЛЕФОН">
        <input type="text" name="" id="" placeholder="ВВЕДИТЕ УДОБНОЕ ВРЕМЯ">
        <input class="big" type="text" name="" id="" placeholder="ДОБАВИТЬ КОММЕНТАРИЙ">
        <button>ОТПРАВИТЬ</button>
      </form>
    </section>
    <section class="star">
      <h2>НАШИ ЗВЕЗДНЫЕ КЛИЕНТЫ И ОТЗЫВЫ</h2>
      <div class="stars">
        <div class="block">
          <img src="../assets/Group 2159.png" alt="">
          <p>Альбина Джанабаева </p>
        </div>
        <div class="block">
          <img src="../assets/IMG_4228 2.png" alt="">
          <p>Екатерина Данилова</p>
        </div>
        <div class="block">
          <img src="../assets/93B78862-6DA7-47C3-AB15-C00935398C1E 3.png" alt="">
          <p>Екатерина Катова</p>
        </div>
        <div class="block">
          <img src="../assets/IMG_4233 1.png" alt="">
          <p>Ирина Ургант </p>
        </div>
      </div>
    </section>
    <section class="instagram">
      <h2>МЫ В INSTAGRAM</h2>
      <div class="stars">
        <div class="block">
          <img src="../assets/IMG_4223 2.png" alt="">
          <img src="../assets/image 73.png" alt="">
        </div>
        <div class="block">
          <img src="../assets/IMG_4226 1.png" alt="">
          <img src="../assets/image 73.png" alt="">
        </div>
        <div class="block">
          <img src="../assets/IMG_4227 1.png" alt="">
          <img src="../assets/image 73.png" alt="">
        </div>
        <div class="block">
          <img src="../assets/IMG_4234 1 (1).png" alt="">
          <img src="../assets/image 73.png" alt="">
        </div>
        <div class="block">
          <img src="../assets/IMG_4222 3.png" alt="">
          <img src="../assets/image 73.png" alt="">
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
input{
  padding: 20px 60px;
}
.png{
  margin-left: 160px;
}
.four , .five , .send , .star , .instagram{
  width: 100%;
  height: 790px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}
.send , .star{
  height: 400px;
}
.instagram{
  height: 570px;
  margin-top: 100px;
}
.star{
  margin-top: 90px;
}
.stars{
  height: 300px;
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.stars p {
  margin-top: -90px;
}
form{
  width: 60%;
}
.big{
  padding: 30px 200px;
  margin-top: 10px;
}
button{
  padding: 18px 40px;
}
.about{
  padding: 40px;
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.about p{
  line-height: 30px;
  width: 540px;
  height: 305px;
}
.third{
  width: 100%;
  height: 600px;
  padding: 90px;
}
.bottom{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.slider{
  width: 100%;
  height: 760px;
  background-image: url("../assets/слайдер (2).png");
  background-size: cover;
}
.second{
  width: 100%;
  padding: 90px;
  height: 1400px;
  display: flex;
  justify-content: space-between;
}
.wrapper{
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.wrapper2{
  right: 0px !important;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
img{
  margin: 4px;
  margin-bottom: 100px;
}
p{
  margin-left: 10px;
}
</style>