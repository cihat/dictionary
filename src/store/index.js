import { createStore } from 'vuex'
import axios from 'axios'

const mutations = {
  SET_WORD_DATA: 'setWordData',
  SET_INPUT_WORD: 'setInputWord'
}

const actions = {
  FETCH_WORD: 'fetchWord'
}

export default createStore({
  state: {
    inputWord: '',
    wordData: {}
  },
  mutations: {
    [mutations.SET_WORD_DATA](state, payload) {
      state.wordData = { ...payload }
      console.log('state.wordData', state.wordData)
    },
    [mutations.SET_INPUT_WORD](state, payload) {
      state.inputWord = payload
    }
  },
  actions: {
    [actions.FETCH_WORD]({ commit }, wordInput) {
      const options = {
        url: `https://owlbot.info/api/v4/dictionary/${wordInput}`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: `Token ${process.env.VUE_APP_API_KEY}`
        }
      }
      axios(options).then(res => commit(mutations.SET_WORD_DATA, res.data))
    }
  },
  modules: {}
})
