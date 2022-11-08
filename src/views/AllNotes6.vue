<template>
  <div class="q-pa-md">
    <q-layout  view="hHh Lpr lff"   >
      <q-header elevated class="bg-black">
        <q-toolbar class="bg-blue">
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
      </q-header>
<q-card style="max-width: 300px">
      <q-drawer
        v-model="drawer"
        show-if-above

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay

        :width="200"
        :breakpoint="500"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list padding>
             <q-item clickable v-ripple>
              <q-item-section avatar>
                <router-link style="text-decoration:none;" to="/home">
                <q-icon name="home" color="blue" />
                </router-link>
              </q-item-section>

              <q-item-section>
                  <router-link style="text-decoration:none;" to="/home">
                   Home
                  </router-link>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <router-link style="text-decoration:none;" to="/dash">
                <q-icon name="dashboard" color="blue" />
                </router-link>
              </q-item-section>

              <q-item-section>
                  <router-link style="text-decoration:none;" to="/dash">
                Dashboard
                  </router-link>
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <router-link to="/notes">
                <q-icon color="blue" name="books" />
                </router-link>
              </q-item-section>

              <q-item-section>
                <router-link style="text-decoration:none;" to="/notes">
                Notes
                </router-link>
              </q-item-section>
            </q-item>

            
            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <router-link to="/">
                <q-icon  color="blue" name="logout" />
                </router-link>
              </q-item-section>

              <q-item-section>
                <router-link @click="handleClick" style="text-decoration:none;" to="/">
                Sign Out
                </router-link>
              </q-item-section>
            </q-item>

            
          </q-list>
        </q-scroll-area>
      </q-drawer>
</q-card>

      <q-page-container>
        <q-page >
             <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-cad">
     <img :src="CSE">
     
      <q-card-section >
       

       <div class="row no-wrap items-center">
         <div class="col text-h6 ellipsis font-weight-bold">
         </div>
         
       </div>
     </q-card-section>

     <q-card-section class="q-pt-none bg-orange ">
      
       <div class="text-caption text-black " align="center">
       <a href="#">COMPUTER SCIENCE ENGINEERING</a>
       </div>
     </q-card-section>
    </q-card>

    <q-card class="my-inf bg-blue">
        <img :src="IT">
      <q-card-section >
       

       <div class="row no-wrap items-center">
         <div class="col text-h6 ellipsis font-weight-bold">
         </div>
       </div>
     </q-card-section>

     <q-card-section class="q-pt-none bg-purple">
      
       <div class="text-caption text-black" align="center">
        <a style="color:pink;" href="#">INFORMATION TECHNOLOGY</a>
       </div>
     </q-card-section >


     
    </q-card>

    <q-card class="my-ind bg-pink" >
        <img :src="MEN">
      <q-card-section>
       

       <div class="row no-wrap items-center" style="padding-top:90px;">
         <div class="col text-h6 ellipsis font-weight-bold">
         </div>
         
       </div>

       
     </q-card-section>

     <q-card-section class="q-pt-none bg-white">
      
       <div align="center" class="text-caption text-black bg-white " >
         <a href="#">INDUSTRIAL ENGINEERING</a>
       </div>
     </q-card-section>
     </q-card>

     <q-card class="my-mec bg-green">
        <img :src="MEC">
      <q-card-section>
       

       <div class="row no-wrap items-center" >
         <div class="col text-h6 ellipsis font-weight-bold">
         </div>
         
       </div>

       
     </q-card-section>

     <q-card-section class="q-pt-none bg-white">
      
       <div align="center" class="text-caption text-black bg-white " >
         <a href="#">MECHATRONICS</a>
       </div>
     </q-card-section>
     </q-card>

      <q-card class="my-ece bg-orange">
        <img :src="ECE">
      <q-card-section>
       

       <div class="row no-wrap items-center" >
         <div class="col text-h6 ellipsis font-weight-bold">
         </div>
         
       </div>
     </q-card-section>

     <q-card-section class="q-pt-none bg-white">
      
       <div align="center" class="text-caption text-black bg-white " >
         <a href="#">ELECTRICAL AND COMMUNICATION ENG</a>
       </div>
     </q-card-section>
     </q-card>

     <q-card class="my-ee bg-red" >
        <img :src="EEE">
      <q-card-section>
       

       <div class="row no-wrap items-center" >
         <div class="col text-h6 ellipsis font-weight-bold">
         </div>
         
       </div>

       
     </q-card-section>

     <q-card-section class="q-pt-none bg-white">
      
       <div align="center" class="text-caption text-black bg-white " >
         <a href="#">ELECTRICAL AND ELECTRONICS ENG</a>
       </div>
     </q-card-section>
     </q-card>

      <q-card class="my-civ bg-brown">
        <img :src="CIVIL">
      <q-card-section>
       

       <div class="row no-wrap items-center" >
         <div class="col text-h6 ellipsis font-weight-bold">
         </div>
         
       </div>

       
     </q-card-section>

     <q-card-section class="q-pt-none bg-white">
      
       <div align="center" class="text-caption text-black bg-white " >
         <a href="#">CIVIL ENGINEERING</a>
       </div>
     </q-card-section>
     </q-card>

     
      <q-card class="my-me bg-brown" >
        <img :src="ME">
      <q-card-section>
       

       <div class="row no-wrap items-center" >
         <div class="col text-h6 ellipsis font-weight-bold">
         </div>
       </div>
     </q-card-section>
     <q-card-section class="q-pt-none bg-white">
       <div align="center" class="text-caption text-black bg-white ">
         <a href="#">MECHANICAL ENGINEERING</a>
       </div>
     </q-card-section>
     </q-card>
 
 
 
     

     </div>

        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import CSE from '../assets/CSE.png'
import IT from '../assets/IT.png'
import MEN from '../assets/MEN.png'
import MEC from '../assets/MEC.png'
import ECE from '../assets/ECE.png'
import EEE from '../assets/EEE.png'
import CIVIL from '../assets/CIVIL.png'
import ME from '../assets/ME.png'

const store = useStore()

const handleClick = () => {
  store.dispatch('logout')
}

export default {
  setup () {
    return {
      drawer: ref(false),
      miniState: ref(true),
      IT:IT,
      CIVIL:CIVIL,
      ME:ME,
      MEN:MEN,
      EEE:EEE,
      CSE:CSE,
      ECE:ECE,
      MEC:MEC,
      handleClick,
      

      user: computed(()=> store.state.user)
    }
  }
}
</script>
<style lang="sass" scoped>
.my-inf
  width: 80%
  max-width: 270px
.my-ind
  width: 80%
  max-width: 247px
.my-mec
  width: 80%
  max-width: 269px
.my-ece
  width: 80%
  max-width: 250px
.my-ee
  width: 80%
  max-width: 250px
.my-me
  width: 80%
  max-width: 255px
.my-civ
  width: 80%
  max-width: 272px
.my-cad
  width: 80%
  max-width: 250px
.my-cre
  width: 80%
  max-width: 250px
.my-card
  width: 100%
  max-width: 1450px
</style>