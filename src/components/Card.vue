<template>
    <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3">
        <div class="card">
            <img :src="producto.thumbnailUrl" :alt="`imagen-${producto.title}`" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{producto.title}}</h5>
                <p class="card-text">$ {{producto.precio}}<span></span></p>
                <button class="btn btn-dark" @click="agregar(producto)">Comprar</button>
            </div>
        </div>
    </div>

</template>

<script>

import{ useStore } from 'vuex' 
export default {
    props: ['producto'],
    setup(){
        const store = useStore()
        // En la funcion de flecha, como se recibe solo 1 parametro (producto), 
        // se pueden omitir los parentesis const agregar = producto => { }

        const agregar = (producto) => {
            // usamos dispatch para disparar una accion, le pasamos el nombre de la accion 
            // y el parametro
            store.dispatch('agregarAlCarro', producto)
        }
     
     // Para poder usar el agregar en el evento click del boton, tengo q retornarlas
        return {agregar}
    }

}

</script>
