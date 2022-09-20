<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" container style="height: 300px" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-black">
        <q-toolbar class="bg-grey">
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

          <q-toolbar-title><q-btn flat><router-link to="/">Sign out</router-link></q-btn></q-toolbar-title>
        </q-toolbar>
      </q-header>

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
                <q-icon name="dashboard" />
              </q-item-section>

              <q-item-section>
                  <router-link to="/dash">
                Dashboard
                  </router-link>
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Star
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Send
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

      <q-page-container>
        <q-page padding>
          <p>
             
          </p>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      drawer: ref(false),
      miniState: ref(true)
    }
  }
}
</script>