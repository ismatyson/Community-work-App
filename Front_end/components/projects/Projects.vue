<template>
  <v-container fluid>
    <h5 style="font-size: 15px;font-family: 'Montserrat', sans-serif;">My Dashboard<v-icon right>mdi-arrow-down</v-icon></h5>
      <v-row justify="center" no-gutters align="center">
           <div class="projy">
            <v-row 
             justify="center"
             align="center"
             no-gutters
            >
               <v-col 
                cols="12"
                md="9"
                sm="3"
               >
                <v-row no-gutters justify="center" align="center">
                <h3 style="font-size: 35px;font-family: 'Montserrat', sans-serif;" class="mt-5">Hi, {{loggedInUser.name}}</h3>
                </v-row>
               </v-col>
              <v-col
               cols="10"
              >
                
                <v-divider class="mt-3"/>
                <v-row no-gutters justify="left" align="left">
                <v-subheader class="ml-4 mt-2">You have 6 meetings you prepared for the audience this week.</v-subheader>
                <v-subheader class="ml-4">Your progress is fair.</v-subheader>
                 </v-row>
                     <v-btn outlined fab small rounded>
                            <v-icon>mdi-arrow-right</v-icon>
                    </v-btn>
               
              </v-col>

              
            </v-row>
            
          </div>
          
      </v-row>

  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
   computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
    },
}
</script>

<style scoped>
 .projy {
  border: 1px solid #ccc;
  border-radius: 25px;
  box-shadow: 0 1px 1px #ccc;
  width: auto;
  background-color: #ccc;
}
.projects{
  border: 1px solid #ccc;
  border-radius: 25px;
  box-shadow: 0 1px 1px #ccc;
  width: 540px;
  background-color: lightsalmon;
}
</style>