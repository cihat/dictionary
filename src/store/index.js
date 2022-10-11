import { createStore } from 'vuex'
import axios from 'axios'
import dummyWords from '@/data/words.json'
import { loadLocalStorage, saveLocalStorage } from '../utils/localStorage'

saveLocalStorage('words', dummyWords)

axios.defaults.baseURL = 'https://owlbot.info/api/v4/dictionary'
axios.defaults.headers.common[
  'Authorization'
] = `Token ${process.env.VUE_APP_API_KEY}`
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true

const mutations = {
  SET_WORD_DATA: 'setWordData',
  SET_INPUT_WORD: 'setInputWord',
  SET_ACTIVE_WORD: 'setActiveWord',
}

const actions = {
  FETCH_WORD: 'fetchWord'
}

export default createStore({
  state: {
    inputWord: '',
    wordData: {},
    dummyWords: loadLocalStorage('words') || dummyWords || {},
    activeWord: null
  },
  mutations: {
    [mutations.SET_WORD_DATA](state, payload) {
      state.wordData = { ...payload }
      console.log('state.wordData', state.wordData)
    },
    [mutations.SET_INPUT_WORD](state, payload) {
      state.inputWord = payload
    },
    [mutations.SET_ACTIVE_WORD](state, payload) {
      console.log('payload', payload)
      state.activeWord = payload
    }
  },
  actions: {
    [actions.FETCH_WORD]({ commit }, wordInput) {
      // axios
      //   .get(`/${wordInput}`)
      //   .then(res => commit(mutations.SET_WORD_DATA, res.data))
      fetch(`https://owlbot.info/api/v4/dictionary/${wordInput}`, {
        headers: {
          Authorization: `Token ${process.env.VUE_APP_API_KEY}`
        }
      }).then(res => commit(mutations.SET_WORD_DATA, res.data))
    }
  },
  modules: {}
})
