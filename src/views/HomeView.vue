<template>
  <div class="home">
    <q-card align="center" flat>
    <q-card class="my-card">
    
      
      
    <q-form action="https://some-url.com" @submit.prevent="Login" method="post" ref="myForm">
    <h4>Login</h4>
    <img :src="image">
    
   <q-input
   square clearable
        filled
        v-model="email"
        label="Your email *"
        hint="email"
        suffix="@gmail.com"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      ><template v-slot:prepend>
                  <q-icon name="email" />
                </template></q-input>
     

       <q-input square clearable v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password">
        <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
            </template>
      </q-input>
      <q-btn label="Sign in" type="submit" color="primary"/>
      <q-space/>
      <q-toolbar flat>
      <router-link to="/help">Forget Password</router-link>
      <q-space/>
      <router-link to="/create">Create New Account</router-link>
      </q-toolbar>

  
</q-form>
    
    </q-card>
    </q-card>
    
  </div>
</template>

<script>
// @ is an alias to /src
import {ref} from 'vue'
import image from '../assets/login.jpg'


export default {
  
    setup () {
    return {
      password: ref(''),
      isPwd: ref(true),
      image:image
      
      
    }
    }
    
  }

</script>
<style lang="sass">
.my-card
  width: 100%
  max-width: 450px
</style>
