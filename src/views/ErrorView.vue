<template>
<q-parallax 
  :src="bg" :height="650">
  <!-- <div class="error" align="center"> -->
      <h4>404 error found</h4>
      <h5>Check your internet connection, click here to go back <router-link to="/home">Home</router-link></h5>
  <!-- </div> -->
</q-parallax>
</template>

<script>
import bg from '../assets/background.png'

export default {
  setup(){
    return{
      bg:bg
    }
  }
  

}
</script>

<style lang=sass>

</style>