import { createStore } from "vuex"
export default createStore({
  state: {
    products: [
      {
        idx: 0,
        title: "/ Жакет-смокинг с лацканами",
        new: false,
        isInCart: false,
        isLoved: false,
        category: 1,
        count: 9,
        mainImg:
          "/src/assets/165_5.png",
        addInfo: "Подчеркнет линию талии",
        structure: "Нейлон 100%",
        warning: ["Только сухая чистка"],
        price: "23 900 ₽",
        sizes: ["40", "41", "42", "43"],
        colors: [
          {
            color: "#222220",
            images: [
              "/src/assets/165_5.png",
              "/src/assets/165_5.png",
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
          "/src/assets/7142569_3.png",
        addInfo: "Мировая классика",
        structure: "Нейлон 100%",
        warning: ["Только сухая чистка"],
        price: "23 900 ₽",
        sizes: ["40", "41", "42", "43"],
        colors: [
          {
            color: "#222220",
            images: [
              "/src/assets/7142569_3.png",
              "/src/assets/7142569_3.png",
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
          "/src/assets/Elean-121_2.png",
        addInfo: "Черная классическая юбка, подчеркивает талию",
        structure: "Нейлон 100%",
        warning: ["Только сухая чистка"],
        price: "23 900 ₽",
        sizes: ["40", "41", "42", "43"],
        colors: [
          {
            color: "#222220",
            images: [
              "/src/assets/Elean-121_2.png",
              "/src/assets/Elean-121_2.png",
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
          "/src/assets/Elean-7751456 2.png",
        addInfo: "Красная пышная юбка",
        structure: "Нейлон 100%",
        warning: ["Только сухая чистка"],
        price: "23 900 ₽",
        sizes: ["40", "41", "42", "43"],
        colors: [
          {
            color: "#222220",
            images: [
              "/src/assets/Elean-7751456 2.png",
              "/src/assets/Elean-7751456 2.png",
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
          "/src/assets/Elean25-sajt2 1.png",
        addInfo: "Синее облигающее платье ",
        structure: "Нейлон 100%",
        warning: ["Только сухая чистка"],
        price: "23 900 ₽",
        sizes: ["40", "41", "42", "43"],
        colors: [
          {
            color: "#222220",
            images: [
              "/src/assets/Elean25-sajt2 1.png",
              "/src/assets/Elean25-sajt2 1.png",
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
          "/src/assets/Elean251254 2.png",
        addInfo: "Синее вечернее платье ",
        structure: "Нейлон 100%",
        warning: ["Только сухая чистка"],
        price: "23 900 ₽",
        sizes: ["40", "41", "42", "43"],
        colors: [
          {
            color: "#222220",
            images: [
              "/src/assets/Elean251254 2.png",
              "/src/assets/Elean251254 2.png",
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
          "/src/assets/Elean25456 6.png",
        addInfo: "Бежевые широкие брюки",
        structure: "Нейлон 100%",
        warning: ["Только сухая чистка"],
        price: "23 900 ₽",
        sizes: ["40", "41", "42", "43"],
        colors: [
          {
            color: "#222220",
            images: [
              "/src/assets/Elean25456 6.png",
              "/src/assets/Elean25456 6.png",
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
          "/src/assets/Elean257890 1.png",
        addInfo: "Бежевые классические брюки ",
        structure: "Нейлон 100%",
        warning: ["Только сухая чистка"],
        price: "23 900 ₽",
        sizes: ["40", "41", "42", "43"],
        colors: [
          {
            color: "#222220",
            images: [
              "/src/assets/Elean257890 1.png",
              "/src/assets/Elean257890 1.png",
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
          "/src/assets/Elean25sajt5 — копия 2.png",
        addInfo: "Бежевые классические брюки ",
        structure: "Нейлон 100%",
        warning: ["Только сухая чистка"],
        price: "23 900 ₽",
        sizes: ["40", "41", "42", "43"],
        colors: [
          {
            color: "#222220",
            images: [
              "/src/assets/Elean25sajt5 — копия 2.png",
              "/src/assets/Elean25sajt5 — копия 2.png",
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
          "/src/assets/Elean2723322_fs 6.png",
        addInfo: "Бежевые классические брюки ",
        structure: "Нейлон 100%",
        warning: ["Только сухая чистка"],
        price: "23 900 ₽",
        sizes: ["40", "41", "42", "43"],
        colors: [
          {
            color: "#222220",
            images: [
              "/src/assets/Elean2723322_fs 6.png",
              "/src/assets/Elean2723322_fs 6.png",
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
          "/src/assets/EleanBoutique20983 2.png",
        addInfo: "Бежевые классические брюки ",
        structure: "Нейлон 100%",
        warning: ["Только сухая чистка"],
        price: "23 900 ₽",
        sizes: ["40", "41", "42", "43"],
        colors: [
          {
            color: "#222220",
            images: [
              "/src/assets/EleanBoutique20983 2.png",
              "/src/assets/EleanBoutique20983 2.png",
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
          "/src/assets/elean1_58592 1.png",
        addInfo: "Бежевые классические брюки ",
        structure: "Нейлон 100%",
        warning: ["Только сухая чистка"],
        price: "23 900 ₽",
        sizes: ["40", "41", "42", "43"],
        colors: [
          {
            color: "#222220",
            images: [
              "/src/assets/elean1_58592 1.png",
              "/src/assets/elean1_58592 1.png",
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
          "/src/assets/elean1_58827 2.png",
        addInfo: "Бежевые классические брюки ",
        structure: "Нейлон 100%",
        warning: ["Только сухая чистка"],
        price: "23 900 ₽",
        sizes: ["40", "41", "42", "43"],
        colors: [
          {
            color: "#222220",
            images: [
              "/src/assets/elean1_58827 2.png",
              "/src/assets/elean1_58827 2.png",
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
          "/src/assets/elean1_58886 2.png",
        addInfo: "Бежевые классические брюки ",
        structure: "Нейлон 100%",
        warning: ["Только сухая чистка"],
        price: "23 900 ₽",
        sizes: ["40", "41", "42", "43"],
        colors: [
          {
            color: "#222220",
            images: [
              "/src/assets/elean1_58886 2.png",
              "/src/assets/elean1_58886 2.png",
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
          "/src/assets/elean47277-1 5.png",
        addInfo: "Бежевые классические брюки ",
        structure: "Нейлон 100%",
        warning: ["Только сухая чистка"],
        price: "23 900 ₽",
        sizes: ["40", "41", "42", "43"],
        colors: [
          {
            color: "#222220",
            images: [
              "/src/assets/elean47277-1 5.png",
              "/src/assets/elean47277-1 5.png",
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
          "/src/assets/elean47408 3.png",
        addInfo: "Бежевые классические брюки ",
        structure: "Нейлон 100%",
        warning: ["Только сухая чистка"],
        price: "23 900 ₽",
        sizes: ["40", "41", "42", "43"],
        colors: [
          {
            color: "#222220",
            images: [
              "/src/assets/elean47408 3.png",
              "/src/assets/elean47408 3.png",
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
          "/src/assets/elean47517-1 1.png",
        addInfo: "Бежевые классические брюки ",
        structure: "Нейлон 100%",
        warning: ["Только сухая чистка"],
        price: "23 900 ₽",
        sizes: ["40", "41", "42", "43"],
        colors: [
          {
            color: "#222220",
            images: [
              "/src/assets/elean47517-1 1.png",
              "/src/assets/elean47517-1 1.png",
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
          "/src/assets/elean47796 1.png",
        addInfo: "Бежевые классические брюки ",
        structure: "Нейлон 100%",
        warning: ["Только сухая чистка"],
        price: "23 900 ₽",
        sizes: ["40", "41", "42", "43"],
        colors: [
          {
            color: "#222220",
            images: [
              "/src/assets/elean47796 1.png",
              "/src/assets/elean47796 1.png",
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
          "/src/assets/elean563015 2.png",
        addInfo: "Бежевые классические брюки ",
        structure: "Нейлон 100%",
        warning: ["Только сухая чистка"],
        price: "23 900 ₽",
        sizes: ["40", "41", "42", "43"],
        colors: [
          {
            color: "#222220",
            images: [
              "/src/assets/elean563015 2.png",
              "/src/assets/elean563015 2.png",
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
          "/src/assets/oblozhka 7.png",
        addInfo: "Бежевые классические брюки ",
        structure: "Нейлон 100%",
        warning: ["Только сухая чистка"],
        price: "23 900 ₽",
        sizes: ["40", "41", "42", "43"],
        colors: [
          {
            color: "#222220",
            images: [
              "/src/assets/oblozhka 7.png",
              "/src/assets/oblozhka 7.png",
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
          "/src/assets/Elean251254 2.png",
        addInfo: "Бежевые классические брюки ",
        structure: "Нейлон 100%",
        warning: ["Только сухая чистка"],
        price: "23 900 ₽",
        sizes: ["40", "41", "42", "43"],
        colors: [
          {
            color: "#222220",
            images: [
              "/src/assets/Elean251254 2.png",
              "/src/assets/Elean251254 2.png",
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
    }
  }


})
