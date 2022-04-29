<template>
  <v-container fluid>
    <h5 style="font-size: 15px;font-family: 'Montserrat', sans-serif;">My Dashboard<v-icon right>mdi-arrow-down</v-icon></h5>
      <v-row justify="center" align="center">
           <div class="projy">
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
                <h3 class="mt-5" style="font-size: 35px;font-family: 'Montserrat', sans-serif;">Hi, {{loggedInUser.name}}</h3>
                </v-row>
               </v-col>
              <v-col
               cols="10"
               md="9"
              >
                
                <v-divider class="mt-3"/>
                <v-row justify="left" align="left">
                <v-subheader class="ml-4 mt-2" v-if="isibo"><v-icon left>mdi-arrow-right</v-icon> You have no reminders available for your community.</v-subheader>
                <v-subheader v-if="!isibo" class="ml-4 mt-2"><v-icon left>mdi-arrow-right</v-icon> You currently don't belong to any community.</v-subheader>
                </v-row>
              </v-col>

            </v-row> 
             <v-row class="mt-3" v-if="isibo" no-gutters justify="center" align="center">  
                     <v-row 
                    justify="center"
                    align="center"
                    no-gutters
                    >
                  <v-col cols="4" md="2"> 
                   <v-progress-circular
                    :rotate="360"
                    :size="80"
                    :width="5"
                    :value="value"
                  >
                    {{ value }}
                  </v-progress-circular>
                  </v-col>
                  <v-col cols="3" md="4">
                    <h3 class="ml-2" style="font-size: 15px;font-family: 'Montserrat', sans-serif;" v-if="isibo">No current progress.</h3>
                  </v-col>
                     </v-row>
                  
            </v-row>
          </div>
          
      </v-row>

       <v-row
       justify="left"
       no-gutters
       class="mt-2"
      >
        <v-col>
          <h3 style="font-size: 15px;font-family: 'Montserrat', sans-serif;">
            Reminders<v-icon right>mdi-arrow-down</v-icon>
          </h3>
        </v-col>
      </v-row>

     <v-layout v-if="isibo" row>

        <v-col v-for="item in items" :key="item.id" cols="6" md="6">
          <div class="cardy">
            <v-row 
             justify="center"
             no-gutters
             align="center"
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
              <!-- <v-divider vertical/> -->
              <v-col
               cols="7"
               md="5"
               class="mt-2"
              >
                
              <v-row justify="center" align="center">
              <h3 style="font-size: 30px;font-family: 'Montserrat', sans-serif;">{{item.text}}</h3>
              </v-row>  
               <v-row justify="center">
                <v-chip :color="item.color" small>
                  <h6 style="font-family: 'Montserrat', sans-serif;">{{item.subheader}}</h6>
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
import sidebar from '~/components/UI/sidebar'
import headery from '~/components/projects/header'
export default {
  data(){
    return{
      isibo: false,
      interval: {},
      value: 0,
      items: [
       { icon: require('../../assets/images/clock (1).png'), text: '40k' ,subheader: ' arrived on time', color: 'lime'},
        { icon: require('../../assets/images/calendar.png'), text: '50' ,subheader: 'Meetings', color: 'purple'},
         { icon: require('../../assets/images/forum.png'), text: '30k' ,subheader: 'Attended', color: 'amber'},
          { icon: require('../../assets/images/close.png'), text: '20' ,subheader: 'Rejected', color: 'pink'},
     ]
    }
  },
   computed: {
    ...mapGetters(['isAuthenticated','communities','loggedInUser'])
    },
     beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted(){

     let communities = this.communities
     
     communities.forEach(communitys => {
        communitys.forEach(community => {
          if(community._id.toString() === this.loggedInUser.isibo._id){
            this.isibo = true
          }
        })
     });

     this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 3
      }, 2000)
   },
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
.join {
  border: 1px solid  rgb(219, 166, 219);
  border-radius: 15px;
  box-shadow: 0 1px 1px #ccc;
  width: 540px;
  height: auto;
  background-position: center;
  background-image: url('../../assets/images/bermuda-171.png');
}
.joined {
  border: 1px solid  rgb(219, 166, 219);
  border-radius: 15px;
  box-shadow: 0 1px 1px #ccc;
  width: 540px;
  height: auto;
  background-color: rgb(212, 177, 212);
}
.projects{
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: 0 1px 1px #ccc;
  width: 540px;
  background-color: lightsalmon;
}
</style>