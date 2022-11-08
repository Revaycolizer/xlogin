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
                <router-link to="/dash">
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
                <q-icon @click="handleClick" color="blue" name="logout" />
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
          
          <q-card flat class="my-fom" style="padding-top:40px;">
            <p align="center" class="text-h3 font-weight-high">First Year</p>
          <div class="q-pa-md row items-start q-gutter-md" style="padding-left:50px;">
          <q-card class="my-cad" >
           <q-card-section class="bg-orange">
          <div class="row no-wrap items-center">
           <div class="col text-h5 ellipsis font-weight-bold">
           Semester 1
           </div>
         
            </div>
         </q-card-section>

        <q-card-section class="q-pt-none bg-orange">
      
       <div class="text-caption text-black  ">
        <p class="text-h6">
       To view Notes click below</p>
       <q-btn>
      <router-link to="/allnotes" style="text-decoration:none;">
      View</router-link></q-btn>
       </div>
     </q-card-section>
    </q-card>

   <q-card class="my-cad bg-blue" >
           <q-card-section>
          <div class="row no-wrap items-center">
           <div class="col text-h5 ellipsis font-weight-bold">
           Semester 2
           </div>
         
            </div>
         </q-card-section>

        <q-card-section class="q-pt-none ">
      
       <div class="text-caption text-black  ">
        <p class="text-h6">
       To view Notes click below</p>
       <q-btn>
      <router-link to="/allnotes2" style="text-decoration:none;">
      View</router-link></q-btn>
       </div>
     </q-card-section>
    </q-card>

     </div>
     
          </q-card>

           <div style="padding-bottom:30px;">
           <q-card flat class="my-fom" style="padding-top:40px;">
            <p align="center" class="text-h3 font-weight-high">Second Year</p>
           <div class="q-pa-md row items-start q-gutter-md" style="padding-left:50px;">
           <q-card class="my-cad" >
     
     
           <q-card-section class="bg-orange">
           <div class="row no-wrap items-center">
           <div class="col text-h6 ellipsis font-weight-bold">
           Semester 1
           </div>
            </div>
           </q-card-section>

           <q-card-section class="q-pt-none bg-orange">
      
           <div class="text-caption text-black  ">
           <p class="text-h6">
           To view Notes click below</p>
            <q-btn>
           <router-link to="/allnotes3" style="text-decoration:none;">
            View</router-link></q-btn>
           </div>
           </q-card-section>
           </q-card>

           <q-card class="my-cad bg-blue" >
           <q-card-section>
           <div class="row no-wrap items-center">
           <div class="col text-h5 ellipsis font-weight-bold">
           Semester 2
           </div>
         
            </div>
           </q-card-section>

           <q-card-section class="q-pt-none ">
      
           <div class="text-caption text-black  ">
           <p class="text-h6">
           To view Notes click below</p>
           <q-btn>
           <router-link to="/allnotes4" style="text-decoration:none;">
            View</router-link></q-btn>
            </div>
            </q-card-section>
            </q-card>
             </div>

              <q-card flat class="my-fom" style="padding-top:40px;">
            <p align="center" class="text-h3 font-weight-high">Third Year</p>
          <div class="q-pa-md row items-start q-gutter-md" style="padding-left:50px;">
          <q-card class="my-cad" >
           <q-card-section class="bg-orange">
          <div class="row no-wrap items-center">
           <div class="col text-h5 ellipsis font-weight-bold">
           Semester 1
           </div>
         
            </div>
         </q-card-section>

        <q-card-section class="q-pt-none bg-orange">
      
       <div class="text-caption text-black  ">
        <p class="text-h6">
       To view Notes click below</p>
       <q-btn>
      <router-link to="/allnotes5" style="text-decoration:none;">
      View</router-link></q-btn>
       </div>
     </q-card-section>
    </q-card>

   <q-card class="my-cad bg-blue" >
           <q-card-section>
          <div class="row no-wrap items-center">
           <div class="col text-h5 ellipsis font-weight-bold">
           Semester 2
           </div>
         
            </div>
         </q-card-section>

        <q-card-section class="q-pt-none ">
      
       <div class="text-caption text-black  ">
        <p class="text-h6">
       To view Notes click below</p>
       <q-btn>
      <router-link to="/allnotes6" style="text-decoration:none;">
      View</router-link></q-btn>
       </div>
     </q-card-section>
    </q-card>

     </div>
     
          </q-card>

            

     
             </q-card>
             </div>
        </q-page>
        
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import {  computed, ref } from 'vue'
import lb from '../assets/download.jpeg'
import bg from '../assets/logo.svg'
import { useStore } from 'vuex'

const store = useStore()

const handleClick = () => {
  store.dispatch('logout')
}

export default {
  setup () {
    return {
      drawer: ref(false),
      miniState: ref(true),
      sem:ref(false),
      bg:bg,
      lb:lb,
      handleClick,
      notes:ref(false),
      

      user: computed(()=> store.state.user)
    }
  }
}
</script>
<style lang="sass" scoped>
.my-fom
 width: 100%
  max-width: 450px
.my-cad
  width: 100%
  max-width: 600px
.my-card
  width: 100%
  max-width: 1450px
</style>