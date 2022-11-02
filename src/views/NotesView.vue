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
        <q-card class="my-card" flat>
      <q-card-section horizontal>
        <q-card-section>
          <h1 class="text-h3">Notes</h1>
          <p>Studying materials are available in the library</p>
          <p>For notes and module insight click below</p>
          <q-btn @click="notes=true" flat> View</q-btn>
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-dialog v-model="notes" transition-show="scale" transition-hide="scale">
      <q-card class="my-cad">
      <q-card-section>
        <p>CSE</p>
        <template v-slot:prepend>
        <q-icon name="laptop"/>
        </template>
        
      </q-card-section>
      </q-card>

    </q-dialog>       
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
.my-cad
  width: 100%
  max-width: 450px
.my-card
  width: 100%
  max-width: 1450px
</style>