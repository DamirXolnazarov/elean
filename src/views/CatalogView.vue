<script setup>
import axios from 'axios'
import store from "../store/index";
</script>
<template>
  <div class="wrapper">
    <div class="categories">
      <span class="s">КАТЕГОРИИ</span>
      <ul id="cat" @click="catalog()">
        <li>Новинки</li>
        <li>Юбки</li>
        <li>Смокинг</li>
        <li>Костюмы</li>
        <li>Аксессуары</li>
        <li>Брюки</li>
        <li>Блузы</li>
        <li>Платья</li>
        <li>Топы и жилеты</li>
      </ul>
      <span class="s">КОЛЕКЦИИ</span>
      <ul id="cat" @click="catalog()">
        <li>Осень-зима 20-21</li>
        <li>Вечерние комплекты</li>
        <li>Предзаказ</li>
        <li>вадьба и выпускной</li>
      </ul>
    </div>
    <div class="goodsSide">
      <div class="title">
        <span class="tit">All</span>
      </div>
      <div class="goods">

        <div class="good" v-for="item of this.products" :key="item.id">
          <img @click="card(item)" :src="item.mainImg" alt="">

          <RouterLink to="/catalog">
            <div class="name">
              <span>{{ item.title }}</span>
              <svg @click="addFav(item)" v-if="item.isLoved == false" style="cursor: pointer;" width="23" height="20"
                viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.5703 3.70142C10.9351 3.10858 8.50169 0.978395 6.34687 1.00017C4.13844 1.02277 0.729548 2.52245 1.01707 6.9662C1.2713 10.8916 11.4013 18.9636 11.4013 18.9636C11.4647 19.0121 11.5305 19.0121 11.5987 18.9636C11.5987 18.9636 21.7287 10.8908 21.9829 6.9662C22.2705 2.52245 18.8616 1.02277 16.6523 1.00017C14.1499 0.975046 11.2714 3.85214 11.2714 3.85214L9.31716 5.91953"
                  stroke="#222222" stroke-miterlimit="3.8637" />
              </svg>
              <svg @click="removeFav(item)" v-if="item.isLoved == true" style="cursor: pointer;" width="23" height="20"
                viewBox="0 0 23 20" fill="red" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.5703 3.70142C10.9351 3.10858 8.50169 0.978395 6.34687 1.00017C4.13844 1.02277 0.729548 2.52245 1.01707 6.9662C1.2713 10.8916 11.4013 18.9636 11.4013 18.9636C11.4647 19.0121 11.5305 19.0121 11.5987 18.9636C11.5987 18.9636 21.7287 10.8908 21.9829 6.9662C22.2705 2.52245 18.8616 1.02277 16.6523 1.00017C14.1499 0.975046 11.2714 3.85214 11.2714 3.85214L9.31716 5.91953"
                  stroke="#222222" stroke-miterlimit="3.8637" />
              </svg>

            </div>
            <div class="price">
              <span style="font-size: 14px; font-weight: 500;">{{ item.price }} ₽</span><span
                style="font-weight: 600; color: rgba(175, 175, 175, 1); font-size: 10px;">Подчеркнет линию талии</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
    <!-- <div v-for="item of this.data" :key="item.id"> -->
    <!-- {{ item.title }} -->

    <!-- <button @click="addFav(item)">добавить в избранное</button> -->
    <!-- </div> -->
  </div>
</template>
<script>

export default {
  data() {
    return {
      data: store.state.products,
      favs: [],
      favourites: '',
      old: [],
      products: '',
      categ: '',
    };
  },
  methods: {
    addFav(item) {
      store.dispatch("ADD_FAVOURITE", item)
      item.isLoved = true
      this.favourites = JSON.parse(window.localStorage.favorite)
      console.log(this.favourites);
    },
    removeFav(item) {
      store.dispatch("REMOVE_FAVOURITE", item)
      item.isLoved = false
    },

    catalog() {
      let categories = document.querySelector('#cat').children
      let title = document.querySelector('.tit')
      for (let i of categories) {
        i.onclick = () => {
          i.classList.add('chosen')
          title.innerHTML = i.innerHTML
          this.categ = i.innerHTML
          for(let o of categories){
            if(o.innerHTML !== this.categ){
              o.style.color = 'black'
            }else{
              o.style.color = 'rgba(174, 145, 119, 1)'
            }
          }
        }
      }
    },
    card(item) {
      for(let i of this.products){
        if(item.idx == i.idx){
          window.localStorage.eventItem = JSON.stringify(i)
          this.$router.push(`/product/${i.idx}`)
        }
      }


    }
  },
  mounted() {
    axios.get('https://64abd9fb9edb4181202eabe7.mockapi.io/api/makhliyo/all').then(res => {
      this.products = res.data[1].goods
      this.favourites = JSON.parse(window.localStorage.favorite)
      for(let i of this.products){
        if(i.isLoved == true){
          for(let o of this.favourites){
            if(i.idx == o.idx){
              i.isLoved = true
            }
          }
        }
      }
    })
    // for(let i of this.data){
    // for(let o of this.fav){
    // if(i.idx == o.idx){
    // i.isLoved = true
    // }
    // }
    // }
    // for(let i of this.data){
    // if(i.isLoved == true){
    // consol/e.log(i);
    // }
    // }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  background: rgba(250, 250, 250, 1);
  padding: 0px 220px 0px 220px;
}

a {
  text-decoration: none;
  color: black;
}

.categories {
  width: 200px;
  padding-top: 93px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.name {
  display: flex;
  flex-direction: row;
  z-index: 9999 !important;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
}

.name span {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  width: 180px;
  font-size: 14px;
}

ul li {
  list-style-type: none;
  line-height: 40px;
  cursor: pointer;
}

.s:nth-child(1) {
  margin: 0px 0px 15px 0px;
  display: block;
}

.s:nth-child(2) {
  display: block;
  margin: 15px 0px 15px 0px;
}

.chosen {
  /* border-bottom: 1px solid rgba(174, 145, 119, 1); */
  color: rgba(174, 145, 119, 1);
  /* display: inline; */
}

.name {
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.price {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.goodsSide {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px 0px 0px;
  justify-content: flex-start;
}

.title {
  font-size: 23px;
}

.goods {
  width: 95%;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
}

.good {
  width: 260px;
  cursor: pointer;
  margin: 10px 0px;
  height: 470px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: black;
}

.good a {
  margin: 0;
  width: 260px;
  height: 373px;
  display: block;
}

.good img {
  object-fit: cover;
  width: 260px;
  height: 373px;
}
</style>