<template>
<v-row no-gutters align="center" justify="center">
  <div class="payments">
    <v-row no-gutters justify="center" align="center">
        <v-col cols="8" md="5">
        <v-row no-gutters justify="center" align="center">
         <h5 style="font-size: 35px;font-family: 'Montserrat', sans-serif;">{{post.name}}<v-icon small right>mdi-arrow-down</v-icon></h5>
        </v-row>

        <v-row v-if="(post.charges === 0)" class="mt-2" no-gutters justify="center" align="center">
          <v-chip color="rgb(212, 177, 212)">
           
          <v-icon small left>mdi-arrow-right</v-icon>
         <h3 style="font-family: 'Montserrat', sans-serif;">{{post.charges}} Rwf</h3>
         </v-chip>
        </v-row>

        <v-row v-if="(post.charges > 0)" class="mt-3" no-gutters justify="center" align="center">
           <Paymentdialog :post="post"/>
        </v-row>

       </v-col>

          <v-col class="ml-7" cols="8" md="5">
            <img
            src="../../../assets/images/flame-space-adventures.png"
            width="190"
            />
          </v-col>
    </v-row>
    
  </div>
  <v-col cols="12" md="12">
    <div class="attendance mt-3">
     <v-row justify="center" align="center">
            <v-col cols="7" md="7">
              <h5 style="font-family: 'Montserrat', sans-serif;"><v-icon left small>mdi-arrow-right</v-icon>Meet-ups attendance</h5>
            </v-col>
            <v-col class="pa-2" cols="12" md="2">
              <div class="missed" justify="center" align="center">
                <h4 style="font-family: 'Montserrat', sans-serif;">{{post.missed}}</h4>
                <h6>Missed</h6>
              </div>
            </v-col>
            <v-col class="pa-2" cols="12" md="2">
              <div class="participant" justify="center" align="center">
                <h4 style="font-family: 'Montserrat', sans-serif;">{{post.attended}}</h4>
                <h6>Attended</h6>
              </div>
            </v-col>
     </v-row>
    </div>
    <v-divider class="mt-2"/>
    <h5 style="font-family: 'Montserrat', sans-serif;">Citizen info<v-icon right small>mdi-arrow-down</v-icon></h5>

           <div class="mt-2 related">
             <v-row no-gutters justify="center" align="center">
            <v-col cols="4" md="4">
             <h5 class="pa-4" style="font-family: 'Montserrat', sans-serif;"><v-icon left color="black">mdi-phone</v-icon>Phone</h5>
            </v-col>
            <v-divider vertical/>

            <v-col cols="5" md="5">
            
                <h5 class="ml-3" style="font-family: 'Montserrat', sans-serif;">{{post.phone}}</h5>
           
            </v-col>
             </v-row>
           </div>

            <div class="mt-2 related">
             <v-row no-gutters justify="center" align="center">
            <v-col cols="4" md="4">
             <h5 class="pa-4" style="font-family: 'Montserrat', sans-serif;"><v-icon left color="black">mdi-card</v-icon>NationalId</h5>
            </v-col>
            <v-divider vertical/>

            <v-col cols="5" md="5">
            
                <h5 class="ml-3" style="font-family: 'Montserrat', sans-serif;">{{post.NationalId}}</h5>
           
            </v-col>
             </v-row>
           </div>

            <div class="mt-2 related">
             <v-row no-gutters justify="center" align="center">
            <v-col cols="4" md="4">
             <h5 class="pa-4" style="font-family: 'Montserrat', sans-serif;"><v-icon left color="black">mdi-home</v-icon>isibo</h5>
            </v-col>
            <v-divider vertical/>

            <v-col v-if="post.isibo" cols="5" md="5">
           
                <h5 class="ml-3" style="font-family: 'Montserrat', sans-serif;">{{post.isibo.name}} community</h5>
            
            </v-col>
             </v-row>
           </div>

         <v-row class="mt-2" justify="center" align="center">
             <v-col cols="12">     
              <removeCitizen :citizen="post.name"/>
             </v-col>
         </v-row>
     
  </v-col>
  </v-row>
  
</template>

<script>
import { mapGetters } from 'vuex'
import removeCitizen from '~/components/Leader/citizenid/removeCitizen'
import Paymentdialog from '~/components/Leader/Payments/Paymentdialog'
export default {
  components:{
    removeCitizen,
    Paymentdialog
  },
  data(){
   return{
     post: []
   }
  },
  computed:{
     ...mapGetters(['loggedInUser'])
  },
  head: {
    title: 'citizen-id'
  },
   async fetch() {
      this.post = await this.$http.$get(
        `http://localhost:9000/community/users/${this.$route.params.Citizenid}`
      )
    }
}
</script>

<style scoped>
.dialogy{
 border: 1px solid rgb(212, 177, 212);
   background-color: rgb(212, 177, 212);
  border-radius: 43px;
}
.related{
   border: 1px solid rgb(212, 177, 212);;
   background-color: rgb(212, 177, 212);
  border-radius: 13px;
}
.attendance{
 border: 1px solid rgb(212, 177, 212);;
   background-color: rgb(212, 177, 212);
  border-radius: 23px;
}
.participant{
border: 1px solid rgb(212, 177, 212);;
   background-color: rgb(204, 152, 204);
  height: 40px;
  width: auto;
  border-radius: 13px;
}
.missed{
  background-color: rgb(206, 163, 206);
  border: 1px solid rgb(206, 163, 206);
  height: 40px;
  width: auto;
  border-radius: 13px;
}
.payments{
    border: 1px solid rgb(212, 177, 212);;
   background-color: rgb(212, 177, 212);
     border-radius: 45px;
     height: auto;
     width: 520px;
}
 </style>