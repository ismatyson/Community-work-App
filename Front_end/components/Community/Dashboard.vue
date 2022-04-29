<template>
  <v-container fluid>
      <v-row no-gutters justify="center" align="center">
           <img
           width="520"
           src="../../assets/images/pale-139.png"
           />
           <v-subheader>You don't belong to any community!</v-subheader>
      </v-row>

       <v-row v-if="!isibo" class="mt-2" justify="center" align="center">
           <div class="join">
            <v-row 
             justify="center"
             align="center"
             no-gutters
            >
               <v-col 
                cols="7"
                md="7"
                >
               <v-btn to="/Community/JoinaCommunity/" color="amber" small rounded>
              <h5 style="font-family: 'Montserrat', sans-serif;">Join a community</h5>
               </v-btn>
               </v-col>
               <v-divider color="amber" vertical/>
               <v-col 
                cols="2"
                md="2"
                class="ml-2"
                >
                <v-avatar>
                  <img
                   src="../../assets/images/saturn.png"
                  />
                </v-avatar>
               </v-col>
            </v-row>
           </div>
       </v-row>

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
}
</script>

<style scoped>
.join {
  border: 1px solid  rgb(219, 166, 219);
  border-radius: 15px;
  box-shadow: 0 1px 1px #ccc;
  width: 540px;
  height: auto;
  background-position: center;
  background-image: url('../../assets/images/pale-139.png');
}
</style>