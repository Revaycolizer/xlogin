<template>

  
        <q-card class="card"
        align="center" flat>
          <h5>Register</h5>
          <q-card align="center" >
            <!-- <div v-if="error" class="alert alert-danger">{{error}}</div> -->
            <q-form action="#" @submit.prevent="Register" style="max-width:450px">
          <q-input
          square clearable
        filled
        v-model="name"
        label="First name and last name *"
        hint="name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      ><template v-slot:prepend>
                  <q-icon name="person" />
                </template>
          </q-input>

              
       <q-input
        filled
        v-model="email"
        label="Your email *"
        hint="email"
        suffix="@gmail.com"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      ><template v-slot:prepend>
        <q-icon name="email"/>
        </template>
        </q-input>
        

        <q-input
        filled
        v-model="dob"
        label="Date of Birth *"
        hint="Date of Birth"
       ><template v-slot:prepend>
                  <q-icon name="book" />
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
              
            </q-form>
          </q-card>
          </q-card>
     
</template>


<script>
import { ref } from 'vue'
// import { useStore } from 'vue'
// import { useRouter } from 'vue-router'

export default {
  name: "RegisterComponent",
 setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    // const store = useStore()
    // const router = useRouter()

    // const Register = async () => {
    //   try {
    //     await store.dispatch('register', {
    //       email: email.value,
    //       password: password.value,
    //       name: name.value
    //     })
    //     router.push('/')
    //   }
    //   catch (err) {
    //     error.value = err.message
    //         }
    // }

    return {  name,email, password, error, }
  }
};
</script>