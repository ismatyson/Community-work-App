<template>
  <v-container class="mt-3">
      <v-row no-gutters justify="center" align="center">
       <v-col cols="7" md="8">
       <h5 style="font-size: 15px;font-family: 'Montserrat', sans-serif;">see who'll come<v-icon small>mdi-arrow-down</v-icon></h5>
       </v-col>
       <Remarks 
          :meetingId="meetingId"
          :missed="misses"
          :attended="attended"
       />
      </v-row>
  <div class="details mt-3">
    <v-row class="mt-2" no-gutters justify="center" align="center">
         <v-col class="ml-7" cols="4" md="4">
             <h5 style="font-size: 12px;font-family: 'Montserrat', sans-serif;">Citizen<v-icon small>mdi-arrow-down</v-icon></h5>
         </v-col>
          <v-col cols="3" md="3">
             <h5 style="font-size: 12px;font-family: 'Montserrat', sans-serif;">Attendance<v-icon right> mdi-comment-check-outline</v-icon></h5>
         </v-col>
     </v-row>

      <v-row class="mt-2" v-for="meeting in meetings" :key="meeting.id" no-gutters justify="center" align="center">
          <v-col
           cols="10"
           md="10"
           sm="5"
           v-if="(meeting._id === meetingId.toString())"
          >
           <v-row v-for="(attendant,index) in meeting.attendants" :key="index" no-gutters justify="center" align="center">
               <v-col
                cols="3"
                md="3"
               >
                <v-avatar v-if="attendant.Gender === 'Male' ">
                  <img
                   src="../../../assets/images/man.png"
                  />
                </v-avatar>
                <v-avatar v-else>
                  <img
                   src="../../../assets/images/boy.png"
                  />
                </v-avatar>
               </v-col>
               <v-col cols="4" md="4">
                 <h5 style="font-size:18px;font-family: 'Montserrat', sans-serif;">{{attendant.name}}</h5>
               </v-col>
               <v-col
                cols="2"
                md="2"
               >
                <v-btn @click="setActive(attendant,index)" color="success" outlined fab small>
                  <v-icon v-if="attended.includes(attendant._id)" large>mdi-checkbox-marked-circle-outline</v-icon>
                </v-btn>
               </v-col>

               <v-col
                cols="3"
                md="3"
               >
                <v-btn @click="setMissed(attendant,index)" color="pink" outlined fab small>
                  <v-icon v-if="misses.includes(attendant._id)" large>mdi-close-circle-outline</v-icon>
                </v-btn>
               </v-col>
           </v-row>
          </v-col>
      </v-row>
     
  </div>

  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import Remarks from '../../Leader/Meeting/Remarks'
export default {
  components: { Remarks },
  data(){
    return{
      selected: '',
      userId: '',
      meetings: {},
      attended: [],
      misses: [],
      active: '',
      missed: '',
      disabled: false,
      end: false,
    isMissed:[],
    isAttended:[],
      meetingId: this.$route.params.Meetingid
    }
  },
    computed: {
     ...mapGetters(['users']),
   },
  
   methods: {
     setActive: function(citizen,index) {
       
       if(this.attended.includes(citizen._id)){
         //  message
       }else{
          if(this.misses.includes(citizen._id)){
            this.misses.splice(this.misses.indexOf(citizen._id),1);
          }
           this.attended.push(citizen._id)
       }
    },
    setMissed: function(citizen,index) {

        if(this.misses.includes(citizen._id)){
         //message
       }else{
          if(this.attended.includes(citizen._id)){
            this.attended.splice(this.attended.indexOf(citizen._id),1);
          }
           this.misses.push(citizen._id)
       }
    },
   },
    mounted(){
      if (this.users && this.users.length > 0) return;
      this.$store.dispatch('getUsers')  
    },
    async fetch() {
      this.meetings = await this.$http.$get(
        `http://localhost:9000/community/meetings/`
      )
    },
}
</script>

<style scoped>
 .details{
   border: 1px solid rgb(212, 177, 212);
   background-color: rgb(212, 177, 212);
     border-radius: 25px;
     height: auto;
     width: auto;
 }
 .active {
  background: lightcoral
}
</style>