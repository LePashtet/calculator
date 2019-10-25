import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    input: 0,
    action: null,
    result: null
  },
  mutations: {
    setInput(state,val){
      state.input = val;
    },
    setAction(state,val){
      state.action = val;
    },
    setResult(state,val){
      state.result = val;
    },
  },
  getters:{
    INPUT: state => {
      return state.input
    },
    ACTION: state => {
      return state.action
    },
    RESULT: state => {
      return state.result
    },
  },
  actions: {
    compareInput({commit,getters,dispatch},val){
      if (getters.INPUT) {
        if (getters.INPUT === getters.RESULT) {
          commit('setInput', val);
        } else{
          commit('setInput', getters.INPUT + val )
        }
      } else{
        commit('setInput', val);
      }
    },
    changePlus({commit,getters,dispatch}){
      commit('setInput', -getters.INPUT);
    },
    action({commit,getters,dispatch},val){
      if (getters.RESULT && getters.INPUT) {
        let res = eval(`Math.${getters.ACTION}(${getters.RESULT},${getters.INPUT})`);
        commit('setResult',res);
        commit('setInput', res);
      } else{
        commit('setResult', getters.INPUT);
        commit('setInput', 0);
        commit('setAction', val);
      }

    },
    clear({commit}){
      commit('setInput', 0);
      commit('setAction', null);
      commit('setResult', null);

    },
    end({commit,getters,dispatch},val){
      dispatch('action')
      commit('setInput', getters.RESULT);
      commit('setAction', null);
      commit('setResult', null);
    },
    enter({commit,getters,dispatch},val){
      switch (val) {
        case 'AC':
          dispatch('clear');
          break;
        case '+':
          dispatch('action', 'sum');
          break;
        case '-':
          dispatch('action', 'minus');
          break;
        case '+/-':
          dispatch('changePlus');
          break;
        case '=':
          dispatch('end');
          break;
        case 'AC':
          dispatch('clear');
          break;

        default:
          dispatch('compareInput',val);

      }
    }
  },
  modules: {}
});
