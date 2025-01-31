import { createStore } from 'vuex'

export default createStore({
  state: {
    // store data
    products:[]
  },
  // use to change the state
  mutations: {
    setProducts(state,payload){
      state.products = payload
    }
  },
  // all your fetch/asynchronus code goes
  actions: {
    async getProducts(context,payload){
      let {products} = await(await fetch('http://localhost:3000/products')).json()
      console.log(products);
      context.commit('setProducts',products)
    }
  },
  modules: {
  }
})
