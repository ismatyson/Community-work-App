<template>
 <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="1000px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          rounded
          medium
          color="pink darken-2"
        >
          <h5 style="font-family: 'Montserrat', sans-serif;" v-if="isAuthenticated">{{loggedInUser.name}}</h5>
          <h5 style="font-family: 'Montserrat', sans-serif;" class="bold" v-if="!isAuthenticated">Sign-in</h5>
          <v-icon medium right>mdi-export</v-icon>
        </v-btn>
        
      </template>

      <v-card color="purple lighten-5" v-if="isAuthenticated">
          <div class="pa-3 ml-2" justify-center>
            <v-btn icon outlined color="pink darken-3" text @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
        </div>
        <v-layout wrap justify-space-between>
          <v-flex class="hidden-sm-and-down" mg3 lg3>
         <img src="../../assets/images/kingdom-2.png" width="400px">
        </v-flex>

         <v-flex xs12 md7 lg7 class="mr-5">
        
          <v-container>
            <v-row>
              
              <v-col cols="12" sm="9" md="9">
                <h1 style="font-size:68px;font-family: 'Montserrat', sans-serif;">You're about to sign-out !</h1>
                <v-divider/>
                <v-btn @click="onLogout" class="mt-5" color="pink lighten-3">
                  <h5>Sohoka / Log-out</h5>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>

         </v-flex>

        </v-layout>
      </v-card>
      
      <v-card color="purple lighten-5" v-if="!isAuthenticated">
        <div class="pa-3 ml-2" justify-center>
            <v-btn icon outlined color="pink darken-3" text @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
        </div>
        <v-layout wrap justify-space-between>
        <v-flex xs9 mg3 lg3>
         <img src="../../assets/images/kingdom-2.png" width="370px">
        </v-flex>

        <v-flex xs9 md7 lg7 class="mr-5">
        
          <v-container>
            <h1 style="font-family: 'Montserrat', sans-serif;">Log-in</h1>
            <v-row class="mt-5" no-gutters>
              
              <v-col cols="12" sm="4" md="4">
                <v-text-field counter v-if="!isLogin" rounded  outlined  v-model="NationalId" label="Irangamuntu*" hint="imibare 16" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                  v-if="!isLogin"
                  v-model="name"
                  label="amazina*"
                  hint="amazina yawe yombi"
                  persistent-hint
                  required
                  rounded
                  outlined 
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field v-if="!isLogin" rounded  outlined  v-model="email" label="email*" required></v-text-field>
              </v-col>
              <v-col cols="4" md="5">
                <v-text-field v-model="phone" rounded outlined label="Phone" required></v-text-field>
              </v-col>
               <v-col cols="4" sm="3">
                <v-select v-if="!isLogin" rounded  outlined  :items="['Citizen', 'Leader']" v-model="status" label="Status" required></v-select>
              </v-col>
              <v-col cols="4" md="3">
                <v-select v-if="!isLogin" rounded  outlined  :items="['Male', 'Female']" v-model="Gender" label="Gender" required></v-select>
              </v-col>
              <v-col cols="4" md="5">
                <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  label="Password"
                  hint="At least 8 characters"
                  counter
                  rounded
                  outlined
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-col>
                
            </v-row>
           
          </v-container>
          <small>* kavuga ibyingenzi</small>
        
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="pink darken-3" @click="onSubmitted">{{ isLogin ? 'injira' : 'komeza' }}</v-btn>
          <v-btn rounded small color="black darken-3" text @click="isLogin = !isLogin">{{ isLogin ? 'iyandikishe?' : 'mfite konti yanjye!' }}</v-btn>
        
        </v-card-actions>
        </v-flex>
        </v-layout>

      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
 export default {
    data: () => ({
      isibo: {
        _id: 'undefined',
        name: 'not-set',
        province: 'not-set',
        district: 'not-set',
        village: 'not-set'
      },
      show1: false,
      alert: false,
      isLogin: true,
      dialog: false,
      status: '',
      NationalId: '',
      name: '',
      email: '',
      phone: '',
      isAdmin: false,
      Gender: '',
      password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
        },
    }),
    computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
    methods: {
       async onLogout(){     
        await this.$auth.logout();
        this.$router.push('/')
       },
       async onSubmitted() {
          if(this.status.toString() === 'Leader'){
              this.isAdmin = true
            }

          const userData = {
                NationalId: this.NationalId,
                name: this.name,
                email: this.email,
                phone: this.phone,
                isAdmin: this.isAdmin,
                isibo: this.isibo,
                Gender: this.Gender,
                password: this.password
          }
          if(this.isLogin){
             
            try {   
              await this.$auth.loginWith('local', {
                data: userData
              })
               this.$router.push('/Community/')
              this.dialog = false
            } catch (err) {
              this.error = err.response.data.message
            }
          }else{
             
            try {
              await this.$axios.post('/users/', {
                userData
              })

              await this.$auth.loginWith('local', {
                data: userData
              })
                this.dialog = false
              
            } catch (e) {
              this.error = e.response.data.message
            }
        
          
          }
      }
    }
  }
</script>

<style>
</style>