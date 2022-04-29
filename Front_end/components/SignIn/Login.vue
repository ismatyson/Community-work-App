<template>
 <v-row justify="center">
    <v-dialog v-if="!citizen" v-model="dialog" persistent max-width="1000px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          rounded
          style="margin-right: 150px"
          color="pink darken-1"
        >
          <h5 style="font-family: 'Montserrat', sans-serif;" v-if="isAuthenticated">{{loggedInUser.name}}</h5>
          <h5 class="bold" v-if="!isAuthenticated">Log-in</h5>
          <v-icon dark small color="black" right>mdi-export</v-icon>
        </v-btn>
        
      </template>

      <v-card color="purple lighten-5">
          <div class="pa-3 ml-2" justify-center>
            <v-btn icon outlined color="pink darken-3" text @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
        </div>
        <v-layout wrap justify-space-between>
          <v-flex class="hidden-sm-and-down" mg3 lg3>
         <img src="../../assets/images/flame-space-adventures.png" width="400px">
        </v-flex>

         <v-flex xs12 md7 lg7 class="mr-5">
        
          <v-container>
            <v-row>
                <v-col  cols="12" md="4">
                  <h5 style="font-size: 50px;font-family: 'Montserrat', sans-serif;">LogIn</h5>
                </v-col>
              <v-divider/>
              <v-col cols="12" sm="9" md="9">
                 <v-row no-gutters justify="center" align="center">
                     <v-col cols="12" md="12">
                     <v-btn rounded @click="Leader=!Leader" color="pink" outlined x-large>
                         <v-icon left large>mdi-key</v-icon>Log in as a Leader 
                     </v-btn>
                     </v-col>
                 </v-row>
                 <v-divider>or</v-divider>
                 <v-row no-gutters justify="center" align="center">
                     <v-col cols="12" md="12">
                     <v-btn rounded @click="citizen=!citizen" color="amber" outlined x-large>
                         <v-icon left large>mdi-face</v-icon>Log in as a Citizen 
                     </v-btn>
                     </v-col>
                 </v-row>

              </v-col>
            </v-row>
          </v-container>

         </v-flex>

        </v-layout>
      </v-card>
    </v-dialog>
    <Signin v-if="citizen"/>
      <LeaderSignin v-if="Leader"/>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import Signin from '~/components/SignIn/Signin'
import LeaderSignin from '~/components/SignIn/LeaderSignin'
 export default {
   components: {
       Signin,
       LeaderSignin
   },
   data(){
       return{
           citizen: false,
           Leader: false
       }
   },
     computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  }
</script>

<style>
</style>