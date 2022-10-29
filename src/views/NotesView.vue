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

          <q-toolbar-title><q-btn :ripple="false" @click="handleClick" flat><router-link style="text-decoration:none;" to="/">Sign out</router-link></q-btn></q-toolbar-title>
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
        </q-card-section>

        <q-img
          class="col-5"
          src="../assets/download.jpeg"
        />
      </q-card-section>
    </q-card>
           
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
      lb:lb
      

    //   user: computed(()=> store.state.user)
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 1450px
</style>