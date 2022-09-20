<template>
  <div class="home">
    <h3 align="center">Xlogin</h3>
    <q-card align="center" flat>
    <q-card class="my-card">
    
      <h4>Login</h4>
    <q-form action="https://some-url.com" method="post" ref="myForm">
   <q-input
        filled
        v-model="email"
        label="Your email *"
        hint="email"
        suffix="@gmail.com"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

       <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password">
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
      <div align=left><router-link to="/help">Forget Password</router-link></div>
      <div align=right><router-link to="/create">Create New Account</router-link></div>

  
</q-form>
    
    </q-card>
    </q-card>
    
  </div>
</template>

<script>
// @ is an alias to /src
import {ref} from 'vue'


export default {
  
    setup () {
    return {
      password: ref(''),
      isPwd: ref(true),
      
    }
    }
    
  }

</script>
<style lang="sass">
.my-card
  width: 100%
  max-width: 450px
</style>
