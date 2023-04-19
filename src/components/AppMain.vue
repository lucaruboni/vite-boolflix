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
 <MovieList :movies="state.movies"></MovieList>
</template>

<style lang="scss" scoped>

</style>