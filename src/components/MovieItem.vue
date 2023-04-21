<script>


import FlagItem from './FlagItem.vue'
export default{
    name: 'MovieItem',
    props:{
        movie: Object,
        credits: Object
    },
    components: {
        
        FlagItem
       
    },
    data(){
        return{
           /*  isHover: false, */
            stars: 'public/stella_piccola.png'
            
        }
    },
 
   methods:{
    buildUrlImg(){
        const baseUrl = "https://image.tmdb.org/t/p/w342";
        const sampleImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-A62O_4UYnCwM3gaxn5N23PKkQBC0ZehpQ&usqp=CAU';
        if (this.movie.poster_path === undefined || this.movie.poster_path === null) {
            return sampleImg
        }
        else
            return baseUrl + this.movie.poster_path
        },
        starsRating(vote){
        let numberStar = Math.ceil(vote / 2)
        console.log(numberStar);
        
       
        return numberStar
        
    },

    ceilNumber(){
       let roundedNumber = Math.ceil(this.movie.vote_average / 2)
       console.log(roundedNumber)
       return roundedNumber
    },
  
     
     searchCarachters(){
       const API_URL_CREDITS = this.state.API_CREDITS_FIRST + `${this.state.movie.id}` + this.state.API_CREDITS_FINAL
       return this.state.fetchCredits(API_URL_CREDITS)
     }
    
    }

    
   }
    


</script>

<template>
    
               
                    <li class="listName" v-if="movie.media_type === 'movie'">
                        
                        <div class="main_card">
                            <img :src="buildUrlImg()" alt="POSTER">
                        </div>
                        
                        
                        <div class="hover_card">
                            <h2>{{ movie.title }}</h2>
                            <h3 v-show="movie.title !== movie.original_title">{{ movie.original_title }}</h3>
                            <FlagItem :movie="movie"/>
                            <p>Vote: <img id="starId" src="public/stella_piccola.png" v-for="stars in ceilNumber()">({{ movie.vote_count }})</p>
                            <p v-for="actor in credits">
                                {{ actor.name }}
                            </p>
                        </div>

                    </li>

                    <li class="listName" v-if="movie.media_type === 'tv'">
                        <div class="main_card">
                            <img :src="buildUrlImg()" alt="POSTER">
                        </div>
                        
                        
                        <div class="hover_card">
                            <h2>{{ movie.name }}</h2>
                            <h3 v-show="movie.name !== movie.original_name">{{ movie.original_name }}</h3>
                            <FlagItem :movie="movie"/>
                            <p >Vote: <img id="starId" src="public/stella_piccola.png" v-for="stars in ceilNumber()">({{ movie.vote_count }})</p>
                        </div>

                    </li>

               
            
</template>

<style lang="scss" scoped>

ul{
    padding: 0;
    
}

li{
    list-style-type: none;
    padding-left: 0;
    padding-right: 0;
    width: 260px;

    img{
        width: 100%;
    }
}


.main_card{
    display: inline-block;
}


.hover_card{
    display: none;
}

.listName:hover .main_card{
    display: none;
}

.listName:hover .hover_card{
    display: inline-block;
}


#starId{
    height: 15px;
    width: 15px;
    aspect-ratio: 1 / 1;
}
</style>