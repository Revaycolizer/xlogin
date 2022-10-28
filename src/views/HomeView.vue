<template>
  <div class="home">
    <q-card align="center" flat>
    <q-card style="max-width: 500px">
    
      
      
    <q-form @submit.prevent="handleSubmit">
    <h4>Login</h4>
    <img :src="image">
   
    
   <q-input
   square clearable
        filled
        v-model="email"
        label="Your email *"
        hint="email"
        
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

      <div v-if="error"> {{ error }} </div>

  
</q-form>
    
    </q-card>
    </q-card>
    
  </div>
</template>

<script>
// @ is an alias to /src
import {ref} from 'vue'
import image from '../assets/login.jpg'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'






export default {
   
    setup () {

      
     const error = ref(null)
      const email = ref(null);
      const password = ref(null);
      const errMsg = ref(null);
      const isPwd = ref(null);

       const store = useStore()
    const router = useRouter()

    const handleSubmit = async () =>{
     try{
     await store.dispatch('login', {
        email: email.value,
        password: password.value
      })
      router.push('/home')
     } catch (err){
      error.value = err.message

     }
    }


    return {
      password,
      isPwd,
      image:image,
      errMsg,
      email,
      error,
      handleSubmit
      
    }
    }
    
  }

</script>
<style lang="sass">
.my-card
  width: 10%
  max-width: 1200px
</style>
