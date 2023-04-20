<script>

import CountryFlag from 'vue-country-flag-next'
export default{
    name: 'MovieItem',
    props:{
        movie: Object
    },
    components: {
        CountryFlag,
       
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
        if (this.movie.vote_average === 3) {
            const star = document.getElementById('starId')
            return star.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg> `
        }
        else{
            return this.movie.poster_path
        }
    }
    }

    
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

                        
                       
                        <p id="starId">Vote: {{ movie.vote_average }}  ({{ movie.vote_count }})</p>
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