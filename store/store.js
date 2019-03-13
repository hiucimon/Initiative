
import Vue from 'vue'
import Vuex from 'vuex'

import counter from './counter'
import abilityscores from './abilityscores'

export const store = new Vuex.Store({

  state: {},
  getters : {},
  mutations: {},
  actions:{},

  modules : {
    counter,
    abilityscores
  }
})
