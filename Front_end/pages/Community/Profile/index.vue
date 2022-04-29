<template>
 <v-container> 
    
        <v-row>
          <v-col>
              <h1 style="font-family: 'Montserrat', sans-serif;">Profile</h1>
               <v-btn rounded color="pink">
                  <v-icon left>mdi-account-circle</v-icon>
                  <h5 style="font-family: 'Montserrat', sans-serif;">edit</h5>
                </v-btn>
              <v-subheader><v-icon>mdi-arrow-down</v-icon>All projects detailed and explained</v-subheader>
          </v-col>
      </v-row>
  
     <v-divider/>
      <Personal class="pa-2"/>
        <v-divider/>
      <Contributions/>
        <v-divider/>
         <Awards/>
  </v-container>
</template>

<script>

import Personal from '~/components/profile/Personal'
import Awards from '~/components/profile/Awards'
import Contributions from '~/components/profile/contributions'

  export default {
      components:{
        Personal,
        Awards,
        Contributions
      },
    data: () => ({
       dialog: false,
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' }
        ],
    }),
  }
</script>


<style>
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
</style>