<template>
<v-container class="mt-3">
  <v-row align="center" justify="center">
  <v-col cols="12" md="12">
    <div class="community-title">
       <v-row no-gutters justify="center" align="center">
         <v-col cols="12" md="8">
           <h5 class="pink--text" style="font-size: 28px;font-family: 'Montserrat', sans-serif;"><v-icon color="pink" left>mdi-chevron-right</v-icon> Join a community</h5>  
           <v-subheader class="pink--text">Choose a community from the available ones or enter an id of your Leader.</v-subheader>
         </v-col>
       </v-row>
       <v-row justify="center" align="center">
         <v-col cols="10" md="9">
             <v-text-field
              solo-inverted
              
              dense
              rounded
              hide-details
              label="or enter a leader id..."
              prepend-inner-icon="mdi-rocket"
              color="pink"
              background-color="pink"
              v-model="search"
            >
      </v-text-field>
         </v-col>
       </v-row>
    </div>
  </v-col>
  </v-row>

  <h5 style="font-family: 'Montserrat', sans-serif;">available communities <v-icon small>mdi-arrow-down</v-icon></h5> 
<v-divider class="mt-2"/>
  <v-row v-if="communities" justify="center">
    <v-col cols="12" md="12">
  <div v-for="community in communities" :key="community.id" class="community">
           <v-row class="mt-2" justify="center" align="left" no-gutters>
               <v-col
                cols="6"
                md="8"
               >
                 <h5 style="font-size: 20px;font-family: 'Montserrat', sans-serif;">{{community.name}} community</h5> 
               </v-col>
               
           </v-row>
  
     <v-row justify="center" align="center" no-gutters>
         <v-col cols="4" md="4">
          <v-subheader>Joined <b class="ml-2">{{community.PeopleJoined}}</b></v-subheader>
         </v-col>
          <v-col
                cols="4"
                md="4"
               >
                <v-subheader>Total citizens <b class="ml-2">{{community.NumberofPeople}}</b></v-subheader>
          </v-col>
           <v-col
                cols="2"
                md="2"
               >
                <isibo :post="community"/>
                </v-col>
     </v-row>
</div>
    </v-col>
  </v-row>
  <v-row v-else>
   <img
   src="../../assets/images/pluto-bad-gateway-1.png"
   width="520"
   />
  </v-row>
</v-container>
</template>

<script>
import isibo from '~/components/Community/isibo'
export default {
  props:{
    communities:{
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
  components: {
      isibo
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