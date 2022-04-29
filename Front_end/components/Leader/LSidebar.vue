<template>
  <div class="Sidebery">
   
      <v-row class="mt-3" no-gutters justify="center" align="center">
          <v-avatar
           size="60"
          >
            <img
             src="../../assets/images/astronaut.png"
            />
          </v-avatar>
      </v-row> 
      <v-row no-gutters justify="center" align="center">
        <v-chip color="pink lighten-2">
        <h5><v-icon left small>mdi-tree</v-icon>{{loggedInUser.village}}</h5>
        </v-chip>
      </v-row>
      <v-divider class="mt-3"/>
      <v-row v-for="item in items" :key="item.id" 
      class="mt-9 pa-1" 
      no-gutters 
      justify="center" 
      align="center"
      >
         
         
          <v-col cols="3" md="6">
            <v-btn :to="item.link" color="amber" rounded small>
              <h5 style="font-size: 14px;font-family: 'Montserrat', sans-serif;"> <v-icon color="black" left>
                {{item.icon}}
                </v-icon>{{item.value}}</h5>
            </v-btn>
          </v-col>
      </v-row>
      <v-divider class="mt-13"/>
      <div>
      <v-row justify="center" align="center">
         <v-col cols="7" md="7">
              <v-row justify="center" align="center">
              <h5 class="amber--text" style="font-family: 'Montserrat', sans-serif;">{{loggedInUser.name}}</h5>
              </v-row> 
              <v-row justify="center">
                <v-chip v-if="loggedInUser.isAdmin" color="pink" small>
                  <h6>Administrator</h6>
                </v-chip>
                <v-chip else color="lime" small>
                  <h6>Citizen</h6>
                </v-chip>
              </v-row>             
          </v-col>
      </v-row>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data(){
    return{
      items: [
        { icon: 'mdi-door', value: 'Dashboard', link: '/Leader'},
        { icon: 'mdi-tag', value: 'Bills', link: '/Leader/Payments'},
        { icon: 'mdi-calendar', value: 'Calendar',  link: '/Leader/Calendar'},
        { icon: 'mdi-account', value: 'Profile',  link: '/Leader/Profile'},
        { icon: 'mdi-account-multiple', value: 'Citizens',  link: '/Leader/Citizens'},
      ]
    }
  },
    computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
   mounted(){
    //  this.booked = this.isBooked
    //   if(this.isAdmin){
    //      this.link = '/admin/' + this.id
    //    }else{
    //      this.link = '/prayerbook/' + this.id
    //    }
   
    // if (this.sessions && this.sessions.length > 0) return;
    // this.$store.dispatch('getSessions', this.id)
 },
}
</script>

<style scoped>
 .Sidebery{
     border: 2px solid rgb(175, 173, 173);
     background-color: rgb(175, 173, 173);
     border-radius: 45px;
     height: 630px;
     width: 270px;
     background-image: url('../../assets/images/bermuda-171.png');
     background-position: center;
    position: fixed;
 }
</style>