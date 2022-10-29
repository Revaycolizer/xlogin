<template>
  <div class="q-pa-md">
    <q-layout  view="hHh Lpr lff"   >
      <q-header elevated class="bg-black">
        <q-toolbar class="bg-blue">
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title><q-btn :ripple="false" flat><router-link style="text-decoration:none;" to="/home">Home</router-link></q-btn></q-toolbar-title>
          <q-space/>
          <q-separator inset spaced/>
          <q-separator inset spaced/>
          <q-separator inset spaced/>
          <q-separator inset spaced/>
          <q-separator inset spaced/>
          <q-separator inset spaced/>
          
          <q-space/>
          <q-separator inset spaced/>
          <q-separator inset spaced/>
          <q-separator inset spaced/>
          <q-separator inset spaced/>
          <q-separator inset spaced/>
          <q-separator inset spaced/>
          <q-separator inset spaced/>
          <q-separator inset spaced/>
          <q-separator inset spaced/>
          <q-space/>
          <q-separator inset spaced/>
          <q-separator inset spaced/>
          <q-separator inset spaced/>
          <q-separator inset spaced/>
          <q-separator inset spaced/>
          <q-separator inset spaced/>
          <q-separator inset spaced/>
          <q-space/>

          <q-toolbar-title><q-btn @click="handleClick" :ripple="false" flat><router-link style="text-decoration:none;" to="/">Sign out</router-link></q-btn></q-toolbar-title>
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

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="image" color="blue" />
              </q-item-section>

              <q-item-section>
                Project Images
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
</q-card>

      <q-page-container>
        <q-page >
        <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section>
          <h1 class="text-h3">Welcome Again</h1>
        <p class="text-h4" >News/Events</p>
         
        </q-card-section>

        <q-img
          class="col-5"
          src="../assets/uni.png"
          style="max-width: 250px"
        />
      </q-card-section>
    </q-card>
    <q-space/>
    <q-toolbar>
    </q-toolbar>

    <q-toolbar>
    <q-card class="my-cre">
     <p class="text-h6 text-weight-bold"> Payable fees on this academic year</p>
     <p align="center">Total installment fee is 950000</p>
     <p align="center">To view installment plan click below</p>
     <q-toolbar>
      <q-separator inset spaced/>
     <q-separator inset spaced/>
     <q-separator inset spaced/>
     <q-separator inset spaced/>
     <q-btn flat @click="installment =true"> View </q-btn>
     </q-toolbar>

     <q-dialog v-model="installment" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-teal text-white" style="width: 300px" >
        <p align="center" class="text-h6 text-weight-bold">Installment Fees</p>
     <p align="center">First installment: 425000  </p>
     <p align="center">Second installment: 190000</p>
     <p align="center">Third installment: 285000 </p>
     <p align="center">Fourth installment: 190000</p>
     <p align="center"> Total:TZS 950000</p>
    
      <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
     </q-dialog>
    </q-card>

    <q-separator inset spaced/>

    <q-card class="my-cre">
     <p align="center" class="text-h6 text-weight-bold">Registration Fees</p>
     <p align="center">ID Card : 20000</p>
     <p align="center">Examination Fee : 100000</p>
     <p align="center">TCU Quality Assuarance: 20000</p>
     <p align="center">Total amount is 140000</p>
    </q-card>
    </q-toolbar>
         
           
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import {  ref } from 'vue'
import lb from '../assets/download.jpeg'
import bg from '../assets/logo.svg'
// import { useStore } from 'vuex'

// const store = useStore()

// const handleClick = () => {
//   store.dispatch('logout')
// }

export default {
  setup () {
    return {
      drawer: ref(false),
      miniState: ref(true),
      bg:bg,
      lb:lb,
      installment:ref(false)
      

    //   user: computed(()=> store.state.user)
    }
  }
}
</script>
<style lang="sass" scoped>
.my-cre
  width: 80%
  max-width: 330px
.my-card
  width: 100%
  max-width: 1450px
</style>