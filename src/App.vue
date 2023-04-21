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
    this.state.fetchTvSeries(this.state.API_URL_TV)
  }
}
</script>

<template >
  <AppHeader></AppHeader>
  <AppMain></AppMain>



</template>



<style lang="scss" scoped>

</style>
