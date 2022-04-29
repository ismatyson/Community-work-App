<template>
  <v-container class="mt-9">
      <v-row no-gutters justify="center" align="center">
       <v-col cols="7" md="9">
       <h5 style="font-size: 15px;font-family: 'Montserrat', sans-serif;">Details <v-icon>mdi-arrow-down</v-icon></h5>
       </v-col>

       <v-col cols="7" md="3">
         <v-btn small rounded color="pink lighten-2">
          <h5 style="font-size: 15px;font-family: 'Montserrat', sans-serif;"><v-icon left>mdi-plus</v-icon>add a citizen</h5>
         </v-btn>
       </v-col>
      </v-row>
  <div class="details mt-5">
    <v-row class="mt-3" no-gutters justify="center" align="center">
         <v-col class="ml-9" cols="12" md="3">
             <h5 style="font-size: 15px;font-family: 'Montserrat', sans-serif;">Citizen<v-icon right>mdi-arrow-down</v-icon></h5>
         </v-col>
         <v-col class="ml-3" cols="12" md="4">
             <h5 style="font-size: 15px;font-family: 'Montserrat', sans-serif;">isibo<v-icon right>mdi-arrow-down</v-icon></h5>
         </v-col>
     </v-row>

      <v-row class="mt-2" no-gutters justify="center" align="center">
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
                 <v-subheader><b>Ingenzi</b></v-subheader> 
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
export default {

}
</script>

<style scoped>
 .details{
     border: 1px solid #ccc;
     background-color: lightgrey;
     border-radius: 45px;
     height: auto;
     width: auto;
 }
</style>