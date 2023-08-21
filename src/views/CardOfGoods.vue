<script setup>
import store from "../store/index";
import axios from 'axios'
</script>
<script>
export default {
  name: 'Card',
  data() {
    return {
      data: store.state.products,
      obj: JSON.parse(window.localStorage.eventItem),
      products: '',
      fav: JSON.parse(window.localStorage.favorite),
      moreIMg: [],
      eventItem: '',
      f: false,
      // eventItem: this.products.filter(item => item.idx == this.$route.fullPath.split("/")[2])
    }
  },
  methods: {
    setImage() {
      let imgs = document.querySelectorAll('.img')
      let mainImg = document.querySelector('.mainImage')
      this.oldImg = mainImg.children[0].src
      for (let i of imgs) {
        i.style.border = '0'
      }
      event.target.parentElement.style.border = '1px solid black'
      mainImg.children[0].src = event.target.src
      event.target.src = this.oldImg
    },
    addFav(item) {
      store.dispatch("ADD_FAVOURITE", item)
      item.isLoved = true
      for(let i of this.fav){
        if(item.idx == i.idx){
          i.isLoved = true
          console.log(i);
        }
      }
    },
    removeFav(item) {
      store.dispatch("REMOVE_FAVOURITE", item)
      item.isLoved = false
    },
    colorChange(color){
      let col = document.querySelectorAll('.col')
      for(let i of col){
      }
      for(let i of this.eventItem.colors){
        if(color == i.color){
          this.moreIMg = i.moreImg
        }
      }
       
    }
  },
  mounted() {
    axios.get('https://64abd9fb9edb4181202eabe7.mockapi.io/api/makhliyo/all').then(res => {
      this.products = res.data[1].goods
      this.eventItem = res.data[1].goods.filter(item => item.idx == this.$route.fullPath.split("/")[2])[0]
      console.log(this.eventItem);
    })
  },
  
  
}
</script>
<template>
  <div class="item" >
    <div class="firstSight">
      <div class="images">
        <div class="img" v-for="img of this.moreIMg" :key="img.id">
          <img :src="img" @click="setImage()" alt="">
        </div>
      </div>
      <div class="mainImage">
        <img :src="this.eventItem.mainImg" alt="">
      </div>
      <div class="informs"> 
        <div class="basic" style="margin-bottom: 10px;">
          <div class="left">
            <div class="title"><span>{{ this.eventItem.title }}</span></div>
            <div class="price" style="margin: 10px 0px;"><span>{{ this.obj.price }} <span
                  style="color: rgba(202, 175, 151, 1);">₽</span></span></div>
          </div>
          <div class="right">
            <svg @click="addFav(this.eventItem)" v-if="this.eventItem.isLoved == false" style="cursor: pointer;" width="23" height="20" viewBox="0 0 23 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.5703 3.70142C10.9351 3.10858 8.50169 0.978395 6.34687 1.00017C4.13844 1.02277 0.729548 2.52245 1.01707 6.9662C1.2713 10.8916 11.4013 18.9636 11.4013 18.9636C11.4647 19.0121 11.5305 19.0121 11.5987 18.9636C11.5987 18.9636 21.7287 10.8908 21.9829 6.9662C22.2705 2.52245 18.8616 1.02277 16.6523 1.00017C14.1499 0.975046 11.2714 3.85214 11.2714 3.85214L9.31716 5.91953"
                stroke="#222222" stroke-miterlimit="3.8637" />
              </svg>
              <svg @click="removeFav(this.eventItem)" v-if="this.eventItem.isLoved == true" style="cursor: pointer;" width="23" height="20" viewBox="0 0 23 20" fill="red"
              xmlns="http://www.w3.org/2000/svg">
              <path
              d="M11.5703 3.70142C10.9351 3.10858 8.50169 0.978395 6.34687 1.00017C4.13844 1.02277 0.729548 2.52245 1.01707 6.9662C1.2713 10.8916 11.4013 18.9636 11.4013 18.9636C11.4647 19.0121 11.5305 19.0121 11.5987 18.9636C11.5987 18.9636 21.7287 10.8908 21.9829 6.9662C22.2705 2.52245 18.8616 1.02277 16.6523 1.00017C14.1499 0.975046 11.2714 3.85214 11.2714 3.85214L9.31716 5.91953"
              stroke="#222222" stroke-miterlimit="3.8637" />
            </svg>
          </div>
        </div>
        <div class="size">
          <span style="font-size: 15px; display: block; margin-bottom: 15px;">РАЗМЕР</span>
          <div class="sizes" style="cursor: pointer;">
            <div class="siz" v-for="size of this.eventItem.sizes" :key="size.id">
              <span>{{ size }}</span>
            </div>
            <div class="nosiz" v-for="nosize of this.eventItem.nosize" :key="nosize.id">
              <span>{{ nosize }} <div class="no"><svg width="51" height="50" viewBox="0 0 51 50" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 49.5L50 0.5" stroke="#DADADA" />
                  </svg>
                </div></span>
            </div>
          </div>
          <span
            style="cursor: pointer;margin: 10px 0px;display: block; color: rgba(181, 148, 117, 1); font-size: 12px;"><svg
              width="12" height="10" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 9.5C4.98529 11.026 1 14.5 1 14.5H16L8.94118 8.36965C9.61765 7.71344 10.9166 6.09083 11.4559 5.30248C12.4265 3.8837 11.8165 1.00018 8.63236 1C5.19117 0.999809 5.05882 4.34142 6.07353 5.62303"
                stroke="#B59475" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            ОПРЕДЕЛИТЕ СВОЙ РАЗМЕР
          </span>
          <span
            style="cursor: pointer; width: 200px; margin: 0px 0px 10px 0px;  display: block;color: rgba(181, 148, 117, 1); font-size: 12px;"><svg
              width="12" height="12" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.27276 15.25L10.5 1L18.7272 15.25H2.27276Z" stroke="#B59475" />
              <rect x="10" y="6.00586" width="1" height="5" fill="#B59475" />
              <rect x="10" y="12.0059" width="1" height="1" fill="#B59475" />
            </svg>
            НЕТ ВАШЕГО РАЗМЕРА ?
          </span>
        </div>
        <div class="colors">
          <span>ЦВЕТ</span>
          <div class="coloris">
            <div class="color" @click="colorChange(color.color)"  v-for="color of this.eventItem.colors" :key="color.id">
              <div class="col" v-if="color.color !== ''" :style="`border: 7px solid ${color.color};`"></div>
            </div>
          </div>
        </div>
        <div class="buy" style="margin-bottom: 20px;"><button
            style="width: 397px; height: 50px; border-radius: 3px 3px 0px 0px; background: rgba(36, 36, 36, 1);font-size: 15px; color: white; cursor: pointer;">КУПИТЬ</button>
        </div>
        <div class="example"><button
            style="width: 397px; height: 50px;border:1px solid rgba(221, 221, 221, 1); border-radius: 3px 3px 0px 0px; background: rgb(255, 255, 255);font-size: 15px; color: rgba(88, 83, 83, 1); cursor: pointer;">ПРИМЕРКА</button>
        </div>
        <div class="buy2" style="margin-top: 20px;"><button
            style="width: 397px; height: 30px;border: none; border-radius: 3px 3px 0px 0px; background: rgba(229, 213, 197, 1);font-size: 15px; color: white; cursor: pointer;">КУПИТЬ
            В РАССРОЧКУ</button></div>
        <div class="addedInfo">
          <span style="font-size: 15px; margin: 20px 0px; display: block; color: rgba(36, 36, 36, 1);">{{
            this.eventItem.addInfo }}</span>
          <span style="font-size: 15px; color: rgba(36, 36, 36, 1);"><span style="font-weight: 600;">Состав:</span> {{
            this.eventItem.structure }}</span>
        </div>
        <div class="actions"
          style="width: 100%; margin-top: 30px; display: flex; flex-direction: column; justify-content: flex-start;">
          <div class="action1"
            style="width: 397px; border-top: 1px solid rgba(230, 230, 230, 1); height: 50px; font-size: 15px; display: flex; flex-direction: row; align-items: center; justify-content: space-between; padding: 0px 10px;">
            <span>ПАРАМЕТРЫ</span><span style="font-size: 16px; cursor: pointer;">+</span>
          </div>
          <div class="action1"
            style="width: 397px; border-top: 1px solid rgba(230, 230, 230, 1); height: 50px; font-size: 15px; display: flex; flex-direction: row; align-items: center; justify-content: space-between; padding: 0px 10px; border-bottom: 1px solid rgba(230, 230, 230, 1);">
            <span>ДОПОЛНИТЕЛЬНО</span><span style="font-size: 16px; cursor: pointer;">+</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body{
  font-family: Arial, Helvetica, sans-serif;
}
.item {
  width: 100%;
  padding: 50px 200px 0px 150px;
  background: rgba(255, 255, 255, 1);
}

.line {
  position: absolute;
  width: 100%;
  height: 1px;
  background: rgba(230, 230, 230, 1);
  left: 0;
  top: 130vh;
}

.otherItems {
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: row;
color: black;
  align-items: center;
  justify-content: space-between;

}
.otherItems a{
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: row;
color: black;
  align-items: center;
  justify-content: space-between;
}
.titleoth{
  font-size: 21px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.priceoth{
  font-size: 23px;
  display: flex;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.priceoth span:nth-child(2){
  font-size: 12px;
  color: rgba(175, 175, 175, 1);
}
.Items {
  width: 260px;
  height: 400px;
  cursor: pointer;
}

.Items img {
  width: 260px;
  height: 373px;
  object-fit: cover;
}

.firstSight {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
}

.mainImage {
  width: 600px;
  margin: 0px 10px;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.informs {
  height: 500px;
  width: 300px;
}

.color {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  margin: 10px;
  align-items: center;
  border: 1px solid rgba(226, 223, 223, 1);
  justify-content: center;
}

.colors {
  display: flex;
  height: 70px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.coloris {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}

.mainImage img {
  width: 600px;
  height: 800px;
  object-fit: cover;
}

.col {
  width: 34px;
  border-radius: 50%;
  height: 34px;
}

.act {
  border: 1px solid black;
}

.images {
  width: 64px;
  height: 500px;
}

.sizes {
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.siz {
  width: 50px;
  height: 50px;
  border: 1px solid rgba(215, 180, 148, 1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: rgba(181, 148, 117, 1);
  font-size: 15px;
  font-weight: 400;
}

.nosiz {
  width: 50px;
  height: 50px;
  border: 1px solid rgba(218, 218, 218, 1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: rgba(218, 218, 218, 1);
  position: relative;
  font-size: 15px;
  font-weight: 400;
}

.no {
  position: absolute;
  top: 0;
  left: 0;
}

.img {
  width: 64px;
  height: 91px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.img img {
  width: 47px;
  height: 71px;
  object-fit: cover;
}

.left {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.left .title {
  font-size: 21px;
  font-weight: 500;
}

.left .price span {
  font-size: 22px;
  font-weight: 300;
}

.basic {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
}</style>
