<template>
<v-row no-gutters align="center" justify="center">
  <v-col cols="12" md="12">
      <div class="dialogy">
        <v-row no-gutters justify="space-around">

        <v-col cols="12" md="12">      
        <v-row class="mt-2" no-gutters justify="center" align="center">
          <v-col cols="12" md="7"> 
            <v-chip small color="pink lighten-2">
                <h5 class="ml-1" style="font-family: 'Montserrat', sans-serif;">{{post.purpose}} date <v-icon small>mdi-arrow-right</v-icon> {{post.date}}</h5>
            </v-chip>
          </v-col>
            <v-col cols="12" md="9">      
                <h5 style="font-size: 40px;font-family: 'Montserrat', sans-serif;"><v-icon large left>mdi-puzzle</v-icon> {{post.purpose}}</h5>
            </v-col>
        </v-row>

        <v-row justify="center" align="center">
            <v-col cols="12" md="9">
              <v-subheader style="font-family: 'Montserrat', sans-serif;"><v-icon left>mdi-arrow-right</v-icon>{{post.brief}}</v-subheader>
            </v-col>
             <v-col cols="12" md="7"> 
            <v-chip small color="pink lighten-3">
                <h5 class="ml-1" style="font-family: 'Montserrat', sans-serif;">Starts - {{post.start}}</h5>
            </v-chip>
            <v-chip small color="amber darken-1">
                <h5 class="ml-1" style="font-family: 'Montserrat', sans-serif;">Ends - {{post.end}}</h5>
            </v-chip>
          </v-col>
        </v-row>

        </v-col>

        </v-row>
         </div>

    <div class="attendance mt-3">
     <v-row no-gutters justify="center" align="center">
            <v-col cols="12" md="7">
              <h5 style="font-family: 'Montserrat', sans-serif;"><v-icon left>mdi-arrow-right</v-icon>Participants</h5>
            </v-col>
            <v-col class="pa-2" cols="12" md="2">
              <div class="participant" justify="center" align="center">
                <h4 style="font-family: 'Montserrat', sans-serif;">12</h4>
                <h6>People</h6>
              </div>
            </v-col>
     </v-row>
    </div>
    <v-divider class="mt-2"/>
    <h5 style="font-family: 'Montserrat', sans-serif;">related information<v-icon right>mdi-arrow-down</v-icon></h5>

           <div class="mt-2 related">
             <v-row no-gutters justify="center" align="center">
            <v-col cols="4" md="4">
             <h5 class="pa-4" style="font-family: 'Montserrat', sans-serif;"><v-icon left color="black">mdi-face</v-icon>Guests</h5>
            </v-col>
            <v-divider vertical/>

            <v-col cols="4" md="5">
            <v-chip v-for="guest in post.invitees" :key="guest.id" small color="amber lighten-3">
                <v-avatar>
                    <img
                     src="../../../assets/images/man.png"
                     width="134"
                    />
                </v-avatar>
                <h5 class="ml-1" style="font-family: 'Montserrat', sans-serif;">{{guest}}</h5>
            </v-chip>
            </v-col>
             </v-row>
           </div>

            <div class="mt-2 related">
             <v-row no-gutters justify="center" align="center">
            <v-col cols="4" md="4">
             <h5 class="pa-4" style="font-family: 'Montserrat', sans-serif;"><v-icon left color="black">mdi-compass</v-icon>Place</h5>
            </v-col>
            <v-divider vertical/>

            <v-col cols="4" md="5">
            <v-chip small color="amber lighten-3">
                <h5 class="ml-1" style="font-family: 'Montserrat', sans-serif;">{{post.place}}</h5>
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
            <v-chip v-for="tool in post.tools" :key="tool.id" small color="pink lighten-3">
                <h5 class="ml-1" style="font-family: 'Montserrat', sans-serif;">{{tool}}</h5>
            </v-chip>
            </v-col>
             </v-row>
           </div>

         <v-row class="mt-2" no-gutters justify="center" align="center">
             <v-col cols="12" md="10">     
        <v-card-actions>
           <alterDialog :post="post" @click="refresh"/>
          <v-spacer></v-spacer>
           <v-btn
            color="red lighten-1"
            small
            rounded
            @click="dialog = false"
          >
            <h5 style="font-family: 'Montserrat', sans-serif;"><v-icon left> mdi-cancel</v-icon>postpone meeting</h5>
          </v-btn>
        </v-card-actions>
             </v-col>
         </v-row>
     
  </v-col>
  </v-row>
  
</template>

<script>
import { mapGetters } from 'vuex'
import alterDialog from '~/components/Leader/meetingid/alterDialog'
export default {
  components:{
    alterDialog
  },
  data(){
   return{
     post: []
   }
  },
  head: {
    title: 'meeting-id'
  },
  props:{
    id:{
      type: String,
      required: true
    }
  },
   async fetch() {
      this.post = await this.$http.$get(
        `http://localhost:9000/community/meetings/${this.id}`
      )
    }
}
</script>

<style scoped>
.dialogy{
  background-color: thistle;
  border: 1px solid thistle;
  border-radius: 43px;
}
.related{
  background-color: rgb(218, 178, 218);
  border: 1px solid rgb(219, 166, 219);
  border-radius: 13px;
}
.attendance{
  background-color: rgb(182, 176, 176);
  border: 1px solid silver;
  border-radius: 23px;
}
.participant{
  background-color: rgb(218, 178, 218);
  border: 1px solid rgb(218, 178, 218);
  height: 40px;
  width: auto;
  border-radius: 13px;
}
 </style>