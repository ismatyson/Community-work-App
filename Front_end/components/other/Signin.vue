<template>
 <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="1000px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          rounded
          style="margin-right: 150px"
          small
          color="pink darken-1"
        >
          <h5 style="font-family: 'Montserrat', sans-serif;" v-if="isAuthenticated">{{loggedInUser.name}}</h5>
          <h5 class="bold" v-if="!isAuthenticated">Sign-in</h5>
          <v-icon dark small color="black" right>mdi-export</v-icon>
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
         <img src="../../assets/images/kingdom-2.png" width="400px">
        </v-flex>

        <v-flex xs9 md7 lg7 class="mr-5">
        
          <v-container>
            <h1 style="font-family: 'Montserrat', sans-serif;">Uzuza</h1>
            <v-row>
              
              <v-col cols="12" sm="4" md="4">
                <v-text-field v-if="!isLogin" v-model="NationalId" label="Irangamuntu*" hint="imibare 16" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                  v-if="!isLogin"
                  v-model="name"
                  label="amazina*"
                  hint="amazina yawe yombi"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field v-if="!isLogin" v-model="email" label="email*" required></v-text-field>
              </v-col>
              
               <v-col cols="4" sm="4">
                <v-autocomplete
                  v-if="!isLogin"
                  v-model="province"
                  :items="['Kigali city', 'Nothern', 'Southern', 'Eastern', 'Western']"
                  label="Intara"
                  required
                ></v-autocomplete>
              </v-col>
               <v-col cols="4" sm="4">
                <v-autocomplete
                  v-if="!isLogin"
                  v-model="district"
                  :items="['Nyarugenge', 'Kicukiro', 'Gasabo']"
                  label="Umurenge"
                  required
                ></v-autocomplete>
              </v-col>
              <v-col cols="4" sm="4">
                <v-text-field v-if="!isLogin" v-model="village" label="Umudugudu*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field v-model="phone" label="Phone" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field v-model="password" label="Password*" type="password"  hint="uvange imibare nibimenyetso" required></v-text-field>
              </v-col>
              
            </v-row>
           
          </v-container>
          <small>* kavuga ibyingenzi</small>
        
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn  outlined color="pink darken-3" text @click="onSubmitted">{{ isLogin ? 'injira' : 'komeza' }}</v-btn>
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
      alert: false,
      isLogin: true,
      dialog: false,
      NationalId: '',
      name: '',
      email: '',
      phone: '',
      province: '',
      district: '',
      village: '',
      password: ''
    }),
    computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
    methods: {
       async onLogout(){     
        await this.$auth.logout();
        this.$router.push('/community')
       },
       async onSubmitted() {
          const userData = {
                NationalId: this.NationalId,
                name: this.name,
                email: this.email,
                phone: this.phone,
                province: this.province,
                district: this.district,
                village: this.village,
                password: this.password
          }
          if(this.isLogin){
             
            try {   
              await this.$auth.loginWith('local', {
                data: userData
              })
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