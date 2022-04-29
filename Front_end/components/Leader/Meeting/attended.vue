<template>
  <v-container>
    <v-row no-gutters justify="center" align="center">
         <v-col class="ml-2" cols="10" md="9">
             <h5 style="font-size: 12px;font-family: 'Montserrat', sans-serif;">{{post.purpose}}<v-icon right small>mdi-arrow-down</v-icon></h5>
         </v-col>
     </v-row>
    <v-divider/>
     <v-row no-gutters justify="center" align="center">
         <v-col class="ml-2" cols="10" md="9">
             <h5 style="font-size: 35px;font-family: 'Montserrat', sans-serif;">Citizens who attended for {{post.event}} event<v-icon right small>mdi-arrow-down</v-icon></h5>
             <v-chip small dark><h5 style="font-size: 10px;font-family: 'Montserrat', sans-serif;">{{post.date}}</h5></v-chip>
         </v-col>
     </v-row>
    <v-divider class="mt-2"/>
        <v-row no-gutters justify="center" align="center">
         <v-col class="ml-2" cols="4" md="5">
             <h5 style="font-size: 15px;font-family: 'Montserrat', sans-serif;">Citizen<v-icon right small>mdi-arrow-down</v-icon></h5>
         </v-col>
         <v-col class="ml-2" cols="3" md="3">
             <h5 style="font-size: 15px;font-family: 'Montserrat', sans-serif;">Attended<v-icon right small>mdi-arrow-down</v-icon></h5>
         </v-col>
       <v-col cols="3" md="2">
          <v-menu
            bottom
            origin="center center"
            transition="scale-transition"
            color="pink"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                
                v-bind="attrs"
                v-on="on"
                text
                small
              >
                <h5 style="font-family: 'Montserrat', sans-serif;">
                  <v-icon>mdi-filter</v-icon>
                filter by</h5>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
              >
                <v-btn rounded small text>
                  <h3 style="font-family: 'Montserrat', sans-serif;">
                     {{ item.title }}
                  </h3>
                </v-btn>
              </v-list-item>
            </v-list>
    </v-menu>
    </v-col>

     </v-row>
  <div v-for="user in post.arrivals" :key="user.id"  class="details mt-3">
   
      <v-row no-gutters justify="center" align="center">
          <v-col
           cols="12"
           md="12"
          
          >
           <v-row no-gutters justify="center" align="center">
               <v-col
                cols="2"
                md="2"
                sm="2"
               >
                <v-avatar v-if="user.Gender === 'Male' ">
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
               <v-col
                cols="3"
                md="2"
                sm="2"
                v-if="user.isAdmin"
               >
                <v-chip small color="amber">
                  <h5 style="font-family: 'Montserrat', sans-serif;">Admin</h5>
                </v-chip>
               </v-col>
                <v-col
                cols="3"
                md="2"
                sm="2"
                v-else
               >
                <v-chip small color="lime">
                  <h5 style="font-family: 'Montserrat', sans-serif;">citizen</h5>
                </v-chip>
               </v-col>
               <v-col cols="4" md="4" sm="4">
                 <h5 style="font-size: 18px;font-family: 'Montserrat', sans-serif;">{{user.name}}</h5>
               </v-col>
                <v-col cols="3" md="3" sm="3">
                   <v-chip small color="amber">
                 <h5 style="font-size: 13px;font-family: 'Montserrat', sans-serif;">{{user.attended}} time(s)</h5>
                   </v-chip>
               </v-col>
           </v-row>
          </v-col>
      </v-row>
     
  </div>

  </v-container>
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
  data(){
   return{
     users:[],
      items: [
        { title: 'Late arrivals' },
        { title: 'Early arrivals' },
      ],
   }
  },
  computed: {
  ...mapGetters(['loggedInUser'])
  },
}
</script>

<style scoped>
 .details{
    
   background-color: rgb(209, 175, 209);
     border-radius: 15px;
     height: auto;
     width: auto;
 }
</style>