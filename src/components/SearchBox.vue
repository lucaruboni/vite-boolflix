<script>
import {state} from '../state.js'
export default{
    name: 'SearchBox',
    data(){
        return{
            state
        }
    }
}
</script>

<template>
 
   <div class="searchbox">
        <div class="input-group mb-3">
            <button class="btn btn-outline-secondary" type="button" id="button-addon1" @click="$emit('makeSearch')" >SEARCH </button>
            <input v-model="state.searchText" type="text" class="form-control" placeholder="Search Here!" aria-label="Example text with button addon" aria-describedby="button-addon1" @keyup.enter="$emit('makeSearch')">
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>