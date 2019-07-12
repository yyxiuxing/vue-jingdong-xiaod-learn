import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store= new Vuex.Store({
  state: {
    token:'',
    cararr:JSON.parse(localStorage.getItem('cararr'))||[]
  },
  mutations: {
    settoken(state,token){
      state.token=token
    },
    //添加商品到购物车
    tocar(state,tag){
      let good=state.cararr.find(v=>v.title==tag.label)
      if(good){
        good.carCount+=1;
      }else{
        state.cararr.push({title:tag.label,carCount:1})
      }
    },
    //购物车加
    caradd(state,index){
      state.cararr[index].carCount++
    },
    //购物车减
    removecar(state,index){
      if(state.cararr[index].carCount>1){
        state.cararr[index].carCount--
      }else{
        if(window.confirm('确定从购物车移除商品吗')){
          state.cararr.splice(index,1)
        }
      }
    },
    //清空购物车
    clearcar(state){
      state.cararr=[]
    }
  },
  actions: {

  },
  getters:{
    countsum:state=>{
      let num=0;
      state.cararr.forEach(v=>{
        num+=v.carCount
      })
      return num
    }
  }
})
//监听mutations,数据持久化
store.subscribe((mutations,state)=>{
  localStorage.setItem('cararr',JSON.stringify(state.cararr))
})

export default store
