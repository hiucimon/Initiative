

import Vuex from 'vuex'

const state = {
  attr:{
      str: 10,
      dex: 11,
      con: 12,
      int: 13,
      wis: 14,
      chr: 15
  }
}
const    mutations={
      setStr(state,val) {
        state.str=val
      },
      setDex(state,val) {
        state.dex=val
      },
      setCon(state,val) {
        state.con=val
      },
      setInt(state,val) {
        state.int=val
      },
      setWis(state,val) {
        state.wis=val
      },
      setChr(state,val) {
        state.chr=val
      }
    }
const    actions={
      setStr(state,val) {
        context.commit('setStr',val)
      },
      setDex(state,val) {
        context.commit('setDex',val)
      },
      setCon(state,val) {
        context.commit('setCon',val)
      },
      setInt(state,val) {
        context.commit('setInt',val)
      },
      setWis(state,val) {
        context.commit('setWis',val)
      },
      setChr(state,val) {
        context.commit('setChr',val)
      }
    }
const    getters={
      getStr: state=>  {
        return state.attr.str
      },
      getDex: state=>  {
        return state.attr.dex
      },
      getCon: state=>  {
        return state.attr.con
      },
      getInt: state=>  {
        return state.attr.int
      },
      getWis: state=>  {
        return state.attr.wis
      },
      getChr: state=>  {
        return state.attr.chr
      },
    }




export default {
  state,mutations,getters,actions
}
