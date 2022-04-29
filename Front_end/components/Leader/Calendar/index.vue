<template>
<v-container class="mt-9">
    <h5 style="font-size: 15px;font-family: 'Montserrat', sans-serif;">My Calendar and events<v-icon right>mdi-arrow-down</v-icon></h5>
  <div class="bery">
    <v-row no-gutters justify="left" align="left">
      <v-col cols="12" md="7">

       <v-row class="mt-9" justify="center" align="center">
         <v-col cols="6" md="8">
            <h5 style="font-size: 33px;font-family: 'Montserrat', sans-serif;">Manage and create Meet-ups<v-icon>mdi-arrow-down</v-icon></h5>
             <Dialog class="mt-4"/>
         </v-col>
        </v-row>

        </v-col>

          <v-col cols="12" md="3">
            <img
            src="../../../assets/images/cherry-coming-soon.png"
            width="310"
            />
          </v-col>
      </v-row>
      
  </div>
<v-divider class="mt-5"/>
<h5 style="font-size: 15px;font-family: 'Montserrat', sans-serif;">Scheduled meet-ups <v-icon>mdi-arrow-down</v-icon></h5>
  <div class="events mt-5">
      
      <v-row no-gutters justify="center" align="center">
          <v-col
           cols="6"
           md="10"
           sm="5"
          >
           <v-row no-gutters>
               <v-col
                cols="12"
                md="5"
               >
                 <h2 style="font-size: 55px;font-family: 'Montserrat', sans-serif;" class="pa-2 ml-3">15th</h2> 
               </v-col>
               <v-col
                cols="12"
                md="7"
               >
                  <v-chip color="pink" outlined class="mt-3" small><h5 class="ml-2">Umuganda</h5></v-chip>
                 <p class="pa-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p> 
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
.bery{
     border: 1px solid #ccc;
     background-color: thistle;
     border-radius: 45px;
     height: auto;
     width: auto;
}
 .events{
     border: 1px solid #ccc;
   background-color: thistle;
     border-radius: 45px;
     height: auto;
     width: auto;
 }
</style>