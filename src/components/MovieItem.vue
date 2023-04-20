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
 
   methods:{
    buildUrl(){
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
    numberToStars(){
        let stars = '<img src="./img/stella_piccola.png">';
        //let star = document.getElementById('starId') 
        let starstring = '';   
            for (let i = 0; i < Math.ceil(this.movie.vote_average / 2); i++) {
                    console.log(stars)
                    starstring += stars;      
                
                }
                return  starstring 
     },
     addNewClass(){
        let liElement = document.querySelector('listName')
        liElement.classList.add('active')        
     },
     removeClass(){
        let liElement = document.querySelector('listName')
        liElement.classList.remove('active')
     }
     

  
    }

    
   }
    


</script>

<template>
    
               
                    <li class="listName" v-if="movie.media_type === 'movie'" @mouseenter="classList.add('active')" @mouseleave="not_active">
                        
                        <img :src="buildUrl()" alt="POSTER">
                        <h2>{{ movie.title }}</h2>
                        <h3 v-show="movie.title !== movie.original_title">{{ movie.original_title }}</h3>
                        <FlagItem :movie="movie"></FlagItem>
                       

                        
                       
                        <p id="starId">Vote: <span v-html="numberToStars()"></span> ({{ movie.vote_count }})</p>
                    </li>
                    <li class="listName" @mouseenter="addNewClass()" @mouseleave="removeClass()" v-else>

                        <img :src="buildUrl()" alt="POSTER">
                        <h2 >{{ movie.name }}</h2>
                        <h3 v-show="movie.name !== movie.original_name">{{ movie.original_name }}</h3>
                        <FlagItem :movie="movie"></FlagItem>
                       
                        
                       
                        <p>Vote: <span v-html="numberToStars()"></span> ({{ movie.vote_count }})</p>
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

svg{
    height: 10px;
}

</style>