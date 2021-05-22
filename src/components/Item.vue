<template>
    <tr>
        <th scope="row">1</th>
        <td>{{item.title}}</td>
        <td>{{item.cantidad}}</td>
        <td>
            <button class="btn btn-info btn-sm" @click="aumentar(item.id)">
                +
            </button>
            <button class="btn btn-danger btn-sm" @click="disminuir(item.id)">
                -
            </button>
        </td>
        <td>{{item.precio * item.cantidad}}</td>
    </tr>   
</template>

<script>

import {useStore} from 'vuex'

export default {
    props: ['item'],
    
    setup(){
        const state = useStore()
        const aumentar  = (id) => {state.commit('aumentar', id)}
        const disminuir = (id) => {state.commit('disminuir', id)}

        return{aumentar, disminuir}
    }

}



</script>
