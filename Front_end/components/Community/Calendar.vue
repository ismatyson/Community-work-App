<template>
<v-container fluid>
 <div class="events">
    <v-row no-gutters justify="center" align="center">
        <v-col cols="8" md="6">
        <v-row no-gutters justify="center" align="center">
         <h5 style="font-size: 35px;font-family: 'Montserrat', sans-serif;">Events Calendar</h5>
         <h6 class="mt-3" style="font-family: 'Montserrat', sans-serif;">upcoming event countdown <v-icon small right>mdi-arrow-down</v-icon></h6>
        </v-row>

        <v-row justify="space-between" align="center">
            <v-col cols="4" md="4">
              <div class="count">
                <v-col cols="12" md="12">
                <v-row justify="center" align="center">
                    <h6 style="font-family: 'Montserrat', sans-serif;">days <v-icon small>mdi-arrow-down</v-icon></h6>
                </v-row>
                <v-row class="mt-1" justify="center" align="center">
                    <h5 style="font-size: 20px;font-family: 'Montserrat', sans-serif;">0</h5>
                </v-row>
                 </v-col>
              </div>
            </v-col>

            <v-col cols="4" md="4">
              <div class="count">
                <v-col cols="12" md="12">
                <v-row justify="center" align="center">
                    <h6 style="font-family: 'Montserrat', sans-serif;">hrs <v-icon small>mdi-arrow-down</v-icon></h6>
                </v-row>
                <v-row class="mt-1" justify="center" align="center">
                    <h5 style="font-size: 20px;font-family: 'Montserrat', sans-serif;">0</h5>
                </v-row>
                 </v-col>
              </div>
            </v-col>

            <v-col cols="4" md="4">
              <div class="count">
                <v-col cols="12" md="12">
                <v-row justify="center" align="center">
                    <h6 style="font-family: 'Montserrat', sans-serif;">mns <v-icon small>mdi-arrow-down</v-icon></h6>
                </v-row>
                <v-row class="mt-1" justify="center" align="center">
                    <h5 style="font-size: 20px;font-family: 'Montserrat', sans-serif;">0</h5>
                </v-row>
                 </v-col>
              </div>
            </v-col>
        </v-row>

       
       </v-col>

          <v-col cols="8" md="4">
            <img
            src="../../assets/images/cherry-coming-soon.png"
            width="320"
            />
          </v-col>
    </v-row>
    
  </div>
<h5 class="mt-3" style="font-size: 15px;font-family: 'Montserrat', sans-serif;">All meet-ups <v-icon small>mdi-arrow-down</v-icon></h5>
  <v-row no-gutters v-for="meetup in meetings" :key="meetup.id">
    <v-col cols="12" md="12">
  <div v-if="(meetup.isibo._id.toString() === loggedInUser.isibo._id)" class="events mt-3">
      
      <v-row class="mt-2" no-gutters justify="center" align="center">
          <v-col
           cols="12"
           md="12"
          >
           <v-row no-gutters>
               <v-col
                cols="3"
                md="4"
               >
                 <h2 style="font-size: 20px;font-family: 'Montserrat', sans-serif;" class="pa-2 ml-3">{{meetup.date}}</h2> 
               </v-col>
               <v-col
                cols="5"
                md="5"
               >
                    <h5 style="font-family: 'Montserrat', sans-serif;">{{meetup.purpose}}</h5> 
                    <h5 class="pa-1"><v-icon left color="black" small>mdi-compass</v-icon>{{meetup.place}}</h5>  
                     <h6 class="mt-1" style="font-family: 'Montserrat', sans-serif;" v-if="meetup.status=== 'Ended'">Ended<v-icon right small>mdi-checkbox-marked-circle-outline</v-icon></h6>
               </v-col>

                <v-col
                cols="2"
                md="3"
                v-if="meetup.status=== 'Ended'"
               >
                 <v-btn outlined rounded small :to="'/Community/Meeting/brief/' + meetup._id" color="pink darken-3"  class="mt-2">
                    <h5 style="font-size: 13px;font-family: 'Montserrat', sans-serif;">Brief <v-icon small> mdi-calendar-text</v-icon></h5>
                  </v-btn>
               </v-col>
               <v-col
                cols="2"
                md="3"
                v-else
               >
                 <v-btn :to="'/Community/Calendar/' + meetup._id" fab text>
                  <v-icon large>mdi-chevron-right</v-icon>
                 </v-btn>
               </v-col>
           </v-row>
          </v-col>
      </v-row>
  </div>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import MeetingDialog from '~/components/Community/MeetingDialog'
export default {
  data(){
   return{
     dialog: false,
     mymeetups: [],
     meetings: []
   }
  },
   computed: {
    ...mapGetters(['isAuthenticated','meetings','loggedInUser'])
    },
  components: {
      MeetingDialog
  },
   mounted(){

     let meetups = this.meetings
     
     meetups.forEach(meetup => {
        
          if(meetup.isibo._id.toString() === this.loggedInUser.isibo._id){
            this.mymeetups.push(meetup)
          }
     });
      if (this.meetings && this.meetings.length > 0) return;
      this.$store.dispatch('getMeetings')
   },
   async fetch() {
      this.meetings = await this.$http.$get(
        `http://localhost:9000/community/meetings/`
      )
    }
}
</script>

<style scoped>
 .events{
      border: 1px solid rgb(212, 177, 212);;
   background-color: rgb(212, 177, 212);
     border-radius: 45px;
     height: auto;
     width: auto;
 }
 .count{
  border: 1px solid rgb(206, 160, 206);
  border-radius: 23px;
  background-color: rgb(206, 160, 206);
  height: auto;
}
</style>