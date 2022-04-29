<template>
<v-container>
    <h5 style="font-size: 15px;font-family: 'Montserrat', sans-serif;">Overall payments<v-icon>mdi-arrow-down</v-icon></h5>
  <div class="payments">
    <v-row no-gutters justify="center" align="center">
        <v-col cols="8" md="5">
        <v-row no-gutters justify="center" align="center">
         <h5 class="hidden-sm-and-down" style="font-size: 35px;font-family: 'Montserrat', sans-serif;">Bills and Charges<v-icon>mdi-arrow-down</v-icon></h5>
        </v-row>

        <v-row class="mt-5" no-gutters justify="center" align="center">
            <v-chip color="pink">
          <v-chip color="amber" small>
            Paid
          </v-chip>
          <v-icon>mdi-arrow-right</v-icon>
         <h3 style="font-family: 'Montserrat', sans-serif;">0 Rwf</h3>
         </v-chip>
        </v-row>

        <v-row class="mt-2" no-gutters justify="center" align="center">
          <v-chip color="amber">
           <v-chip color="pink" small>
            Unpaid
          </v-chip>
          <v-icon>mdi-arrow-right</v-icon>
         <h3 style="font-family: 'Montserrat', sans-serif;">{{loggedInUser.charges}} Rwf</h3>
         </v-chip>
        </v-row>
       
       </v-col>

          <v-col cols="8" md="5">
            <img
            src="../../assets/images/flame-space-adventures.png"
            width="320"
            />
          </v-col>
    </v-row>
    
  </div>
<v-divider class="mt-5"/>
<h5 style="font-size: 15px;font-family: 'Montserrat', sans-serif;">Unpaid Bills<v-icon small>mdi-arrow-down</v-icon></h5>
  <div class="details mt-5">
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
                <v-icon large color="pink darken-3">mdi-alarm</v-icon>
               </v-col>
               <v-col cols="3" md="3">
                <v-chip small color="amber">
                 <h5 style="font-family: 'Montserrat', sans-serif;">Total Bills</h5>
                </v-chip>
               </v-col>
               <v-col
                cols="4"
                md="4"
               >
                 <v-subheader><b>{{loggedInUser.charges}} Rwf</b></v-subheader> 
               </v-col>

               <v-col
                cols="2"
                md="2"
               >
                 <BillsDialog/>
               </v-col>

           </v-row>
          </v-col>
      </v-row>
     
  </div>
</v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import BillsDialog from '~/components/Community/BillsDialog'
export default {
  data(){
   return{
     dialog: false
   }
  },
  computed:{
    ...mapGetters(['loggedInUser'])
  },
  components:{
    BillsDialog
  }
}
</script>

<style scoped>
.payments{
     border: 1px solid rgb(212, 177, 212);
     background-color: rgb(212, 177, 212);
     border-radius: 45px;
     height: auto;
     width: auto;
}
 .details{
     border: 1px solid rgb(212, 177, 212);
   background-color: rgb(212, 177, 212);
     border-radius: 25px;
     height: auto;
     width: auto;
 }
</style>