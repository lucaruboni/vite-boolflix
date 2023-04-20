<script>
import MovieList from './MoviesList.vue'

import { state } from '../state.js';

export default{
    name: 'AppMain',
    components: {
        MovieList
    },

    data(){
        return{
            state
        }
    }
 
}
</script>

<template>
    <main>
        <MovieList :movies="state.movies"></MovieList>

    </main>
 
</template>

<style lang="scss" scoped>
    main{
        height: calc(100vh - 110px);
        background-color: black;
        overflow-y: auto;
    }
</style>