<template>
<v-container class="mt-9">
    <h5 style="font-size: 15px;font-family: 'Montserrat', sans-serif;">Overall payments<v-icon>mdi-arrow-down</v-icon></h5>
  <div class="payments">
    <v-row no-gutters justify="center" align="center">
        <v-col cols="8" md="5">
        <v-row no-gutters justify="center" align="center">
         <h5 style="font-size: 35px;font-family: 'Montserrat', sans-serif;">Bills and Charges<v-icon>mdi-arrow-down</v-icon></h5>
        </v-row>

        <v-row class="mt-5" no-gutters justify="center" align="center">
            <v-chip color="pink">
          <v-chip color="amber" small>
            Paid
          </v-chip>
          <v-icon>mdi-arrow-right</v-icon>
         <h3 style="font-family: 'Montserrat', sans-serif;">10,000 Rwf</h3>
         </v-chip>
        </v-row>

        <v-row class="mt-2" no-gutters justify="center" align="center">
          <v-chip color="amber">
           <v-chip color="pink" small>
            Unpaid
          </v-chip>
          <v-icon>mdi-arrow-right</v-icon>
         <h3 style="font-family: 'Montserrat', sans-serif;">30,000 Rwf</h3>
         </v-chip>
        </v-row>
       
       </v-col>

          <v-col cols="8" md="5">
            <img
            src="../../../assets/images/flame-space-adventures.png"
            width="320"
            />
          </v-col>
    </v-row>
    
  </div>
<v-divider class="mt-5"/>
<h5 style="font-size: 15px;font-family: 'Montserrat', sans-serif;">Details <v-icon>mdi-arrow-down</v-icon></h5>
  <div class="details mt-5">
    <v-row no-gutters justify="center" align="center">
    <v-subheader style="font-family: 'Montserrat', sans-serif;">Remind all<v-icon>mdi-arrow-down</v-icon></v-subheader>  
    </v-row>  
      <v-row no-gutters justify="center" align="center">
          <v-col
           cols="10"
           md="10"
           sm="5"
          >
           <v-row no-gutters justify="center" align="center">
               <v-col
                cols="3"
                md="3"
               >
                <v-avatar>
                  <img
                   src="../../../assets/images/boy.png"
                  />
                </v-avatar>
               </v-col>
               <v-col cols="3" md="3">
                 <h5 style="font-family: 'Montserrat', sans-serif;">Moses karangwa</h5>
               </v-col>
               <v-col
                cols="4"
                md="4"
               >
                 <v-subheader><b>1000.0 Rwf</b></v-subheader> 
               </v-col>

               <v-col
                cols="2"
                md="2"
               >
                 <v-btn small fab color="pink lighten-2">
                   <v-icon>mdi-twitch</v-icon>
                 </v-btn>
               </v-col>

           </v-row>
          </v-col>
      </v-row>
     
  </div>
</v-container>
</template>

<script>
import Dialog from '~/components/Leader/Dialog'
export default {
  data(){
   return{
     dialog: false
   }
  },
  components:{
    Dialog
  }
}
</script>

<style scoped>
.payments{
     border: 1px solid #ccc;
     background-color: lightgray;
     border-radius: 45px;
     height: auto;
     width: auto;
}
 .details{
     border: 1px solid #ccc;
   background-color: lightpink;
     border-radius: 45px;
     height: auto;
     width: auto;
 }
</style>