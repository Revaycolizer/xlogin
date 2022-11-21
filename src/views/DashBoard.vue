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
                <router-link style="text-decoration:none;" to="/dash">
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
        <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
          <q-img
          class="col-2"
          src="../assets/uni.png"
          
        />
      </q-card-section>
        <q-card-section>
          <h1 class="text-h3">Your Profile</h1>
          <p>All members credentials are found in this section</p>
          
          <q-btn label="View Profile" color="primary" rounded @click="inception = true" />
          
          
           
          <q-dialog v-model="profile">
            
      <q-card class="my-prof lt-xl">
        <q-form style="max-width:450px;" align="center" @submit.prevent="addTodo">
        <!-- <q-card-section> -->
          <div class="text-h6">Profile</div>
        <!-- </q-card-section> -->

        <!-- <q-card-section class="q-pt-none"> -->
         
         <q-input v-model="name" label="name" >
          <template v-slot:prepend>
            <q-icon name="person"/>
          </template>
         </q-input>

         <q-input v-model="reg" label="registration number" >
          <template v-slot:prepend>
            <q-icon name="laptop"/>
          </template>
         </q-input>

         <q-input v-model="course" label="course" >
          <template v-slot:prepend>
            <q-icon name="book"/>
          </template>
         </q-input>
         
         <q-input v-model="phone" label="Phone number" >
          <template v-slot:prepend>
            <q-icon name="call"/>
          </template>
         </q-input>
         

        <!-- </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn type="submit" flat label="Save Profile"/>
          <q-btn flat label="Close" v-close-popup />
        </q-card-actions>
      </q-card> -->
           <q-btn type="submit" color="green">Save Profile</q-btn>
            </q-form>
      </q-card>
      
    </q-dialog>
           

              <q-dialog v-model="inception">
      <q-card class="my-profi">
        <q-card-section>
          <div class="text-h6">Profile</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
           <!-- <q-uploader v-model="picture" label="Profile Picture" :factory="factoryFn"
          multiple
          style="max-width:280px;"/> -->
         <q-input :v-model="name"  disable>
          <template v-slot:prepend>
            <q-icon name="person"/>
            {{ name }}
          </template>
         </q-input>

         <q-input :v-model="reg"  disable>
          <template v-slot:prepend>
            <q-icon name="laptop"/>
            {{ reg }}
          </template>
         </q-input>

         <q-input :v-model="course" disable>
          <template v-slot:prepend>
            <q-icon name="book"/>
            {{ course }}
          </template>
         </q-input>
         
         <q-input :v-model="phone" disable>
          <template v-slot:prepend>
            <q-icon name="call"/>
            {{ phone }}
          </template>
         </q-input>
         

        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Edit Profile" @click="profile = true" />
          <q-btn flat label="Close" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>



      </q-card-section>
    </q-card>

    <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-cad">
     
     
      <q-card-section class="bg-orange">
       

       <div class="row no-wrap items-center">
         <div class="col text-h6 ellipsis font-weight-bold">
           Payments Details
         </div>
         
       </div>

       
     </q-card-section>

     <q-card-section class="q-pt-none bg-orange">
      
       <div class="text-caption text-black  ">
        All fees are paid in this account number:<br /> 
      Account Number: 20510018688 <br/>
      
      Account Name: DMI and Collaborators Trust<br/>
       </div>
     </q-card-section>
     

       
     
    </q-card>

    <q-card class="my-asz bg-blue">
      <q-card-section >
       

       <div class="row no-wrap items-center">
         <div class="col text-h6 ellipsis font-weight-bold">
           Assignments
         </div>
         
       </div>

     </q-card-section>

     <q-card-section class="q-pt-none">
      
       <div class="text-caption text-black  ">
          All assignments are provided by a respective lecturer<br/> 
      To view your progress click below
       </div>
     </q-card-section>


      <q-card-actions align="right">
       
      </q-card-actions>
    </q-card>
    
    <q-card class="my-res bg-green" clickable>
      <q-card-section>
       

       <div class="row no-wrap items-center">
         <div class="col text-h6 ellipsis font-weight-bold">
           Results
         </div>
         
       </div>

       
     </q-card-section>

     <q-card-section class="q-pt-none">
      
       <div class="text-caption text-black  ">
        Each academic year consists of two (2) semisters<br/>
         To view your progress click below
       </div>
     </q-card-section>
     </q-card>
     </div>

    
    


 
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import {  ref, onMounted } from 'vue'
import lb from '../assets/download.jpeg'
import bg from '../assets/logo.svg'
// import { v4 as uuidv4} from 'uuid'
import { db } from '@/db'
import { collection,  onSnapshot, addDoc } from '@firebase/firestore'



export default {
  setup () {
     const name = ref('')
    const reg = ref('')
    const phone = ref('')
    const course = ref('')
    const picture = ref('')

    const todos = ref([])

    onMounted(async()=>{
      // const querySnapshot = await getDocs(collection(db,
      // 'profile'))
      // let fbProfiles = []
      // querySnapshot.forEach((doc) =>{
      //   console.log(doc.id, "=>", doc.data())
      //   const todo = {
      //     id: doc.id,
      //     name: doc.data().name,
      //     reg: doc.data().reg,
      //     phone: doc.data().phone,
      //     course: doc.data().course
      //   }
      //   fbProfiles.push(todo)
      // })

      onSnapshot(collection(db, 'profile'), (querySnapshot)=>{
        const fbProfiles= []
        querySnapshot.forEach((doc)=>{
          const todo = {
          // id: doc.id,
          name: doc.data().name,
          reg: doc.data().reg,
          phone: doc.data().phone,
          course: doc.data().course
        }
        fbProfiles.push(todo)
        })
        todos.value =fbProfiles
      })
    })
    

      const addTodo = () =>{

        addDoc(collection(db, 'profile'),{
          name: name.value,
          course: course.value,
        phone: phone.value,
        reg: reg.value,
        })

        name.value=''
        course.value=''
        phone.value=''
        reg.value=''
      // console.log('saved')
      // const newTodo = {
      //   // id:uuidv4(),
      //   course: course.value,
      //   phone: phone.value,
      //   reg: reg.value,
      //   name: name.value
      // }
      //  console.log('newTodo:', newTodo)
      //  todos.value.unshift( name, reg, phone, course)
   }

    return {
      drawer: ref(false),
      miniState: ref(true),
      bg:bg,
      lb:lb,
      name,
      reg,
      phone,
      course,
      picture,
      inception: ref(false),
      secondDialog: ref(false),
      profile: ref(false),
      addTodo,

    
      

    //   user: computed(()=> store.state.user)
    }
  }
}
</script>
<style lang="sass" scoped>
.my-res
  height: 140px
  width: 80%
  max-width: 350px
.my-asz
  height: 140px
  width: 80%
  max-width: 350px
.my-cad
  width: 80%
  max-width: 350px
.my-cre
  width: 50%
  max-width: 400px
.my-prof
  width: 100%
  max-width: 650px
.my-profi
  width: 100%
  max-width: 450px
.my-card
  width: 100%
  max-width: 1450px
</style>