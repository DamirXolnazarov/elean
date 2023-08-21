<script setup>
import ShourumSend from '../components/ShourumSend.vue'
</script>
<template>
  <main>
    <section class="slider"></section>
    <section class="second">
      <div class="wrapper">
        <div class="top">
          <span>Новинки</span> 
            <img src="../assets/11 внизу 1 (2).png" alt="" />
        </div>
        <div class="bott">
          <div class="bloc">
            <span>Смокинги</span>
            <img src="../assets/Elean25sajt5 1 (2).png" alt="" />
          </div>
          <div class="bloc">
            <span>Брюки</span>
            <img src="../assets/10сбоку2 1 (2).png" alt="" />
          </div>
        </div>

      </div>
      <div class="wrapper2">
        <div class="block">
          <span>Акции</span>
          <img src="../assets/Elean20 2 (2).png" alt="" />
        </div>
        <div class="block">
          <span>Костюмы</span>
          <img src="../assets/Elean20 1 (2).png" alt="" />
        </div>
        <div class="block" style="margin-top: 50px;">
          <span>Платья</span>
          <img src="../assets/10 сбоку 1 (1).png" alt="" />
        </div>
      </div>
    </section>
    <section class="third"> 
      <div class="bottom">
        <div class="block">
          <p>Блузы</p>
          <img src="../assets/9 внизу 2 (1).png" alt="" />
        </div>
        <div class="block">
          <p>Юбки</p>
          <img src="../assets/elean47277-1 1 (1).png" alt="" />
        </div>
        <div class="block">
          <p>Топы и жилеты</p>
          <img src="../assets/15 сбоку или снизу 2 (1).png" alt="" />
        </div>
        <div class="block">
          <p>Аксессуары</p>
          <img src="../assets/Elean25-top 3 (1).png" alt="" />
        </div>
      </div>
    </section>
    <section class="four">
      <h2>О БРЕНДЕ</h2>
      <div class="about">
        <img src="../assets/image_2023-07-14_12-21-57.png" alt="" />
        <p>
          Сегодня ELEAN - это первый в России магазин готового женского
          смокинга. У нас каждая женщина может подобрать для себя образ со
          смокингом, такой же как у голливудских див и звезд светской хроники.
          Костюм со смокингом ELEAN - выбор звёзд эстрады и кино, телеведущих,
          fashion-стилистов, успешных женщин-руководителей, представительниц
          научной и деловой элиты. История бренда началась задолго до первого
          показа, который состоялся 12 марта 2016 года, с мечты автора
          коллекции, Елены Писаревой о собственном бренде элегантной одежды и
          продолжалась долгие 30 лет накопления профессионального опыта. Вся
          первая коллекция была выполнена из 100% натурального шелка, в нее
          вошли жентсвенные платья и костюмы.
        </p>
      </div>
    </section>  
    <section class="five">
      <h2 >НАШ ШОУРУМ</h2>
      <img src="../assets/image_2023-07-14_12-36-45.png" alt="" />
    </section>
    <section class="send">
     <ShourumSend/>
    </section>
    <section class="star">
      <h2>НАШИ ЗВЕЗДНЫЕ КЛИЕНТЫ И ОТЗЫВЫ</h2>
      <div class="stars">
        <div class="block">
          <img src="../assets/Group 2159.png" alt="" />
          <p>Альбина Джанабаева</p>
        </div>
        <div class="block">
          <img src="../assets/IMG_4228 2.png" alt="" />
          <p>Екатерина Данилова</p>
        </div>
        <div class="block">
          <img
            src="../assets/93B78862-6DA7-47C3-AB15-C00935398C1E 3.png"
            alt=""
          />
          <p>Екатерина Катова</p>
        </div>
        <div class="block">
          <img src="../assets/IMG_4233 1.png" alt="" />
          <p>Ирина Ургант</p>
        </div>
      </div>
    </section>
    <section class="instagram">
      <h2>МЫ В INSTAGRAM</h2>
      <div class="stars">
        <div class="block">
          <img src="../assets/IMG_4223 2.png" alt="" />
          <img class="starprofile" src="../assets/image 73.png" alt="" />
        </div>
        <div class="block">
          <img src="../assets/IMG_4226 1.png" alt="" />
          <img class="starprofile" src="../assets/image 73.png" alt="" />
        </div>
        <div class="block">
          <img src="../assets/IMG_4227 1.png" alt="" />
          <img class="starprofile" src="../assets/image 73.png" alt="" />
        </div>
        <div class="block">
          <img src="../assets/IMG_4234 1 (1).png" alt="" />
          <img class="starprofile" src="../assets/image 73.png" alt="" />
        </div>
        <div class="block">
          <img src="../assets/IMG_4222 3.png" alt="" />
          <img class="starprofile" src="../assets/image 73.png" alt="" />
        </div>
      </div>
    </section> 
  </main>
</template>
<style scoped>

input {
  padding: 20px 60px;
}
.header[data-v-f71a5ffa]{
  display: block;
}
.png {
  margin-left: 160px;
}
.five{
  height: 600px !important;
}
.four,
.five,
.send,
.star,
.instagram {
  width: 100%;
  height: 790px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}
.send{
  padding: 0px 235px;
  border: 1px solid gray;
  margin-top:50px;
}
.stars .block{
  position: relative;
}
.stars .block p{
  position: absolute;
  bottom: -50px;
}
.stars .block:nth-child(1) img{
width: 256px;
height: 370px;
object-fit: cover;
  }
  .instagram .block:nth-child(1) img:nth-child(2){
   width: 260px;
   object-fit: cover;
   height: 50px;
  }
  .star{
    height: 500px;
  }
.instagram{
  height: 650px;
  padding-top: 50px;
}
.five , .four {
  background: white;
}
.send {
  height: 400px;
}
.instagram {
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: row !important;
}
.four,
.five,
.send,
.star,
.instagram h2 {
  width: 100%;
  text-align: center;
  font-family: FuturaBookC;
  font-size: 21px;
}

.stars {
  width: 90%;
  margin: auto;
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
}
.stars p {
  margin-top: -90px;
}
.stars .block {
  width: 19%;
}
.stars .block img {
  width: 100%;
  object-fit: contain;
}
.bott{
  width: 662px;
  display: flex;
  margin-top: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.bott .bloc{
  display: flex;
  flex-direction: column;

}
.bott span{
  margin-bottom: 20px;
}
.starprofile {
  margin-top: 0px;
}
form {
  width: 60%;
}
.big {
  padding: 30px 200px;
  margin-top: 10px;
}

button {
  padding: 18px 40px;
}
.about {
  padding: 40px;
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.about p {
  line-height: 30px;
  width: 540px;
  height: 305px;
}
.third {
  width: 100%;
  padding: 90px;
}
.third .block{
  display: flex;
  flex-direction: column;
}
.third .block p{
  margin-bottom: 20px;
}
.bottom {
  width: 100%;
  display: flex;
  height: 450px;
  justify-content: space-between;
}
.bottom .block {
  width: 20%;
}
.bottom .block img {
  width: 100%;
  object-fit: contain;
}
.slider {
  width: 100%;
  height: 760px;
  background-image: url("../assets/слайдер (2).png");
  background-size: cover;
}
.second {
  width: 100%;
  padding: 90px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: wrap;
}
.block span {
  font-family: Arial, Helvetica, sans-serif;
}

.wrapper {
  width: 662px;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-wrap: wrap;
  background: white;
  padding: 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.wrapper .top img {
  object-fit: cover;
  width: 656px;
}
.wrapper .block p{
  font-family: 'Lato';
}
.third{
  font-family: Arial, Helvetica, sans-serif;
  margin-top: -100px;
}

.top{
  width: 660px;
  height: 780px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.wrapper2 .block:nth-child(3){
  width: 660px;
  height: 810px;
}
.wrapper2 .block:nth-child(3) img{
  width: 640px;
  height: 820px;
}
.top span{
  margin-bottom: 20px;
}
.wrapper .block:nth-child(2), .wrapper .block:nth-child(3){
  width: 324px;
  border: 2px solid;
  height: 401px;
}
.wrapper .block:nth-child(1) img{
   object-fit: cover;
   width: 100%;
   height: 100%;
}
.wrapper2 {
  /* right: 0px !important; */
  width: 49%;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.wrapper2 span{
  margin-bottom: 20px;
}
.wrapper2 .block{
   display: flex;
   flex-direction: column;
   
}
.wrapper2 .block {
  width: 48%;
}
.wrapper2 .block img {
  object-fit: contain;
  width: 100%;
}

.wrapper2 .block:nth-child(3) {
  width: 100%;
}
p {
  margin-left: 10px;
}
</style>