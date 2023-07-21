<script>
export default {
  data() {
    return {
      objectForEMarket: [
        {
          idx: 0,
          title: "МОНСЕ",
          oldImg: '',
          new: false,
          isInCart: false,
          isLoved: false,
          category: 1,
          count: 9,
          ingridents: '98% шерсть, 2% эластан, отделка шелком',
          mainImg:
            "https://logos44.ru/wp-content/uploads/2023/03/istock_000046978234xlarge__large.jpg",
          addInfo:
            "Приталенный силуэт и заостренные лацканы подчеркивают линию талии, визуально корректируя фигуру до желанной всем 'песочные часы'. Классика женского смокинга, которую одобрил бы сам Ив Сен Лоран.",
          structure: "Нейлон 100%",
          warning: ["Только сухая чистка"],
          price: 1059,
          sizes: ["40", "42", "43"],
          nosize: ["45", "47", "50"],
          colors: [
            {
              color: ["#222220"],
              images: [
                "https://cdn-images.farfetch-contents.com/17/64/03/28/17640328_37120896_1000.jpg",
                "https://cdn-images.farfetch-contents.com/17/64/03/28/17640328_37120896_1000.jpg",
              ],
            },
          ],
        },
        {
          idx: 1,
          title: "AMI Paris",
          oldImg: '',
          new: true,
          isInCart: false,
          isLoved: false,
          category: 2,
          count: 5,
          ingridents: 'Органический Хлопок 100%',
          mainImg:
            "https://cdn-images.farfetch-contents.com/20/25/11/95/20251195_50739924_1000.jpg",
          addInfo:
            "Черный, органический хлопок, вышитый логотип, круглый вырез, короткие рукава и прямой подол. Этот товар как минимум на 50% состоит из органических материалов. Узнать больше о том, какие товары получают отметку «Ответственный выбор», можно из материала «Как мы оцениваем экологичность и этичность».",
          structure: "Нейлон 100%",
          warning: ["Только сухая чистка"],
          price: 165,
          sizes: ["41", "44", "45"],
          nosize: ["42", "43", "47"],
          colors: [
            {
              color: ["#808080"],
              images: [
                "https://cdn-images.farfetch-contents.com/20/25/11/95/20251195_50739921_1000.jpg",
                "https://cdn-images.farfetch-contents.com/20/25/11/95/20251195_50739919_1000.jpg",
                "https://cdn-images.farfetch-contents.com/20/25/11/95/20251195_50739917_1000.jpg"
              ],
            },
          ],
        },
        {
          idx: 2,
          title: "Palm Angels",
          oldImg: '',
          new: false,
          isInCart: false,
          isLoved: false,
          category: 3,
          count: 10,
          ingridents: 'Наружный Материал: Полиэстер 100% Подкладка: Полиэстер 100%',
          mainImg:
            "https://cdn-images.farfetch-contents.com/20/13/42/89/20134289_50444399_1000.jpg",
          addInfo:
            "Черный/разноцветный, сплошной графичный принт, маленькая подвеска с логотипом, эластичный пояс, прямой крой, два вшитых кармана по бокам, прямой подол и длина по колено. Пожалуйста, примеряйте купальники и пляжные шорты только поверх собственного белья.",
          structure: "Нейлон 100%",
          warning: ["Только сухая чистка"],
          price: 394,
          sizes: ["43", "45", "46"],
          nosize: ["40", "41", "47"],
          colors: [
            {
              color: "",
              images: [
                "https://cdn-images.farfetch-contents.com/20/13/42/89/20134289_50444383_1000.jpg",
                "https://cdn-images.farfetch-contents.com/20/13/42/89/20134289_50444338_1000.jpg",
                "https://cdn-images.farfetch-contents.com/20/13/42/89/20134289_50444300_1000.jpg"
              ],
            },
          ],
        },
        {
          idx: 4,
          title: "Adidas",
          oldImg: '',
          new: true,
          isInCart: false,
          isLoved: false,
          category: 4,
          count: 3,
          ingridents: 'Подошва: Резина 100% Наружный Материал: Ткань 100% Подкладка: Ткань 100% ',
          mainImg:
            "https://cdn-images.farfetch-contents.com/16/81/33/04/16813304_33345131_1000.jpg",
          addInfo:
            "Декор с тремя полосками, закругленный носок, шнуровка спереди, контрастный задник, стелька с логотипом, кожаная подкладка и плоская резиновая подошва. Цвет: синий. Эта модель представлена на маркетплейсе, где можно найти самые редкие модели кроссовок, о которых мечтают коллекционеры и любители streetwear по всему миру.",
          structure: "Нейлон 100%",
          warning: ["Только сухая чистка"],
          price: 177,
          sizes: ["41", "44", "45"],
          nosize: ["42", "43", "47"],
          colors: [
            {
              color: ["#808080"],
              images: [
                "https://cdn-images.farfetch-contents.com/16/81/33/04/16813304_33345130_1000.jpg",
                "https://cdn-images.farfetch-contents.com/16/81/33/04/16813304_33345133_1000.jpg",
                "https://cdn-images.farfetch-contents.com/16/81/33/04/16813304_33345132_1000.jpg"
              ],
            },
          ],
        },
        {
          idx: 5,
          title: "Balenciaga",
          oldImg: '',
          new: true,
          isInCart: false,
          isLoved: false,
          category: 4,
          count: 3,
          ingridents: 'Полиэстер 100% Наружный Материал: Хлопок 97%',
          mainImg:
            "https://cdn-images.farfetch-contents.com/16/90/69/76/16906976_6efeadd2-9734-4e3a-aacd-88a53f0df9a4_1000.jpg",
          addInfo:
            "Вышитый логотип на груди, круглый вырез, приспущенные плечи и короткие рукава.",
          structure: "Нейлон 100%",
          warning: ["Ручная стирка"],
          price: 410,
          sizes: ["41", "44", "45"],
          nosize: ["42", "43", "47"],
          colors: [
            {
              color: ["yellow"],
              images: [
                "https://cdn-images.farfetch-contents.com/16/90/69/76/16906976_f09284f2-485e-43da-9a98-67cc80619a38_1000.jpg",
                "https://cdn-images.farfetch-contents.com/16/90/69/76/16906976_dca20e0b-e866-4f5e-a99a-9790e6428a5f_1000.jpg",
                "https://cdn-images.farfetch-contents.com/16/90/69/76/16906976_d3210330-0ac0-4e96-ae30-3d5b5d602440_1000.jpg"
              ],
            },
          ],
        },
      ],
      f: false
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
    }

  }
}
</script>
<template >
  <div class="item">
    <div class="firstSight">
      <div class="images">
        <div class="img" v-for="img of this.objectForEMarket[0].colors[0].images" :key="img.id">
          <img :src="img" @click="setImage()" alt="">
        </div>
      </div>
      <div class="mainImage">
        <img :src="this.objectForEMarket[0].mainImg" alt="">
        <span style="font-size: 21px; color: rgba(34, 34, 34, 1);">ВЫГЛЯДЕТЬ БЛИСТАТЕЛЬНО ПОМОЖЕТ</span>
      </div>
      <div class="informs">
        <div class="basic" style="margin-bottom: 10px;">
          <div class="left">
            <div class="title"><span>{{ this.objectForEMarket[0].title }}</span></div>
            <div class="price" style="margin: 10px 0px;"><span>{{ this.objectForEMarket[0].price }} <span
                  style="color: rgba(202, 175, 151, 1);">₽</span></span></div>
          </div>
          <div class="right">
            <svg width="21" style="cursor: pointer;" height="18" viewBox="0 0 21 18" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.5636 3.40126C9.9889 2.8743 7.78724 0.980795 5.83764 1.00015C3.83954 1.02024 0.755305 2.35329 1.01545 6.30329C1.24546 9.79257 10.4107 16.9676 10.4107 16.9676C10.468 17.0108 10.5276 17.0108 10.5893 16.9676C10.5893 16.9676 19.7545 9.79182 19.9846 6.30329C20.2447 2.35329 17.1605 1.02024 15.1616 1.00015C12.8975 0.977818 10.2931 3.53523 10.2931 3.53523L8.52505 5.37291"
                stroke="#D7BCA3" stroke-width="2" stroke-miterlimit="3.8637" />
            </svg>

          </div>
        </div>
        <div class="size">
          <span style="font-size: 15px; display: block; margin-bottom: 15px;">РАЗМЕР</span>
          <div class="sizes" style="cursor: pointer;">
            <div class="siz" v-for="size of this.objectForEMarket[0].sizes" :key="size.id">
              <span>{{ size }}</span>
            </div>
            <div class="nosiz" v-for="nosize of this.objectForEMarket[0].nosize" :key="nosize.id">
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
            <div class="color" v-for="color of this.objectForEMarket[0].colors[0].color" :key="color.id">
              <div class="col" v-if="color !== ''" :style="`border:7px solid ${color};`"></div>
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
            this.objectForEMarket[0].addInfo }}</span>
          <span style="font-size: 15px; color: rgba(36, 36, 36, 1);"><span style="font-weight: 600;">Состав:</span> {{
            this.objectForEMarket[0].ingridents }}</span>
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
    <div class="line"></div>
    <div class="otherItems">
      <div class="Items">
        <img :src="this.objectForEMarket[0].mainImg" alt="">
        <div class="titleoth">
          <span style="font-weight: 600;">/ {{ this.objectForEMarket[0].title }}</span>
          <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.5703 3.70142C10.9351 3.10858 8.50169 0.978395 6.34687 1.00017C4.13844 1.02277 0.729548 2.52245 1.01707 6.9662C1.2713 10.8916 11.4013 18.9636 11.4013 18.9636C11.4647 19.0121 11.5305 19.0121 11.5987 18.9636C11.5987 18.9636 21.7287 10.8908 21.9829 6.9662C22.2705 2.52245 18.8616 1.02277 16.6523 1.00017C14.1499 0.975046 11.2714 3.85214 11.2714 3.85214L9.31716 5.91953"
              stroke="#222222" stroke-miterlimit="3.8637" />
          </svg>

        </div>
        <div class="priceoth">
          <span>{{ this.objectForEMarket[0].price }} ₽</span>
          <span>Подчеркнет линию талии</span>
        </div>
      </div>
      <div class="Items">
        <img :src="this.objectForEMarket[1].mainImg" alt="">
        <div class="titleoth">
          <span style="font-weight: 600;">/ {{ this.objectForEMarket[1].title }}</span>
          <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.5703 3.70142C10.9351 3.10858 8.50169 0.978395 6.34687 1.00017C4.13844 1.02277 0.729548 2.52245 1.01707 6.9662C1.2713 10.8916 11.4013 18.9636 11.4013 18.9636C11.4647 19.0121 11.5305 19.0121 11.5987 18.9636C11.5987 18.9636 21.7287 10.8908 21.9829 6.9662C22.2705 2.52245 18.8616 1.02277 16.6523 1.00017C14.1499 0.975046 11.2714 3.85214 11.2714 3.85214L9.31716 5.91953"
              stroke="#222222" stroke-miterlimit="3.8637" />
          </svg>

        </div>
        <div class="priceoth">
          <span>{{ this.objectForEMarket[1].price }} ₽</span>
          <span>Подчеркнет линию талии</span>
        </div>
      </div>
      <div class="Items">
        <img :src="this.objectForEMarket[2].mainImg" alt="">
        <div class="titleoth">
          <span style="font-weight: 600;">/ {{ this.objectForEMarket[2].title }}</span>
          <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.5703 3.70142C10.9351 3.10858 8.50169 0.978395 6.34687 1.00017C4.13844 1.02277 0.729548 2.52245 1.01707 6.9662C1.2713 10.8916 11.4013 18.9636 11.4013 18.9636C11.4647 19.0121 11.5305 19.0121 11.5987 18.9636C11.5987 18.9636 21.7287 10.8908 21.9829 6.9662C22.2705 2.52245 18.8616 1.02277 16.6523 1.00017C14.1499 0.975046 11.2714 3.85214 11.2714 3.85214L9.31716 5.91953"
              stroke="#222222" stroke-miterlimit="3.8637" />
          </svg>

        </div>
        <div class="priceoth">
          <span>{{ this.objectForEMarket[2].price }} ₽</span>
          <span>Подчеркнет линию талии</span>
        </div>
      </div>
      <div class="Items">
        <img :src="this.objectForEMarket[3].mainImg" alt="">
        <div class="titleoth">
          <span style="font-weight: 600;">/ {{ this.objectForEMarket[3].title }}</span>
          <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.5703 3.70142C10.9351 3.10858 8.50169 0.978395 6.34687 1.00017C4.13844 1.02277 0.729548 2.52245 1.01707 6.9662C1.2713 10.8916 11.4013 18.9636 11.4013 18.9636C11.4647 19.0121 11.5305 19.0121 11.5987 18.9636C11.5987 18.9636 21.7287 10.8908 21.9829 6.9662C22.2705 2.52245 18.8616 1.02277 16.6523 1.00017C14.1499 0.975046 11.2714 3.85214 11.2714 3.85214L9.31716 5.91953"
              stroke="#222222" stroke-miterlimit="3.8637" />
          </svg>

        </div>
        <div class="priceoth">
          <span>{{ this.objectForEMarket[3].price }} ₽</span>
          <span>Подчеркнет линию талии</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

  align-items: center;
  justify-content: space-between;

}
.titleoth{
  font-size: 21px;
  display: flex;
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
