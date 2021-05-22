<template>

  <div class="container">

    <h1>Carrito</h1>
    <hr>
    <Carrito />
    <div class="row">
        <!-- 
        en el v-for
        of: sirve para objetos y arrays
        in: funciona para array pero esta hecho para objetos  
        productos es un array, por eso usamos of
        :prod = "producto" Variable que va a llegar al hijo. ":prod" 
        es el nombre con que se usa en el hijo
        -->
      <Card  
        v-for = "producto of productos" 
        :key  = "producto.id"
        :producto = "producto" Variable que va a llegar al hijo
      />
    </div>  

  </div>
   
</template>



<script>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue' // en Vue 3 hay q importar los ciclos de vida

import Card from './components/Card' 
import Carrito from './components/Carrito' 

export default {
  name: 'App',
  components: {
    Card, Carrito
  },
  setup(){ // Se ejecuta en el create por defecto

    // Para trabajar con el store mas facil
    const store = useStore() 
    
    onMounted( () => {
      // Para lanzar una accion del vuex, parecido al commit
      store.dispatch('fetchData')
    })

    //Guardamos la propiedad computada en una variable, x Vue3
    const productos = computed(() => store.state.productos) 
      //La funcion flecha como es corta retorna lo q tiene la linea

    // const carrito = computed( () => store.state.carrito)
    
    return{productos} 
  }

}
</script>

