<script>


import FlagItem from './FlagItem.vue'
export default{
    name: 'MovieItem',
    props:{
        movie: Object
    },
    components: {
        
        FlagItem
       
    },
    data(){
        return{
            isHover: false,
            stars: './img/stella_piccola.png"'
            
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

     }
  
    }

    
   }
    


</script>

<template>
    
               
                    <li class="listName" v-if="movie.media_type === 'movie'" @mouseover="isHover = true" @mouseleave="isHover = false">
                        
                        <img :src="buildUrlImg()" :class="{ 'hidden': isHover }" alt="POSTER">
                        <h2 :class="{ 'hidden': !isHover }">{{ movie.title }}</h2>
                        <h3 :class="{ 'hidden': !isHover }" v-show="movie.title !== movie.original_title">{{ movie.original_title }}</h3>
                        <FlagItem :class="{ 'hidden': !isHover }" :movie="movie" :is-hover="isHover"/>
                        <p  :class="{ 'hidden': !isHover }" id="starId">Vote: <img :src="stars" v-for="stars in ceilNumber()">({{ movie.vote_count }})</p>
                    </li>

                    <li class="listName" @mouseenter="addNewClass()" @mouseleave="removeClass()" v-else>

                        <img :src="buildUrlImg()" :class="{ 'hidden': isHover }" alt="POSTER" @mouseover="isHover = true" @mouseleave="isHover = false" >
                        <h2 :class="{ 'hidden': !isHover }">{{ movie.name }}</h2>
                        <h3 :class="{ 'hidden': !isHover }" v-show="movie.name !== movie.original_name">{{ movie.original_name }}</h3>
                        <FlagItem :class="{ 'hidden': !isHover }" :movie="movie" :is-hover="isHover"/>
                        <p :class="{ 'hidden': !isHover }">Vote: <img :src="stars" v-for="stars in ceilNumber()">({{ movie.vote_count }})</p>
                    </li>
               
            
</template>

<style lang="scss" scoped>
.hidden{
    display: none;
}

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

svg{
    height: 10px;
}

</style>