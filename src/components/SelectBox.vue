<script>
import {state} from '../state.js'
export default{
    name: 'SelectBox',
    data(){
        return{
            state
        }
    }
}

</script>

<template>
    <div class="select_genre align-self-center">
        <div class="form-group d-flex">
           <!--  <button  class="btn btn-outline-secondary" type="button" id="button-addon1" @click="$emit('makeSelect')" >Button</button> -->
          <label class="text-white select_name" for="">Select a Genre</label>
          <select class="form-control h-50" v-model="state.selectedGenre" >
            <option v-for="genre in state.genres">{{ genre.name }}</option>
            
           
          </select>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>