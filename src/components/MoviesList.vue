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
    },
    methods: {
        performSearch(){
            console.log('ciao', this.state.searchText);

            const url = this.state.API_URL_MULTI + `&query=${this.state.searchText}`;
            console.log(url)
            this.state.fetchMovies(url)
        }
    }

}

</script>

<template>
       <main>
        <SearchBox class="mt-5 mx-5" @makeSearch="performSearch()"></SearchBox>

        <div class="container">
           
            <ul class="row row-cols-1 row-cols-md3 row-cols-lg-5 justify-content-center mt-4 gap-3">
                <MovieItem :movie="movie" v-for="movie in state.movies"></MovieItem>
            </ul>
            
            

           
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>