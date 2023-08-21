import { createStore } from "vuex"
import axios from 'axios'
export default createStore({
  state: {
    favouties: [],
    user:[
      {
        name: 'Damir',
        password: 2008
      },
      {
        name: 'Timur',
        password: 7777
      },
      {
        name: 'Sardor',
        password: 1111
      },
    ]
  },
  getters: {
    products: (state) => state.products
  },
  mutations: {
    ADD_FAVOURITE_MUTATION(state, item) {
      state.favouties.push(item)
      window.localStorage.favorite = JSON.stringify(state.favouties)
    },
    REMOVE_FAVOURITE_MUTATION(state, item) {
      for(let i of state.favouties){
        if(i.idx == item.idx){
          state.favouties.splice( state.favouties.indexOf(i) , 1)
        }
      }
    },
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
