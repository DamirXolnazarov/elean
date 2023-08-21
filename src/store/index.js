import {createStore} from "vuex"
export default createStore({
  state:{
    products:[
        {
          idx: 0,
          title: "/ Жакет-смокинг с лацканами",
          new: false,
          isInCart: false,
          isLoved: false,
          category: 1,
          count: 9,
          mainImg:
            "./assets/165 5.png",
          addInfo: "Подчеркнет линию талии",
          structure: "Нейлон 100%",
          warning: ["Только сухая чистка"],
          price: "23 900 ₽",
          sizes: ["40", "41", "42", "43"],
          colors: [
            {
              color: "#222220",
              images: [
                "./assets/165 5.png",
                "./assets/165 5.png",
              ],
            },
          ],
        },
    
        {
          idx: 1,
          title: "/ Классический комплект с смокингом и жилетом",
          new: false,
          isInCart: false,
          isLoved: false,
          category: 1,
          count: 9,
          mainImg:
            "./assets/7142569 3.png",
          addInfo: "Мировая классика",
          structure: "Нейлон 100%",
          warning: ["Только сухая чистка"],
          price: "23 900 ₽",
          sizes: ["40", "41", "42", "43"],
          colors: [
            {
              color: "#222220",
              images: [
                "./assets/7142569 3.png",
                "./assets/7142569 3.png",
              ],
            },
          ],
        },
    
    
    
        {
          idx: 2,
          title: "Юбка",
          new: false,
          isInCart: false,
          isLoved: false,
          category: 2,
          count: 9,
          mainImg:
            "./assets/Elean-121 2.png",
          addInfo: "Черная классическая юбка, подчеркивает талию",
          structure: "Нейлон 100%",
          warning: ["Только сухая чистка"],
          price: "23 900 ₽",
          sizes: ["40", "41", "42", "43"],
          colors: [
            {
              color: "#222220",
              images: [
                "./assets/Elean-121 2.png",
                "./assets/Elean-121 2.png",
              ],
            },
          ],
        },
    
        {
          idx: 3,
          title: "Юбка",
          new: false,
          isInCart: false,
          isLoved: false,
          category: 2,
          count: 9,
          mainImg:
            "./assets/Elean-7751456 2.png",
          addInfo: "Красная пышная юбка",
          structure: "Нейлон 100%",
          warning: ["Только сухая чистка"],
          price: "23 900 ₽",
          sizes: ["40", "41", "42", "43"],
          colors: [
            {
              color: "#222220",
              images: [
                "./assets/Elean-7751456 2.png",
                "./assets/Elean-7751456 2.png",
              ],
            },
          ],
        },
    
        {
          idx: 4,
          title: "Платье",
          new: false,
          isInCart: false,
          isLoved: false,
          category: 2,
          count: 9,
          mainImg:
            "./assets/Elean25-sajt2 1.png",
          addInfo: "Синее облигающее платье ",
          structure: "Нейлон 100%",
          warning: ["Только сухая чистка"],
          price: "23 900 ₽",
          sizes: ["40", "41", "42", "43"],
          colors: [
            {
              color: "#222220",
              images: [
                "./assets/Elean25-sajt2 1.png",
                "./assets/Elean25-sajt2 1.png",
              ],
            },
          ],
        },
    
        {
          idx: 5,
          title: "Платье",
          new: false,
          isInCart: false,
          isLoved: false,
          category: 2,
          count: 9,
          mainImg:
            "./assets/Elean251254 2.png",
          addInfo: "Синее вечернее платье ",
          structure: "Нейлон 100%",
          warning: ["Только сухая чистка"],
          price: "23 900 ₽",
          sizes: ["40", "41", "42", "43"],
          colors: [
            {
              color: "#222220",
              images: [
                "./assets/Elean251254 2.png",
                "./assets/Elean251254 2.png",
              ],
            },
          ],
        },
    
        {
          idx: 6,
          title: "Брюки",
          new: false,
          isInCart: false,
          isLoved: false,
          category: 4,
          count: 9,
          mainImg:
            "./assets/Elean25456 6.png",
          addInfo: "Бежевые широкие брюки",
          structure: "Нейлон 100%",
          warning: ["Только сухая чистка"],
          price: "23 900 ₽",
          sizes: ["40", "41", "42", "43"],
          colors: [
            {
              color: "#222220",
              images: [
                "./assets/Elean25456 6.png",
                "./assets/Elean25456 6.png",
              ],
            },
          ],
        },
    
        {
          idx: 7,
          title: "Брюки",
          new: false,
          isInCart: false,
          isLoved: false,
          category: 4,
          count: 9,
          mainImg:
            "./assets/Elean257890 1.png",
          addInfo: "Бежевые классические брюки ",
          structure: "Нейлон 100%",
          warning: ["Только сухая чистка"],
          price: "23 900 ₽",
          sizes: ["40", "41", "42", "43"],
          colors: [
            {
              color: "#222220",
              images: [
                "./assets/Elean257890 1.png",
                "./assets/Elean257890 1.png",
              ],
            },
          ],
        },
        {
            idx: 8,
            title: "Брюки",
            new: false,
            isInCart: false,
            isLoved: false,
            category: 4,
            count: 9,
            mainImg:
              "./assets/Elean25sajt5 — копия 2.png",
            addInfo: "Бежевые классические брюки ",
            structure: "Нейлон 100%",
            warning: ["Только сухая чистка"],
            price: "23 900 ₽",
            sizes: ["40", "41", "42", "43"],
            colors: [
              {
                color: "#222220",
                images: [
                    "./assets/Elean25sajt5 — копия 2.png",
                    "./assets/Elean25sajt5 — копия 2.png",
                ],
              },
            ],
          },
          {
            idx: 9,
            title: "Брюки",
            new: false,
            isInCart: false,
            isLoved: false,
            category: 4,
            count: 9,
            mainImg:
              "./assets/Elean2723322_fs 6.png",
            addInfo: "Бежевые классические брюки ",
            structure: "Нейлон 100%",
            warning: ["Только сухая чистка"],
            price: "23 900 ₽",
            sizes: ["40", "41", "42", "43"],
            colors: [
              {
                color: "#222220",
                images: [
                    "./assets/Elean2723322_fs 6.png",
                    "./assets/Elean2723322_fs 6.png",
                ],
              },
            ],
          },
          {
            idx: 9,
            title: "Брюки",
            new: false,
            isInCart: false,
            isLoved: false,
            category: 4,
            count: 9,
            mainImg:
              "./assets/EleanBoutique20983 2.png",
            addInfo: "Бежевые классические брюки ",
            structure: "Нейлон 100%",
            warning: ["Только сухая чистка"],
            price: "23 900 ₽",
            sizes: ["40", "41", "42", "43"],
            colors: [
              {
                color: "#222220",
                images: [
                    "./assets/EleanBoutique20983 2.png",
                    "./assets/EleanBoutique20983 2.png",
                ],
              },
            ],
          },
          {
            idx: 10,
            title: "Брюки",
            new: false,
            isInCart: false,
            isLoved: false,
            category: 4,
            count: 9,
            mainImg:
              "./assets/elean1_58592 1.png",
            addInfo: "Бежевые классические брюки ",
            structure: "Нейлон 100%",
            warning: ["Только сухая чистка"],
            price: "23 900 ₽",
            sizes: ["40", "41", "42", "43"],
            colors: [
              {
                color: "#222220",
                images: [
                    "./assets/elean1_58592 1.png",
                    "./assets/elean1_58592 1.png",
                ],
              },
            ],
          },
          {
            idx: 11,
            title: "Брюки",
            new: false,
            isInCart: false,
            isLoved: false,
            category: 4,
            count: 9,
            mainImg:
              "./assets/elean1_58827 2.png",
            addInfo: "Бежевые классические брюки ",
            structure: "Нейлон 100%",
            warning: ["Только сухая чистка"],
            price: "23 900 ₽",
            sizes: ["40", "41", "42", "43"],
            colors: [
              {
                color: "#222220",
                images: [
                    "./assets/elean1_58827 2.png",
                    "./assets/elean1_58827 2.png",
                ],
              },
            ],
          },
          {
            idx: 12,
            title: "Брюки",
            new: false,
            isInCart: false,
            isLoved: false,
            category: 4,
            count: 9,
            mainImg:
              "./assets/elean1_58886 2.png",
            addInfo: "Бежевые классические брюки ",
            structure: "Нейлон 100%",
            warning: ["Только сухая чистка"],
            price: "23 900 ₽",
            sizes: ["40", "41", "42", "43"],
            colors: [
              {
                color: "#222220",
                images: [
                    "./assets/elean1_58886 2.png",
                    "./assets/elean1_58886 2.png",
                ],
              },
            ],
          },
          {
            idx: 13,
            title: "Брюки",
            new: false,
            isInCart: false,
            isLoved: false,
            category: 4,
            count: 9,
            mainImg:
              "./assets/elean47277-1 5.png",
            addInfo: "Бежевые классические брюки ",
            structure: "Нейлон 100%",
            warning: ["Только сухая чистка"],
            price: "23 900 ₽",
            sizes: ["40", "41", "42", "43"],
            colors: [
              {
                color: "#222220",
                images: [
                    "./assets/elean47277-1 5.png",
                    "./assets/elean47277-1 5.png",
                ],
              },
            ],
          },
          {
            idx: 14,
            title: "Брюки",
            new: false,
            isInCart: false,
            isLoved: false,
            category: 4,
            count: 9,
            mainImg:
              "./assets/elean47408 3.png",
            addInfo: "Бежевые классические брюки ",
            structure: "Нейлон 100%",
            warning: ["Только сухая чистка"],
            price: "23 900 ₽",
            sizes: ["40", "41", "42", "43"],
            colors: [
              {
                color: "#222220",
                images: [
                    "./assets/elean47408 3.png",
                    "./assets/elean47408 3.png",
                ],
              },
            ],
          },
          {
            idx: 15,
            title: "Брюки",
            new: false,
            isInCart: false,
            isLoved: false,
            category: 4,
            count: 9,
            mainImg:
              "./assets/elean47517-1 1.png",
            addInfo: "Бежевые классические брюки ",
            structure: "Нейлон 100%",
            warning: ["Только сухая чистка"],
            price: "23 900 ₽",
            sizes: ["40", "41", "42", "43"],
            colors: [
              {
                color: "#222220",
                images: [
                    "./assets/elean47517-1 1.png",
                    "./assets/elean47517-1 1.png",
                ],
              },
            ],
          },
          {
            idx: 16,
            title: "Брюки",
            new: false,
            isInCart: false,
            isLoved: false,
            category: 4,
            count: 9,
            mainImg:
              "./assets/elean47796 1.png",
            addInfo: "Бежевые классические брюки ",
            structure: "Нейлон 100%",
            warning: ["Только сухая чистка"],
            price: "23 900 ₽",
            sizes: ["40", "41", "42", "43"],
            colors: [
              {
                color: "#222220",
                images: [
                    "./assets/elean47796 1.png",
                    "./assets/elean47796 1.png",
                ],
              },
            ],
          },
          {
            idx: 16,
            title: "Брюки",
            new: false,
            isInCart: false,
            isLoved: false,
            category: 4,
            count: 9,
            mainImg:
              "./assets/elean563015 2.png",
            addInfo: "Бежевые классические брюки ",
            structure: "Нейлон 100%",
            warning: ["Только сухая чистка"],
            price: "23 900 ₽",
            sizes: ["40", "41", "42", "43"],
            colors: [
              {
                color: "#222220",
                images: [
                    "./assets/elean563015 2.png",
                    "./assets/elean563015 2.png",
                ],
              },
            ],
          },
          {
            idx: 17,
            title: "Брюки",
            new: false,
            isInCart: false,
            isLoved: false,
            category: 4,
            count: 9,
            mainImg:
              "./assets/oblozhka 7.png",
            addInfo: "Бежевые классические брюки ",
            structure: "Нейлон 100%",
            warning: ["Только сухая чистка"],
            price: "23 900 ₽",
            sizes: ["40", "41", "42", "43"],
            colors: [
              {
                color: "#222220",
                images: [
                    "./assets/oblozhka 7.png",
                    "./assets/oblozhka 7.png",
                ],
              },
            ],
          },
          {
            idx: 18,
            title: "Брюки",
            new: false,
            isInCart: false,
            isLoved: false,
            category: 4,
            count: 9,
            mainImg:
              "./assets/Elean251254 2.png",
            addInfo: "Бежевые классические брюки ",
            structure: "Нейлон 100%",
            warning: ["Только сухая чистка"],
            price: "23 900 ₽",
            sizes: ["40", "41", "42", "43"],
            colors: [
              {
                color: "#222220",
                images: [
                    "./assets/Elean251254 2.png",
                    "./assets/Elean251254 2.png",
                ],
              },
            ],
          },
    ],
    favouties: [],
  },
  getters: {
    products: (state) => state.products
  },
  mutations: {
    ADD_FAVOURITE_MUTATION(state, item) {
      state.favouties.push(item)
      console.log(state.favouties);
    }
  }, 
  actions: {
    ADD_FAVOURITE({ commit }, item) {
      commit("ADD_FAVOURITE_MUTATION", item)
    },
    REMOVE_FAVOURITE({ commit }, item) {
      commit("REMOVE_FAVOURITE_MUTATION", item)
    },
  }


})
