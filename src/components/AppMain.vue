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

        <!-- ../assets/mp4/Taxi Driver - Trailer (1).mp4 -->

        <div class="jumbotron position-relative">
          <video src="../assets/mp4/Taxi Driver - Trailer (1).mp4" preload="auto" loop muted autoplay class="w-100 h-100 object-fit-cover position-absolute top-0 start-0"></video>
          <div class="position-absolute bottom-0 start-0 p-3 text-white ms-5">
            <h1>TAXI DRIVER</h1>
            <p class="w-50">New York: Travis Bickle, veterano del Vietnam in congedo, soffre d'insonnia e decide di impegnare le proprie notti facendo il tassista. Completamente disadattato ma idealista alla ricerca di uno scopo, l'uomo si invaghirà di una ragazza e le chiederà di uscire. Quando le cose tra i due andranno storte, Travis, definitivamente disilluso riguardo la società, si chiuderà in se stesso. Comincerà così per il tassista una claustrofobica discesa nel baratro della solitudine, in bilico sui margini della sanità mentale.</p>
          </div>
        </div>
        <MovieList :movies="state.movies" ></MovieList>
       
    
    </main>
 
</template>

<style lang="scss" scoped>
    main{
        height: calc(100vh - 110px);
        background-color: black;
        overflow-y: auto;

        .jumbotron {
          height: 780px;
          
          video{
            object-fit: cover;
          }
        }
    }
</style>