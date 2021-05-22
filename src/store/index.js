import { createStore } from 'vuex'

export default createStore({
  state: {
    productos: [],
    carrito: {}
  },

  // Solo en Mutations se modifican los valores del state
  mutations: {
    setProducto(state, payload){
      state.productos = payload
    },
    setCarrito(state,payload){
      state.carrito[payload.id] = payload
    },
    clearCarrito(state){
      state.carrito = {}
    },
    aumentar(state,id){
     // Al tener el carrito definido como objeto, puedo ir directamente a ese item con el [ID], si se usa un array 
     // hay que usar un find para encontrar la posicion del id
      state.carrito[id].cantidad = state.carrito[id].cantidad + 1 
    },
    disminuir(state,id){
      // Al tener el carrito definido como objeto, puedo ir directamente a ese item con el [ID], si se usa un array 
      // hay que usar un find para encontrar la posicion del id
       state.carrito[id].cantidad = state.carrito[id].cantidad - 1
       if(state.carrito[id].cantidad == 0){
         delete state.carrito[id]
       } 
     },
    
  },

  actions: {
    async fetchData({commit}){
    //el commit se manda como parametro, para despues llamar a la mutations  
      try{
        const res = await fetch('api.json')
        const data = await res.json()
        commit('setProducto', data)
      }catch(error){
        console.log(error);
      }

    },
    //Le pasamos el state para poder acceder al carrito actual
    agregarAlCarro({commit, state}, producto){
      /*Buscamos si el producto ya existe en el carrito, para definir si se agrega 
      / un nuevo item o se incremeta la cantidad */

      state.carrito.hasOwnProperty(producto.id)
       ? producto.cantidad = state.carrito.[producto.id].cantidad + 1
       : producto.cantidad = 1

      commit('setCarrito', producto) 
    }



  },

  getters:{
    totalCantidad(state){
      // Object.values para tener las funcionalidades de los array dentro de un objeto
      // return Object.values(state).reduce((acc, {cantidad}) => acc + cantidad, 0)
      return Object.values(state.carrito).reduce((acc, {cantidad}) => acc + cantidad, 0)
    },
    totalPrecio(state){
      return Object.values(state.carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)
    }

  },

  modules: {

  }
})
