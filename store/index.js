import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// const store = () => new Vuex.Store({
//   state: {
//     token: '123456789',
//     username: '',
//   },
//   mutations: {
//     addToken(state, token){
//       state.token = token;
//       sessionStorage.token = token
//     },
//     addUsername(state, username){
//       state.username = username;
//       sessionStorage.token = username;
//     },
//     removeToken(state){
//       state.token = '';
//       state.username = '';
//       sessionStorage.removeItem('token')
//     }
//   }
// })
// export default store

export const state = () => ({
  token: '',
  nickname: '',
});
export const mutations = {
  addToken (state, token) {
    state.token = token;
    sessionStorage.token = token
  },
  addNickname (state, nickname) {
    state.nickname = nickname;
  },
  removeToken(state){
    state.token = '';
    state.nickname = '';
    sessionStorage.removeItem('token')
  }
}
