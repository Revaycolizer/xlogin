<template>
  <q-toolbar class="bg-grey text-white q-my-md shadow-2">
    <q-btn flat class="text-white" >
<router-link to="/home" class="text-yellow" right>Home             
    </router-link>
  </q-btn>

<q-space/>

 
  <q-space />
  <q-btn flat left >
<router-link to="/services" class="text-yellow" left>Services   </router-link>
</q-btn>
<q-separator inset spaced />
<q-btn flat>
<router-link to="/about" class="text-yellow" left>About  </router-link>
</q-btn>
<q-separator inset spaced />
<q-btn @click="handleClick" flat text-color="white" >
<router-link to="/" class="text-yellow" left>Sign Out</router-link>
</q-btn>


</q-toolbar>

</template>

<script>
import { ref } from 'vue'
import bg from '../assets/logo.svg'
import { useStore } from 'vuex'

const store = useStore()

const handleClick = () => {
  store.dispatch('logout')
}


export default {
  setup () {
    return {
      tab: ref(''),
      bg:bg,
      handleClick
    }
  }
}
</script>