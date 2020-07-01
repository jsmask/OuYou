import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const TYPE = {
  SET_TITLE:"SET_TITLE"
}


export default new Vuex.Store({
  state: {
    title:""
  },
  mutations: {
    [TYPE.SET_TITLE](state,title){
      if (title) state.title = title;
      else state.title = "";
    }
  },
  actions: {
    setTitle: ({ commit }, title) => {
      new Promise(resolve => {
        commit(TYPE.SET_TITLE, title);
        resolve()
      })
    }
  }
})
