<template>
        <!-- <q-toolbar class="bg-purple text-white shadow-2 rounded-borders">
          <q-btn flat>
            <router-link to="/">Home</router-link>
          </q-btn>
          <q-space/>
          
          <q-separator inset spaced/>
          <q-btn flat> <router-link to="/about">About</router-link>
          </q-btn>
          
        </q-toolbar> -->

       

    <router-view></router-view>
  
</template>

<script>


export default {
  name: 'LayoutDefault',

  components: {
    
  },

  setup () {
    return {
      
    }
  }
}
</script>
