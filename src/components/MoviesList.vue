<script>
import MovieItem from './MovieItem.vue'
import SearchBox from './SearchBox.vue'
import {state} from '../state.js'

export default{
    name: 'MoviesList',
    components: {
        MovieItem,
        SearchBox
    },
    data(){
        return{
            state
        }
    }
   

}

</script>

<template>
       
       
        <div class="container">
           
            <ul class="row row-cols-1 row-cols-md3 row-cols-lg-8 justify-content-center pt-5 gap-3">
                <MovieItem :movie="movie" v-for="movie in state.movies"></MovieItem>
            </ul>
            
            

           
        </div>
    
</template>

<style lang="scss" scoped>
    ul{
        color: white;
    }
  
</style>