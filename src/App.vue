<script>
import {state} from './state.js';
import AppMain from './components/AppMain.vue'

export default{
  components: {
    AppMain
  },
  data(){
    return{
      state
    }
  },
  mounted(){
    this.state.fetchMovies(this.state.API_URL_MOVIES),
    this.state.fetchTvSeries(this.state.API_URL_TV)
  }
}
</script>

<template>

  <AppMain></AppMain>
  
</template>

<style lang="scss" scoped>

</style>
