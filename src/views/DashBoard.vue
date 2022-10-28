<template>
  <div class="q-pa-md">
    <q-layout  view="hHh Lpr lff"   >
      <q-header elevated class="bg-black">
        <q-toolbar class="bg-blue">
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title><q-btn flat><router-link to="/home">Home</router-link></q-btn></q-toolbar-title>
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

          <q-toolbar-title><q-btn @click="handleClick" flat><router-link to="/">Sign out</router-link></q-btn></q-toolbar-title>
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
                <router-link to="/dash">
                <q-icon name="dashboard" color="blue" />
                </router-link>
              </q-item-section>

              <q-item-section>
                  <router-link to="/dash">
                Dashboard
                  </router-link>
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="books" />
              </q-item-section>

              <q-item-section>
                <router-link to="/notes">
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
          <h1 class="text-h3">Your Profile</h1>
          <p>All members credentials are found in this section and all things required are conntained in here, all people having membership are able to access everything found in here freely</p>
          <q-toolbar>
          <q-btn label="Edit Profile" color="primary" rounded @click="inception = true" />
          <q-separator inset spaced/>
          
          <q-btn  rounded>View profile </q-btn>
          </q-toolbar>

              <q-dialog v-model="inception">
      <q-card class="my-prof">
        <q-card-section>
          <div class="text-h6">Profile</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
         <q-input label="name" >
          <template v-slot:prepend>
            <q-icon name="person"/>
          </template>
         </q-input>

         <q-input label="registration number" >
          <template v-slot:prepend>
            <q-icon name="laptop"/>
          </template>
         </q-input>

         <q-input label="course" >
          <template v-slot:prepend>
            <q-icon name="book"/>
          </template>
         </q-input>
         
         <q-input label="Phone number" >
          <template v-slot:prepend>
            <q-icon name="call"/>
          </template>
         </q-input>
         

        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Save Profile" @click="secondDialog = true" />
          <q-btn flat label="Close" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="secondDialog" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-teal text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Persistent</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Click/Tap on the backdrop.
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

          

        </q-card-section>

        <q-img
          class="col-5"
          src="../assets/uni.png"
          style="max-width: 250px"
        />
      </q-card-section>
    </q-card>

    
    <q-toolbar flat>
      
    </q-toolbar>

<q-toolbar>
    <q-card class="my-cre bg-orange">
      <p align="center" class="text-h4 text-black">Payment Details</p>
      <h1 class="text-h6 text-white">All fees are paid in this account number:</h1> 
      Account Number:<br />
      20510018688 <br />
      Account Name: <br />
      DMI and Collaborators Trust
      <q-space />
      <q-toolbar>
        <q-separator inset spaced />
        <q-separator inset spaced />
        <q-separator inset spaced />
        <q-separator inset spaced />
       
     <q-btn align="center" class="text-white" color="green"  rounded>View</q-btn>
      </q-toolbar>
    </q-card>

    <q-separator inset spaced />

    <q-card class="my-cre bg-blue" >
      <p align="center" class="text-h4 text-white">Assignments</p>
      <h1 class="text-h6">All assignments are provided by a respective lecturer </h1> 
      To view your progress click below
      <q-space />
      <q-toolbar>
        <q-separator inset spaced />
        <q-separator inset spaced />
        <q-separator inset spaced />
        <q-separator inset spaced />
       
     <q-btn align="center" class="text-pink" color="yellow"  rounded>View</q-btn>
      </q-toolbar>
    </q-card>
    <q-separator inset spaced/>

    <q-card class="my-cre bg-pink" >
      <p align="center" class="text-h4 text-orange">Results</p>
      <h1 class="text-h6">Results are provided at each end of semister </h1> 
      To view your results click below
      <q-space />
      <q-toolbar>
        <q-separator inset spaced />
        <q-separator inset spaced />
        <q-separator inset spaced />
        <q-separator inset spaced />
       
     <q-btn align="center" class="text-red" color="black"  rounded>View</q-btn>
      </q-toolbar>
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
      inception: ref(false),
      secondDialog: ref(false) 

    
      

    //   user: computed(()=> store.state.user)
    }
  }
}
</script>
<style lang="sass" scoped>
.my-cre
  width: 50%
  max-width: 400px
.my-prof
  width: 100%
  max-width: 450px
.my-card
  width: 100%
  max-width: 1450px
</style>