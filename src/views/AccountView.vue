<template>

  
        <q-card class="card"
        align="center" flat>
          <h5>Register</h5>
          <q-card class="my-card" flat>
          <img :src="person"/>
          </q-card>
          <q-card align="center" >
            <!-- <div v-if="error" class="alert alert-danger">{{error}}</div> -->
            <q-form action="#" @submit.prevent="handleSubmit" style="max-width:450px">
              
       <q-input
        filled
        v-model="email"
        label="Your email *"
        hint="email"

        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      ><template v-slot:prepend>
        <q-icon name="email"/>
        </template>
        </q-input>
        

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
              
              

              
                  <q-btn type="submit" color="green">Register</q-btn>
                  <div v-if="error">{{ error }}</div>
              
            </q-form>
          </q-card>
          </q-card>
     
</template>


<script>
import person from '../assets/person.png'
import { ref } from 'vue'

import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: "RegisterComponent",
 setup() {
   
    const email = ref('')
    const password = ref('')
    const error = ref(null)
    const isPwd = ref(null)
    
    

    const store = useStore()
    const router = useRouter()

    const handleSubmit = async () =>{
     try{
     await store.dispatch('signup', {
        email: email.value,
        password: password.value
      })
      router.push('/home')
     } catch (err){
      error.value = err.message

     }
    }
    

    return {  handleSubmit,email, password, error, isPwd, person}
  }
};
</script>
<style lang="sass">
.my-card
  width: 10%
  max-width: 450px
</style>