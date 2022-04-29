<template>
 <v-container class="mt-6"> 
      <div class="profile">
    <v-row no-gutters justify="center" align="center">
      <v-col class="mt-4" cols="9" md="5">

            <v-row no-gutters justify="left" align="left">
                 <h5 style="font-size: 39px;font-family: 'Montserrat', sans-serif;">My Profile<v-icon right>mdi-arrow-down</v-icon></h5>
            </v-row>

            <v-row no-gutters justify="left" align="left">
                <v-icon class="mt-3" color="pink" large>mdi-face</v-icon>
                <v-subheader style="font-size: 15px;font-family: 'Montserrat', sans-serif;">{{loggedInUser.name}}</v-subheader>  
            </v-row>

            <v-row no-gutters justify="left" align="left">
                <v-icon class="mt-3" color="pink" large>mdi-mail</v-icon>
                <v-subheader style="font-size: 15px;font-family: 'Montserrat', sans-serif;">{{loggedInUser.email}}</v-subheader>
            </v-row>

            <v-row no-gutters justify="left" align="left">
                <v-icon class="mt-3" color="pink" large>mdi-card</v-icon>
                <v-subheader style="font-size: 15px;font-family: 'Montserrat', sans-serif;">{{loggedInUser.NationalId}}</v-subheader>
            </v-row>

            <v-row class="mt-3" no-gutters justify="center" align="center">
                <v-btn rounded color="pink">
                  <v-icon left>mdi-account-circle</v-icon>
                  <h5 style="font-family: 'Montserrat', sans-serif;">edit</h5>
                </v-btn>
            </v-row>
        </v-col>

          <v-col cols="8" md="5">
          <div>
            <img
            src="../../../assets/images/sign-up-3.png"
            width="240"
            />
          </div>
          </v-col>
      </v-row>
      
     </div>
         <h5 class="mt-5" style="font-size: 15px;font-family: 'Montserrat', sans-serif;">Awards and trophies<v-icon right>mdi-arrow-down</v-icon></h5>
      <v-divider/>
      <Awards class="mt-5"/>
  </v-container>
</template>

<script>

import Awards from '~/components/profile/Awards'
import { mapGetters } from 'vuex'

  export default {
     computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
    },
      components:{
        Awards,
      },
      
    data: () => ({
       dialog: false,
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' }
        ],
    }),
    
  }
</script>


<style>
.profile{
     border: 1px solid #ccc;
     background-color: thistle;
     border-radius: 45px;
     height: auto;
     width: auto;
}
</style>