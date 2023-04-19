import {reactive} from 'vue';
import axios from 'axios';
export const state = reactive({
    loading: true,
    movies: null,
    tv: null,
    searchText: '',
    API_URL_MOVIES: 'https://api.themoviedb.org/3/search/movie?api_key=34decb342bf0ffa2d0722e63ac34cd33&language=en-US&page=1&include_adult=false',
    API_URL_TV: 'https://api.themoviedb.org/3/search/tv?api_key=34decb342bf0ffa2d0722e63ac34cd33&language=en-US&page=1&include_adult=false',
    API_URL_MULTI: 'https://api.themoviedb.org/3/search/multi?api_key=34decb342bf0ffa2d0722e63ac34cd33&language=en-US&page=1&include_adult=false',

    fetchMovies(url){
        axios.get(url)
        .then(response => {
            console.log(response);
            this.movies = response.data.results
            console.log(this.movies)
        })
    },

    fetchTvSeries(url){
        axios.get(url)
        .then(response => {
            this.tv = response.data.results
            console.log(this.tv)
        })
    }

})