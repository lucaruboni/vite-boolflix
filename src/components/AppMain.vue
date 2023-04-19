<script>
import { state } from '../state.js';
export default{
    name: 'AppMain',

    data(){
        return{
            state
        }
    }
}
</script>

<template>
    <main>
        <div class="form-group">
          <label for=""></label>
          <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
          <small id="helpId" class="form-text text-muted">SEARCH</small>
        </div>
        
        <div class="container">
           <div class="row">
            <div class="col">
                <ul>
                    <li></li>
                </ul>
            </div>

           </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>