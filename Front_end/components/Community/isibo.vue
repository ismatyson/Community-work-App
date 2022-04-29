<template>
  <v-row justify="center">
    <v-btn
      outlined
      small
      color="pink"
      fab
      @click.stop="dialog = true"
    >
      <v-icon color="pink" x-large>mdi-steam</v-icon>
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="430"
    >
      <div class="dialogy">

        <v-row no-gutters justify="center" align="center">
         <v-col cols="10" md="10">
          <h5 class="pa-2" style="font-size: 32px;font-family: 'Montserrat', sans-serif;"><v-icon left color="black">mdi-export</v-icon> Join this community</h5>

          <v-chip small color="pink">
                <h5 style="font-family: 'Montserrat', sans-serif;">{{post.name}} community</h5>
          </v-chip>
         </v-col>
        </v-row>

        <v-divider class="mt-2"/>

        
        <v-row no-gutters justify="center" align="center">
          <v-col cols="4" md="4">
           <h5 class="pa-4" style="font-family: 'Montserrat', sans-serif;"><v-icon left color="pink">mdi-face</v-icon>Leader</h5>
          </v-col>
            <v-col cols="7" md="7">
                <h5 style="font-family: 'Montserrat', sans-serif;">{{post.user.name}}</h5>
            </v-col>
        </v-row>

        <v-row no-gutters justify="center" align="center">
           <v-col cols="3" md="3">
            <h5 class="pa-4" style="font-family: 'Montserrat', sans-serif;"><v-icon left color="pink">mdi-card</v-icon>C_ID</h5>
           </v-col>
           <v-col cols="8" md="8">
                <v-subheader style="font-family: 'Montserrat', sans-serif;">##{{post._id}}</v-subheader>
            </v-col>
        </v-row>

        <v-divider/>
           <h5 class="pa-4" style="font-family: 'Montserrat', sans-serif;"><v-icon left color="pink">mdi-compass-outline</v-icon>Location</h5>
          <v-row no-gutters justify="center" align="center">
            <v-col cols="3" md="3">
                <h5 style="font-family: 'Montserrat', sans-serif;">Province <v-icon>mdi-arrow-right</v-icon></h5>
            </v-col>
            <v-col cols="3" md="3">
                <h5 style="font-family: 'Montserrat', sans-serif;">
                {{post.province}}
                </h5>
            </v-col>
        </v-row>
         <v-row no-gutters justify="center" align="center">
            <v-col cols="3" md="3">
                <h5 style="font-family: 'Montserrat', sans-serif;">District <v-icon>mdi-arrow-right</v-icon></h5>
            </v-col>
            <v-col cols="3" md="3">
                <h5 style="font-family: 'Montserrat', sans-serif;">
                {{post.district}}
                </h5>
            </v-col>
        </v-row>

         <v-row no-gutters justify="center" align="center">
            <v-col cols="3" md="3">
                <h5 style="font-family: 'Montserrat', sans-serif;">Village<v-icon>mdi-arrow-right</v-icon></h5>
            </v-col>
            <v-col cols="3" md="3">
                 <h5 style="font-family: 'Montserrat', sans-serif;">
                {{post.village}}
                </h5>
            </v-col>
        </v-row>  

         <v-row  class="mt-4" no-gutters justify="center" align="center">     
        <v-card-actions>
           <v-btn
            color="lime"
            small
            @click="onJoin"
          >
            <h5 style="font-family: 'Montserrat', sans-serif;"><v-icon left> mdi-arrow-right-bold-circle-outline</v-icon>Join</h5>
          </v-btn>
          <v-spacer></v-spacer>
          
        </v-card-actions>
         </v-row>
      </div>
    </v-dialog>
  </v-row>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
      props:{
        post:{
            type: Object,
            required: true
        }
      },
    data () {
      return {
        dialog: false,
      }
    },
    computed:{
      ...mapGetters(['loggedInUser'])
    },
    methods:{
      onJoin(){
        this.dialog = false
        const joinInfo = {
          NationalId : this.loggedInUser.NationalId,
          Isibo : this.post._id
        }
        this.$store.dispatch('JoinCommunity', joinInfo)
      }
    }
  }
</script>
<style scoped>
.dialogy{
    border: 1px solid thistle;
    border-radius: 12px;
    background-color: thistle;
}
</style>