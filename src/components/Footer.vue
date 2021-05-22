<template>
    <th scope="row" colspan="2">Total Productos</th>     
    <td>{{totalCantidad}}</td>
    <td>
        <button class="btn btn-danger btn-sm" id="vaciar-carrito" @click="vaciarCarrito">
            vaciar todo
        </button>
    </td>
    <td class="font-weight-bold">$ 
        <span>{{totalPrecio}}</span> 
    </td>
</template>

<script>

import {computed} from 'vue'
import {useStore} from 'vuex'

export default {
    setup(){
        const store = useStore()

        const totalCantidad = computed(()=>store.getters.totalCantidad)
        const totalPrecio   = computed(()=>store.getters.totalPrecio)

        const vaciarCarrito = () => {store.commit('clearCarrito')}
        return{totalCantidad, totalPrecio, vaciarCarrito}
    }
}
</script>
