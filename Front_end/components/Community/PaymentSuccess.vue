<template>
<v-container class="mt-3">
         <h5 style="font-size: 12px;font-family: 'Montserrat', sans-serif;">Payment status  <v-icon color="pink" small left>mdi-arrow-down</v-icon></h5>
  {{userInfo}}
  <v-divider/>
  <v-row align="center" justify="center">
  <v-col cols="12" md="12">
      <div class="community-title">
       <v-row no-gutters justify="center" align="center">
         <v-col cols="12" md="8">
           <h5 class="red--text" style="font-size: 44px;font-family: 'Montserrat', sans-serif;">Bill payment was completed! <v-icon color="pink" left>mdi-checkbox-marked-circle</v-icon></h5>  
         </v-col>
       </v-row>
      </div>
        <h5 class="mt-3" style="font-size: 12px;font-family: 'Montserrat', sans-serif;">Payment summary <v-icon color="pink" small left>mdi-arrow-down</v-icon></h5>
       <v-divider/>
       <v-row class="mt-3" no-gutters justify="center" align="center">
         <v-col cols="4" md="4">
           <h5 style="font-size: 13px;font-family: 'Montserrat', sans-serif;">Amount paid: </h5>  
         </v-col>
         <v-col cols="5" md="5">
           <v-chip color="green"><h5 style="font-size: 13px;font-family: 'Montserrat', sans-serif;">2000 Rwf</h5></v-chip>  
         </v-col>
       </v-row>
        <v-row class="mt-3" no-gutters justify="center" align="center">
         <v-col cols="4" md="4">
           <h5 style="font-size: 13px;font-family: 'Montserrat', sans-serif;">Remaining: </h5>  
         </v-col>
         <v-col cols="5" md="5">
           <v-chip color="pink"><h5 style="font-size: 13px;font-family: 'Montserrat', sans-serif;">0 Rwf</h5></v-chip>  
         </v-col>
       </v-row>
        <v-row class="mt-3" no-gutters justify="center" align="center">
         <v-col cols="4" md="4">
           <h5 style="font-size: 13px;font-family: 'Montserrat', sans-serif;">Date: </h5>  
         </v-col>
         <v-col cols="5" md="5">
           <h5 style="font-size: 13px;font-family: 'Montserrat', sans-serif;">0</h5>  
         </v-col>
       </v-row>
       

  <v-divider class="mt-5"/>
  

  <v-row class="mt-3" no-gutters justify="center" align="center">
         <v-col cols="12" md="12">
           <v-btn :to="'/Community/'" small color="red">Return home <v-icon small>mdi-arrow-right</v-icon></v-btn>  
         </v-col>
       </v-row>
  </v-col>
  </v-row>

  
</v-container>
</template>

<script>
export default {
  props:{
    userInfo:{
      type: Object,
      required: true
    }
  },
  data(){
   return{
     dialog: false,
     search:''
   }
  },
}
</script>

<style scoped>
.community-title{
  border: 1px solid  rgb(209, 160, 209);
  box-shadow: 0 1px 1px #ccc;
  background-image: url('../../assets/images/pale-139.png');
  background-position: center;
  border-radius: 35px;
  width: auto;
  height: auto;
}
.community{
  border: 1px solid  rgb(216, 156, 216);
  box-shadow: 0 1px 1px #ccc;
  border-radius: 15px;
  width: auto;
  height: auto;
}
</style>