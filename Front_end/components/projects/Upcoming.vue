<template>
  <v-container fluid>
      <v-row
       justify="left"
       no-gutters
      >
        <v-col>
          <h3 style="font-size: 15px;font-family: 'Montserrat', sans-serif;">
            <v-icon left large color="pink">
               mdi-sign-caution
            </v-icon>
            Reminders<v-icon right>mdi-arrow-down</v-icon></h3>
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
              <!-- <v-divider vertical/> -->
              <v-col
               cols="7"
               md="5"
              >
                
              <v-row justify="center" align="center">
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
import sidebar from '~/components/UI/sidebar'
import headery from '~/components/projects/header'
export default {
 components: {
   sidebar,
   headery
 },
 data(){
   return{
     items: [
       { icon: require('../../assets/images/clock (1).png'), text: '40k' ,subheader: ' arrived on time', color: 'lime'},
        { icon: require('../../assets/images/calendar.png'), text: '50' ,subheader: 'Meetings', color: 'purple'},
         { icon: require('../../assets/images/forum.png'), text: '30k' ,subheader: 'Attended', color: 'amber'},
          { icon: require('../../assets/images/close.png'), text: '20' ,subheader: 'Rejected', color: 'pink'},
     ]
   }
 }
}
</script>

<style>
.cardy {
  border: 2px solid rgb(180, 178, 178);
  background-color: rgb(180, 178, 178);
  height: 100px;
  border-radius: 34px;
}
</style>