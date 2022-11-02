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
        <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
          <q-img
          class="col-2"
          src="../assets/uni.png"
          
        />
      </q-card-section>
        <q-card-section>
          <h1 class="text-h3">Your Profile</h1>
          <p>All members credentials are found in this section</p>
          
          <q-btn label="Edit Profile" color="primary" rounded @click="inception = true" />
          
          
          <q-btn @click="profile = true" rounded>View profile </q-btn>
          <q-dialog v-model="profile">
      <q-card class="my-prof lt-xl">
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
          <q-btn flat label="Close" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

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
          <q-btn flat label="Save Profile" @click="saveProfile" />
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
    </q-card>

    <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-cad">
     
     
      <q-card-section class="bg-orange">
       

       <div class="row no-wrap items-center">
         <div class="col text-h6 ellipsis font-weight-bold">
           Payments Details
         </div>
         
       </div>

       
     </q-card-section>

     <q-card-section class="q-pt-none bg-orange">
      
       <div class="text-caption text-black  ">
        All fees are paid in this account number:<br /> 
      Account Number: 20510018688 <br/>
      
      Account Name: DMI and Collaborators Trust<br/>
       </div>
     </q-card-section>
     

       
     
    </q-card>

    <q-card class="my-cad bg-blue">
      <q-card-section >
       

       <div class="row no-wrap items-center">
         <div class="col text-h6 ellipsis font-weight-bold">
           Assignments
         </div>
         
       </div>

     </q-card-section>

     <q-card-section class="q-pt-none">
      
       <div class="text-caption text-black  ">
          All assignments are provided by a respective lecturer<br/> 
      To view your progress click below
       </div>
     </q-card-section>


      <q-card-actions align="right">
       
      </q-card-actions>
    </q-card>

    <q-card class="my-cad bg-green">
      <q-card-section>
       

       <div class="row no-wrap items-center">
         <div class="col text-h6 ellipsis font-weight-bold">
           Results
         </div>
         
       </div>

       
     </q-card-section>

     <q-card-section class="q-pt-none">
      
       <div class="text-caption text-black  ">
         Results are provided at each end of semister. <br/>
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
import {  ref } from 'vue'
import lb from '../assets/download.jpeg'
import bg from '../assets/logo.svg'



   const saveProfile = () =>{
   
   }

export default {
  setup () {
    return {
      drawer: ref(false),
      miniState: ref(true),
      bg:bg,
      lb:lb,
      inception: ref(false),
      secondDialog: ref(false),
      profile: ref(false),
      saveProfile

    
      

    //   user: computed(()=> store.state.user)
    }
  }
}
</script>
<style lang="sass" scoped>
.my-cad
  width: 100%
  max-width: 370px
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