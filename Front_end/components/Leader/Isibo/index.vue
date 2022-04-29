<template>
  <v-container fluid>
     <h3 style="font-size: 15px;font-family: 'Montserrat', sans-serif;">
            My isibo<v-icon small right>mdi-arrow-down</v-icon></h3>
      <v-row justify="center" no-gutters align="center">
           <div class="projy mt-3">
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

                <v-row justify="center" align="center">
                <h3 style="font-size: 35px;font-family: 'Montserrat', sans-serif;" class="mt-3">Hi, {{loggedInUser.name}}</h3>
                </v-row>
               </v-col>
              <v-col
               cols="10"
                md="9"
              >
                
           
                <v-row no-gutters justify="center" align="center">
                  <v-col cols="2" md="2">
                  <v-icon class="mt-3" color="black" small>
                    mdi-arrow-right
                  </v-icon>
                  </v-col>
                  <v-col cols="10" md="10">
                    <v-subheader>You have {{meetups.length}} meetings in your community to attend this week.</v-subheader>
                  </v-col>
                 </v-row>
               
              </v-col>

              
            </v-row>
             <v-row justify="center" align="center">
                  <v-col cols="2" md="2">
                    <v-progress-circular
                     v-if="loggedInUser.charges>1000 && loggedInUser.charges<3000"
                      :value="40"
                      :rotate="180"
                      :size="100"
                      :width="15"
                      color="primary"
                      >
                      40%
                      </v-progress-circular>

                    <v-progress-circular 
                      v-else-if="loggedInUser.charges>3000" 
                      :value="20"
                      :rotate="180"
                      :size="80"
                      :width="10"
                      color="pink"
                    >
                    20%
                    </v-progress-circular>

                    <v-progress-circular
                     v-else-if="loggedInUser.charges===0" 
                     :value="95"
                      :rotate="180"
                      :size="100"
                      :width="15"
                      color="teal"
                     >95%</v-progress-circular>
                  
                    <v-progress-circular 
                    v-else 
                    :value="70"
                      :rotate="180"
                      :size="100"
                      :width="15"
                      color="primary"
                    >
                    70%
                    </v-progress-circular>
                  
                  </v-col>

                  <v-col  cols="7" md="7">
                    <v-subheader class="mt-3" v-if="loggedInUser.charges>1000 && loggedInUser.charges<3000">
                      Your participation in community work is fair!
                      </v-subheader>
                      <v-subheader v-else-if="loggedInUser.charges>3000">
                      Your participation in community work is unfair!, the risk to be removed from this community is high!
                      </v-subheader>
                    <v-subheader v-else>Your community work attendance is prommising.</v-subheader>
                  </v-col>
             </v-row>

      
            
          </div>
          
      </v-row>
   <v-divider class="mt-5"/>
             <v-row
       justify="left"
       no-gutters
       class="mt-1"
      >
        <v-col>
          <h3 style="font-size: 15px;font-family: 'Montserrat', sans-serif;">
            Reminders<v-icon small right>mdi-arrow-down</v-icon></h3>
        </v-col>
      </v-row>

     <v-layout row>

        <v-col v-for="item in items" :key="item.id" cols="6" md="6">
          <div class="cardy">
            <v-row 
             justify="center"
             no-gutters
             align="center"
             :color="item.icon"
            >
               <v-col 
                cols="4"
                md="4"
                class="mt-5"
               >
               <div justify="center" align="center" class="round">
                <img
                 :src="item.icon"
                 width="56"
                />
               </div>
               </v-col>
      
              <v-col
               cols="7"
               md="5"
              >
                
              <v-row v-if="(item.subheader == 'Meeting(s)')" justify="center" align="center">
              <h3 style="font-size: 30px;font-family: 'Montserrat', sans-serif;">{{meetups.length}}</h3>
              </v-row> 
             
               <v-row v-else justify="center" align="center">
              <h3 style="font-size: 30px;font-family: 'Montserrat', sans-serif;">{{item.text}}</h3>
              </v-row>
               <v-row justify="center">
                <v-chip :color="item.color" small>
                  <h6>{{item.subheader}}</h6>
                </v-chip>
              </v-row>              
              
              </v-col>
            </v-row>
          </div>
        </v-col>

     </v-layout>

  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props:{
      citizen: {
          type: Object,
          required: true
      },
      meetups:{
         type: Array,
          required: true
      }
    },
    mounted(){
      if (this.isibo && this.isibo.length > 0) return;
      this.$store.dispatch('getMyIsibo')
    },
   computed: {
    ...mapGetters(['isAuthenticated','loggedInUser','isibo'])
    },

     data(){
   return{
     meetings: [],
     count: 0,
     items: [
       { icon: require('../../../assets/images/clock (1).png'), text: '40k' ,subheader: ' arrived on time', color: 'lime'},
        { icon: require('../../../assets/images/calendar.png'),subheader: 'Meeting(s)', color: 'purple'},
         { icon: require('../../../assets/images/forum.png'), text: '30k' ,subheader: 'Attended', color: 'amber'},
          { icon: require('../../../assets/images/close.png'), text: '20' ,subheader: 'Rejected', color: 'pink'},
     ]
   }
   
 }
}
</script>

<style scoped>
.cardy {
  border: 1px solid rgb(212, 177, 212);;
   background-color: rgb(212, 177, 212);
  height: 85px;
  border-radius: 24px;
}
 .projy {
  border-radius: 25px;
  box-shadow: 0 1px 1px #ccc;
  width: auto;
  border: 1px solid rgb(212, 177, 212);;
   background-color: rgb(212, 177, 212);
}
.projects{
  border-radius: 25px;
  box-shadow: 0 1px 1px #ccc;
  width: 540px;
  border: 1px solid rgb(212, 177, 212);;
   background-color: rgb(212, 177, 212);
}
</style>