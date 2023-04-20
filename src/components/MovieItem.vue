<script>
import CountryFlag from 'vue-country-flag-next'
export default{
    name: 'MovieItem',
    props:{
        movie: Object
    },
    components: {
        CountryFlag
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
        }
    },
    starsRating(){
        const numberStar = Math.ceil(this.movie.vote_average / 2)
        console.log(numberStar);
       
        return numberStar
        
    },
   }
    


</script>

<template>
    
               
                    <li v-if="movie.media_type === 'movie'">
                        
                        <img :src="buildUrl()" alt="POSTER">
                        <h2>{{ movie.title }}</h2>
                        <h3 v-show="movie.title !== movie.original_title">{{ movie.original_title }}</h3>
                        <p v-if="movie.original_language === 'en'"><country-flag country='gb' size='small'/></p>
                        <p v-if="movie.original_language === 'it'"><country-flag country='it' size='small'/></p>
                        <p v-if="movie.original_language === 'fr'"><country-flag country='fr' size='small'/></p>
                        <p v-if="movie.original_language === 'es'"><country-flag country='es' size='small'/></p>
                        <p v-if="movie.original_language === 'de'"><country-flag country='de' size='small'/></p>
                        <p v-if="movie.original_language === 'zh'"><country-flag country='zh' size='small'/></p>
                        <p v-if="movie.original_language === 'pt'"><country-flag country='pt' size='small'/></p>
                        <p v-if="movie.original_language === 'sv'"><country-flag country='sv' size='small'/></p>
                        <p v-if="movie.original_language === 'cn'"><country-flag country='cn' size='small'/></p>
                        <p v-if="movie.original_language === 'hi'"><country-flag country='hi' size='small'/></p>
                        <p v-if="movie.original_language === 'ta'"><country-flag country='ta' size='small'/></p>
                        <p v-if="movie.original_language === 'jp'"><country-flag contry='jp' size='small'/></p>
                        <p v-if="movie.original_language === 'kp'"><country-flag contry='kp' size='small'/></p>
                        <p v-if="movie.original_language === 'kr'"><country-flag contry='kr' size='small'/></p>

                        
                       
                        <p v-show="starsRating()">Vote: ({{ movie.vote_count }})</p>
                    </li>
                    <li v-else>

                        <img :src="buildUrl()" alt="POSTER">
                        <h2 >{{ movie.name }}</h2>
                        <h3 v-show="movie.name !== movie.original_name">{{ movie.original_name }}</h3>
                        <p v-if="movie.original_language === 'en'"><country-flag country='gb' size='small'/></p>
                        <p v-if="movie.original_language === 'it'"><country-flag country='it' size='small'/></p>
                        <p v-if="movie.original_language === 'fr'"><country-flag country='fr' size='small'/></p>
                        <p v-if="movie.original_language === 'es'"><country-flag country='es' size='small'/></p>
                        <p v-if="movie.original_language === 'de'"><country-flag country='de' size='small'/></p>
                        <p v-if="movie.original_language === 'zh'"><country-flag country='zh' size='small'/></p>
                        <p v-if="movie.original_language === 'pt'"><country-flag country='pt' size='small'/></p>
                        <p v-if="movie.original_language === 'sv'"><country-flag country='sv' size='small'/></p>
                        <p v-if="movie.original_language === 'cn'"><country-flag country='cn' size='small'/></p>
                        <p v-if="movie.original_language === 'hi'"><country-flag country='hi' size='small'/></p>
                        <p v-if="movie.original_language === 'ta'"><country-flag country='ta' size='small'/></p>
                        <p v-if="movie.original_language === 'jp'"><country-flag contry='jp' size='small'/></p>

                        
                       
                        <p>Vote: {{ movie.vote_average }} ({{ movie.vote_count }})</p>
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

</style>