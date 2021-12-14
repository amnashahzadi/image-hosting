import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    users: [],

    loginUser: [],

  },

  mutations: {

    SET_USER(state, users) {

      state.users = users;

    },

    LOGIN_USER(state, loginUser) {

      state.loginUser = loginUser;

    },

  },

  actions: {

    loadUser({ commit }, payload) {

      console.log(commit);

      console.log(payload);

      axios.post("http://192.168.88.33:8000/api/register", payload).then((response) => {
        let data = response.data;

        console.log(response);

        commit('SET_USER', data)

      })

        .catch(error => {

          console.log(error.response)

        })

    },

    loginUser({ commit }, payload) {

      console.log(commit);

      console.log (payload);

      axios.post("http://192.168.88.33:8000/api/login",payload).then((response) => {

            let data = response.data;

            console.log(response);

            commit('LOGIN_USER', data)

          })

          .catch(error => {

            console.log(error)

          })

    }

  
  

  },
  modules: {
  }
})
