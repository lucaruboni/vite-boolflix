<script>
import {state} from '../state.js'
import SearchBox from './SearchBox.vue'
export default{
    name: 'AppHeader',
    components: {
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
    <header>
        <nav class="navbar bg-body-tertiary">
          <div class="d-flex w-100 justify-content-between">
            
                <div class="left_side d-flex gap-4">
                    <a class="navbar-brand"><img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt=""></a>
                    <a class=" align-self-center" href="">HOME</a>
                    <a class=" align-self-center" href="">FILM</a>
                    <a class=" align-self-center" href="">SERIE TV</a>
                </div>            

               <SearchBox class="mx-5 mt-3 align-self-center" @makeSearch="performSearch()"></SearchBox>
        
          </div>
        </nav>
</header>
</template>

<style lang="scss" scoped>
    header{

        background-color: black;

        nav{
            padding: 0;
        }

        a{
            text-decoration: none;
            font-weight: 500;
            color: white;
        }

        img{
            height: 100px;
        }
    }
</style>