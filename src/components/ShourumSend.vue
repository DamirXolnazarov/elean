<template>
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
</template>

<script>
export default {
    name: 'ShourumSend',
};
</script>

<style scoped>
formTitle h2{
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
.comment{
  width: 717px;
  height: 100px;
}
.icon img{
  width: 45px;
}
input[type = 'submit']{
  width: 180px;
  border: 1px solid black;
  background: none;
  font-weight: 500;
  margin-top: -40px;
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
</style>