<script setup>
import axios from 'axios';
</script>
<script>
export default{
  data() {
    return {
      name: '',
      number: '',
      time: '',
      comment: '',
      api: '',
     
    };
  },
  methods:{
    sendTg(){
      let message = `Name: ${this.name} \n suitable time: ${this.time} \n phone number: ${this.number} \n comment: ${this.comment}`
      this.api = import.meta.env.VITE_API + message
      axios.post(this.api).then(res => {
        console.log('ok',res);
      })
    }
  }
}
</script>


<template>
  <main>
    <h2 class="title">О БРЕНДЕ</h2>
    <div class="content">
      <svg width="63" height="63" viewBox="0 0 63 63" style="z-index: 1;" class="start" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="31.5" cy="31.5" r="30" stroke="white" stroke-opacity="0.85" stroke-width="3" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M48.7361 30.9052L21.3965 14.2637V47.5467L48.7361 30.9052Z"
          stroke="white" stroke-opacity="0.85" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    <div class="text">
      <h2 class="textTitle">ELEAN</h2>
      <div class="details">
        <div class="left">
          <span>Сегодня ELEAN - это первый в России магазин готового женского смокинга. У нас каждая женщина может
            подобрать для себя образ со смокингом, такой же как у голливудских див и звезд светской хроники. <br> <br>
            Костюм со смокингом ELEAN - выбор звёзд эстрады и кино, телеведущих, fashion-стилистов, успешных
            женщин-руководителей, представительниц научной и деловой элиты. <br> <br>
            История бренда началась задолго до первого показа, который состоялся 12 марта 2016 года, с мечты автора
            коллекции, Елены Писаревой о собственном бренде элегантной одежды и продолжалась долгие 30 лет накопления
            профессионального опыта. Вся первая коллекция была выполнена из 100% натурального шелка, в нее вошли
            жентсвенные платья и костюмы.
          </span>
        </div>
        <div class="right">
          В сентябре 2016 года впервые был показан женский костюм со смокингом. В сентябре 2017 года в коллекции бренда
          было уже три модели женских смокингов на разные типы фигуры и вкус. <br> <br>
          В 2018 году коллекцию пополнило еще 2 модели смокингов и сформирована полная капсула дополняющих изделия, таких
          как блуза с бабочкой, топ с кружевом и даже тельняшка. Жемчужиной базовой коллекции стало платье-смокинг. <br>
          <br>
          Кроме базовой коллекции смокингов, каждый сезон мы выпускаем капсулу из 7-12 вещей, которые эффектно освежат ваш
          гардероб. Все коллекции бренда отшиваются только из натуральных тканей: шерсть и шелк.
        </div>
      </div>
      <div class="founders">
        <div class="founder1">
          <img src="../assets/img2.png" alt="">
          <span class="name">
            ЕЛЕНА ПИСАРЕВА
          </span>
          <span class="about">Автор коллекции, лекал и технологии пошива в бренде ELEAN. Имеет высшее образование инженера
            - технолога швейных изделий и опыт свыше 30 лет в разработке и пошиве изделий. </span>
        </div>
        <div class="founder2">
          <img src="../assets/img3.png" alt="">
          <span class="name">
            АНАСТАСИЯ И АННА
          </span>
          <span class="about">Дочери Елены, с детства впитывали мастерство мамы и взяли на себя роль в управлении и
            становлении бренда. Анна является главным стилистом и операционным управляющей. Анастасия управляет отделом
            маркетинга и рекламы.</span>
        </div>
      </div>
    </div>
  </main>
  <div class="blackArea">
    <div class="ourtitle"><span>НАШИ ПРЕМУЩЕСТВА</span></div>
    <div class="blocks">
      <div class="block">
        <img src="../assets/icon5.png" alt="">
        <span>Уровень пошива приравнивается к индивидуальному;</span>
      </div>
      <div class="block">
        <img src="../assets/icon1.png" alt="">
        <span>Создаем лекала для костюмов, которые подчеркивают достоинства и скрывают недостатки фигуры;</span>
      </div>
      <div class="block">
        <img src="../assets/icon4.png" alt="">
        <span>Качественное исполнение: ровные отстрочки, красивая обработка – вы можете носить вещи даже изнаночной стороной;</span>
      </div>
      <div class="block">
        <img src="../assets/icon2.png" alt="">
        <span>Используем современное оборудование и качественные материалы для изготовления изделий;</span>
      </div>
      <div class="block">
        <img src="../assets/icon3.png" alt="">
        <span>Наши швеи занимаются пошивом и конструированием одежды более 20 лет. За это время их навыки доведены до идеала... </span>
      </div>
    </div>
    <div class="shourumsend">
        <div class="icon"><img src="../assets/sendFormIcon.png" alt=""></div>
        <div class="formTitle">
      <h2>ЗАПИСАТЬСЯ НА ПРИМЕРКУ В ШОУРУМЕ</h2>
        </div>
        <form action="" @submit.prevent="sendTg()" method="get">
             <div class="inputs">
              <input v-model="name" type="text" required  placeholder="ВВЕДИТЕ ИМЯ                                          *">
              <input v-model="number" type="tel" required  placeholder="ВВЕДИТЕ ТЕЛЕФОН                                  *">
              <input v-model="time" type="text" required  placeholder="ВВЕДИТЕ УДОБНОЕ ВРЕМЯ                     *">
              <input v-model="comment" class="comment" type="text" placeholder="ДОБАВИТЬ КОММЕНТАРИЙ">
              <input type="submit" value="ОТПРАВИТЬ">
             </div>
        </form>
        <div class="alert"><span>Поля отмеченные “*” обязательны для заполнения</span></div>
    </div>
  </div>
</template>
<style scoped>
main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 230px;

}
.block{
  width: 320px;
  height: 135px;
  text-align: center;
  display: flex;
  margin-bottom: 50px;
  flex-direction: column;
  padding: 10px 0px 0px 0px;
  justify-content: space-between;
  align-items: center;
}
.formTitle h2{
  font-size: 21px;
  color: black;
font-weight: 500;
}
.alert span{
  color: rgba(157, 157, 173, 1);
  font-size: 14px;
}
.alert{
  width: 100%;
  padding: 0px 55px;
  text-align: left;
}
.shourumsend{
  width: 100%;
  height: 420px;
  padding: 50px 0px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.block span {
  font-size: 15px;
  font-weight: 400;
  color: rgba(192, 167, 143, 1);
}
.icon img{
  width: 45px;
}
.title {
  font-size: 21px;
  width: 100%;
  height: 100px;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #272727;
  font-weight: 400;
}
.block img{
  height: 45px;
  object-fit: contain;
  width: 45px;
}
.block:nth-child(1){
  padding-bottom: 20px;
}
.block:nth-child(2){
  margin:0px 20px;
}
.block:nth-child(5){
  margin:0px 0px 0px 20px;
}
.inputs{
  width: 900px;
  display: flex;
  height: 200px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
}
input{
  width: 300px;
  border: 1px solid black;
  height: 60px;
  padding: 15px 15px;

}
.text {
  width: 90%;
  padding: 50px 0px;
}

.textTitle {
  width: 100%;
  font-weight: 600;
  font-size: 20px;
  text-align: left;
}
.comment{
  width: 717px;
  height: 100px;
}
input[type = 'submit']{
  width: 180px;
  border: 1px solid black;
  background: none;
  font-weight: 500;
  margin-top: -40px;
}
.blocks{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.content {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  background-size: cover;
  background: url('../assets/img1.png');
}

.ourtitle span {
  font-size: 18px;
  color: white;
}

.ourtitle {
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.details {
  width: 100%;
  display: flex;
  padding: 30px 0px;
  font-size: 15px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
}

.left {
  width: 45%;
}

.right {
  width: 45%;
}

.content::before {
  width: 100%;
  height: 100%;
  position: absolute;
  content: '';
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
}

.start {
  cursor: pointer;
}

.founders {
  width: 100%;
  display: flex;
  height: 550px;
  flex-direction: row;
  padding: 30px 0px 0px 0px;
  align-items: flex-start;
  justify-content: space-between;
}

.founder1 {
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: 500px;
}

.founder2 {
  width: 45%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: flex-end;
  align-items: flex-start;
  height: 500px;
}

img {
  width: 100%;
}

.name {
  display: flex;
  margin: 20px 0px;
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
}

.about {
  font-size: 15px;
}

.blackArea {
  width: 100%;
  background: rgba(37, 40, 49, 1);
  padding: 0px 230px;
  height: 160vh;
}
</style>