<template>
<v-container>
  <v-col cols="12" md="12">
            <div class="dialogy">
        <v-row class="mt-2" no-gutters justify="left" align="left">
            <v-col cols="10" md="8">  
                <h5 class="ml-5" style="font-family: 'Montserrat', sans-serif;">Meetup Brief <v-icon>mdi-chevron-right</v-icon> {{post.date}}</h5>  
            </v-col>
        </v-row>
            
        <v-row class="mt-2" no-gutters justify="center" align="center">
            <v-col cols="10" md="8">    
                <h5 style="font-size: 40px;font-family: 'Montserrat', sans-serif;"><v-icon left>mdi-checkbox-marked-circle-outline</v-icon>{{post.event}}</h5>
            </v-col>
        </v-row>
        
        <v-row class="mt-2" justify="left" align="left">
            <v-col cols="12" md="5">
              <h5 class="ml-5" style="font-family: 'Montserrat', sans-serif;">Participation<v-icon left>mdi-chevron-right</v-icon></h5>
            </v-col>
            <v-col class="pa-2" cols="12" md="3">
              <v-btn small :to="'/Leader/Meeting/Brief/attended/' + post._id" color="lime" rounded>
                <h4 style="font-family: 'Montserrat', sans-serif;">{{post.arrivals.length}} <small>attended</small></h4>
              </v-btn>
            </v-col>
            <v-col class="pa-2" cols="12" md="3">
              <v-btn small :to="'/Leader/Meeting/Brief/missed/' + post._id" rounded color="pink darken-3">
                <h4 style="font-family: 'Montserrat', sans-serif;">{{post.missed.length}} <small>missed</small></h4>
              </v-btn>
            </v-col>
     </v-row>
        </div>

         <h5 class="mt-2" style="font-family: 'Montserrat', sans-serif;">Time<v-icon small right>mdi-arrow-down</v-icon></h5>
            
           <v-row no-gutters justify="center" align="center">
            <v-col cols="5" md="4">
              <div class="time">
               <v-col cols="12" md="12">
                 <v-row no-gutters justify="center" align="center">
                   <h5 style="font-size: 14px;font-family: 'Montserrat', sans-serif;">Start</h5>
                 </v-row>
                  <v-row no-gutters justify="center" align="center">
                    <v-icon left small>mdi-chevron-right</v-icon>
                   <h5 style="font-size: 24px;font-family: 'Montserrat', sans-serif;">{{post.start}}</h5>
                 </v-row>
               </v-col>
              </div>
            </v-col>
            <v-col class="ml-4" cols="5" md="4">
              <div class="time">
                <v-col cols="12" md="12">
                 <v-row no-gutters justify="center" align="center">
                   <h5 style="font-size: 14px;font-family: 'Montserrat', sans-serif;">End</h5>
                 </v-row>
                 <v-row no-gutters justify="center" align="center">
                   <v-icon left small>mdi-chevron-right</v-icon>
                   <h5 style="font-size: 24px;font-family: 'Montserrat', sans-serif;">{{post.end}}</h5>
                 </v-row>
               </v-col>
              </div>
            </v-col>
          </v-row>
     
     <v-row class="mt-4" justify="left" align="left">
            <v-col cols="8" md="3">
              <h5 style="font-family: 'Montserrat', sans-serif;">Remarks<v-icon small color="black" right>mdi-arrow-right</v-icon></h5>
            </v-col>
            
            <v-col cols="5" md="6">
              <h5 style="font-family: 'Montserrat', sans-serif;">{{post.brief}}</h5>
            </v-col>
          </v-row>
  

           <div class="mt-3 related">
             <v-row no-gutters justify="center" align="center">
            <v-col cols="4" md="4">
             <h5 class="pa-4" style="font-family: 'Montserrat', sans-serif;"><v-icon left color="black">mdi-car</v-icon>Place</h5>
            </v-col>
            <v-divider vertical/>

            <v-col cols="4" md="5">
            
                <h5 class="ml-3" style="font-family: 'Montserrat', sans-serif;">{{post.place}}</h5>
           
            </v-col>
             </v-row>
           </div>

            <div class="mt-2 related">
             <v-row no-gutters justify="center" align="center">
            <v-col cols="4" md="4">
             <h5 class="pa-4" style="font-family: 'Montserrat', sans-serif;"><v-icon left color="black">mdi-account</v-icon>Guests</h5>
            </v-col>
            <v-divider vertical/>

            <v-col cols="4" md="5">
               <v-chip small outlined class="ml-3" v-for="guest in post.invitees" :key="guest.id" >
                <h5 style="font-family: 'Montserrat', sans-serif;">{{guest}}</h5>
               </v-chip>
            </v-col>
             </v-row>
           </div>

            <div class="mt-2 related">
             <v-row no-gutters justify="center" align="center">
            <v-col cols="4" md="4">
             <h5 class="pa-4" style="font-family: 'Montserrat', sans-serif;"><v-icon left color="black">mdi-spade</v-icon>Tools</h5>
            </v-col>
            <v-divider vertical/>

            <v-col cols="4" md="5">
                <v-chip small outlined class="ml-3" v-for="tool in post.tools" :key="tool.id" >
                <h5 style="font-family: 'Montserrat', sans-serif;">{{tool}}</h5>
               </v-chip>
            </v-col>
             </v-row>
           </div>

        
     
  </v-col>
       
</v-container>
  
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props:{
   post:{
     type: Object,
     required: true
   }
  },
  computed:{
    ...mapGetters(['loggedInUser'])
  },
  data(){
   return{
    joined: 0,
    join: false,
    meeting: []
   }
  },

  head: {
    title: 'meeting-summary'
  },
  
  
}
</script>

<style scoped>
.dialogy{
  border: 1px solid rgb(173, 172, 172);
  border-radius: 23px;
}
.related{
  border: 1px solid rgb(214, 154, 214);
  border-radius: 13px;
}
.attendance{
  border: 1px solid rgb(192, 136, 136);
  border-radius: 23px;
}
.participant{
  background-color: rgb(167, 121, 167);
  border: 1px solid rgb(218, 178, 218);
  height: 40px;
  width: auto;
  border-radius: 13px;
}
.time{
  border: 1px solid rgb(173, 172, 172);
  height: 70px;
  width: auto;
  border-radius: 13px;
}
 </style>