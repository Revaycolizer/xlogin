<template>
  <div class="q-pa-md">
    <q-layout  view="hHh Lpr lff"   >
      <q-header elevated class="bg-black">
        <q-toolbar class="bg-blue">
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title><q-btn flat><router-link to="/">Home</router-link></q-btn></q-toolbar-title>
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
                <q-icon name="dashboard" color="blue" />
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
        <q-page padding>
           
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import {  ref } from 'vue'
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
      

    //   user: computed(()=> store.state.user)
    }
  }
}
</script>