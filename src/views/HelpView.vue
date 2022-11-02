<template>
  <div class="help">
  <q-card align="center" flat>
    <q-card style="max-width: 500px">
    
      
      
    <q-form @submit.prevent="handleSubmit">
    <h4>Reset Password</h4>
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
     

       <q-input square clearable v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Last Password Used">
        <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
        <template v-slot:append>
          <q-icon
            @click="isPwd = !isPwd"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
            </template>
      </q-input>
      <q-btn label="Send" type="submit" color="primary"/>
    </q-form>
    </q-card>
  </q-card>
  </div>
</template>

<script>
import {ref} from 'vue'  

export default {
    setup(){
        const email= ref(null)
        const password = ref(null)

        return{
            email,
            password
        }
    }

}
</script>

<style>

</style>