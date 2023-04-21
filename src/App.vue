<script>
import {state} from './state.js';
import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue'

export default{
  components: {
    AppMain,
    AppHeader
  },
  data(){
    return{
      state
    }
  },
  mounted(){
    this.state.fetchMovies(this.state.API_URL_MULTI),
    this.state.fetchTvSeries(this.state.API_URL_TV),
    this.state.fetchGenres(this.state.API_URL_GENRES),
    this.state.fetchTVGenres(this.state.API_URL_TV_GENRES)
  }
}
</script>

<template >
  <AppHeader></AppHeader>
  <AppMain></AppMain>



</template>



<style lang="scss" scoped>

</style>
